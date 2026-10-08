// ========== 全局状态 ==========
const STATE = {
    currentMode: 'home',     // home, week, exam, random
    currentWeek: null,
    currentQuestions: [],
    currentIndex: 0,
    answers: {},             // {qid: option}
    correctCount: 0,
    wrongCount: 0,
    wrongQuestions: [],      // 错题列表
    startTime: null,
    stats: loadStats()
};

// ========== 统计管理 ==========
function loadStats() {
    try {
        return JSON.parse(localStorage.getItem('reliability_stats') || '{}');
    } catch {
        return {};
    }
}

function saveStats() {
    localStorage.setItem('reliability_stats', JSON.stringify(STATE.stats));
}

function loadWrongBook() {
    try {
        return JSON.parse(localStorage.getItem('reliability_wrongbook') || '[]');
    } catch {
        return [];
    }
}

function saveWrongBook(wrongList) {
    localStorage.setItem('reliability_wrongbook', JSON.stringify(wrongList));
}

function getAllQuestions() {
    let all = [];
    Object.keys(QUESTION_BANK).forEach(week => {
        if (week !== 'extra') {
            all = all.concat(QUESTION_BANK[week]);
        }
    });
    return all;
}

// ========== 初始化 ==========
document.addEventListener('DOMContentLoaded', () => {
    bindEvents();
    updateStats();
});

// ========== 事件绑定 ==========
function bindEvents() {
    // 侧边栏导航
    document.querySelectorAll('.nav-week').forEach(el => {
        el.addEventListener('click', () => {
            const week = el.dataset.week;
            const mode = el.dataset.mode;

            document.querySelectorAll('.nav-week').forEach(n => n.classList.remove('active'));
            el.classList.add('active');

            if (mode === 'exam') {
                startExam();
            } else if (mode === 'random') {
                startRandom();
            } else if (mode === 'formulas') {
                showFormulas();
            } else {
                startWeek(parseInt(week));
            }
        });
    });

    // 顶部按钮
    document.getElementById('btn-formulas').addEventListener('click', showFormulas);
    document.getElementById('btn-stats').addEventListener('click', showStats);
    document.getElementById('btn-wrongbook').addEventListener('click', showWrongBook);
    document.getElementById('btn-settings').addEventListener('click', showSettings);

    // 欢迎页按钮
    document.getElementById('btn-start').addEventListener('click', () => {
        document.querySelector('[data-week="1"]').click();
    });

    // 欢迎页公式卡
    const welcomeFormulas = document.getElementById('welcome-formulas');
    if (welcomeFormulas) {
        welcomeFormulas.addEventListener('click', showFormulas);
    }

    // 答题区按钮
    document.getElementById('btn-prev').addEventListener('click', prevQuestion);
    document.getElementById('btn-next').addEventListener('click', nextQuestion);
    document.getElementById('btn-submit').addEventListener('click', submitAnswer);
    document.getElementById('btn-show-answer').addEventListener('click', showAnswer);

    // 结果页
    document.getElementById('btn-restart').addEventListener('click', () => {
        if (STATE.currentWeek) startWeek(STATE.currentWeek);
        else if (STATE.currentMode === 'exam') startExam();
        else if (STATE.currentMode === 'random') startRandom();
    });
    document.getElementById('btn-back-home').addEventListener('click', goHome);

    // 模态框
    document.getElementById('modal-close').addEventListener('click', closeModal);
    document.getElementById('modal').addEventListener('click', (e) => {
        if (e.target.id === 'modal') closeModal();
    });
}

// ========== 模式启动 ==========
function startWeek(week) {
    const questions = QUESTION_BANK[week];
    if (!questions || questions.length === 0) {
        showModal('提示', '该周题目建设中，敬请期待...', [{ text: '确定', class: 'btn-primary', onClick: closeModal }]);
        return;
    }

    STATE.currentMode = 'week';
    STATE.currentWeek = week;
    STATE.currentQuestions = [...questions];
    STATE.currentIndex = 0;
    STATE.answers = {};
    STATE.correctCount = 0;
    STATE.wrongCount = 0;
    STATE.wrongQuestions = [];
    STATE.startTime = Date.now();

    document.getElementById('quiz-week').textContent = getWeekTitle(week);
    showQuiz();
    renderQuestion();
}

function startExam() {
    const all = getAllQuestions();
    // 随机抽 30 道
    const shuffled = [...all].sort(() => Math.random() - 0.5);
    STATE.currentQuestions = shuffled.slice(0, Math.min(30, shuffled.length));
    STATE.currentMode = 'exam';
    STATE.currentWeek = null;
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

function getWeekTitle(week) {
    const titles = {
        1: '第1周 · 概率统计',
        2: '第2周 · 可靠性基础',
        3: '第3周 · 电子产品',
        4: '第4周 · 环境试验',
        5: '第5周 · 机械寿命',
        6: '第6周 · 加速试验',
        7: '第7周 · FMEA+加速',
        8: '第8周 · DOE',
        9: '第9周 · 系统分析',
        10: '第10周 · 标准体系',
        11: '第11周 · 跨部门协作',
        12: '第12周 · 相机模组'
    };
    return titles[week] || `第${week}周`;
}

// ========== 视图切换 ==========
function showQuiz() {
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('result-page').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
}

function goHome() {
    STATE.currentMode = 'home';
    STATE.currentWeek = null;
    document.querySelectorAll('.nav-week').forEach(n => n.classList.remove('active'));
    document.getElementById('welcome').style.display = 'block';
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result-page').style.display = 'none';
    document.getElementById('formulas-page').style.display = 'none';
}

// ========== 公式大全 ==========
let formulaState = {
    category: '全部',
    keyword: ''
};

function showFormulas() {
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result-page').style.display = 'none';
    document.getElementById('formulas-page').style.display = 'block';

    // 渲染分类
    renderFormulaCategories();

    // 渲染列表
    renderFormulas();

    // 搜索绑定
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
        `<span class="cat-tag ${formulaState.category === c ? 'active' : ''}" data-cat="${c}">${c}</span>`
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

    // 分类筛选
    if (formulaState.category !== '全部') {
        list = list.filter(f => f.category === formulaState.category);
    }

    // 关键词搜索
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
        container.innerHTML = '<div class="formula-empty">🔍 没有匹配的公式，换个关键词试试</div>';
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

// ========== 题目渲染 ==========
function renderQuestion() {
    const q = STATE.currentQuestions[STATE.currentIndex];
    if (!q) return;

    // 更新进度
    document.getElementById('quiz-progress').textContent = `${STATE.currentIndex + 1} / ${STATE.currentQuestions.length}`;

    // 元数据
    document.getElementById('q-type').textContent = getTypeText(q.type);
    document.getElementById('q-difficulty').textContent = '⭐'.repeat(q.difficulty || 1);
    document.getElementById('q-day').textContent = q.day;

    // 题干
    document.getElementById('q-title').textContent = q.title;

    // 案例
    if (q.case) {
        const caseEl = document.getElementById('q-case');
        caseEl.innerHTML = `<strong>📋 案例：</strong>${q.case}`;
        caseEl.style.display = 'block';
    } else {
        document.getElementById('q-case').style.display = 'none';
    }

    // 选项
    const optionsEl = document.getElementById('q-options');
    optionsEl.innerHTML = '';

    if (q.type === 'fill') {
        document.getElementById('q-options').style.display = 'none';
        document.getElementById('q-fill').style.display = 'block';
        const input = document.getElementById('q-fill-input');
        input.value = STATE.answers[q.id] || '';
        input.disabled = false;
        input.onkeypress = (e) => {
            if (e.key === 'Enter') submitAnswer();
        };
    } else {
        document.getElementById('q-fill').style.display = 'none';
        document.getElementById('q-options').style.display = 'block';

        q.options.forEach((opt, idx) => {
            const letter = String.fromCharCode(65 + idx);
            const div = document.createElement('div');
            div.className = 'option-item';
            div.innerHTML = `
                <div class="option-letter">${letter}</div>
                <div class="option-text">${opt}</div>
            `;
            div.addEventListener('click', () => selectOption(q.id, letter, div));
            optionsEl.appendChild(div);
        });

        // 恢复已选
        if (STATE.answers[q.id]) {
            const selected = STATE.answers[q.id];
            optionsEl.querySelectorAll('.option-item').forEach((item, idx) => {
                if (String.fromCharCode(65 + idx) === selected) {
                    item.classList.add('selected');
                }
            });
        }
    }

    // 隐藏结果
    document.getElementById('q-result').style.display = 'none';

    // 按钮状态
    document.getElementById('btn-prev').disabled = STATE.currentIndex === 0;
    document.getElementById('btn-submit').disabled = false;
    document.getElementById('btn-show-answer').textContent = '查看解析';
}

function getTypeText(type) {
    return {
        single: '单选题',
        multi: '多选题',
        fill: '填空题',
        judge: '判断题'
    }[type] || '单选题';
}

function selectOption(qid, letter, element) {
    STATE.answers[qid] = letter;
    document.querySelectorAll('.option-item').forEach(el => el.classList.remove('selected'));
    element.classList.add('selected');
}

// ========== 提交答案 ==========
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

    // 判分
    const isCorrect = checkAnswer(q, userAnswer);

    // 更新统计
    if (isCorrect) {
        STATE.correctCount++;
    } else {
        STATE.wrongCount++;
        STATE.wrongQuestions.push(q);
        addToWrongBook(q);
    }

    // 更新全局统计
    updateQuestionStats(q, isCorrect);

    // 显示结果
    showResult(q, userAnswer, isCorrect);
}

function checkAnswer(q, userAnswer) {
    const correct = q.answer.toString().trim().toUpperCase();
    const user = userAnswer.toString().trim().toUpperCase();

    if (q.type === 'fill') {
        // 填空题：标准化比较
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

    // 标记选项
    if (q.type !== 'fill') {
        document.querySelectorAll('.option-item').forEach((item, idx) => {
            const letter = String.fromCharCode(65 + idx);
            if (letter === q.answer.toUpperCase()) {
                item.classList.add('correct');
            } else if (letter === userAnswer.toUpperCase() && !isCorrect) {
                item.classList.add('wrong');
            }
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

// ========== 错题本 ==========
function addToWrongBook(q) {
    const wrong = loadWrongBook();
    if (!wrong.find(w => w.id === q.id)) {
        wrong.push({ id: q.id, week: q.week, day: q.day, title: q.title, time: Date.now() });
        saveWrongBook(wrong);
    }
}

// ========== 统计更新 ==========
function updateQuestionStats(q, isCorrect) {
    const key = `q_${q.id}`;
    if (!STATE.stats[key]) {
        STATE.stats[key] = { correct: 0, wrong: 0, lastTime: 0 };
    }
    STATE.stats[key].lastTime = Date.now();
    if (isCorrect) STATE.stats[key].correct++;
    else STATE.stats[key].wrong++;
    saveStats();
    updateStats();
}

function updateStats() {
    const all = getAllQuestions();
    let answered = 0, correct = 0, wrong = 0;
    const stats = STATE.stats;

    all.forEach(q => {
        const s = stats[`q_${q.id}`];
        if (s) {
            answered++;
            correct += s.correct;
            wrong += s.wrong;
        }
    });

    const total = correct + wrong;
    const accuracy = total > 0 ? Math.round(correct / total * 100) : 0;

    document.getElementById('stat-answered').textContent = answered;
    document.getElementById('stat-correct').textContent = correct;
    document.getElementById('stat-wrong').textContent = wrong;
    document.getElementById('stat-accuracy').textContent = accuracy + '%';
}

// ========== 翻页 ==========
function prevQuestion() {
    if (STATE.currentIndex > 0) {
        STATE.currentIndex--;
        renderQuestion();
    }
}

function nextQuestion() {
    if (STATE.currentIndex < STATE.currentQuestions.length - 1) {
        STATE.currentIndex++;
        renderQuestion();
    } else {
        showFinalResult();
    }
}

// ========== 最终结果 ==========
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

    const statsHtml = `
        <div class="result-stat">
            <div class="result-stat-label">总题数</div>
            <div class="result-stat-value">${total}</div>
        </div>
        <div class="result-stat">
            <div class="result-stat-label">答对</div>
            <div class="result-stat-value success">${correct}</div>
        </div>
        <div class="result-stat">
            <div class="result-stat-label">答错</div>
            <div class="result-stat-value danger">${wrong}</div>
        </div>
        <div class="result-stat">
            <div class="result-stat-label">准确率</div>
            <div class="result-stat-value">${accuracy}%</div>
        </div>
        <div class="result-stat">
            <div class="result-stat-label">用时</div>
            <div class="result-stat-value">${costTime}s</div>
        </div>
        <div class="result-stat">
            <div class="result-stat-label">平均/题</div>
            <div class="result-stat-value">${Math.round(costTime/total)}s</div>
        </div>
    `;
    document.getElementById('result-stats').innerHTML = statsHtml;
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

// ========== 统计面板 ==========
function showStats() {
    const stats = STATE.stats;
    const all = getAllQuestions();
    const total = all.length;
    const answered = Object.keys(stats).length;
    let correct = 0, wrong = 0;

    Object.values(stats).forEach(s => {
        correct += s.correct;
        wrong += s.wrong;
    });
    const total_ = correct + wrong;
    const accuracy = total_ > 0 ? Math.round(correct / total_ * 100) : 0;

    const byWeek = {};
    all.forEach(q => {
        if (!byWeek[q.week]) byWeek[q.week] = { total: 0, done: 0 };
        byWeek[q.week].total++;
        if (stats[`q_${q.id}`]) byWeek[q.week].done++;
    });

    let weekHtml = Object.keys(byWeek).sort((a, b) => a - b).map(w => {
        const d = byWeek[w];
        return `<div style="display:flex;justify-content:space-between;padding:4px 0;">
            <span>第${w}周</span>
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

    showModal('学习统计', body, [{ text: '清空数据', class: 'btn-secondary', onClick: clearStats }, { text: '关闭', class: 'btn-primary', onClick: closeModal }]);
}

function clearStats() {
    if (confirm('确定要清空所有学习数据吗？此操作不可恢复。')) {
        localStorage.removeItem('reliability_stats');
        localStorage.removeItem('reliability_wrongbook');
        STATE.stats = {};
        updateStats();
        closeModal();
    }
}

// ========== 错题本 ==========
function showWrongBook() {
    const wrong = loadWrongBook();
    if (wrong.length === 0) {
        showModal('错题本', '<p style="text-align:center;color:var(--text-light);">暂无错题，继续保持！</p>', [{ text: '关闭', class: 'btn-primary', onClick: closeModal }]);
        return;
    }

    const body = wrong.map(w => {
        const date = new Date(w.time).toLocaleString('zh-CN');
        return `
            <div style="padding:12px;border:1px solid var(--border);border-radius:8px;margin-bottom:8px;">
                <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--text-light);margin-bottom:4px;">
                    <span>第${w.week}周 · ${w.day}</span>
                    <span>${date}</span>
                </div>
                <div style="font-size:13px;">${w.title}</div>
            </div>
        `;
    }).join('');

    showModal(`错题本（${wrong.length}题）`, body, [
        { text: '清空错题', class: 'btn-secondary', onClick: () => { if (confirm('清空所有错题？')) { saveWrongBook([]); closeModal(); } } },
        { text: '关闭', class: 'btn-primary', onClick: closeModal }
    ]);
}

// ========== 设置 ==========
function showSettings() {
    const body = `
        <div style="line-height:1.8;">
            <h4 style="margin-bottom:12px;">📖 关于本系统</h4>
            <p>可靠性测试工程师 3 个月学习计划配套习题系统</p>
            <p style="color:var(--text-light);font-size:12px;margin-top:4px;">题库基于工业实践设计，包含 280+ 道精选题目</p>

            <h4 style="margin:16px 0 12px;">🎯 使用说明</h4>
            <ul style="padding-left:20px;font-size:13px;color:var(--text-light);">
                <li>按周学习：从第 1 周开始，循序渐进</li>
                <li>模拟考试：30 题随机抽取，检验综合能力</li>
                <li>错题本：自动收集错题，便于复习</li>
                <li>数据本地保存，浏览器清除数据会丢失</li>
            </ul>

            <h4 style="margin:16px 0 12px;">💾 数据管理</h4>
            <p style="font-size:13px;color:var(--text-light);">所有数据保存在浏览器 localStorage</p>
        </div>
    `;
    showModal('设置', body, [{ text: '关闭', class: 'btn-primary', onClick: closeModal }]);
}
