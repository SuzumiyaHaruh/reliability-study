// ========== 公式通俗理解大全 ==========

const FORMULAS = [
    // ===== 一、概率统计 =====
    {
        id: 'f01',
        category: '概率统计',
        name: '条件概率',
        formula: 'P(A|B) = P(AB) / P(B)',
        meaning: '在 B 已经发生的前提下，A 发生的概率',
        example: '盒子里 5 个球（3 红 2 蓝）。已知摸出的是红球，再摸一个还是红球的概率？答：2/4 = 1/2。',
        application: '可靠性应用：已知设备已用 5000h，再工作 1000h 的可靠度——就是条件概率。',
        tags: ['概率', '基础']
    },
    {
        id: 'f02',
        category: '概率统计',
        name: '贝叶斯公式',
        formula: 'P(A|B) = P(B|A)P(A) / P(B)',
        meaning: '由结果反推原因——已知结果，推算哪个原因最可能',
        example: '工厂 A 车间生产 60%（良品率 98%），B 车间 40%（良品率 97%）。抽到一个不良品，来自 B 车间的概率？用贝叶斯算出约 50%。',
        application: '设备失效反推最可能部件；试验失败反推设计缺陷。',
        tags: ['概率', '反推']
    },
    {
        id: 'f03',
        category: '概率统计',
        name: '密度函数与累计分布',
        formula: 'F(x) = ∫f(t)dt',
        meaning: 'F 是 f 的"累积"——累计多少',
        example: 'f(x) 像是水流速（瞬时流速），F(x) 像是累计水量（从开始到现在的总水）。',
        application: '失效率 λ(t) 是瞬时坏掉的强度，F(t) 是到 t 时总共坏了多少。',
        tags: ['分布', '积分']
    },
    {
        id: 'f04',
        category: '概率统计',
        name: '均值与方差',
        formula: 'E(X) = ∫x·f(x)dx，D(X) = E[(X-μ)²]',
        meaning: '均值 = 平均水平；方差 = 分散程度',
        example: '班里数学平均 80 分（均值）。有的班 60-100 分（方差大），有的班 75-85 分（方差小）。',
        application: '电容平均寿命 5000h（均值），有的 3000h 有的 8000h（方差大）。一致性好的产品更可靠。',
        tags: ['统计', '基础']
    },
    {
        id: 'f05',
        category: '概率统计',
        name: '正态分布 3σ 准则',
        formula: 'P(|X-μ|≤σ) = 68.3%；P(|X-μ|≤2σ) = 95.4%；P(|X-μ|≤3σ) = 99.7%',
        meaning: '大多数数据在平均值附近',
        example: '身高平均 170cm。大部分人 167-173（1σ 内），几乎所有人 160-180（2σ 内）。',
        application: '6σ 设计 = 99.99966% 良率（1.5σ 偏移后 3.4 ppm 缺陷）。',
        tags: ['正态', '统计']
    },
    {
        id: 'f06',
        category: '概率统计',
        name: '对数正态分布',
        formula: 'ln(T) ~ N(μ, σ²)',
        meaning: '对寿命取对数后是正态分布；右偏（长尾）',
        example: '钢材腐蚀深度、细菌繁殖量——大部分集中在某值附近，但少数特别大。',
        application: '腐蚀、扩散、蠕变、半导体寿命等累积型失效。',
        tags: ['分布', '寿命']
    },
    {
        id: 'f07',
        category: '概率统计',
        name: '95% 置信区间',
        formula: 'x̄ ± t(α/2, n-1) × s/√n',
        meaning: '我对真实值有 95% 把握说它在某个范围',
        example: '测 10 个电池平均 5000h。我说真实寿命 4500-5500h 之间，这句话 95% 可能是对的。',
        application: '频率解释：重复 100 次试验，约 95 次的区间包含真值。不是单次概率。',
        tags: ['统计', '区间估计']
    },
    {
        id: 'f08',
        category: '概率统计',
        name: 'P 值',
        formula: 'P < 0.05 通常认为显著',
        meaning: '在 H0（无效假设）成立时，观察到当前数据的概率',
        example: 'P=0.03：如果原假设为真，只有 3% 概率看到这样的数据。所以拒绝 H0。',
        application: '假设检验：判断差异是否显著；越小越拒绝 H0。',
        tags: ['检验', '显著性']
    },

    // ===== 二、可靠性分布 =====
    {
        id: 'f09',
        category: '可靠性分布',
        name: '指数分布',
        formula: 'R(t) = e^(-λt)，MTBF = 1/λ',
        meaning: '失效率恒定——什么时候坏完全看运气',
        example: '手机用了 3 年没坏，再坏不坏跟用了多久无关，只看运气（无记忆性）。',
        application: '电子产品偶然失效期；失效率恒定的器件。',
        tags: ['指数', '寿命']
    },
    {
        id: 'f10',
        category: '可靠性分布',
        name: '威布尔分布',
        formula: 'R(t) = e^(-(t/η)^β)',
        meaning: '指数分布的"升级版"——失效率可以是变化的',
        example: 'β<1：刚买来容易坏（早期失效）；β=1：失效率恒定（偶然）；β>1：用越久越易坏（磨耗）。',
        application: '机械零件（轴承、齿轮）；任何需要描述失效率变化的产品。最常用。',
        tags: ['威布尔', '核心']
    },
    {
        id: 'f11',
        category: '可靠性分布',
        name: '特征寿命 η',
        formula: 'B63.2 = η',
        meaning: '63.2% 的产品在这个时间之前坏掉——"典型寿命"',
        example: 'η=5000h 表示 5000h 内坏了 63.2%，剩 36.8% 还在工作。',
        application: 'B10 = η × (-ln(0.9))^(1/β)，B50 = η × (ln2)^(1/β)。',
        tags: ['威布尔', '参数']
    },
    {
        id: 'f12',
        category: '可靠性分布',
        name: '指数分布无记忆性',
        formula: 'P(T>s+t | T>s) = P(T>t)',
        meaning: '过去的失效历史不影响未来',
        example: '已用 5000h 再工作 5000h 的可靠度 = 新产品工作 5000h 的可靠度。',
        application: '指数分布独有特性；威布尔 β=1 时退化为指数。',
        tags: ['指数', '特性']
    },

    // ===== 三、系统可靠性 =====
    {
        id: 'f13',
        category: '系统可靠性',
        name: 'MTBF = MTTF + MTTR',
        meaning: '两次故障间隔 = 修一次时间 + 用一段时间',
        example: '打印机：用 1000h 坏一次，修 2h，再用 1000h。MTBF=1000h。',
        application: '不可修产品（电容、灯泡）用 MTTF；可修产品（服务器、汽车）用 MTBF。',
        tags: ['指标', '基础'],
        formula: 'MTBF = MTTF + MTTR'
    },
    {
        id: 'f14',
        category: '系统可靠性',
        name: '可用度 A',
        formula: 'A = MTBF / (MTBF + MTTR) = μ / (λ + μ)',
        meaning: '在需要它的时候，它能工作的概率',
        example: '服务器能用 1000h，修 1h。99.9% 时间在用，0.1% 时间在修。',
        application: '四个 9（99.99%）= 一年只停 52min。银行/电信要求。',
        tags: ['可用度', '核心']
    },
    {
        id: 'f15',
        category: '系统可靠性',
        name: '串联系统可靠度',
        formula: 'R_s = R₁ × R₂ × ... × R_n',
        meaning: '一个坏了整个就完蛋',
        example: '5 个开关串联，每个 99% 可靠。整体 = 0.99^5 ≈ 95%。',
        application: '木桶效应：系统可靠度由最弱单元决定。提升最弱环节收益最大。',
        tags: ['串联', '木桶']
    },
    {
        id: 'f16',
        category: '系统可靠性',
        name: '串联系统失效率',
        formula: 'λ_s = λ₁ + λ₂ + ... + λ_n（指数分布）',
        meaning: '失效率直接相加',
        example: '5 个电阻（每个 λ=0.001/h）串联。系统 λ=0.005/h，MTBF=200h。',
        application: '仅适用于指数分布（失效率恒定）；MTBF_s = 1/λ_s。',
        tags: ['串联', '失效率']
    },
    {
        id: 'f17',
        category: '系统可靠性',
        name: '并联系统可靠度',
        formula: 'R_s = 1 - (1-R₁)(1-R₂)...(1-R_n)',
        meaning: '备份方案——一个坏了还有另一个',
        example: '2 个相同泵并联（每个 90% 可靠）：R=1-0.1²=99%，比单泵更可靠。',
        application: '代价：成本↑、重量↑、复杂度↑。',
        tags: ['并联', '冗余']
    },
    {
        id: 'f18',
        category: '系统可靠性',
        name: 'k/n 表决系统',
        formula: 'R_s = Σ C(n,i) × R^i × (1-R)^(n-i)，i=k 到 n',
        meaning: '至少 k 个工作才行——多数一致',
        example: '飞机 4 台发动机 2/4 表决。2 台工作就能飞，3 台或 4 台更好。',
        application: '容错系统；高可靠要求；牺牲资源换可靠性。',
        tags: ['表决', '冗余']
    },
    {
        id: 'f19',
        category: '系统可靠性',
        name: '热备与冷备',
        formula: 'A_热备 > A_冷备',
        meaning: '热备通电运行切换快；冷备断电待命切换慢',
        example: '两台服务器：热备实时同步，故障秒切；冷备启动要几分钟。',
        application: '热备可用度更高（MTTR 小），但功耗大。',
        tags: ['冗余', '策略']
    },

    // ===== 四、加速模型 =====
    {
        id: 'f20',
        category: '加速模型',
        name: 'Arrhenius 温度加速',
        formula: 'AF = exp[(Ea/k)(1/Tu - 1/Ts)]',
        meaning: '温度越高，化学反应越快，失效越快',
        example: '食物夏天易坏（温度高），冰箱能放更久。温度每升 10°C，反应速度约翻倍。',
        application: '典型 Ea=0.5-1.0eV。85°C 试验 1000h，AF=8，推 40°C 寿命 8000h。',
        tags: ['温度', '核心']
    },
    {
        id: 'f21',
        category: '加速模型',
        name: '活化能 Ea',
        formula: 'Ea 大 → 温度敏感',
        meaning: '反应需要越过的"能量门槛"',
        example: 'Ea=0.5eV 的反应，温度从 25 升到 125°C，AF≈45。Ea=1.0eV 的反应，AF≈2050。',
        application: 'Ea 越大，AF 越大，温度敏感性越强。',
        tags: ['Arrhenius', '参数']
    },
    {
        id: 'f22',
        category: '加速模型',
        name: 'Coffin-Manson 温循加速',
        formula: 'AF = (ΔTs / ΔTu)^m',
        meaning: '温差越大，材料疲劳越快',
        example: '弯铁丝：弯幅越大越易断。焊点热胀冷缩：温差越大越易裂。',
        application: 'm 典型 1.5-3（焊点常用 1.9）。m 越大越保守。',
        tags: ['温循', '核心']
    },
    {
        id: 'f23',
        category: '加速模型',
        name: 'Norris-Landzberg（改进）',
        formula: 'AF = (ΔTs/ΔTu)^m × (fu/fs)^n',
        meaning: '不仅看温差，还看循环频率',
        example: '快速弯 1000 次比慢速弯 1000 次更易断。频率高 → 加速效果打折（材料没时间恢复）。',
        application: 'n≈1/3。比 Coffin-Manson 更准确。',
        tags: ['温循', '改进']
    },
    {
        id: 'f24',
        category: '加速模型',
        name: 'Peck 温湿度加速',
        formula: 'AF = exp[(Ea/k)(1/Tu-1/Ts)] × (RHs/RHu)^n',
        meaning: '温度高+湿度大=腐蚀快',
        example: '海边铁器易生锈（湿+盐），沙漠里东西不易坏（干燥）。',
        application: 'Ea≈0.8eV，n≈3。85/85 试验 1000h 可推 40/60 数月。',
        tags: ['湿热', '核心']
    },
    {
        id: 'f25',
        category: '加速模型',
        name: '逆幂律电压加速',
        formula: 'AF = (Vs / Vu)^n',
        meaning: '电压越高，失效越快',
        example: '电线超负荷易烧，电容超压易爆。电压高一点，寿命少很多。',
        application: 'n=3-10。绝缘老化、电迁移、介质击穿。',
        tags: ['电压', '加速']
    },
    {
        id: 'f26',
        category: '加速模型',
        name: '黑方程（电迁移）',
        formula: 'MTTF = A × J^(-n) × exp(Ea/kT)',
        meaning: '电流密度大+温度高=互连线快断',
        example: '水管越细水压越大越快破。IC 电线微米级，对电流极敏感。',
        application: 'IC 互连线；半导体可靠性。',
        tags: ['半导体', '机理']
    },

    // ===== 五、可靠性分析 =====
    {
        id: 'f27',
        category: '可靠性分析',
        name: 'RPN',
        formula: 'RPN = S × O × D',
        meaning: 'FMEA 风险评分 = 严重度 × 频度 × 难检度',
        example: '飞机失事：S=10（要命），每天发生 O=10，难发现 D=10。RPN=1000（最优先）。',
        application: 'S/O/D 各 1-10 分。AIAG-VDA 2019 新版改用 AP（行动优先级）。',
        tags: ['FMEA', '评分']
    },
    {
        id: 'f28',
        category: '可靠性分析',
        name: '结温计算',
        formula: 'Tj = Ta + P × Rth',
        meaning: '芯片实际温度 = 环境温度 + 自己发热',
        example: '环境 25°C，CPU 100W，Rth=0.5°C/W。Tj=25+50=75°C。',
        application: 'Tj 每降 10°C，寿命延长约 2 倍。散热设计关键。',
        tags: ['热设计', '核心']
    },
    {
        id: 'f29',
        category: '可靠性分析',
        name: '元器件应力法',
        formula: 'λ = λb × πE × πQ × πA',
        meaning: '实际失效率 = 基础失效率 × 一堆修正',
        example: 'λb=0.1×10⁻⁶/h 是标准情况；恶劣环境 πE=2；质量差 πQ=3；用得狠 πA=2。λ=0.12×10⁻⁵/h。',
        application: '可靠性预计；系统 MTBF 估算；元器件选型。',
        tags: ['预计', '基础']
    },
    {
        id: 'f30',
        category: '可靠性分析',
        name: 'Duane 模型',
        formula: 'MTBF_cum = a × T^b',
        meaning: '边用边改，平均寿命会越来越长',
        example: 'v1: 100h → v2: 200h → v3: 400h（b=1 时每次翻倍）。',
        application: '研发阶段；可靠性增长试验；b=0.3-0.6 典型。',
        tags: ['增长', '模型']
    },
    {
        id: 'f31',
        category: '可靠性分析',
        name: '0 失败样本量',
        formula: 'n = ln(1-C) / ln(1-p)',
        meaning: '要证明产品可靠，至少要试多少个都不坏',
        example: '想要 95% 把握说"不良率 ≤ 5%"，需要 59 个都成功。',
        application: 'C=置信度，p=失效率上限。',
        tags: ['抽样', '接收']
    },
    {
        id: 'f32',
        category: '可靠性分析',
        name: '故障树最小割集',
        meaning: '找到让系统失败的最少条件组合',
        example: '灯不亮={电池没电} OR {线路断} OR {开关坏,灯丝断}。前两个是单点失效，最危险。',
        application: '单点失效（割集只 1 个）= 最危险；优先消除。',
        tags: ['FTA', '方法'],
        formula: '下行法 / 上行法求解'
    },
    {
        id: 'f33',
        category: '可靠性分析',
        name: '失效链',
        formula: '失效原因 → 失效模式 → 失效影响',
        meaning: '为什么会坏 → 怎么坏的 → 坏了会怎样',
        example: '焊点虚焊（原因）→ 接触不良（模式）→ 偶尔功能失效（影响）。',
        application: 'FMEA 核心：顺链分析，找根因，评影响。',
        tags: ['FMEA', '方法']
    },
    {
        id: 'f34',
        category: '可靠性分析',
        name: '浴盆曲线三阶段',
        meaning: '产品一生的健康变化',
        example: '婴儿期：易病挺过就好。青年期：身体好偶感冒。老年期：越差需保养。',
        application: '早期→老化筛选；偶然→降额冗余；磨耗→预防维护。',
        tags: ['基础', '核心'],
        formula: '三阶段：早期/偶然/磨耗'
    },
    {
        id: 'f35',
        category: '可靠性分析',
        name: 'MTBF 与 R(t) 关系',
        formula: 'MTBF = ∫₀^∞ R(t)dt',
        meaning: '平均寿命 = 可靠度曲线下的面积',
        example: 'R(t) 从 1 慢慢降到 0，中间和横轴围成的面积 = 平均寿命。',
        application: '指数分布下 = 1/λ；威布尔下需积分计算。',
        tags: ['指标', '积分']
    },

    // ===== 六、其他 =====
    {
        id: 'f36',
        category: '试验条件',
        name: '6σ 设计良率',
        formula: '良率 = 99.99966%',
        meaning: '100 万个里只允许 3.4 个次品',
        example: '3σ：1000 个里有 2.7 个次品。6σ：100 万个里 3.4 个。',
        application: '制造业极致目标；过程能力极高；成本极高。',
        tags: ['质量', '目标']
    },
    {
        id: 'f37',
        category: '试验条件',
        name: '盐雾浓度 5% NaCl',
        formula: 'NaCl 5%，35°C',
        meaning: '模拟海水，测试耐腐蚀',
        example: '海水盐度约 3.5%，5% 更严酷，加速测试。',
        application: '中性 NSS / 酸性 AASS / 铜加速 CASS 三种。',
        tags: ['盐雾', '环境']
    },
    {
        id: 'f38',
        category: '试验条件',
        name: 'IP 防护等级',
        formula: 'IPXY：X 防尘，Y 防水',
        meaning: '防尘 0-6 级 + 防水 0-9 级',
        example: 'IP65：完全防尘+强喷水。IP67：完全防尘+短时浸水（1m/30min）。',
        application: '户外产品必标；IP68 是约定条件（深度由厂家定）。',
        tags: ['防护', '环境']
    },
    {
        id: 'f39',
        category: '试验条件',
        name: '温度循环速率',
        formula: '1°C/min ~ 5°C/min',
        meaning: '温变速率影响严酷度',
        example: '1°C/min 较温和；5°C/min 较严酷。',
        application: '温循：≤5°C/min；温冲：<30s 手动/<10s 自动。',
        tags: ['温循', '条件']
    },
    {
        id: 'f40',
        category: '试验条件',
        name: '降额比',
        formula: '降额比 = 实际应力 / 额定应力',
        meaning: '实际用得越"轻"，越耐用',
        example: '电容 25V 额定，实际 18V。降额比 72%。',
        application: '电阻功率 ≤50%；电容电压 ≤70%；IC 结温 ≤80% Tjmax。',
        tags: ['设计', '基础']
    }
];

if (typeof window !== 'undefined') {
    window.FORMULAS = FORMULAS;
}
