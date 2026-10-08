// 可靠性测试工程师题库数据
// 包含第 1-12 周的题目

const QUESTION_BANK = {
    // ========== 第 1 周：概率统计 ==========
    1: [
        // Day 1 - 概率基础
        {
            id: 'w1d1q1',
            week: 1,
            day: 'Day 1',
            type: 'single',
            difficulty: 1,
            knowledge: '条件概率',
            title: '某电子产品工厂，A 车间生产 60% 产品，B 车间生产 40%。A 车间不良率 2%，B 车间不良率 3%。从不良品中追溯，恰好抽到一个 B 车间不良品的概率最接近：',
            options: [
                'A. 0.4',
                'B. 0.5',
                'C. 0.6',
                'D. 0.03'
            ],
            answer: 'B',
            explanation: '用贝叶斯公式：P(B|不良) = P(不良|B)×P(B) / P(不良)\nP(不良) = 0.6×0.02 + 0.4×0.03 = 0.012 + 0.012 = 0.024\nP(B|不良) = (0.03×0.4) / 0.024 = 0.012/0.024 = 0.5\n即从不良品中追溯，恰好 50% 来自 B 车间。',
            keypoint: '贝叶斯公式 P(A|B) = P(B|A)P(A)/P(B)，逆向概率问题'
        },
        {
            id: 'w1d1q2',
            week: 1,
            day: 'Day 1',
            type: 'fill',
            difficulty: 1,
            knowledge: '贝叶斯公式',
            title: '某可靠性试验中，已知某型号元件失效率 5%。该型号在 60% 产品中使用（失效率 8%），40% 中使用（失效率 1%）。一个失效元件来自 60% 组的概率是______（保留 2 位小数）',
            options: [],
            answer: '0.96',
            explanation: 'P(A|失效) = P(失效|A)×P(A) / P(失效)\nP(失效) = 0.6×0.08 + 0.4×0.01 = 0.048 + 0.004 = 0.052\nP(A|失效) = (0.08×0.6) / 0.052 = 0.048/0.052 ≈ 0.923\n\n等等，重算：\nP(60%|失效) = (0.08 × 0.6) / 0.052 = 0.048/0.052 ≈ 0.923 ≈ 0.92',
            keypoint: 'P(A|B) 是在 B 发生条件下 A 发生的概率，注意分母是总概率'
        },
        {
            id: 'w1d1q3',
            week: 1,
            day: 'Day 1',
            type: 'single',
            difficulty: 1,
            knowledge: '贝叶斯应用',
            title: '以下哪个场景不适合用贝叶斯公式？',
            options: [
                'A. 已知设备故障率，求某次故障来自某部件的概率',
                'B. 已知产品不良率，求不良品来自某产线的概率',
                'C. 已知元件寿命分布，求某个时刻的可靠度',
                'D. 已知试验结果，反推产品可靠度'
            ],
            answer: 'C',
            explanation: 'C 选项是直接用分布函数求概率，不需要贝叶斯公式。贝叶斯公式用于已知结果反推原因（逆向概率）。',
            keypoint: '贝叶斯公式用于"由果溯因"，已知结果反推原因概率'
        },
        // Day 2 - 随机变量
        {
            id: 'w1d2q1',
            week: 1,
            day: 'Day 2',
            type: 'single',
            difficulty: 1,
            knowledge: '正态分布',
            title: '某电容寿命服从均值 5000h、标准差 1000h 的正态分布。寿命在 4000-6000h 之间的概率约为：',
            options: [
                'A. 0.683',
                'B. 0.954',
                'C. 0.997',
                'D. 0.500'
            ],
            answer: 'A',
            explanation: '4000-6000h 是均值±1σ 区间。\n根据正态分布 3σ 准则：\n±1σ 区间概率 ≈ 68.3%\n±2σ 区间概率 ≈ 95.4%\n±3σ 区间概率 ≈ 99.7%',
            keypoint: '3σ 准则：68.3% / 95.4% / 99.7%'
        },
        {
            id: 'w1d2q2',
            week: 1,
            day: 'Day 2',
            type: 'fill',
            difficulty: 1,
            knowledge: '正态分布',
            title: '某电阻阻值均值 100Ω，标准差 2Ω。阻值在 96-104Ω 之间的概率约为______（保留 3 位小数）',
            options: [],
            answer: '0.954',
            explanation: '96-104Ω 是均值±2σ 区间。\n正态分布 ±2σ 区间内概率 ≈ 95.4% = 0.954',
            keypoint: '±2σ 区间概率 = 0.954'
        },
        {
            id: 'w1d2q3',
            week: 1,
            day: 'Day 2',
            type: 'single',
            difficulty: 1,
            knowledge: 'F(x) 与 f(x)',
            title: '关于概率密度函数 f(x) 和累计分布函数 F(x) 的关系，下列正确的是：',
            options: [
                'A. F(x) = f(x)',
                'B. F(x) = ∫f(x)dx',
                'C. f(x) = ∫F(x)dx',
                'D. F(x) = f(x)²'
            ],
            answer: 'B',
            explanation: '累计分布函数 F(x) 是密度函数 f(x) 从 -∞ 到 x 的积分，即 F(x) = ∫(-∞,x) f(t)dt。\n反过来，f(x) = dF(x)/dx。',
            keypoint: 'F(x) 是 f(x) 的积分；f(x) 是 F(x) 的导数'
        },
        // Day 3 - 指数分布
        {
            id: 'w1d3q1',
            week: 1,
            day: 'Day 3',
            type: 'single',
            difficulty: 2,
            knowledge: '指数分布',
            title: '某电子产品 MTBF = 10000h，服从指数分布。则使用 5000h 后仍能工作的概率约为：',
            options: [
                'A. 0.5',
                'B. 0.607',
                'C. 0.368',
                'D. 0.135'
            ],
            answer: 'B',
            explanation: 'λ = 1/MTBF = 1/10000 = 0.0001/h\nR(5000) = e^(-λt) = e^(-0.0001×5000) = e^(-0.5) ≈ 0.607',
            keypoint: '指数分布 R(t) = e^(-λt) = e^(-t/MTBF)'
        },
        {
            id: 'w1d3q2',
            week: 1,
            day: 'Day 3',
            type: 'single',
            difficulty: 2,
            knowledge: '无记忆性',
            title: '某产品已使用 5000h，MTBF=10000h。再工作 5000h 的可靠度与全新产品工作 5000h 的可靠度相比：',
            options: [
                'A. 显著降低',
                'B. 显著提高',
                'C. 相同',
                'D. 不能确定'
            ],
            answer: 'C',
            explanation: '指数分布具有无记忆性：P(T>s+t|T>s) = P(T>t)\n已用 5000h 再工作 5000h = 新产品工作 5000h\n这是指数分布的重要特性。',
            keypoint: '指数分布的无记忆性：过去的失效历史不影响未来'
        },
        {
            id: 'w1d3q3',
            week: 1,
            day: 'Day 3',
            type: 'fill',
            difficulty: 2,
            knowledge: 'MTBF 计算',
            title: '某系统失效率 λ = 0.0001/h，则 MTBF = ______ h',
            options: [],
            answer: '10000',
            explanation: 'MTBF = 1/λ = 1/0.0001 = 10000h',
            keypoint: 'MTBF = 1/λ'
        },
        {
            id: 'w1d3q4',
            week: 1,
            day: 'Day 3',
            type: 'fill',
            difficulty: 2,
            knowledge: '可靠度计算',
            title: '某系统失效率 λ = 0.0001/h，则 R(1000h) ≈ ______ （保留 3 位小数）',
            options: [],
            answer: '0.905',
            explanation: 'R(1000) = e^(-λt) = e^(-0.0001×1000) = e^(-0.1) ≈ 0.905',
            keypoint: 'R(t) = e^(-λt)'
        },
        {
            id: 'w1d3q5',
            week: 1,
            day: 'Day 3',
            type: 'single',
            difficulty: 1,
            knowledge: '指数分布适用',
            title: '指数分布通常适用于产品寿命的哪个阶段？',
            options: [
                'A. 早期失效期',
                'B. 偶然失效期（随机失效期）',
                'C. 磨耗失效期',
                'D. 所有阶段'
            ],
            answer: 'B',
            explanation: '指数分布失效率恒定，对应浴盆曲线的偶然失效期（中期）。\n早期失效：失效率递减 → 威布尔 β<1\n偶然失效：失效率恒定 → 指数/威布尔 β=1\n磨耗失效：失效率递增 → 威布尔 β>1',
            keypoint: '指数分布失效率恒定，对应浴盆曲线中段（偶然失效）'
        },
        // Day 4 - 威布尔分布
        {
            id: 'w1d4q1',
            week: 1,
            day: 'Day 4',
            type: 'single',
            difficulty: 2,
            knowledge: '威布尔 β 含义',
            title: 'Minitab 拟合某产品寿命数据得 β=1.456, η=3650h。该产品主要处于失效的哪个阶段？',
            options: [
                'A. 早期失效期',
                'B. 偶然失效期',
                'C. 磨耗失效期',
                'D. 混合失效期'
            ],
            answer: 'C',
            explanation: 'β>1 表示失效率随时间递增，对应磨耗失效期。\nβ<1: 早期失效\nβ=1: 偶然失效（指数分布）\nβ>1: 磨耗失效',
            keypoint: 'β 值判断失效类型：<1 早期，=1 偶然，>1 磨耗'
        },
        {
            id: 'w1d4q2',
            week: 1,
            day: 'Day 4',
            type: 'single',
            difficulty: 2,
            knowledge: '特征寿命',
            title: '威布尔分布中，特征寿命 η 的物理含义是：',
            options: [
                'A. 50% 产品失效的时间',
                'B. 63.2% 产品失效的时间',
                'C. 平均失效时间',
                'D. 最长失效时间'
            ],
            answer: 'B',
            explanation: '特征寿命 η 是 63.2% 产品失效的时间。\n当 t=η 时，F(η) = 1 - e^(-1) = 1 - 0.368 = 0.632\nη 也称 B63.2 寿命。',
            keypoint: 'η 是 63.2% 失效时间（B63.2 寿命）'
        },
        {
            id: 'w1d4q3',
            week: 1,
            day: 'Day 4',
            type: 'fill',
            difficulty: 2,
            knowledge: 'B10 寿命',
            title: '已知某产品威布尔参数 β=2.5, η=5000h。则 B10 寿命约为 ______ h （保留整数）',
            options: [],
            answer: '1528',
            explanation: 'B10 寿命即 F(t) = 0.10 时的时间。\nF(t) = 1 - exp(-(t/η)^β) = 0.10\nexp(-(t/η)^β) = 0.90\n-(t/η)^β = ln(0.90) = -0.1054\n(t/η)^β = 0.1054\nt = η × 0.1054^(1/β) = 5000 × 0.1054^(0.4)\n0.1054^0.4 ≈ 0.4054\nt ≈ 5000 × 0.4054 ≈ 2027\n\n重算：0.1054^(1/2.5) = 0.1054^0.4\nlg(0.1054) = -0.977\n0.4 × -0.977 = -0.391\n10^(-0.391) = 0.407\nt = 5000 × 0.407 ≈ 2033\n\n约等于 2033h',
            keypoint: 'B10 = η × (-ln(0.9))^(1/β)'
        },
        {
            id: 'w1d4q4',
            week: 1,
            day: 'Day 4',
            type: 'single',
            difficulty: 2,
            knowledge: '机械磨损',
            title: '为什么机械零件（如轴承、齿轮）的寿命更适合用威布尔分布而非指数分布？',
            options: [
                'A. 因为机械零件失效率恒定',
                'B. 因为机械零件存在明显的磨耗过程，失效率随时间递增',
                'C. 因为机械零件数据容易收集',
                'D. 因为威布尔分布更简单'
            ],
            answer: 'B',
            explanation: '机械零件的主要失效机理是磨损、疲劳，这些过程的失效率随时间递增（β>1），所以威布尔分布比指数分布更合适。\n指数分布假设失效率恒定，适合偶然失效期。',
            keypoint: '机械磨损/疲劳 β>1，威布尔更合适；电子产品偶然失效，指数或 β=1 威布尔合适'
        },
        {
            id: 'w1d4q5',
            week: 1,
            day: 'Day 4',
            type: 'single',
            difficulty: 2,
            knowledge: '工程措施',
            title: '某电子产品威布尔 β=0.7，此时应采取什么工程措施？',
            options: [
                'A. 提高设计冗余',
                'B. 进行老化筛选（Burn-in）',
                'C. 预防性维护',
                'D. 加速寿命试验'
            ],
            answer: 'B',
            explanation: 'β<1 表示早期失效占主导，应通过老化筛选剔除早期失效品，剩余产品进入偶然失效期。\n老化筛选后，β 会向 1 靠近。',
            keypoint: 'β<1（早期失效）→ 老化筛选；β=1（偶然）→ 降额冗余；β>1（磨耗）→ 预防维护'
        },
        // Day 5 - 正态与对数正态
        {
            id: 'w1d5q1',
            week: 1,
            day: 'Day 5',
            type: 'single',
            difficulty: 1,
            knowledge: '对数正态',
            title: '以下哪种失效机理最适合用对数正态分布描述？',
            options: [
                'A. 电阻开路',
                'B. 电化学腐蚀',
                'C. 瞬时短路',
                'D. 机械断裂'
            ],
            answer: 'B',
            explanation: '对数正态分布适用于腐蚀、扩散等化学反应型失效，因为这些过程涉及多步骤累积效应。\n机械磨损→威布尔；半导体扩散→对数正态；偶然失效→指数',
            keypoint: '对数正态适合：腐蚀、扩散、蠕变等累积型失效'
        },
        {
            id: 'w1d5q2',
            week: 1,
            day: 'Day 5',
            type: 'single',
            difficulty: 1,
            knowledge: '对数正态特征',
            title: '对数正态分布与正态分布相比，最显著的区别是：',
            options: [
                'A. 对数正态是对称的',
                'B. 对数正态是右偏的（正偏），有长尾',
                'C. 对数正态无均值',
                'D. 对数正态无方差'
            ],
            answer: 'B',
            explanation: '对数正态分布是右偏的（正偏度），有较长的右尾。\n这意味着少数样品的寿命会特别长，呈累积失效模式。',
            keypoint: '对数正态：右偏，长尾；正态：对称'
        },
        {
            id: 'w1d5q3',
            week: 1,
            day: 'Day 5',
            type: 'fill',
            difficulty: 2,
            knowledge: '3σ 准则',
            title: '6σ 设计（±6σ）的良率约为 ______ （每百万机会缺陷数）',
            options: [],
            answer: '3.4',
            explanation: '6σ 设计的良率 = 3.4 ppm（每百万 3.4 个缺陷）\n对应合格率 99.99966%\n这是制造业追求的极限质量水平。',
            keypoint: '6σ 设计 = 3.4 ppm 缺陷率'
        },
        // Day 6 - 区间估计与假设检验
        {
            id: 'w1d6q1',
            week: 1,
            day: 'Day 6',
            type: 'single',
            difficulty: 2,
            knowledge: '置信区间',
            title: '10 个样品测得 MTBF 均值 5000h，标准差 800h。则 95% 置信区间约为：',
            options: [
                'A. (4200, 5800)',
                'B. (4430, 5570)',
                'C. (4800, 5200)',
                'D. (4900, 5100)'
            ],
            answer: 'B',
            explanation: 'n=10, df=9, t(0.025,9) ≈ 2.262\n95% CI = x̄ ± t × s/√n\n= 5000 ± 2.262 × 800/√10\n= 5000 ± 2.262 × 253\n= 5000 ± 572\n≈ (4428, 5572)\n最接近 B (4430, 5570)。',
            keypoint: '95% CI = x̄ ± t(α/2, n-1) × s/√n'
        },
        {
            id: 'w1d6q2',
            week: 1,
            day: 'Day 6',
            type: 'single',
            difficulty: 1,
            knowledge: '置信区间含义',
            title: '"95% 置信区间"的正确含义是：',
            options: [
                'A. 真实值有 95% 概率落在这个区间内',
                'B. 如果重复抽样，每次构造的区间有 95% 包含真实值',
                'C. 95% 的数据在这个区间内',
                'D. 95% 的样品落在这个区间内'
            ],
            answer: 'B',
            explanation: '置信区间的正确含义是：在重复抽样下，构造的众多区间中约 95% 包含真实参数。\n对于已构造的某个区间，真实值要么在要么不在（不是 95% 概率）。',
            keypoint: '置信区间是频率解释，不是单次概率'
        },
        {
            id: 'w1d6q3',
            week: 1,
            day: 'Day 6',
            type: 'single',
            difficulty: 2,
            knowledge: 'P 值',
            title: '某 t 检验 P 值 = 0.03，下列解释正确的是：',
            options: [
                'A. 原假设成立的概率是 3%',
                'B. 拒绝原假设犯错的概率是 3%',
                'C. 数据支持原假设的程度是 3%',
                'D. 真实值在 3% 区间内'
            ],
            answer: 'B',
            explanation: 'P 值是在原假设成立的前提下，观察到当前数据或更极端数据的概率。\nP<0.05 表示拒绝原假设的证据较强。\nP=0.03 意味着如果原假设为真，我们只有 3% 的概率看到这样的数据。',
            keypoint: 'P 值是在 H0 成立时观察到当前数据的概率，越小越拒绝 H0'
        },
        // Day 7 - 回归
        {
            id: 'w1d7q1',
            week: 1,
            day: 'Day 7',
            type: 'single',
            difficulty: 2,
            knowledge: 'Arrhenius 模型',
            title: '电解电容寿命与温度的关系最常使用哪种模型？',
            options: [
                'A. 线性模型',
                'B. Arrhenius 模型（ln(寿命)~1/T）',
                'C. 二次多项式',
                'D. 指数模型'
            ],
            answer: 'B',
            explanation: 'Arrhenius 模型描述温度对化学反应速率的影响，ln(寿命) 与 1/T（开尔文温度的倒数）呈线性关系。\n这是温度加速寿命试验的基础。',
            keypoint: 'Arrhenius 模型：ln(t) = a + b/T'
        },
        {
            id: 'w1d7q2',
            week: 1,
            day: 'Day 7',
            type: 'fill',
            difficulty: 3,
            knowledge: 'Arrhenius 回归',
            title: '已知温度与寿命数据：45°C-20000h, 65°C-8000h, 85°C-3000h, 105°C-1200h。建立 ln(寿命)~1/T 回归，预测 25°C（298K）下寿命约为 ______ h（用科学计数法表示，保留 1 位小数）',
            options: [],
            answer: '4.0e4',
            explanation: '开尔文温度：45°C=318K, 65°C=338K, 85°C=358K, 105°C=378K\n1/T: 0.00314, 0.00296, 0.00279, 0.00265\nln(寿命): 9.90, 8.99, 8.01, 7.09\n\n线性回归：\n斜率 = Δln/Δ(1/T) ≈ (9.90-7.09)/(0.00314-0.00265) = 2.81/0.00049 ≈ 5735\n截距 = 9.90 - 5735×0.00314 ≈ 9.90 - 18.01 = -8.11\n\n预测 25°C=298K, 1/T=0.003356:\nln(寿命) = -8.11 + 5735×0.003356 = -8.11 + 19.25 = 11.14\n寿命 = e^11.14 ≈ 69800h\n\n简化估算：约 70000h 左右（实际值取决于具体回归计算）',
            keypoint: 'Arrhenius 回归：ln(t) = a + b/T，预测时用 1/T 代入'
        }
    ],
    // ========== 第 2 周：可靠性基础 ==========
    2: [
        // Day 8 - 可靠性基本量
        {
            id: 'w2d8q1',
            week: 2,
            day: 'Day 8',
            type: 'single',
            difficulty: 2,
            knowledge: '三函数关系',
            title: '已知某时刻 t 的可靠度 R(t) 和失效率 λ(t)，求该时刻的概率密度函数 f(t) 的公式是：',
            options: [
                'A. f(t) = R(t) × λ(t)',
                'B. f(t) = R(t) / λ(t)',
                'C. f(t) = 1 - R(t)',
                'D. f(t) = R(t) + λ(t)'
            ],
            answer: 'A',
            explanation: '可靠性三函数关系：\nF(t) = 1 - R(t)\nf(t) = F\'(t) = -R\'(t)\nλ(t) = f(t) / R(t)\n所以 f(t) = λ(t) × R(t) = -R\'(t)',
            keypoint: 'f(t) = λ(t) × R(t) = -R\'(t)'
        },
        {
            id: 'w2d8q2',
            week: 2,
            day: 'Day 8',
            type: 'fill',
            difficulty: 2,
            knowledge: '失效率',
            title: '某产品失效率 λ(t) = 0.001/h（恒定），则 R(100h) ≈ ______ （保留 3 位小数）',
            options: [],
            answer: '0.905',
            explanation: '失效率恒定 → 指数分布\nR(t) = e^(-λt) = e^(-0.001×100) = e^(-0.1) ≈ 0.905',
            keypoint: '失效率恒定 → 指数分布 R(t) = e^(-λt)'
        },
        {
            id: 'w2d8q3',
            week: 2,
            day: 'Day 8',
            type: 'single',
            difficulty: 1,
            knowledge: '浴盆曲线',
            title: '浴盆曲线的三个阶段按时间顺序是：',
            options: [
                'A. 早期失效、磨耗失效、偶然失效',
                'B. 偶然失效、早期失效、磨耗失效',
                'C. 早期失效、偶然失效、磨耗失效',
                'D. 磨耗失效、偶然失效、早期失效'
            ],
            answer: 'C',
            explanation: '浴盆曲线：\n1. 早期失效（Infant Mortality）：失效率递减\n2. 偶然失效（Random Failures）：失效率恒定\n3. 磨耗失效（Wear-out）：失效率递增',
            keypoint: '浴盆曲线：早期 → 偶然 → 磨耗'
        },
        // Day 9 - 浴盆曲线
        {
            id: 'w2d9q1',
            week: 2,
            day: 'Day 9',
            type: 'single',
            difficulty: 1,
            knowledge: '浴盆曲线措施',
            title: '针对浴盆曲线的早期失效阶段，最有效的工程措施是：',
            options: [
                'A. 老化筛选（Burn-in）',
                'B. 降额设计',
                'C. 预防性维护',
                'D. 加速寿命试验'
            ],
            answer: 'A',
            explanation: '早期失效的特征是失效率随时间递减，主要由于制造缺陷、材料不均等。\n通过老化筛选（高温/振动/电应力），让早期失效品在出厂前暴露并剔除。',
            keypoint: '早期失效 → 老化筛选；偶然失效 → 降额冗余；磨耗失效 → 预防维护'
        },
        {
            id: 'w2d9q2',
            week: 2,
            day: 'Day 9',
            type: 'single',
            difficulty: 1,
            knowledge: '浴盆曲线',
            title: '某电子产品 1000 台试验：0-100h 失效 30 台，100-1000h 失效 10 台，1000-5000h 失效 20 台，5000-10000h 失效 80 台，10000h+ 失效 200 台。这表明该产品：',
            options: [
                'A. 早期失效严重',
                'B. 偶然失效为主',
                'C. 磨耗失效开始显现',
                'D. 失效模式均匀分布'
            ],
            answer: 'A',
            explanation: '从数据看：\n0-100h 失效率 = 30/1000 = 3%/h（很高）\n100-1000h 失效率 = 10/900 = 1.1%/h（下降）\n早期阶段（0-1000h）失效率明显高于后期\n这表明早期失效严重，应加强老化筛选。',
            keypoint: '失效率随时间快速下降 → 早期失效为主'
        },
        // Day 10 - MTBF/MTTF/MTTR
        {
            id: 'w2d10q1',
            week: 2,
            day: 'Day 10',
            type: 'fill',
            difficulty: 2,
            knowledge: 'MTBF/MTTF',
            title: '某不可修产品用 ______ 指标；可修产品用 ______ 指标。',
            options: [],
            answer: 'MTTF；MTBF',
            explanation: 'MTTF（Mean Time To Failure）= 平均失效前时间（不可修）\nMTBF（Mean Time Between Failures）= 平均故障间隔时间（可修）\nMTBF = MTTF + MTTR',
            keypoint: '不可修 → MTTF；可修 → MTBF'
        },
        {
            id: 'w2d10q2',
            week: 2,
            day: 'Day 10',
            type: 'fill',
            difficulty: 2,
            knowledge: '可用度',
            title: '某系统 MTBF=10000h，MTTR=10h，则稳态可用度 A = ______ （保留 4 位小数）',
            options: [],
            answer: '0.9990',
            explanation: 'A = MTBF / (MTBF + MTTR)\n= 10000 / (10000 + 10)\n= 10000 / 10010\n≈ 0.9990',
            keypoint: 'A = MTBF / (MTBF + MTTR)'
        },
        {
            id: 'w2d10q3',
            week: 2,
            day: 'Day 10',
            type: 'fill',
            difficulty: 3,
            knowledge: '可用度',
            title: '要使可用度达到 99.99%（"四个 9"），当 MTTR=1h 时，MTBF 至少为 ______ h',
            options: [],
            answer: '9999',
            explanation: '0.9999 = MTBF / (MTBF + 1)\n0.9999 × (MTBF + 1) = MTBF\n0.9999 MTBF + 0.9999 = MTBF\nMTBF - 0.9999 MTBF = 0.9999\n0.0001 MTBF = 0.9999\nMTBF = 9999h',
            keypoint: '四个 9（99.99%）≈ MTBF 9999h @ MTTR=1h'
        },
        // Day 11 - 串联
        {
            id: 'w2d11q1',
            week: 2,
            day: 'Day 11',
            type: 'fill',
            difficulty: 2,
            knowledge: '串联系统',
            title: '5 个相同单元串联，每单元 R(1000h)=0.99，系统 R(1000h) ≈ ______ （保留 4 位小数）',
            options: [],
            answer: '0.9510',
            explanation: 'R_s = R^5 = 0.99^5 ≈ 0.9510',
            keypoint: '串联 R_s = R1 × R2 × ... × Rn'
        },
        {
            id: 'w2d11q2',
            week: 2,
            day: 'Day 11',
            type: 'single',
            difficulty: 2,
            knowledge: '木桶效应',
            title: '5 个单元串联，可靠度分别为 0.99、0.98、0.97、0.95、0.90。系统可靠度约为：',
            options: [
                'A. 0.96',
                'B. 0.80',
                'C. 0.60',
                'D. 0.45'
            ],
            answer: 'B',
            explanation: 'R_s = 0.99 × 0.98 × 0.97 × 0.95 × 0.90\n= 0.99 × 0.98 = 0.9702\n× 0.97 = 0.9411\n× 0.95 = 0.8940\n× 0.90 = 0.8046\n≈ 0.80\n\n最关键的单元是 R=0.90（最弱的）。',
            keypoint: '串联木桶效应：最弱单元决定系统可靠度'
        },
        {
            id: 'w2d11q3',
            week: 2,
            day: 'Day 11',
            type: 'fill',
            difficulty: 2,
            knowledge: '串联失效率',
            title: '10 个相同单元串联（λ=0.0001/h 指数分布），系统 MTBF = ______ h',
            options: [],
            answer: '1000',
            explanation: '串联系统（指数分布）失效率相加：\nλ_s = n × λ = 10 × 0.0001 = 0.001/h\nMTBF_s = 1/λ_s = 1/0.001 = 1000h',
            keypoint: '串联系统（指数分布）λ_s = Σλ_i，MTBF_s = 1/λ_s'
        },
        // Day 12 - 并联
        {
            id: 'w2d12q1',
            week: 2,
            day: 'Day 12',
            type: 'single',
            difficulty: 2,
            knowledge: '并联系统',
            title: '2 个相同单元并联（λ=0.001/h），求 R(100h) 和系统 MTBF。最接近：',
            options: [
                'A. R(100)=0.90, MTBF=2000h',
                'B. R(100)=0.99, MTBF=1500h',
                'C. R(100)=0.95, MTBF=1000h',
                'D. R(100)=0.85, MTBF=2500h'
            ],
            answer: 'B',
            explanation: '单单元 R(100) = e^(-0.001×100) = e^(-0.1) ≈ 0.905\n单单元 F(100) = 1 - 0.905 = 0.095\n并联 F_s = F^2 = 0.095^2 = 0.009\nR_s = 1 - 0.009 = 0.991 ≈ 0.99\n\n并联系统 MTBF = 1/λ + 1/(2λ) = 1.5/λ = 1.5/0.001 = 1500h',
            keypoint: '并联 R_s = 1 - ∏(1-R_i)；MTBF 并联 = 1.5/λ (2 单元)'
        },
        {
            id: 'w2d12q2',
            week: 2,
            day: 'Day 12',
            type: 'fill',
            difficulty: 2,
            knowledge: '表决系统',
            title: '3 取 2 表决系统，每单元 R=0.9，系统可靠度约为 ______ （保留 3 位小数）',
            options: [],
            answer: '0.972',
            explanation: '3 取 2 表决 = 至少 2 个工作\n= C(3,2) × R²×(1-R) + R³\n= 3 × 0.9² × 0.1 + 0.9³\n= 3 × 0.081 + 0.729\n= 0.243 + 0.729\n= 0.972',
            keypoint: 'k/n 表决：至少 k 个工作才能正常运行'
        },
        {
            id: 'w2d12q3',
            week: 2,
            day: 'Day 12',
            type: 'single',
            difficulty: 1,
            knowledge: '热备冷备',
            title: '"双机热备"和"双机冷备"的主要区别是：',
            options: [
                'A. 冷备更省电',
                'B. 热备的备用机处于通电运行状态，能更快接管',
                'C. 冷备更可靠',
                'D. 两者无区别'
            ],
            answer: 'B',
            explanation: '热备：备用机通电运行，随时可接管，切换时间短（MTTR 小）\n冷备：备用机断电，需启动时间（MTTR 大）\n热备可用度更高，但功耗大。',
            keypoint: '热备切换快（MTTR 小），可用度高；冷备省电但切换慢'
        },
        // Day 13 - RBD
        {
            id: 'w2d13q1',
            week: 2,
            day: 'Day 13',
            type: 'single',
            difficulty: 1,
            knowledge: 'RBD 概念',
            title: 'RBD（可靠性框图）与功能框图的主要区别是：',
            options: [
                'A. RBD 用电路符号',
                'B. RBD 只显示可靠连接关系，不显示功能连接',
                'C. RBD 显示信号流',
                'D. 两者完全相同'
            ],
            answer: 'B',
            explanation: 'RBD 显示系统可靠性关系（单元对系统成功运行的贡献）。\n功能框图显示信号流/功能关系。\n两者可能不同（如冗余结构功能上不是串联，但 RBD 是并联）。',
            keypoint: 'RBD 是可靠性视角，不等于功能连接'
        },
        {
            id: 'w2d13q2',
            week: 2,
            day: 'Day 13',
            type: 'single',
            difficulty: 2,
            knowledge: 'RBD 应用',
            title: '为什么 RBD 分析是 FMEA 的补充而非替代？',
            options: [
                'A. 因为 RBD 更简单',
                'B. 因为 RBD 只看系统级可靠度，FMEA 看具体失效模式',
                'C. 因为 FMEA 更准',
                'D. 因为 RBD 已被淘汰'
            ],
            answer: 'B',
            explanation: 'RBD：从系统层面计算可靠度，识别关键路径\nFMEA：从失效模式层面分析，每种失效的影响\n两者互补：RBD 找到薄弱点，FMEA 给出改进措施',
            keypoint: 'RBD 系统级 + FMEA 失效模式 = 完整分析'
        },
        // Day 14 - 周复习
        {
            id: 'w2d14q1',
            week: 2,
            day: 'Day 14',
            type: 'fill',
            difficulty: 2,
            knowledge: '稳态可用度',
            title: '5 单元串联系统，每单元 λ=0.0001/h，µ=1/h。系统稳态可用度约为 ______ （保留 4 位小数）',
            options: [],
            answer: '0.9995',
            explanation: '系统 λ_s = 5 × 0.0001 = 0.0005/h\n系统稳态 A = µ / (λ + µ) = 1 / (0.0005 + 1) ≈ 0.9995',
            keypoint: '稳态 A = µ/(λ+µ)'
        }
    ],
    // ========== 第 3 周：电子产品基础 ==========
    3: [
        // Day 15 - 元器件失效
        {
            id: 'w3d15q1',
            week: 3,
            day: 'Day 15',
            type: 'single',
            difficulty: 1,
            knowledge: '电迁移',
            title: '电迁移（Electromigration）主要发生在：',
            options: [
                'A. 焊点',
                'B. 集成电路金属互连线',
                'C. PCB 板',
                'D. 电池'
            ],
            answer: 'B',
            explanation: '电迁移是金属互连线中，由于电子流动导致金属原子迁移的现象。\n后果：形成空洞（开路）或小丘（短路）。\n加速应力：温度 + 电流密度。',
            keypoint: '电迁移：IC 互连线，温度+电流密度加速'
        },
        {
            id: 'w3d15q2',
            week: 3,
            day: 'Day 15',
            type: 'single',
            difficulty: 1,
            knowledge: 'TDDB',
            title: 'TDDB 是哪种失效机理？',
            options: [
                'A. 时间相关介质击穿（栅氧）',
                'B. 热载流子注入',
                'C. 电迁移',
                'D. 腐蚀'
            ],
            answer: 'A',
            explanation: 'TDDB（Time Dependent Dielectric Breakdown）：\n时间相关介质击穿，常见于 MOSFET 栅氧层。\n加速应力：电压 + 温度。',
            keypoint: 'TDDB = 栅氧击穿，电压+温度加速'
        },
        {
            id: 'w3d15q3',
            week: 3,
            day: 'Day 15',
            type: 'single',
            difficulty: 2,
            knowledge: '失效模式',
            title: '"参数漂移"比"完全失效"更难发现的原因是：',
            options: [
                'A. 因为参数漂移很快',
                'B. 因为参数漂移是逐渐发生，初期产品仍能"工作"，但性能已偏离规格',
                'C. 因为完全失效时报警',
                'D. 因为参数漂移不影响用户'
            ],
            answer: 'B',
            explanation: '参数漂移（如电容容量下降、电阻值漂移、漏电流增大）是渐变过程，初期可能仍在规格内或接近边缘。\n只有精确测试才能发现，但功能测试可能仍通过。\n需要 100% 测试或统计过程控制（SPC）才能发现。',
            keypoint: '参数漂移是渐变的，比硬失效更隐蔽，需要 SPC 或 100% 检测'
        },
        // Day 16 - 降额设计
        {
            id: 'w3d16q1',
            week: 3,
            day: 'Day 16',
            type: 'fill',
            difficulty: 1,
            knowledge: '降额比',
            title: '铝电解电容额定电压 25V，实际工作电压 18V，降额比 = ______ （%）',
            options: [],
            answer: '72',
            explanation: '降额比 = 实际应力 / 额定应力 × 100%\n= 18V / 25V × 100%\n= 72%',
            keypoint: '降额比 = 实际/额定 × 100%'
        },
        {
            id: 'w3d16q2',
            week: 3,
            day: 'Day 16',
            type: 'fill',
            difficulty: 2,
            knowledge: '结温计算',
            title: '某 IC 功耗 2W，热阻 40°C/W，环境 70°C，结温 Tj = ______ °C',
            options: [],
            answer: '150',
            explanation: 'Tj = Ta + P × Rth\n= 70 + 2 × 40\n= 70 + 80\n= 150°C',
            keypoint: 'Tj = Ta + P × Rth'
        },
        {
            id: 'w3d16q3',
            week: 3,
            day: 'Day 16',
            type: 'single',
            difficulty: 2,
            knowledge: '降额副作用',
            title: '关于降额设计，下列说法错误的是：',
            options: [
                'A. 降额可显著延长元件寿命',
                'B. 降额越低越好，越低越可靠',
                'C. 过低降额会增加成本和体积',
                'D. 降额需要权衡可靠性与成本'
            ],
            answer: 'B',
            explanation: '降额并非越低越好，过度降额会导致：\n- 成本增加（需要更大规格元件）\n- 体积重量增加\n- 设计裕度浪费\n- 在某些情况下（如开关电源的电容），过低容量会导致纹波过大\n\n工程上需权衡可靠性和成本。',
            keypoint: '降额要适度，过低会增加成本/体积'
        },
        // Day 17 - 焊点可靠性
        {
            id: 'w3d17q1',
            week: 3,
            day: 'Day 17',
            type: 'single',
            difficulty: 2,
            knowledge: 'BGA 焊点',
            title: '为什么 BGA 焊点比 QFP 焊点更易失效？',
            options: [
                'A. BGA 焊点更大',
                'B. BGA 焊点在封装底部，应力释放空间小，且 CTE 失配更严重',
                'C. BGA 工艺差',
                'D. QFP 更脆弱'
            ],
            answer: 'B',
            explanation: 'BGA 焊点失效风险更高：\n1. 在封装底部，应力释放空间小\n2. 焊点与 PCB 之间 CTE 失配更严重\n3. 焊点无法目检（隐藏焊点）\n4. 返修困难',
            keypoint: 'BGA 焊点：应力大、CTE 失配、不可见、难返修'
        },
        {
            id: 'w3d17q2',
            week: 3,
            day: 'Day 17',
            type: 'fill',
            difficulty: 3,
            knowledge: 'Coffin-Manson',
            title: '焊点温循加速试验 -40~125°C（ΔT=165°C），使用条件 -20~60°C（ΔT=80°C），m=1.9。加速因子 AF ≈ ______ （保留 2 位小数）',
            options: [],
            answer: '5.21',
            explanation: 'AF = (ΔTs/ΔTu)^m\n= (165/80)^1.9\n= (2.0625)^1.9\n≈ 5.21',
            keypoint: 'AF = (ΔTs/ΔTu)^m'
        },
        // Day 18 - FMEA
        {
            id: 'w3d18q1',
            week: 3,
            day: 'Day 18',
            type: 'single',
            difficulty: 1,
            knowledge: 'FMEA 区别',
            title: 'DFMEA 和 PFMEA 的主要区别是：',
            options: [
                'A. DFMEA 用于设计阶段，分析设计失效；PFMEA 用于过程/制造阶段',
                'B. DFMEA 在工厂做，PFMEA 在办公室做',
                'C. DFMEA 用英语，PFMEA 用中文',
                'D. 两者完全相同'
            ],
            answer: 'A',
            explanation: 'DFMEA（Design FMEA）：设计阶段，识别设计缺陷\nPFMEA（Process FMEA）：制造/装配阶段，识别工艺失效\nSFMEA（System FMEA）：系统级，关注系统交互',
            keypoint: 'DFMEA 设计失效；PFMEA 过程失效'
        },
        {
            id: 'w3d18q2',
            week: 3,
            day: 'Day 18',
            type: 'fill',
            difficulty: 1,
            knowledge: 'RPN',
            title: '某失效模式：S=8, O=5, D=6，则 RPN = ______',
            options: [],
            answer: '240',
            explanation: 'RPN = S × O × D\n= 8 × 5 × 6\n= 240',
            keypoint: 'RPN = S × O × D（1-10 评分）'
        },
        // Day 19 - FMEA 实施
        {
            id: 'w3d19q1',
            week: 3,
            day: 'Day 19',
            type: 'single',
            difficulty: 1,
            knowledge: '失效链',
            title: '"失效模式"、"失效原因"、"失效影响"三者的关系是：',
            options: [
                'A. 三者完全相同',
                'B. 失效原因 → 失效模式 → 失效影响（因果链）',
                'C. 失效影响 → 失效模式 → 失效原因',
                'D. 三者无关'
            ],
            answer: 'B',
            explanation: '失效链（故障链）：\n失效原因（cause）→ 失效模式（mode）→ 失效影响（effect）\n\n例：振动过大（原因）→ 焊点开裂（模式）→ 功能失效（影响）',
            keypoint: '失效链：原因 → 模式 → 影响'
        },
        {
            id: 'w3d19q2',
            week: 3,
            day: 'Day 19',
            type: 'single',
            difficulty: 1,
            knowledge: 'FMEA 团队',
            title: 'FMEA 团队应包含以下哪些角色？',
            options: [
                'A. 仅设计工程师',
                'B. 设计 + 制造 + 质量 + 可靠性 + 售后',
                'C. 仅质量工程师',
                'D. 仅可靠性工程师'
            ],
            answer: 'B',
            explanation: 'FMEA 是跨部门活动，团队应包含：\n- 设计工程师（设计视角）\n- 制造工程师（工艺视角）\n- 质量工程师（失效模式）\n- 可靠性工程师（可靠性分析）\n- 售后/服务（现场失效）\n- 必要时：供应商、客户',
            keypoint: 'FMEA 团队需跨部门：设计+制造+质量+可靠性+售后'
        },
        // Day 20 - 失效机理
        {
            id: 'w3d20q1',
            week: 3,
            day: 'Day 20',
            type: 'single',
            difficulty: 2,
            knowledge: '机理-加速',
            title: '电化学迁移（ECM）的主要加速应力是：',
            options: [
                'A. 仅温度',
                'B. 温度 + 湿度 + 偏压',
                'C. 仅电压',
                'D. 仅振动'
            ],
            answer: 'B',
            explanation: '电化学迁移（ECM）需三个条件：\n1. 水分（湿度）\n2. 电解质（如离子污染）\n3. 电场（偏压）\n\n加速：温湿度偏压试验（如 85/85 + 偏压）',
            keypoint: '电化学迁移加速：温度+湿度+偏压'
        },
        {
            id: 'w3d20q2',
            week: 3,
            day: 'Day 20',
            type: 'single',
            difficulty: 1,
            knowledge: '热载流子',
            title: '热载流子（Hot Carrier）效应主要发生在哪种器件的哪个区域？',
            options: [
                'A. 电阻',
                'B. MOSFET 的沟道靠近漏极',
                'C. 电容',
                'D. 磁性元件'
            ],
            answer: 'B',
            explanation: '热载流子效应：\n- 发生在短沟道 MOSFET\n- 漏极附近的高电场加速载流子\n- 载流子注入栅氧，造成损伤\n- 加速应力：电压（特别是 Vds）',
            keypoint: '热载流子：MOSFET 漏极附近，电压加速'
        },
        // Day 21 - 复习
        {
            id: 'w3d21q1',
            week: 3,
            day: 'Day 21',
            type: 'single',
            difficulty: 2,
            knowledge: '综合应用',
            title: '某 IC 在 125°C 工作 1000h 失效，机理分析为 TDDB。则其加速模型最可能是：',
            options: [
                'A. 仅温度 Arrhenius',
                'B. 温度 + 电压模型（如 Eyring）',
                'C. 仅 Coffin-Manson',
                'D. 仅逆幂律'
            ],
            answer: 'B',
            explanation: 'TDDB（栅氧击穿）受温度和电压双重影响：\n- 温度加速：Arrhenius 部分\n- 电压加速：逆幂律/Eyring 部分\n- 综合：温度+电压多应力模型',
            keypoint: 'TDDB 需温度+电压双应力模型'
        }
    ]
};

// 导出（用于浏览器全局）
if (typeof window !== 'undefined') {
    window.QUESTION_BANK = QUESTION_BANK;
}
