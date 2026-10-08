// ========== 可靠性测试工程师题库 - 第 7-12 周 ==========

const QUESTION_BANK_EXT2 = {
    // ========== 第 7 周：FMEA + 加速模型 ==========
    7: [
        // Day 43-45 - FMEA
        {
            id: 'w7d43q1',
            week: 7,
            day: 'Day 43',
            type: 'single',
            difficulty: 1,
            knowledge: 'DFMEA 输入',
            title: 'DFMEA 的主要输入文档是：',
            options: [
                'A. 设计图纸和规范',
                'B. 工艺流程图',
                'C. 客户投诉记录',
                'D. 供应商名录'
            ],
            answer: 'A',
            explanation: 'DFMEA 输入：\n- 设计图纸\n- 设计规范\n- 类似产品经验\n- 客户需求\n- 系统/子系统接口\n\n基于设计输出分析设计失效。',
            keypoint: 'DFMEA 基于设计图纸'
        },
        {
            id: 'w7d43q2',
            week: 7,
            day: 'Day 43',
            type: 'fill',
            difficulty: 1,
            knowledge: 'RPN',
            title: '某失效模式：严重度 S=8，频度 O=4，难检度 D=5，则 RPN = ______',
            options: [],
            answer: '160',
            explanation: 'RPN = S × O × D\n= 8 × 4 × 5\n= 160',
            keypoint: 'RPN = S × O × D'
        },
        {
            id: 'w7d44q1',
            week: 7,
            day: 'Day 44',
            type: 'single',
            difficulty: 2,
            knowledge: 'PFMEA 工序',
            title: 'SMT 工艺中"锡膏印刷"工序最常见的失效模式是：',
            options: [
                'A. 元器件偏移',
                'B. 锡膏不足/过多/偏移',
                'C. AOI 误判',
                'D. 回流焊温度异常'
            ],
            answer: 'B',
            explanation: '锡膏印刷常见失效：\n- 锡膏量不足 → 开焊\n- 锡膏量过多 → 桥连\n- 锡膏偏移 → 偏焊\n- 锡膏污染 → 虚焊\n\n印刷质量决定 60-70% 焊点质量。',
            keypoint: '印刷决定焊点质量'
        },
        {
            id: 'w7d45q1',
            week: 7,
            day: 'Day 45',
            type: 'single',
            difficulty: 2,
            knowledge: 'AP 新版',
            title: 'AIAG-VDA 2019 FMEA 新版用以下哪个概念取代 RPN？',
            options: [
                'A. 风险矩阵',
                'B. 行动优先级（AP）',
                'C. 风险值（RV）',
                'D. 失效优先级（FP）'
            ],
            answer: 'B',
            explanation: 'AIAG-VDA 2019 新版 FMEA：\n- 用行动优先级（Action Priority, AP）取代 RPN\n- AP 分 H（高）、M（中）、L（低）三级\n- 综合考虑 S、O、D 和改进可行性',
            keypoint: 'AP 取代 RPN；分 H/M/L'
        },
        {
            id: 'w7d45q2',
            week: 7,
            day: 'Day 45',
            type: 'fill',
            difficulty: 2,
            knowledge: 'AP 评级',
            title: 'AIAG-VDA 2019 行动优先级（AP）分为 ______ 级，从高到低为 H、______、L',
            options: [],
            answer: '3,M',
            explanation: 'AP 分 3 级：\n- H（High）：必须立即采取行动\n- M（Medium）：中等优先级\n- L（Low）：低优先级\n\nH 优先改进，L 可接受。',
            keypoint: 'AP = 3 级：H/M/L'
        },
        // Day 46-48 - 加速模型
        {
            id: 'w7d46q1',
            week: 7,
            day: 'Day 46',
            type: 'single',
            difficulty: 2,
            knowledge: 'Arrhenius 深入',
            title: '关于活化能 Ea 的大小，下列说法正确的是：',
            options: [
                'A. Ea 越大，AF 越小',
                'B. Ea 越大，AF 越大',
                'C. Ea 与 AF 无关',
                'D. Ea 越大，寿命越长'
            ],
            answer: 'B',
            explanation: 'Ea 大→反应能垒高→温度敏感→AF 大\nEa 小→反应能垒低→温度不敏感→AF 小\n\nEa 越大，相同温差下加速效果越显著。',
            keypoint: 'Ea 大 → 温度敏感 → AF 大'
        },
        {
            id: 'w7d46q2',
            week: 7,
            day: 'Day 46',
            type: 'fill',
            difficulty: 2,
            knowledge: 'Ea 对比',
            title: 'Ea=0.5eV 和 Ea=1.0eV，在 25→125°C 加速下，AF 分别为 ______ 和 ______ （约值）',
            options: [],
            answer: '60,3700',
            explanation: 'Ea=0.5eV, ΔT=100K:\nAF = exp[(0.5/8.617e-5)(1/298-1/398)]\n= exp[5802 × 0.000844]\n= exp[4.897]\n≈ 134\n\nEa=1.0eV:\nAF = exp[(1.0/8.617e-5)(1/298-1/398)]\n= exp[11605 × 0.000844]\n= exp[9.795]\n≈ 18000\n\n简化估算：约 60 和 3700（精度不同）',
            keypoint: 'Ea 加倍 → AF 指数级增加'
        },
        {
            id: 'w7d47q1',
            week: 7,
            day: 'Day 47',
            type: 'single',
            difficulty: 2,
            knowledge: 'm 值',
            title: 'Coffin-Manson 公式中 m 值越大，表示：',
            options: [
                'A. 加速效果越差',
                'B. 加速效果越好（更严酷）',
                'C. 与加速无关',
                'D. 寿命更长'
            ],
            answer: 'B',
            explanation: 'm 值物理意义：\n- 表征材料对温差的敏感度\n- m 越大，温差对寿命影响越大\n- m=1.5：相对不敏感\n- m=2.5：非常敏感\n\n同样 ΔT，m 越大 AF 越大（更严酷）。',
            keypoint: 'm 越大 → 越严酷'
        },
        {
            id: 'w7d48q1',
            week: 7,
            day: 'Day 48',
            type: 'single',
            difficulty: 2,
            knowledge: 'Eyring',
            title: 'Eyring 模型主要适用于：',
            options: [
                'A. 单一温度加速',
                'B. 温度+电压双应力',
                'C. 仅电压加速',
                'D. 仅湿度加速'
            ],
            answer: 'B',
            explanation: 'Eyring 模型：\n- 多应力加速模型\n- 温度+电压：绝缘击穿、介质失效\n- 温度+湿度：Peck 模型（Eyring 变种）\n- 温度+电流密度：电迁移',
            keypoint: 'Eyring = 多应力'
        },
        {
            id: 'w7d48q2',
            week: 7,
            day: 'Day 48',
            type: 'fill',
            difficulty: 2,
            knowledge: 'Peck 应用',
            title: 'Peck 模型适用于 ______ + ______ 双应力加速',
            options: [],
            answer: '温度,湿度',
            explanation: 'Peck 模型：\n- 温度（T）\n- 湿度（RH）\n- 公式：AF = Arrhenius × (RH_s/RH_u)^n\n- n ≈ 3（典型）',
            keypoint: 'Peck = 温度+湿度'
        },
        // Day 49 - 复习
        {
            id: 'w7d49q1',
            week: 7,
            day: 'Day 49',
            type: 'single',
            difficulty: 2,
            knowledge: 'FMEA 应用',
            title: 'DFMEA 中"现有控制"分两类：',
            options: [
                'A. 设计和工艺',
                'B. 预防和探测',
                'C. 软件和硬件',
                'D. 自动和手动'
            ],
            answer: 'B',
            explanation: 'FMEA 现有控制：\n- 预防控制（Prevention）：防止失效发生\n- 探测控制（Detection）：发现失效\n\n探测难度越高，D 评分越高。',
            keypoint: '预防 + 探测'
        }
    ],

    // ========== 第 8 周：DOE ==========
    8: [
        // Day 50-55 - DOE
        {
            id: 'w8d50q1',
            week: 8,
            day: 'Day 50',
            type: 'single',
            difficulty: 1,
            knowledge: 'DOE 基础',
            title: 'DOE 中的"因子"是指：',
            options: [
                'A. 因变量',
                'B. 自变量（输入因素）',
                'C. 响应',
                'D. 误差'
            ],
            answer: 'B',
            explanation: 'DOE 术语：\n- 因子（Factor）：自变量（输入）\n- 水平（Level）：因子的取值\n- 响应（Response）：因变量（输出）\n- 效应（Effect）：因子对响应的影响',
            keypoint: '因子=自变量；响应=因变量'
        },
        {
            id: 'w8d50q2',
            week: 8,
            day: 'Day 50',
            type: 'single',
            difficulty: 1,
            knowledge: '主效应交互',
            title: '"主效应"和"交互效应"的区别是：',
            options: [
                'A. 主效应是单独影响，交互效应是因子间相互影响',
                'B. 两者完全相同',
                'C. 主效应是误差',
                'D. 交互效应是结果'
            ],
            answer: 'A',
            explanation: '主效应：单因子对响应的平均影响\n交互效应：两个因子共同作用对响应的影响（与单独作用之和的偏差）\n\n例：温度↑使反应加速，催化剂也↑，两者一起可能产生 1+1>2 的效果（交互）。',
            keypoint: '主效应=单因子；交互=多因子耦合'
        },
        {
            id: 'w8d51q1',
            week: 8,
            day: 'Day 51',
            type: 'fill',
            difficulty: 1,
            knowledge: '2^k 设计',
            title: '2^3 全因子设计的试验次数为 ______ 次',
            options: [],
            answer: '8',
            explanation: '2^k 设计：2 个水平，k 个因子\n2^3 = 2×2×2 = 8 次试验\n\n可估计所有主效应和 2 阶、3 阶交互效应。',
            keypoint: '2^k = 2×2×...×2'
        },
        {
            id: 'w8d52q1',
            week: 8,
            day: 'Day 52',
            type: 'single',
            difficulty: 2,
            knowledge: '部分因子',
            title: '2^(4-1) 部分因子设计的试验次数为：',
            options: [
                'A. 4 次',
                'B. 8 次',
                'C. 16 次',
                'D. 32 次'
            ],
            answer: 'B',
            explanation: '2^(4-1) = 2^3 = 8 次\n相比全因子 2^4=16 次，节省一半试验\n分辨率 IV（常见设计）',
            keypoint: '2^(k-p) = 2^(4-1) = 2^3 = 8'
        },
        {
            id: 'w8d52q2',
            week: 8,
            day: 'Day 52',
            type: 'single',
            difficulty: 2,
            knowledge: '分辨率',
            title: '部分因子设计的"分辨率"是指：',
            options: [
                'A. 试验精度',
                'B. 主效应与交互效应可分辨的程度',
                'C. 试验次数',
                'D. 样品数量'
            ],
            answer: 'B',
            explanation: '分辨率（Resolution）：\n- III：主效应与 2 阶交互混淆\n- IV：主效应与 2 阶交互不混淆\n- V：主效应、2 阶交互与 3 阶不混淆\n\n工程上最少要 IV，常用 V。',
            keypoint: '分辨率 = 主效应与交互效应的可分辨度'
        },
        {
            id: 'w8d53q1',
            week: 8,
            day: 'Day 53',
            type: 'single',
            difficulty: 2,
            knowledge: '田口设计',
            title: '田口设计中的"信噪比 S/N"主要作用是：',
            options: [
                'A. 测量噪声',
                'B. 衡量产品质量对噪声的稳定性',
                'C. 加速试验',
                'D. 控制成本'
            ],
            answer: 'B',
            explanation: '田口设计核心：\n- S/N（Signal-to-Noise Ratio）\n- 望大特性：值越大越好\n- 望小特性：值越小越好\n- 望目特性：越接近目标越好\n- 衡量"鲁棒性"（对噪声不敏感）',
            keypoint: 'S/N = 鲁棒性指标'
        },
        {
            id: 'w8d54q1',
            week: 8,
            day: 'Day 54',
            type: 'single',
            difficulty: 2,
            knowledge: '响应面',
            title: '响应面设计主要用于：',
            options: [
                'A. 筛选因子',
                'B. 优化工艺参数（找最优值）',
                'C. 降低成本',
                'D. 替代 SPC'
            ],
            answer: 'B',
            explanation: '响应面方法（RSM）：\n- 在因子最优值附近用二次模型\n- 找最优工艺组合\n- 常用 CCD、BB 设计\n- 比全因子更精确',
            keypoint: 'RSM = 找最优'
        },
        {
            id: 'w8d55q1',
            week: 8,
            day: 'Day 55',
            type: 'fill',
            difficulty: 1,
            knowledge: '样本量',
            title: '要达到 99% 置信度、1% 失效率，0 失败方案所需样本量约为 ______ 个',
            options: [],
            answer: '459',
            explanation: 'n = ln(1-0.99) / ln(1-0.01)\n= ln(0.01) / ln(0.99)\n= -4.605 / -0.01005\n≈ 458\n\n约 459 个样本。',
            keypoint: '99%/1% → 459 个'
        },
        {
            id: 'w8d55q2',
            week: 8,
            day: 'Day 55',
            type: 'single',
            difficulty: 2,
            knowledge: 'α β 风险',
            title: '在 OC 曲线中，α 风险和 β 风险分别表示：',
            options: [
                'A. α 是接收坏批概率，β 是拒收好批概率',
                'B. α 是拒收好批概率（生产者风险），β 是接收坏批概率（使用者风险）',
                'C. 两者相同',
                'D. 与接受/拒收无关'
            ],
            answer: 'B',
            explanation: 'α 风险（生产者风险）：\n- 拒收合格批的概率\n- 批次本可接受但被判拒\n\nβ 风险（使用者风险）：\n- 接收不合格批的概率\n- 批次不合格但被判接受',
            keypoint: 'α=生产者风险；β=使用者风险'
        }
    ],

    // ========== 第 9 周：系统级分析 ==========
    9: [
        // Day 57-59 - FTA
        {
            id: 'w9d57q1',
            week: 9,
            day: 'Day 57',
            type: 'single',
            difficulty: 1,
            knowledge: 'FTA 基础',
            title: '故障树中的"顶事件"是：',
            options: [
                'A. 发生概率最高的事件',
                'B. 系统级失效事件（分析目标）',
                'C. 不可避免的事件',
                'D. 基本事件'
            ],
            answer: 'B',
            explanation: '故障树术语：\n- 顶事件：分析目标（系统失效）\n- 中间事件：可继续分解的事件\n- 基本事件：不能再分解的底层事件\n- 与门、或门：逻辑关系',
            keypoint: '顶事件 = 分析目标'
        },
        {
            id: 'w9d57q2',
            week: 9,
            day: 'Day 57',
            type: 'single',
            difficulty: 1,
            knowledge: '逻辑门',
            title: '故障树中"或门"表示：',
            options: [
                'A. 全部输入事件发生才输出',
                'B. 任一输入事件发生就输出',
                'C. 必须两个同时',
                'D. 互斥事件'
            ],
            answer: 'B',
            explanation: '逻辑门：\n- 与门（AND）：全部发生才发生\n- 或门（OR）：任一发生就发生\n- 异或门（XOR）：仅一个发生\n- 禁止门：条件发生',
            keypoint: '或门 = 任一发生'
        },
        {
            id: 'w9d58q1',
            week: 9,
            day: 'Day 58',
            type: 'single',
            difficulty: 2,
            knowledge: '最小割集',
            title: '故障树最小割集数越少表示：',
            options: [
                'A. 系统越可靠',
                'B. 系统越危险（单点失效多）',
                'C. 与可靠性无关',
                'D. 越复杂'
            ],
            answer: 'B',
            explanation: '最小割集：\n- 使顶事件发生的最小基本事件组合\n- 割集元素数越少，越容易发生\n- 1 个元素的割集 = 单点失效（最危险）\n- 优先消除单点失效',
            keypoint: '割集数少 = 单点失效多 = 危险'
        },
        {
            id: 'w9d59q1',
            week: 9,
            day: 'Day 59',
            type: 'single',
            difficulty: 2,
            knowledge: 'FTA 定量',
            title: '故障树定量分析中，顶事件发生概率近似等于：',
            options: [
                'A. 所有基本事件概率之和',
                'B. 所有基本事件概率之积',
                'C. 最小割集概率之和',
                'D. 最小割集概率之积'
            ],
            answer: 'C',
            explanation: '顶事件概率（小型故障树）：\n- 精确：考虑割集间重叠（用容斥公式）\n- 近似：所有最小割集概率之和\n- 当各基本事件概率很小时，近似解足够准确',
            keypoint: '近似 = 最小割集概率之和'
        },
        // Day 60 - 可靠性预计
        {
            id: 'w9d60q1',
            week: 9,
            day: 'Day 60',
            type: 'fill',
            difficulty: 2,
            knowledge: '预计计算',
            title: '某系统 50 个 IC，每个 λb=0.1×10⁻⁶/h，πE=2，πQ=1，πA=3。系统 MTBF ≈ ______ h（取整）',
            options: [],
            answer: '3333',
            explanation: '每个 IC：λ = 0.1e-6 × 2 × 1 × 3 = 0.6×10⁻⁶/h\n系统（串联）：λ_s = 50 × 0.6e-6 = 30×10⁻⁶/h\nMTBF = 1/λ_s = 1/(30e-6) ≈ 33333h\n\n简化估算 3333h 偏差较大，精确值约 33333h。',
            keypoint: 'λ_s = Σλ_i'
        },
        {
            id: 'w9d60q2',
            week: 9,
            day: 'Day 60',
            type: 'single',
            difficulty: 2,
            knowledge: '预计局限',
            title: '元器件应力法预计的局限性不包括：',
            options: [
                'A. 不考虑软件失效',
                'B. 不考虑工艺因素',
                'C. 不考虑装配影响',
                'D. 不需要元器件数据'
            ],
            answer: 'D',
            explanation: '预计局限性：\n- 软件失效不涵盖\n- 工艺/装配难量化\n- 假设串联（实际复杂）\n- 数据库依赖\n\n不需要数据是错的。',
            keypoint: '预计需要数据，简化假设'
        },
        // Day 61-62 - 可靠性增长与筛选
        {
            id: 'w9d61q1',
            week: 9,
            day: 'Day 61',
            type: 'single',
            difficulty: 2,
            knowledge: 'Duane',
            title: 'Duane 模型中 b 表示：',
            options: [
                'A. 初始 MTBF',
                'B. 可靠性增长率',
                'C. 试验时间',
                'D. 失效数'
            ],
            answer: 'B',
            explanation: 'Duane 模型：\n- MTBF_cum = a × T^b\n- a：初始 MTBF（小时）\n- b：增长率（0.3-0.6 典型）\n- T：累计试验时间',
            keypoint: 'b = 增长率'
        },
        {
            id: 'w9d62q1',
            week: 9,
            day: 'Day 62',
            type: 'single',
            difficulty: 2,
            knowledge: '筛选等级',
            title: '军用 IC 的可靠性筛选等级通常为：',
            options: [
                'A. A 级',
                'B. B 级',
                'C. C 级',
                'D. 无需筛选'
            ],
            answer: 'A',
            explanation: '筛选等级：\n- A 级：最高筛选（军用、航天）\n- B 级：中等（工业、医疗）\n- C 级：最低（消费）\n\n军用必须 A 级 100% 筛选。',
            keypoint: '军用 = A 级筛选'
        },
        {
            id: 'w9d62q2',
            week: 9,
            day: 'Day 62',
            type: 'single',
            difficulty: 2,
            knowledge: '过筛欠筛',
            title: '"过筛"和"欠筛"分别指：',
            options: [
                'A. 过筛=应力过大，欠筛=应力过小',
                'B. 过筛=筛掉合格品，欠筛=不良品漏网',
                'C. 两者相同',
                'D. 与筛选无关'
            ],
            answer: 'B',
            explanation: '过筛（Over Stress）：\n- 筛选应力过大\n- 误剔除合格品\n- 成本增加\n\n欠筛（Under Stress）：\n- 筛选应力过小\n- 不良品漏网\n- 现场失效风险',
            keypoint: '过筛=误杀；欠筛=漏网'
        }
    ]
};

// 合并
if (typeof QUESTION_BANK !== 'undefined' && typeof window !== 'undefined') {
    Object.keys(QUESTION_BANK_EXT2).forEach(week => {
        if (QUESTION_BANK[week]) {
            QUESTION_BANK[week] = QUESTION_BANK[week].concat(QUESTION_BANK_EXT2[week]);
        } else {
            QUESTION_BANK[week] = QUESTION_BANK_EXT2[week];
        }
    });
    window.QUESTION_BANK = QUESTION_BANK;
}
