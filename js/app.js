// ========== 全局状态 ==========
const STATE = {
    currentView: 'home',      // home / basic / advanced / formulas / lesson / quiz
    currentMode: 'home',
    currentWeek: null,
    currentModule: null,      // 高级模块 key
    currentLesson: null,      // 高级课时 id
    currentQuestions: [],
    currentIndex: 0,
    answers: {},
    correctCount: 0,
    wrongCount: 0,
    wrongQuestions: [],
    startTime: null,
    stats: loadStats()
};

// ========== 统计管理 ==========
function loadStats() {
    try { return JSON.parse(localStorage.getItem('reliability_stats') || '{}'); }
    catch { return {}; }
}

function saveStats() {
    localStorage.setItem('reliability_stats', JSON.stringify(STATE.stats));
}

function loadWrongBook() {
    try { return JSON.parse(localStorage.getItem('reliability_wrongbook') || '[]'); }
    catch { return []; }
}

function saveWrongBook(list) {
    localStorage.setItem('reliability_wrongbook', JSON.stringify(list));
}

function getAllQuestions() {
    let all = [];
    Object.keys(QUESTION_BANK).forEach(w => {
        all = all.concat(QUESTION_BANK[w]);
    });
    return all;
}

function getQuestionById(id) {
    const all = getAllQuestions();
    return all.find(q => q.id === id);
}

// ========== 初始化 ==========
document.addEventListener('DOMContentLoaded', () => {
    bindEvents();
    updateStats();
    updateSidebar('home');
});

// ========== 事件绑定 ==========
function bindEvents() {
    // 顶部主导航
    document.querySelectorAll('.main-nav-item').forEach(el => {
        el.addEventListener('click', () => {
            const view = el.dataset.view;
            switchView(view);
        });
    });

    // 顶部按钮
    document.getElementById('btn-stats').addEventListener('click', showStats);
    document.getElementById('btn-wrongbook').addEventListener('click', showWrongBook);
    document.getElementById('btn-settings').addEventListener('click', showSettings);

    // 欢迎页
    document.getElementById('btn-start').addEventListener('click', () => switchView('basic'));
    const heroFormulas = document.getElementById('btn-formulas-hero');
    if (heroFormulas) heroFormulas.addEventListener('click', () => switchView('formulas'));
    document.querySelectorAll('.module-card, .welcome-features .feature-card').forEach(el => {
        el.addEventListener('click', () => {
            const view = el.dataset.view;
            if (view) switchView(view);
        });
    });

    // 答题区
    document.getElementById('btn-prev').addEventListener('click', prevQuestion);
    document.getElementById('btn-next').addEventListener('click', nextQuestion);
    document.getElementById('btn-submit').addEventListener('click', submitAnswer);
    document.getElementById('btn-show-answer').addEventListener('click', showAnswer);

    // 结果页
    document.getElementById('btn-restart').addEventListener('click', () => {
        if (STATE.currentWeek) startWeek(STATE.currentWeek);
        else if (STATE.currentModule && STATE.currentLesson) startLessonQuestions(STATE.currentModule, STATE.currentLesson);
        else if (STATE.currentMode === 'exam') startExam();
        else if (STATE.currentMode === 'random') startRandom();
    });
    document.getElementById('btn-back-home').addEventListener('click', () => switchView('home'));

    // 课程详情返回
    document.getElementById('btn-back-advanced').addEventListener('click', () => {
        // 根据来源决定返回哪里
        if (STATE.currentModule && STATE.currentModule.startsWith('basic-w')) {
            switchView('basic');
        } else {
            switchView('advanced');
        }
    });

    // 模态框
    document.getElementById('modal-close').addEventListener('click', closeModal);
    document.getElementById('modal').addEventListener('click', (e) => {
        if (e.target.id === 'modal') closeModal();
    });
}

// ========== 视图切换 ==========
function switchView(view) {
    STATE.currentView = view;
    document.querySelectorAll('.main-nav-item').forEach(n => n.classList.remove('active'));
    const navItem = document.querySelector(`.main-nav-item[data-view="${view}"]`);
    if (navItem) navItem.classList.add('active');

    // 隐藏所有页
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('basic-page').style.display = 'none';
    document.getElementById('advanced-page').style.display = 'none';
    document.getElementById('lesson-page').style.display = 'none';
    document.getElementById('formulas-page').style.display = 'none';
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result-page').style.display = 'none';

    updateSidebar(view);

    switch (view) {
        case 'home':
            document.getElementById('welcome').style.display = 'block';
            break;
        case 'basic':
            renderBasicPage();
            document.getElementById('basic-page').style.display = 'block';
            break;
        case 'advanced':
            renderAdvancedPage();
            document.getElementById('advanced-page').style.display = 'block';
            break;
        case 'env':
            showEnvPage();
            break;
        case 'formulas':
            showFormulas();
            break;
    }
}

// ========== 侧边栏更新 ==========
function updateSidebar(view) {
    const sidebar = document.getElementById('sidebar');
    // 首页和公式库不显示侧边栏（公式库是搜索浏览界面，主导航够了）
    if (view === 'home') {
        sidebar.innerHTML = '';
        sidebar.style.display = 'none';
        return;
    }
    sidebar.style.display = '';

    let html = `
        <div class="sidebar-header">
            <h2>学习进度</h2>
            <div class="progress-summary">
                <div class="progress-item">
                    <span class="progress-label">已答</span>
                    <span class="progress-value" id="stat-answered">0</span>
                </div>
                <div class="progress-item">
                    <span class="progress-label">正确</span>
                    <span class="progress-value text-success" id="stat-correct">0</span>
                </div>
                <div class="progress-item">
                    <span class="progress-label">错误</span>
                    <span class="progress-value text-danger" id="stat-wrong">0</span>
                </div>
                <div class="progress-item">
                    <span class="progress-label">准确率</span>
                    <span class="progress-value" id="stat-accuracy">0%</span>
                </div>
            </div>
        </div>
    `;

    if (view === 'formulas') {
        // 公式库侧边栏：分类导航
        html += renderFormulasSidebar();
    } else if (view === 'env') {
        // 环境试验侧边栏：分类导航
        html += renderEnvSidebar();
    } else if (view === 'basic') {
        html += renderBasicNav();
    } else if (view === 'advanced') {
        html += renderAdvancedSidebar();
    }

    sidebar.innerHTML = html;
    updateStats();
    bindSidebarEvents(view);
}

function renderBasicNav() {
    const groups = [
        { title: '阶段一：基础理论', weeks: [1, 2, 3], names: { 1: '概率统计', 2: '可靠性基础', 3: '电子产品' } },
        { title: '阶段二：试验方法', weeks: [4, 5, 6], names: { 4: '环境试验', 5: '机械寿命', 6: '加速试验' } },
        { title: '阶段三：分析技术', weeks: [7, 8, 9], names: { 7: 'FMEA+加速', 8: 'DOE', 9: '系统分析' } },
        { title: '阶段四：标准协作', weeks: [10, 11], names: { 10: '标准体系', 11: '跨部门协作' } },
        { title: '阶段五：项目实战', weeks: [12], names: { 12: '相机模组' } }
    ];

    let html = '<nav class="nav">';
    groups.forEach(g => {
        html += `<div class="nav-section">
            <div class="nav-section-title">${g.title}</div>`;
        g.weeks.forEach(w => {
            const count = (QUESTION_BANK[w] || []).length;
            html += `<a class="nav-week" data-week="${w}">
                <span class="nav-week-num">第${w}周</span>
                <span class="nav-week-title">${g.names[w]}</span>
                <span class="nav-week-count">${count}题</span>
            </a>`;
        });
        html += '</div>';
    });

    html += `<div class="nav-section">
        <div class="nav-section-title">综合</div>
        <a class="nav-week special" data-mode="exam">
            <span class="nav-week-num">🎯</span>
            <span class="nav-week-title">模拟考试</span>
            <span class="nav-week-count">30题</span>
        </a>
        <a class="nav-week special" data-mode="random">
            <span class="nav-week-num">🎲</span>
            <span class="nav-week-title">随机抽题</span>
            <span class="nav-week-count">20题</span>
        </a>
    </div></nav>`;

    return html;
}

// 公式库侧边栏：分类快速跳转
function renderFormulasSidebar() {
    const cats = ['全部', ...new Set(FORMULAS.map(f => f.category))];
    const counts = {};
    cats.forEach(c => {
        counts[c] = c === '全部' ? FORMULAS.length : FORMULAS.filter(f => f.category === c).length;
    });

    let html = '<nav class="nav"><div class="nav-section">';
    html += '<div class="nav-section-title">📐 公式分类</div>';
    cats.forEach(c => {
        html += `<a class="nav-week" data-formula-cat="${c}">
            <span class="nav-week-num">${c === '全部' ? '★' : c.substring(0,2)}</span>
            <span class="nav-week-title">${c}</span>
            <span class="nav-week-count">${counts[c]}</span>
        </a>`;
    });
    html += '</div></nav>';
    return html;
}

function renderAdvancedSidebar() {
    let html = '<nav class="nav">';
    Object.keys(ADVANCED_CURRICULUM).forEach(key => {
        const mod = ADVANCED_CURRICULUM[key];
        const totalQ = mod.lessons.reduce((sum, l) => sum + (l.exercises || []).length, 0);
        html += `<div class="nav-section">
            <div class="nav-section-title">${mod.icon} ${mod.title}</div>
            ${mod.lessons.map(l => `
                <a class="nav-week" data-advanced-module="${key}" data-advanced-lesson="${l.id}">
                    <span class="nav-week-num">${l.id.split('-')[1] || ''}</span>
                    <span class="nav-week-title">${l.title}</span>
                    <span class="nav-week-count">${l.exercises.length}题</span>
                </a>
            `).join('')}
        </div>`;
    });
    html += '</nav>';
    return html;
}

function bindSidebarEvents(view) {
    if (view === 'basic') {
        document.querySelectorAll('.nav-week').forEach(el => {
            el.addEventListener('click', () => {
                const week = el.dataset.week;
                const mode = el.dataset.mode;
                if (mode === 'exam') startExam();
                else if (mode === 'random') startRandom();
                else if (week) startWeek(parseInt(week));
            });
        });
    } else if (view === 'advanced') {
        document.querySelectorAll('.nav-week').forEach(el => {
            el.addEventListener('click', () => {
                const mod = el.dataset.advancedModule;
                const lesson = el.dataset.advancedLesson;
                if (mod && lesson) openLesson(mod, lesson);
            });
        });
    } else if (view === 'formulas') {
        document.querySelectorAll('.nav-week').forEach(el => {
            el.addEventListener('click', () => {
                const cat = el.dataset.formulaCat;
                if (cat) {
                    formulaState.category = cat;
                    formulaState.keyword = '';
                    renderFormulaCategories();
                    renderFormulas();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });
        });
    } else if (view === 'env') {
        document.querySelectorAll('.nav-week').forEach(el => {
            el.addEventListener('click', () => {
                const cat = el.dataset.envCat;
                if (cat) {
                    envState.category = cat;
                    envState.keyword = '';
                    renderEnvCategories();
                    renderEnvList();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });
        });
    }
}

// ========== 初级页 ==========
function renderBasicPage() {
    const stages = [
        { title: '阶段一：基础理论', desc: '概率统计与可靠性数学基础', weeks: [
            { w: 1, title: '概率统计速成', topics: ['随机事件与条件概率', '贝叶斯公式', '常用分布（指数/威布尔/正态）', '假设检验与回归'], color: '#3b82f6' },
            { w: 2, title: '可靠性工程基础', topics: ['可靠性基本量 R/F/λ', '浴盆曲线三阶段', 'MTBF/MTTF/MTTR/可用度', '串联/并联/表决系统'], color: '#6366f1' },
            { w: 3, title: '电子产品基础', topics: ['元器件失效模式', '降额设计原则', '焊点可靠性', 'FMEA 概念与实施'], color: '#8b5cf6' }
        ]},
        { title: '阶段二：试验方法', desc: '环境与机械试验方法', weeks: [
            { w: 4, title: '环境试验', topics: ['高低温/温循/温冲', '湿热与盐雾', 'IP 防护等级', '试验设备原理'], color: '#06b6d4' },
            { w: 5, title: '机械与寿命试验', topics: ['正弦/随机振动', '冲击与跌落', '三综合试验', '寿命试验设计'], color: '#0891b2' },
            { w: 6, title: '加速试验', topics: ['HALT/HASS 原理', 'HAST 加速', 'Arrhenius 模型', 'Coffin-Manson 模型'], color: '#0e7490' }
        ]},
        { title: '阶段三：分析技术', desc: '可靠性分析核心方法', weeks: [
            { w: 7, title: 'FMEA 深入', topics: ['DFMEA 实施', 'PFMEA 实施', 'AIAG-VDA 新版', '加速模型深入'], color: '#10b981' },
            { w: 8, title: 'DOE 试验设计', topics: ['全因子与部分因子', '田口设计', '响应面方法', '样本量确定'], color: '#059669' },
            { w: 9, title: '系统级分析', topics: ['FTA 故障树', '最小割集', '可靠性预计', '可靠性增长与筛选'], color: '#047857' }
        ]},
        { title: '阶段四：标准协作', desc: '标准体系与跨部门协作', weeks: [
            { w: 10, title: '标准体系', topics: ['GB/T 2423 系列', 'MIL-STD-810', 'ISO 16750', 'AEC-Q 与其他行业'], color: '#f59e0b' },
            { w: 11, title: '跨部门协作', topics: ['设计评审', '失效分析 FA', '8D 报告', 'CNAS/CMA 体系'], color: '#d97706' }
        ]},
        { title: '阶段五：项目实战', desc: '完整项目实践', weeks: [
            { w: 12, title: '相机模组实战', topics: ['项目章程', '试验方案设计', '设备夹具', '数据分析与报告'], color: '#ef4444' }
        ]}
    ];

    const totalQ = Object.keys(QUESTION_BANK).filter(k => k <= 12).reduce((s, k) => s + QUESTION_BANK[k].length, 0);

    let html = `
        <div class="basic-hero">
            <div class="basic-hero-icon">📚</div>
            <div>
                <h2>初级教程</h2>
                <p>3 个月 12 周完整学习路径 · ${totalQ} 道配套习题 · 适合可靠性测试入门到胜任</p>
            </div>
        </div>
    `;

    stages.forEach((stage, idx) => {
        html += `<div class="stage-section">
            <div class="stage-header">
                <div class="stage-num">${idx + 1}</div>
                <div>
                    <div class="stage-title">${stage.title}</div>
                    <div class="stage-desc">${stage.desc}</div>
                </div>
            </div>
            <div class="stage-weeks">`;

        stage.weeks.forEach(weekInfo => {
            const w = weekInfo.w;
            const count = (QUESTION_BANK[w] || []).length;
            html += `<div class="week-card" data-week="${w}" style="--card-color: ${weekInfo.color}">
                <div class="week-card-header">
                    <div class="week-card-num">第${w}周</div>
                    <div class="week-card-count">${count} 题</div>
                </div>
                <h3 class="week-card-title">${weekInfo.title}</h3>
                <ul class="week-card-topics">
                    ${weekInfo.topics.map(t => `<li>${t}</li>`).join('')}
                </ul>
                <div class="week-card-cta">
                    <span>开始学习</span>
                    <span>→</span>
                </div>
            </div>`;
        });

        html += `</div></div>`;
    });

    // 综合练习
    html += `<div class="stage-section">
        <div class="stage-header">
            <div class="stage-num">⭐</div>
            <div>
                <div class="stage-title">综合练习</div>
                <div class="stage-desc">检验学习成果</div>
            </div>
        </div>
        <div class="stage-weeks">
            <div class="week-card" data-mode="exam" style="--card-color: #8b5cf6">
                <div class="week-card-header">
                    <div class="week-card-num">🎯</div>
                    <div class="week-card-count">30 题</div>
                </div>
                <h3 class="week-card-title">模拟考试</h3>
                <p class="week-card-topics" style="list-style:none;padding:0">
                    <li>30 道随机题</li>
                    <li>限时完成</li>
                    <li>综合能力评估</li>
                </p>
                <div class="week-card-cta"><span>开始考试</span><span>→</span></div>
            </div>
            <div class="week-card" data-mode="random" style="--card-color: #ec4899">
                <div class="week-card-header">
                    <div class="week-card-num">🎲</div>
                    <div class="week-card-count">20 题</div>
                </div>
                <h3 class="week-card-title">随机抽题</h3>
                <p class="week-card-topics" style="list-style:none;padding:0">
                    <li>20 道随机题</li>
                    <li>覆盖所有周</li>
                    <li>碎片化练习</li>
                </p>
                <div class="week-card-cta"><span>立即抽题</span><span>→</span></div>
            </div>
        </div>
    </div>`;

    document.getElementById('basic-content').innerHTML = html;

    // 绑定
    document.querySelectorAll('#basic-content .week-card').forEach(el => {
        el.addEventListener('click', () => {
            const w = el.dataset.week;
            const mode = el.dataset.mode;
            if (mode === 'exam') startExam();
            else if (mode === 'random') startRandom();
            else if (w) openWeek(w);
        });
    });
}

// 打开周教学页
function openWeek(week) {
    const weekData = getWeekCurriculum(week);
    if (!weekData) {
        // 没有教材数据，至少进入答题
        startWeek(week);
        return;
    }
    STATE.currentWeek = week;
    STATE.currentModule = 'basic-w' + week;
    document.getElementById('lesson-title').textContent = `第 ${week} 周 · ${weekData.title}`;
    document.getElementById('lesson-meta').textContent = `初级教程 · 12 周计划 · ${(QUESTION_BANK[week] || []).length} 道题`;
    document.getElementById('lesson-content').innerHTML = renderMarkdown(weekData.content);

    const qContainer = document.getElementById('lesson-questions');
    const questions = QUESTION_BANK[week] || [];
    if (questions.length > 0) {
        qContainer.innerHTML = questions.map(q => `
            <div class="lesson-q-item" data-qid="${q.id}">
                <div class="lesson-q-title">${q.title}</div>
                <div class="lesson-q-meta">${getTypeText(q.type)} · ${'⭐'.repeat(q.difficulty || 1)}</div>
            </div>
        `).join('');

        qContainer.querySelectorAll('.lesson-q-item').forEach(el => {
            el.addEventListener('click', () => {
                startSingleQuestion(el.dataset.qid);
            });
        });

        // 加一个"开始本周全部习题"按钮
        const startAllBtn = document.createElement('button');
        startAllBtn.className = 'btn btn-primary';
        startAllBtn.style.cssText = 'margin-top: 16px; width: 100%;';
        startAllBtn.textContent = `开始本周全部 ${questions.length} 道习题 →`;
        startAllBtn.onclick = () => startWeek(week);
        qContainer.appendChild(startAllBtn);
    } else {
        qContainer.innerHTML = '<p style="color: var(--text-muted);">暂无配套习题</p>';
    }

    document.getElementById('welcome').style.display = 'none';
    document.getElementById('basic-page').style.display = 'none';
    document.getElementById('advanced-page').style.display = 'none';
    document.getElementById('formulas-page').style.display = 'none';
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result-page').style.display = 'none';
    document.getElementById('lesson-page').style.display = 'block';
}

// 获取周教学数据
function getWeekCurriculum(week) {
    return BASIC_CURRICULUM[week] || null;
}

// ========== 高级页 ==========
function renderAdvancedPage() {
    const container = document.getElementById('advanced-modules');
    container.innerHTML = Object.keys(ADVANCED_CURRICULUM).map(key => {
        const mod = ADVANCED_CURRICULUM[key];
        const totalQ = mod.lessons.reduce((sum, l) => sum + (l.exercises || []).length, 0);
        return `
            <div class="adv-module-card">
                <div class="adv-module-header">
                    <div class="adv-module-icon">${mod.icon}</div>
                    <div>
                        <div class="adv-module-title">${mod.title}</div>
                        <div class="adv-module-desc">${mod.desc}</div>
                    </div>
                </div>
                <div class="adv-module-lessons">
                    ${mod.lessons.map(l => `
                        <div class="adv-lesson-item" data-module="${key}" data-lesson="${l.id}">
                            <div>
                                <div class="adv-lesson-title">${l.title}</div>
                                <div class="adv-lesson-questions">${l.exercises.length} 道配套习题</div>
                            </div>
                            <span class="adv-lesson-duration">${l.duration}</span>
                        </div>
                    `).join('')}
                </div>
                <div style="margin-top: 12px; font-size: 12px; color: var(--text-light);">
                    共 ${mod.lessons.length} 节课 · ${totalQ} 道题
                </div>
            </div>
        `;
    }).join('');

    // 绑定点击
    container.querySelectorAll('.adv-lesson-item').forEach(el => {
        el.addEventListener('click', () => {
            const mod = el.dataset.module;
            const lesson = el.dataset.lesson;
            openLesson(mod, lesson);
        });
    });
}

// ========== 课程详情 ==========
function openLesson(moduleKey, lessonId) {
    const mod = ADVANCED_CURRICULUM[moduleKey];
    if (!mod) return;
    const lesson = mod.lessons.find(l => l.id === lessonId);
    if (!lesson) return;

    STATE.currentModule = moduleKey;
    STATE.currentLesson = lessonId;

    document.getElementById('lesson-title').textContent = lesson.title;
    document.getElementById('lesson-meta').textContent = `${mod.title} · ${lesson.duration}`;
    document.getElementById('lesson-content').innerHTML = renderMarkdown(lesson.content);

    // 配套习题
    const qContainer = document.getElementById('lesson-questions');
    if (lesson.exercises && lesson.exercises.length > 0) {
        qContainer.innerHTML = lesson.exercises.map(eid => {
            const q = getQuestionById(eid);
            if (!q) return '';
            return `
                <div class="lesson-q-item" data-qid="${q.id}">
                    <div class="lesson-q-title">${q.title}</div>
                    <div class="lesson-q-meta">${getTypeText(q.type)} · ${'⭐'.repeat(q.difficulty || 1)}</div>
                </div>
            `;
        }).join('');

        qContainer.querySelectorAll('.lesson-q-item').forEach(el => {
            el.addEventListener('click', () => {
                const qid = el.dataset.qid;
                startSingleQuestion(qid);
            });
        });
    } else {
        qContainer.innerHTML = '<p style="color: var(--text-light);">暂无配套习题</p>';
    }

    // 隐藏其他页
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('basic-page').style.display = 'none';
    document.getElementById('advanced-page').style.display = 'none';
    document.getElementById('formulas-page').style.display = 'none';
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result-page').style.display = 'none';
    document.getElementById('lesson-page').style.display = 'block';
}

// 简易 Markdown 渲染
function renderMarkdown(md) {
    if (!md) return '';
    let html = md;
    // 标题
    html = html.replace(/^### (.*?)$/gm, '<h3>$1</h3>');
    html = html.replace(/^## (.*?)$/gm, '<h2>$1</h2>');
    html = html.replace(/^# (.*?)$/gm, '<h1>$1</h1>');
    // 粗体
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    // 代码块
    html = html.replace(/```([\s\S]*?)```/g, '<pre>$1</pre>');
    // 行内代码
    html = html.replace(/`([^`\n]+)`/g, '<code>$1</code>');
    // 表格
    html = html.replace(/(\|.*\|[\r\n]+)+/g, function(m) {
        const lines = m.trim().split('\n').filter(l => l.trim());
        if (lines.length < 2) return m;
        const headers = lines[0].split('|').map(s => s.trim()).filter(Boolean);
        const rows = lines.slice(2).map(l => l.split('|').map(s => s.trim()).filter(Boolean));
        let t = '<table><thead><tr>' + headers.map(h => `<th>${h}</th>`).join('') + '</tr></thead><tbody>';
        rows.forEach(r => {
            t += '<tr>' + r.map(c => `<td>${c}</td>`).join('') + '</tr>';
        });
        t += '</tbody></table>';
        return t;
    });
    // 列表
    html = html.replace(/^- (.*?)$/gm, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>\n?)+/g, m => '<ul>' + m + '</ul>');
    // 段落
    html = html.split('\n\n').map(p => {
        if (p.startsWith('<') || p.trim() === '') return p;
        return '<p>' + p.replace(/\n/g, '<br>') + '</p>';
    }).join('\n');
    return html;
}

// ========== 答题模式 ==========
function startWeek(week) {
    const questions = QUESTION_BANK[week];
    if (!questions || questions.length === 0) {
        showModal('提示', '该周题目建设中', [{ text: '确定', class: 'btn-primary', onClick: closeModal }]);
        return;
    }
    STATE.currentMode = 'week';
    STATE.currentWeek = week;
    STATE.currentModule = null;
    STATE.currentLesson = null;
    STATE.currentQuestions = [...questions];
    STATE.currentIndex = 0;
    STATE.answers = {};
    STATE.correctCount = 0;
    STATE.wrongCount = 0;
    STATE.wrongQuestions = [];
    STATE.startTime = Date.now();

    document.getElementById('quiz-week').textContent = `初级·第${week}周`;
    showQuiz();
    renderQuestion();
}

function startSingleQuestion(qid) {
    const q = getQuestionById(qid);
    if (!q) return;
    STATE.currentMode = 'single';
    STATE.currentWeek = q.week && q.week <= 12 ? q.week : null;
    STATE.currentModule = STATE.currentModule || (q.week && q.week <= 12 ? 'basic-w' + q.week : null);
    STATE.currentLesson = STATE.currentLesson;
    STATE.currentQuestions = [q];
    STATE.currentIndex = 0;
    STATE.answers = {};
    STATE.correctCount = 0;
    STATE.wrongCount = 0;
    STATE.wrongQuestions = [];
    STATE.startTime = Date.now();

    const weekTitle = q.week && q.week <= 12 ? `初级·第${q.week}周` : `高级·${q.knowledge || '习题'}`;
    document.getElementById('quiz-week').textContent = weekTitle;
    showQuiz();
    renderQuestion();
}

function startLessonQuestions(moduleKey, lessonId) {
    const mod = ADVANCED_CURRICULUM[moduleKey];
    const lesson = mod.lessons.find(l => l.id === lessonId);
    const questions = (lesson.exercises || []).map(eid => getQuestionById(eid)).filter(Boolean);
    if (questions.length === 0) {
        showModal('提示', '该课时暂无习题', [{ text: '确定', class: 'btn-primary', onClick: closeModal }]);
        return;
    }
    STATE.currentMode = 'lesson';
    STATE.currentWeek = null;
    STATE.currentModule = moduleKey;
    STATE.currentLesson = lessonId;
    STATE.currentQuestions = questions;
    STATE.currentIndex = 0;
    STATE.answers = {};
    STATE.correctCount = 0;
    STATE.wrongCount = 0;
    STATE.wrongQuestions = [];
    STATE.startTime = Date.now();

    document.getElementById('quiz-week').textContent = `高级·${lesson.title}`;
    showQuiz();
    renderQuestion();
}

function startExam() {
    const all = getAllQuestions();
    const shuffled = [...all].sort(() => Math.random() - 0.5);
    STATE.currentQuestions = shuffled.slice(0, Math.min(30, shuffled.length));
    STATE.currentMode = 'exam';
    STATE.currentWeek = null;
    STATE.currentModule = null;
    STATE.currentLesson = null;
    STATE.currentIndex = 0;
    STATE.answers = {};
    STATE.correctCount = 0;
    STATE.wrongCount = 0;
    STATE.wrongQuestions = [];
    STATE.startTime = Date.now();

    document.getElementById('quiz-week').textContent = '🎯 模拟考试';
    showQuiz();
    renderQuestion();
}

function startRandom() {
    const all = getAllQuestions();
    const shuffled = [...all].sort(() => Math.random() - 0.5);
    STATE.currentQuestions = shuffled.slice(0, Math.min(20, shuffled.length));
    STATE.currentMode = 'random';
    STATE.currentWeek = null;
    STATE.currentModule = null;
    STATE.currentLesson = null;
    STATE.currentIndex = 0;
    STATE.answers = {};
    STATE.correctCount = 0;
    STATE.wrongCount = 0;
    STATE.wrongQuestions = [];
    STATE.startTime = Date.now();

    document.getElementById('quiz-week').textContent = '🎲 随机抽题';
    showQuiz();
    renderQuestion();
}

function showQuiz() {
    document.getElementById('lesson-page').style.display = 'none';
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('basic-page').style.display = 'none';
    document.getElementById('advanced-page').style.display = 'none';
    document.getElementById('formulas-page').style.display = 'none';
    document.getElementById('result-page').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
}

// ========== 题目渲染 ==========
function renderQuestion() {
    const q = STATE.currentQuestions[STATE.currentIndex];
    if (!q) return;

    document.getElementById('quiz-progress').textContent = `${STATE.currentIndex + 1} / ${STATE.currentQuestions.length}`;
    document.getElementById('q-type').textContent = getTypeText(q.type);
    document.getElementById('q-difficulty').textContent = '⭐'.repeat(q.difficulty || 1);
    document.getElementById('q-day').textContent = q.day;
    document.getElementById('q-title').textContent = q.title;

    if (q.case) {
        const caseEl = document.getElementById('q-case');
        caseEl.innerHTML = `<strong>📋 案例：</strong>${q.case}`;
        caseEl.style.display = 'block';
    } else {
        document.getElementById('q-case').style.display = 'none';
    }

    const optionsEl = document.getElementById('q-options');
    optionsEl.innerHTML = '';

    if (q.type === 'fill') {
        document.getElementById('q-options').style.display = 'none';
        document.getElementById('q-fill').style.display = 'block';
        const input = document.getElementById('q-fill-input');
        input.value = STATE.answers[q.id] || '';
        input.disabled = false;
        input.onkeypress = (e) => { if (e.key === 'Enter') submitAnswer(); };
    } else {
        document.getElementById('q-fill').style.display = 'none';
        document.getElementById('q-options').style.display = 'block';

        q.options.forEach((opt, idx) => {
            const letter = String.fromCharCode(65 + idx);
            const div = document.createElement('div');
            div.className = 'option-item';
            div.innerHTML = `<div class="option-letter">${letter}</div><div class="option-text">${opt}</div>`;
            div.addEventListener('click', () => selectOption(q.id, letter, div));
            optionsEl.appendChild(div);
        });

        if (STATE.answers[q.id]) {
            const selected = STATE.answers[q.id];
            optionsEl.querySelectorAll('.option-item').forEach((item, idx) => {
                if (String.fromCharCode(65 + idx) === selected) item.classList.add('selected');
            });
        }
    }

    document.getElementById('q-result').style.display = 'none';
    document.getElementById('btn-prev').disabled = STATE.currentIndex === 0;
    document.getElementById('btn-submit').disabled = false;
    document.getElementById('btn-show-answer').textContent = '查看解析';
}

function getTypeText(type) {
    return { single: '单选题', multi: '多选题', fill: '填空题', judge: '判断题' }[type] || '单选题';
}

function selectOption(qid, letter, element) {
    STATE.answers[qid] = letter;
    document.querySelectorAll('.option-item').forEach(el => el.classList.remove('selected'));
    element.classList.add('selected');
}

function submitAnswer() {
    const q = STATE.currentQuestions[STATE.currentIndex];
    let userAnswer;
    if (q.type === 'fill') {
        userAnswer = document.getElementById('q-fill-input').value.trim();
        STATE.answers[q.id] = userAnswer;
    } else {
        userAnswer = STATE.answers[q.id];
    }
    if (!userAnswer && userAnswer !== 0) {
        showModal('提示', '请先选择/输入答案', [{ text: '确定', class: 'btn-primary', onClick: closeModal }]);
        return;
    }
    const isCorrect = checkAnswer(q, userAnswer);
    if (isCorrect) STATE.correctCount++;
    else {
        STATE.wrongCount++;
        STATE.wrongQuestions.push(q);
        addToWrongBook(q);
    }
    updateQuestionStats(q, isCorrect);
    showResult(q, userAnswer, isCorrect);
}

function checkAnswer(q, userAnswer) {
    const correct = q.answer.toString().trim().toUpperCase();
    const user = userAnswer.toString().trim().toUpperCase();
    if (q.type === 'fill') {
        const normalize = (s) => s.replace(/[，,。.\s]/g, '').toLowerCase();
        return normalize(correct) === normalize(user);
    }
    return correct === user;
}

function showResult(q, userAnswer, isCorrect) {
    const resultEl = document.getElementById('q-result');
    const headerEl = document.getElementById('result-header');
    const explEl = document.getElementById('result-explanation');
    const keyEl = document.getElementById('result-keypoint');

    headerEl.className = 'result-header ' + (isCorrect ? 'correct' : 'wrong');
    headerEl.innerHTML = isCorrect
        ? '✓ 回答正确！'
        : `✗ 回答错误（正确答案：${q.answer}，你的答案：${userAnswer || '未作答'}）`;
    explEl.innerHTML = q.explanation.replace(/\n/g, '<br>');
    keyEl.innerHTML = `<strong>💡 考点：</strong>${q.keypoint}`;

    resultEl.style.display = 'block';

    if (q.type !== 'fill') {
        document.querySelectorAll('.option-item').forEach((item, idx) => {
            const letter = String.fromCharCode(65 + idx);
            if (letter === q.answer.toUpperCase()) item.classList.add('correct');
            else if (letter === userAnswer.toUpperCase() && !isCorrect) item.classList.add('wrong');
        });
    } else {
        document.getElementById('q-fill-input').disabled = true;
    }

    document.getElementById('btn-submit').disabled = true;
    document.getElementById('btn-show-answer').textContent = '已显示解析';
}

function showAnswer() {
    const q = STATE.currentQuestions[STATE.currentIndex];
    showResult(q, STATE.answers[q.id] || '', checkAnswer(q, STATE.answers[q.id] || ''));
}

function addToWrongBook(q) {
    const wrong = loadWrongBook();
    if (!wrong.find(w => w.id === q.id)) {
        wrong.push({ id: q.id, week: q.week, day: q.day, title: q.title, time: Date.now() });
        saveWrongBook(wrong);
    }
}

function updateQuestionStats(q, isCorrect) {
    const key = `q_${q.id}`;
    if (!STATE.stats[key]) STATE.stats[key] = { correct: 0, wrong: 0, lastTime: 0 };
    STATE.stats[key].lastTime = Date.now();
    if (isCorrect) STATE.stats[key].correct++;
    else STATE.stats[key].wrong++;
    saveStats();
    updateStats();
}

function updateStats() {
    const all = getAllQuestions();
    let answered = 0, correct = 0, wrong = 0;
    all.forEach(q => {
        const s = STATE.stats[`q_${q.id}`];
        if (s) { answered++; correct += s.correct; wrong += s.wrong; }
    });
    const total = correct + wrong;
    const accuracy = total > 0 ? Math.round(correct / total * 100) : 0;

    // 侧边栏
    const el1 = document.getElementById('stat-answered');
    const el2 = document.getElementById('stat-correct');
    const el3 = document.getElementById('stat-wrong');
    const el4 = document.getElementById('stat-accuracy');
    if (el1) el1.textContent = answered;
    if (el2) el2.textContent = correct;
    if (el3) el3.textContent = wrong;
    if (el4) el4.textContent = accuracy + '%';

    // 首页
    const h1 = document.getElementById('home-stat-answered');
    const h2 = document.getElementById('home-stat-correct');
    const h3 = document.getElementById('home-stat-wrong');
    const h4 = document.getElementById('home-stat-accuracy');
    if (h1) h1.textContent = answered;
    if (h2) h2.textContent = correct;
    if (h3) h3.textContent = wrong;
    if (h4) h4.textContent = accuracy + '%';
}

function prevQuestion() {
    if (STATE.currentIndex > 0) { STATE.currentIndex--; renderQuestion(); }
}

function nextQuestion() {
    if (STATE.currentIndex < STATE.currentQuestions.length - 1) {
        STATE.currentIndex++;
        renderQuestion();
    } else {
        showFinalResult();
    }
}

function showFinalResult() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result-page').style.display = 'block';

    const total = STATE.currentQuestions.length;
    const correct = STATE.correctCount;
    const wrong = STATE.wrongCount;
    const accuracy = Math.round(correct / total * 100);
    const costTime = Math.round((Date.now() - STATE.startTime) / 1000);

    const icon = accuracy >= 80 ? '🎉' : accuracy >= 60 ? '👍' : '💪';
    document.getElementById('result-icon').textContent = icon;

    let title = '';
    if (accuracy >= 90) title = '太棒了！大师级水平！';
    else if (accuracy >= 80) title = '很好！继续保持！';
    else if (accuracy >= 60) title = '不错，继续努力！';
    else title = '加油！还需要更多练习';
    document.getElementById('result-title').textContent = title;

    document.getElementById('result-stats').innerHTML = `
        <div class="result-stat"><div class="result-stat-label">总题数</div><div class="result-stat-value">${total}</div></div>
        <div class="result-stat"><div class="result-stat-label">答对</div><div class="result-stat-value success">${correct}</div></div>
        <div class="result-stat"><div class="result-stat-label">答错</div><div class="result-stat-value danger">${wrong}</div></div>
        <div class="result-stat"><div class="result-stat-label">准确率</div><div class="result-stat-value">${accuracy}%</div></div>
        <div class="result-stat"><div class="result-stat-label">用时</div><div class="result-stat-value">${costTime}s</div></div>
        <div class="result-stat"><div class="result-stat-label">平均/题</div><div class="result-stat-value">${Math.round(costTime/total)}s</div></div>
    `;
}

// ========== 弹窗 ==========
function showModal(title, body, buttons) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-body').innerHTML = body;
    const footer = document.getElementById('modal-footer');
    footer.innerHTML = '';
    (buttons || [{ text: '确定', class: 'btn-primary', onClick: closeModal }]).forEach(btn => {
        const b = document.createElement('button');
        b.className = 'btn ' + (btn.class || 'btn-secondary');
        b.textContent = btn.text;
        b.onclick = btn.onClick;
        footer.appendChild(b);
    });
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// ========== 公式库 ==========
let formulaState = { category: '全部', keyword: '' };

function showFormulas() {
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('basic-page').style.display = 'none';
    document.getElementById('advanced-page').style.display = 'none';
    document.getElementById('lesson-page').style.display = 'none';
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result-page').style.display = 'none';
    document.getElementById('formulas-page').style.display = 'block';

    updateSidebar('formulas');
    renderFormulaCategories();
    renderFormulas();

    const search = document.getElementById('formula-search');
    search.value = formulaState.keyword;
    search.oninput = (e) => {
        formulaState.keyword = e.target.value.trim();
        renderFormulas();
    };
}

function renderFormulaCategories() {
    const cats = ['全部', ...new Set(FORMULAS.map(f => f.category))];
    const container = document.getElementById('formulas-categories');
    container.innerHTML = cats.map(c =>
        `<span class="cat-tag ${formulaState.category === c ? 'active' : ''}" data-cat="${c}">${c} (${c === '全部' ? FORMULAS.length : FORMULAS.filter(f => f.category === c).length})</span>`
    ).join('');

    container.querySelectorAll('.cat-tag').forEach(el => {
        el.addEventListener('click', () => {
            formulaState.category = el.dataset.cat;
            renderFormulaCategories();
            renderFormulas();
        });
    });
}

function renderFormulas() {
    let list = FORMULAS.slice();
    if (formulaState.category !== '全部') list = list.filter(f => f.category === formulaState.category);
    if (formulaState.keyword) {
        const kw = formulaState.keyword.toLowerCase();
        list = list.filter(f =>
            f.name.toLowerCase().includes(kw) ||
            (f.formula || '').toLowerCase().includes(kw) ||
            f.meaning.toLowerCase().includes(kw) ||
            (f.example || '').toLowerCase().includes(kw) ||
            (f.application || '').toLowerCase().includes(kw) ||
            (f.tags || []).some(t => t.toLowerCase().includes(kw))
        );
    }

    const container = document.getElementById('formulas-list');
    if (list.length === 0) {
        container.innerHTML = '<div class="formula-empty">🔍 没有匹配的公式</div>';
        return;
    }

    container.innerHTML = list.map(f => {
        const formulaText = f.formula || f.example || '';
        const tags = (f.tags || []).map(t => `<span class="formula-tag">${t}</span>`).join('');
        return `
            <div class="formula-card">
                <div class="formula-card-header">
                    <div class="formula-card-name">${f.name}</div>
                    <div class="formula-card-cat">${f.category}</div>
                </div>
                <div class="formula-text">${escapeHtml(formulaText)}</div>
                <div class="formula-meaning">💡 <strong>通俗理解：</strong>${f.meaning}</div>
                ${f.example ? `<div class="formula-example">📖 <strong>例子：</strong>${f.example}</div>` : ''}
                ${f.application ? `<div class="formula-app">🎯 <strong>应用：</strong>${f.application}</div>` : ''}
                ${tags ? `<div class="formula-tags">${tags}</div>` : ''}
            </div>
        `;
    }).join('');
}

function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
}

// ========== 环境试验项目库 ==========
let envState = { category: '全部', keyword: '' };

function showEnvPage() {
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('basic-page').style.display = 'none';
    document.getElementById('advanced-page').style.display = 'none';
    document.getElementById('lesson-page').style.display = 'none';
    document.getElementById('formulas-page').style.display = 'none';
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result-page').style.display = 'none';
    document.getElementById('env-page').style.display = 'block';

    updateSidebar('env');
    renderEnvCategories();
    renderEnvList();

    const search = document.getElementById('env-search');
    search.value = envState.keyword;
    search.oninput = (e) => {
        envState.keyword = e.target.value.trim();
        renderEnvList();
    };
}

function renderEnvSidebar() {
    const cats = ['全部', ...new Set(ENVIRONMENT_TESTS.map(t => t.category))];
    const counts = {};
    cats.forEach(c => {
        counts[c] = c === '全部' ? ENVIRONMENT_TESTS.length : ENVIRONMENT_TESTS.filter(t => t.category === c).length;
    });

    let html = '<nav class="nav"><div class="nav-section">';
    html += '<div class="nav-section-title">🌡️ 分类</div>';
    cats.forEach(c => {
        html += `<a class="nav-week" data-env-cat="${c}">
            <span class="nav-week-num">${c === '全部' ? '★' : c.substring(0,2)}</span>
            <span class="nav-week-title">${c}</span>
            <span class="nav-week-count">${counts[c]}</span>
        </a>`;
    });
    html += '</div></nav>';
    return html;
}

function renderEnvCategories() {
    const cats = ['全部', ...new Set(ENVIRONMENT_TESTS.map(t => t.category))];
    const container = document.getElementById('env-categories');
    container.innerHTML = cats.map(c => {
        const count = c === '全部' ? ENVIRONMENT_TESTS.length : ENVIRONMENT_TESTS.filter(t => t.category === c).length;
        return `<span class="cat-tag ${envState.category === c ? 'active' : ''}" data-cat="${c}">${c} (${count})</span>`;
    }).join('');

    container.querySelectorAll('.cat-tag').forEach(el => {
        el.addEventListener('click', () => {
            envState.category = el.dataset.cat;
            envState.keyword = '';
            document.getElementById('env-search').value = '';
            renderEnvCategories();
            renderEnvList();
        });
    });
}

function renderEnvList() {
    let list = ENVIRONMENT_TESTS.slice();

    if (envState.category !== '全部') {
        list = list.filter(t => t.category === envState.category);
    }

    if (envState.keyword) {
        const kw = envState.keyword.toLowerCase();
        list = list.filter(t => {
            return t.name.toLowerCase().includes(kw) ||
                t.purpose.toLowerCase().includes(kw) ||
                t.category.toLowerCase().includes(kw) ||
                t.standards.some(s => s.toLowerCase().includes(kw)) ||
                t.applications.some(a => a.toLowerCase().includes(kw)) ||
                t.failureModes.some(f => f.toLowerCase().includes(kw));
        });
    }

    const container = document.getElementById('env-list');
    if (list.length === 0) {
        container.innerHTML = '<div class="formula-empty">🔍 没有匹配的试验项目</div>';
        return;
    }

    container.innerHTML = list.map(t => {
        const conditions = Object.entries(t.conditions)
            .map(([k, v]) => `<div class="env-cond-item"><span class="env-cond-label">${k}</span><span class="env-cond-value">${escapeHtml(v)}</span></div>`)
            .join('');
        const severity = t.severity.map(s => {
            const keys = Object.keys(s).filter(k => k !== 'desc');
            const vals = keys.map(k => `<strong>${k}:</strong> ${escapeHtml(s[k])}`).join(' · ');
            return `<div class="env-sev-item">${vals || escapeHtml(s.desc)}</div>`;
        }).join('');
        const standards = t.standards.map(s => `<span class="env-std">${escapeHtml(s)}</span>`).join('');

        return `
        <div class="env-card">
            <div class="env-card-header">
                <div class="env-card-icon">${t.icon}</div>
                <div class="env-card-title-area">
                    <h3>${escapeHtml(t.name)}</h3>
                    <div class="env-card-cat">${escapeHtml(t.category)}</div>
                </div>
            </div>
            <div class="env-card-body">
                <div class="env-section">
                    <div class="env-section-title">📋 试验目的</div>
                    <p>${escapeHtml(t.purpose)}</p>
                </div>

                <div class="env-section">
                    <div class="env-section-title">📏 引用标准</div>
                    <div class="env-stds">${standards}</div>
                </div>

                <div class="env-section">
                    <div class="env-section-title">⚙️ 试验条件</div>
                    <div class="env-conditions">${conditions}</div>
                </div>

                <div class="env-section">
                    <div class="env-section-title">📊 严酷等级</div>
                    <div class="env-severity">${severity}</div>
                </div>

                <div class="env-section">
                    <div class="env-section-title">⚠️ 典型失效模式</div>
                    <div class="env-failures">
                        ${t.failureModes.map(f => `<span class="env-failure">${escapeHtml(f)}</span>`).join('')}
                    </div>
                </div>

                <div class="env-section">
                    <div class="env-section-title">🎯 应用场景</div>
                    <div class="env-apps">
                        ${t.applications.map(a => `<span class="env-app">${escapeHtml(a)}</span>`).join('')}
                    </div>
                </div>

                <div class="env-section env-equipment">
                    <div class="env-section-title">🔧 主要设备</div>
                    <p>${escapeHtml(t.equipment)}</p>
                </div>

                <div class="env-section env-tips">
                    <div class="env-section-title">💡 关键要点</div>
                    <p>${escapeHtml(t.tips)}</p>
                </div>
            </div>
        </div>
        `;
    }).join('');
}

// ========== 统计与错题本 ==========
function showStats() {
    const stats = STATE.stats;
    const all = getAllQuestions();
    const total = all.length;
    const answered = Object.keys(stats).length;
    let correct = 0, wrong = 0;
    Object.values(stats).forEach(s => { correct += s.correct; wrong += s.wrong; });
    const total_ = correct + wrong;
    const accuracy = total_ > 0 ? Math.round(correct / total_ * 100) : 0;

    const byWeek = {};
    all.forEach(q => {
        const w = q.week < 100 ? q.week : '高级';
        if (!byWeek[w]) byWeek[w] = { total: 0, done: 0 };
        byWeek[w].total++;
        if (stats[`q_${q.id}`]) byWeek[w].done++;
    });

    let weekHtml = Object.keys(byWeek).sort((a, b) => {
        if (a === '高级') return 1;
        if (b === '高级') return -1;
        return a - b;
    }).map(w => {
        const d = byWeek[w];
        return `<div style="display:flex;justify-content:space-between;padding:4px 0;">
            <span>${w === '高级' ? '高级' : '第' + w + '周'}</span>
            <span>${d.done}/${d.total}</span>
        </div>`;
    }).join('');

    const body = `
        <div style="margin-bottom:16px;">
            <h4 style="margin-bottom:8px;">📊 总体统计</h4>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
                <div style="padding:8px;background:var(--bg);border-radius:6px;">
                    <div style="font-size:11px;color:var(--text-light);">总题数</div>
                    <div style="font-size:18px;font-weight:600;">${total}</div>
                </div>
                <div style="padding:8px;background:var(--bg);border-radius:6px;">
                    <div style="font-size:11px;color:var(--text-light);">已答题数</div>
                    <div style="font-size:18px;font-weight:600;">${answered}</div>
                </div>
                <div style="padding:8px;background:var(--success-light);border-radius:6px;">
                    <div style="font-size:11px;color:var(--text-light);">答对</div>
                    <div style="font-size:18px;font-weight:600;color:var(--success);">${correct}</div>
                </div>
                <div style="padding:8px;background:var(--danger-light);border-radius:6px;">
                    <div style="font-size:11px;color:var(--text-light);">答错</div>
                    <div style="font-size:18px;font-weight:600;color:var(--danger);">${wrong}</div>
                </div>
                <div style="padding:8px;background:var(--primary-light);border-radius:6px;grid-column:span 2;">
                    <div style="font-size:11px;color:var(--text-light);">总体准确率</div>
                    <div style="font-size:20px;font-weight:600;color:var(--primary);">${accuracy}%</div>
                </div>
            </div>
        </div>
        <div>
            <h4 style="margin-bottom:8px;">📈 各周进度</h4>
            ${weekHtml}
        </div>
    `;
    showModal('学习统计', body, [
        { text: '清空数据', class: 'btn-secondary', onClick: clearStats },
        { text: '关闭', class: 'btn-primary', onClick: closeModal }
    ]);
}

function clearStats() {
    if (confirm('确定要清空所有学习数据吗？')) {
        localStorage.removeItem('reliability_stats');
        localStorage.removeItem('reliability_wrongbook');
        STATE.stats = {};
        updateStats();
        closeModal();
    }
}

function showWrongBook() {
    const wrong = loadWrongBook();
    if (wrong.length === 0) {
        showModal('错题本', '<p style="text-align:center;color:var(--text-light);">暂无错题</p>', [{ text: '关闭', class: 'btn-primary', onClick: closeModal }]);
        return;
    }
    const body = wrong.map(w => {
        const date = new Date(w.time).toLocaleString('zh-CN');
        return `<div style="padding:12px;border:1px solid var(--border);border-radius:8px;margin-bottom:8px;">
            <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--text-light);margin-bottom:4px;">
                <span>${w.day}</span><span>${date}</span>
            </div>
            <div style="font-size:13px;">${w.title}</div>
        </div>`;
    }).join('');
    showModal(`错题本（${wrong.length}题）`, body, [
        { text: '清空错题', class: 'btn-secondary', onClick: () => { if (confirm('清空？')) { saveWrongBook([]); closeModal(); } } },
        { text: '关闭', class: 'btn-primary', onClick: closeModal }
    ]);
}

function showSettings() {
    const body = `
        <div style="line-height:1.8;">
            <h4 style="margin-bottom:12px;">📖 关于本系统</h4>
            <p>可靠性测试工程师学习系统 v2.0</p>
            <p style="color:var(--text-light);font-size:12px;margin-top:4px;">
                包含：12 周初级 + 10 主题高级教程<br>
                题库：240+ 习题 · 公式：70+
            </p>
            <h4 style="margin:16px 0 12px;">🎯 使用说明</h4>
            <ul style="padding-left:20px;font-size:13px;color:var(--text-light);">
                <li>顶部导航切换：首页 / 初级 / 高级 / 公式</li>
                <li>初级：12 周分周练习，入门到胜任</li>
                <li>高级：10 大主题深入，进阶到专家</li>
                <li>公式库：可搜索的 70+ 公式通俗讲解</li>
                <li>所有数据保存在浏览器 localStorage</li>
            </ul>
        </div>
    `;
    showModal('设置', body, [{ text: '关闭', class: 'btn-primary', onClick: closeModal }]);
}
