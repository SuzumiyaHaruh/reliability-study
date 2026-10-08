// ========== 高级公式补充（30 个） ==========

const FORMULAS_ADVANCED = [
    // ===== 高级加速模型 =====
    {
        id: 'f41',
        category: '高级加速',
        name: 'Black 方程（电迁移）',
        formula: 'MTTF = A / Jⁿ × exp(Ea/kT)',
        meaning: '电流密度大+温度高=互连线快断',
        example: '互连线宽 1μm，流过 1mA 电流，电流密度 10⁶ A/cm²。高温下电迁移显著。',
        application: 'IC 金属互连线可靠性；A 是常数，n=1-2，Ea=0.6-0.9 eV。',
        tags: ['电迁移', '半导体']
    },
    {
        id: 'f42',
        category: '高级加速',
        name: 'Eyring 模型',
        formula: 'AF = exp[(Ea/k)(1/Tu-1/Ts)] × exp[γ(Vs-Vu)]',
        meaning: '温度+电压双应力——更真实的加速',
        example: '绝缘击穿试验：温度+电压同时升高，AF 可达数百。',
        application: '介质击穿、绝缘老化、半导体 TDDB。',
        tags: ['Eyring', '多应力']
    },
    {
        id: 'f43',
        category: '高级加速',
        name: 'Norris-Landzberg 完整版',
        formula: 'AF = (ΔTs/ΔTu)^m × (fu/fs)^n',
        meaning: '温差+频率——焊点寿命更准',
        example: 'BGA 焊点 ΔT=100°C，频率 6 次/天，AF 包括频率修正。',
        application: 'SAC 焊点温循加速；n≈1/3。',
        tags: ['焊点', '温循']
    },
    {
        id: 'f44',
        category: '高级加速',
        name: 'Peck 模型完整版',
        formula: 'AF = exp[(Ea/k)(1/Tu-1/Ts)] × (RHs/RHu)^n',
        meaning: '温湿双应力——腐蚀加速',
        example: '85/85 试验 1000h，Ea=0.8eV，n=3，可推 40/60 数月。',
        application: '半导体腐蚀、离子迁移、PCB 分层。',
        tags: ['温湿', 'Peck']
    },
    {
        id: 'f45',
        category: '高级加速',
        name: 'Coffin-Manson 低周疲劳',
        formula: 'Nf = C × (Δε)^(-m) × exp(Ea/kT)',
        meaning: '应变+温度——焊点全寿命模型',
        example: 'SAC305 焊点 Coffin-Manson 拟合，C=10⁴，m=1.9，Ea=0.5eV。',
        application: '焊点寿命精确预测、连接器寿命。',
        tags: ['焊点', '疲劳']
    },

    // ===== 高级统计 =====
    {
        id: 'f46',
        category: '高级统计',
        name: 'MLE 似然函数',
        formula: 'L(θ|data) = ∏f(tᵢ;θ) × ∏S(cⱼ;θ)',
        meaning: '让现有数据出现概率最大的参数',
        example: '已知 5 个失效 + 3 个删失，求威布尔参数使似然最大。',
        application: '删失数据处理、标准 MLE 估计。',
        tags: ['MLE', '删失']
    },
    {
        id: 'f47',
        category: '高级统计',
        name: '对数似然',
        formula: 'ln L = Σln f(tᵢ;θ) + Σln S(cⱼ;θ)',
        meaning: 'MLE 简化计算——把乘变加',
        example: '对 5 个失效 + 3 个删失的对数似然求最大值。',
        application: '数值求解、Newton-Raphson。',
        tags: ['MLE', '数值']
    },
    {
        id: 'f48',
        category: '高级统计',
        name: 'Fisher 信息',
        formula: 'I(θ) = -E[∂²ln L/∂θ²]',
        meaning: '数据的"信息量"——决定参数估计精度',
        example: 'Fisher 信息大 → 参数估计精确。',
        application: '置信区间、试验设计优化。',
        tags: ['统计', '估计']
    },
    {
        id: 'f49',
        category: '高级统计',
        name: 'NHPP 模型（Goel-Okumoto）',
        formula: 'm(t) = a × (1 - exp(-b×t))',
        meaning: '累计失效数随时间趋于饱和',
        example: '软件测试 1000h，最终发现 500 个 bug，已发现 480。',
        application: '软件可靠性、缺陷发现过程。',
        tags: ['软件', 'NHPP']
    },
    {
        id: 'f50',
        category: '高级统计',
        name: 'Musa 基本执行时间',
        formula: 'τ = T / (N₀ - N(t))',
        meaning: '每个程序执行的平均时间',
        example: '测试 100 小时，发现 50 个 bug，初始预估 1000 个。',
        application: 'Musa 软件可靠性模型。',
        tags: ['软件', 'Musa']
    },

    // ===== 系统可靠性 =====
    {
        id: 'f51',
        category: '高级系统',
        name: 'Markov 稳态可用度',
        formula: 'A = μ / (λ + μ)',
        meaning: '长期工作中可用的比例',
        example: 'λ=0.001/h，μ=1/h，A=99.9%。',
        application: '可修系统长期评估。',
        tags: ['Markov', '可用度']
    },
    {
        id: 'f52',
        category: '高级系统',
        name: 'k/n 表决',
        formula: 'R = ΣC(n,i) × Rⁱ × (1-R)^(n-i)，i=k..n',
        meaning: 'n 中至少 k 个工作',
        example: '2/3 表决，每个 R=0.9，系统 R=0.972。',
        application: '容错系统、TMR。',
        tags: ['表决', '冗余']
    },
    {
        id: 'f53',
        category: '高级系统',
        name: 'β 因子模型（CCF）',
        formula: 'λ_CCF = β × λ，β∈[0,1]',
        meaning: '共因失效的占比——修正独立假设',
        example: 'β=0.1 表示 10% 失效是共因。',
        application: '修正串联系统高估的可靠度。',
        tags: ['CCF', '相依']
    },
    {
        id: 'f54',
        category: '高级系统',
        name: 'Markov 转移率矩阵',
        formula: 'P(t) = P(0) × e^(Qt)',
        meaning: '状态概率按矩阵指数演化',
        example: '2 状态工作-失效 Q 矩阵。',
        application: '复杂系统动态分析。',
        tags: ['Markov', '矩阵']
    },
    {
        id: 'f55',
        category: '高级系统',
        name: '桥式网络可靠度',
        formula: 'P(C)·R₁ + (1-P(C))·R₂（条件概率法）',
        meaning: '按某单元工作/失效分情况',
        example: '5 元件桥式网络，分 C 工作/失效两种情况。',
        application: '复杂网络 RBD 分析。',
        tags: ['桥式', 'RBD']
    },

    // ===== 失效物理 =====
    {
        id: 'f56',
        category: '失效物理',
        name: '电迁移失效时间',
        formula: 'MTTF = A × J^(-n) × exp(Ea/kT)',
        meaning: '电流密度越大、温度越高，互连线寿命越短',
        example: 'J=10⁶ A/cm²，T=125°C，MTTF≈10⁵h。',
        application: 'IC 互连可靠性设计。',
        tags: ['EM', 'IC']
    },
    {
        id: 'f57',
        category: '失效物理',
        name: 'TDDB 寿命模型',
        formula: 't_BD = A × exp(-γV) × exp(Ea/kT)',
        meaning: '栅氧寿命随电压/温度指数下降',
        example: 'V=5V，T=125°C，t_BD≈10 年。',
        application: 'MOS 栅氧可靠性。',
        tags: ['TDDB', '栅氧']
    },
    {
        id: 'f58',
        category: '失效物理',
        name: 'NBTI 退化',
        formula: 'ΔVth = A × exp(Ea/kT) × t^n',
        meaning: 'PMOS 阈值漂移随时间累积',
        example: '1000h 后 ΔVth≈50mV。',
        application: 'PMOS 长期可靠性。',
        tags: ['NBTI', 'PMOS']
    },
    {
        id: 'f59',
        category: '失效物理',
        name: 'IMC 生长',
        formula: 'x(t) = x₀ + √(D×t)，D = D₀exp(-Q/RT)',
        meaning: '焊点金属间化合物随时间生长',
        example: 'SAC/Cu 界面 1000h 后 IMC 厚度 ≈ 5μm。',
        application: '焊点长期可靠性。',
        tags: ['IMC', '焊点']
    },
    {
        id: 'f60',
        category: '失效物理',
        name: 'Arrhenius 老化',
        formula: 'P = P₀ × exp(-Ea/RT) × t',
        meaning: '材料老化与温度/时间关系',
        example: '聚合物 100°C 老化速度是 50°C 的 4 倍。',
        application: '材料寿命预测。',
        tags: ['老化', '材料']
    },

    // ===== 鉴定与测试 =====
    {
        id: 'f61',
        category: '鉴定试验',
        name: '0 失败方案样本量',
        formula: 'n = ln(1-C) / ln(1-p)',
        meaning: '要证明失效率≤p，需要多少样品都不坏',
        example: '95% 置信度，p=5%，n=59。',
        application: '成功率验证、接收方案。',
        tags: ['抽样', '接收']
    },
    {
        id: 'f62',
        category: '鉴定试验',
        name: 'OC 曲线接收概率',
        formula: 'Pa = C(n,x) × p^x × (1-p)^(n-x) 之和',
        meaning: '真实失效率为 p 时的接收概率',
        example: 'n=30，c=0，p=0.05，Pa=0.21。',
        application: '评估抽样方案。',
        tags: ['OC', '抽样']
    },
    {
        id: 'f63',
        category: '鉴定试验',
        name: 'β 风险（消费者风险）',
        formula: 'β = P(接受 | 产品不合格)',
        meaning: '不合格品被误收的概率',
        example: 'β=0.10 表示 10% 不合格品被接收。',
        application: '权衡方案风险。',
        tags: ['风险', '消费者']
    },
    {
        id: 'f64',
        category: '鉴定试验',
        name: 'α 风险（生产者风险）',
        formula: 'α = P(拒收 | 产品合格)',
        meaning: '合格品被误拒的概率',
        example: 'α=0.05 表示 5% 合格品被拒收。',
        application: '权衡方案风险。',
        tags: ['风险', '生产者']
    },

    // ===== 维修性测试性 =====
    {
        id: 'f65',
        category: '测试性',
        name: '故障检测率 FDR',
        formula: 'FDR = 检测到的故障数 / 总故障数 × 100%',
        meaning: 'BIT 能发现多少比例的故障',
        example: '100 个潜在故障，BIT 发现 95 个，FDR=95%。',
        application: '测试性指标。',
        tags: ['FDR', 'BIT']
    },
    {
        id: 'f66',
        category: '测试性',
        name: '故障隔离率 FIR',
        formula: 'FIR = 隔离到 1 个 LRU 数 / 总故障数 × 100%',
        meaning: 'BIT 能定位到 1 个可更换单元的比例',
        example: '100 个故障，90 个隔离到 1 个 LRU，FIR=90%。',
        application: '测试性指标。',
        tags: ['FIR', 'BIT']
    },
    {
        id: 'f67',
        category: '测试性',
        name: '虚警率 FAR',
        formula: 'FAR = 虚警次数 / 总报警次数 × 100%',
        meaning: '误报占比——越低越好',
        example: '1000 次报警，50 次是误报，FAR=5%。',
        application: 'BIT 设计质量。',
        tags: ['FAR', 'BIT']
    },
    {
        id: 'f68',
        category: '测试性',
        name: 'MTTR 估算',
        formula: 'MTTR = MLDT + MTTI + MTTT + MRT',
        meaning: '平均修复时间 = 多个子过程之和',
        example: '故障定位 30min + 拆装 60min + 测试 30min + 等待 20min。',
        application: '维修性指标分解。',
        tags: ['MTTR', '维修性']
    },

    // ===== 软件可靠性 =====
    {
        id: 'f69',
        category: '软件可靠性',
        name: 'Musa 模型',
        formula: 'λ(t) = λ₀ × exp(-θt)',
        meaning: '软件失效强度指数衰减',
        example: '初始 λ₀=0.01/h，θ=0.001/h，1000h 后 λ≈0.0001/h。',
        application: '软件可靠性建模。',
        tags: ['Musa', '软件']
    },
    {
        id: 'f70',
        category: '软件可靠性',
        name: 'S 曲线模型',
        formula: 'R(t) = 1 - exp(-(t/T)^β)',
        meaning: '类似威布尔——软件成熟度增长',
        example: 'T=5000h，β=0.8，5000h 时 R=63.2%。',
        application: '嵌入式软件可靠性。',
        tags: ['软件', 'S曲线']
    }
];

// 合并到 FORMULAS
if (typeof FORMULAS !== 'undefined' && typeof window !== 'undefined') {
    FORMULAS.push(...FORMULAS_ADVANCED);
    window.FORMULAS = FORMULAS;
}
