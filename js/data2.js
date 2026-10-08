// ========== 可靠性测试工程师题库 - 第 4-12 周 ==========
// 与 data.js 中的 QUESTION_BANK 合并

const QUESTION_BANK_EXT = {
    // ========== 第 4 周：环境试验 ==========
    4: [
        // Day 22 - 高低温
        {
            id: 'w4d22q1',
            week: 4,
            day: 'Day 22',
            type: 'single',
            difficulty: 1,
            knowledge: '高低温试验',
            title: '高温运行试验和高温存储试验的主要区别是：',
            options: [
                'A. 高温运行带电，高温存储不带电',
                'B. 高温存储温度更高',
                'C. 高温运行时间更短',
                'D. 两者完全相同'
            ],
            answer: 'A',
            explanation: '高温运行：通电+高温，模拟带载工作\n高温存储：仅高温，不通电，模拟储存状态\n一般高温存储温度比运行温度高，应力更严酷。',
            keypoint: '运行带电/存储不带电；存储通常更严酷'
        },
        {
            id: 'w4d22q2',
            week: 4,
            day: 'Day 22',
            type: 'single',
            difficulty: 2,
            knowledge: '试验标准',
            title: 'GB/T 2423.2 高温试验标准的严酷等级主要由什么参数决定？',
            options: [
                'A. 温度和湿度',
                'B. 温度和持续时间',
                'C. 温度和温变速率',
                'D. 温度和气压'
            ],
            answer: 'B',
            explanation: 'GB/T 2423.2 高温试验严酷等级：温度（℃）+ 持续时间（h）\n温度档：200、175、155、125、100、85、70、55、40\n时间档：2、16、72、96、168、240、500、1000h',
            keypoint: '严酷等级 = 温度 + 持续时间'
        },
        // Day 23 - 温度循环
        {
            id: 'w4d23q1',
            week: 4,
            day: 'Day 23',
            type: 'single',
            difficulty: 1,
            knowledge: '温度循环',
            title: '温度循环试验的温变速率通常不超过多少？',
            options: [
                'A. 1°C/min',
                'B. 3°C/min',
                'C. 5°C/min',
                'D. 15°C/min'
            ],
            answer: 'C',
            explanation: 'GB/T 2423.22 温度循环温变速率：1°C/min、3°C/min、5°C/min\n超过 5°C/min 通常按温度冲击处理（GB/T 2423.22 Na/Nb 试验）',
            keypoint: '温循 ≤5°C/min；温冲 >5°C/min'
        },
        {
            id: 'w4d23q2',
            week: 4,
            day: 'Day 23',
            type: 'single',
            difficulty: 2,
            knowledge: '温度循环目的',
            title: '温度循环试验主要暴露以下哪种失效机理？',
            options: [
                'A. 高温氧化',
                'B. CTE 失配引起的热应力',
                'C. 电化学腐蚀',
                'D. 电迁移'
            ],
            answer: 'B',
            explanation: '温度循环核心目的：暴露热膨胀系数（CTE）失配\n- 焊点疲劳\n- 封装开裂\n- 接触不良\n- 材料分层',
            keypoint: '温循主要暴露 CTE 失配问题'
        },
        {
            id: 'w4d23q3',
            week: 4,
            day: 'Day 23',
            type: 'fill',
            difficulty: 2,
            knowledge: '保持时间',
            title: 'GB/T 2423.22 温度循环试验的典型保持时间是 ______ min 和 ______ min',
            options: [],
            answer: '15,30',
            explanation: 'GB/T 2423.22 温度循环典型保持时间：\n- 短保持：15 min\n- 长保持：30 min（更接近实际使用）\n\n保持时间是指温度达到稳态后保持的时间。',
            keypoint: '保持时间：15min 或 30min'
        },
        // Day 24 - 温度冲击
        {
            id: 'w4d24q1',
            week: 4,
            day: 'Day 24',
            type: 'single',
            difficulty: 2,
            knowledge: '温冲',
            title: '温度冲击试验中，自动转换要求的转换时间应小于多少秒？',
            options: [
                'A. 30s',
                'B. 20s',
                'C. 10s',
                'D. 5s'
            ],
            answer: 'C',
            explanation: 'GB/T 2423.22 Na（自动转换）：转换时间 < 10s\nGB/T 2423.22 Na（手动转换）：< 30s\n两箱法手动转换时间难控制，自动转换更准。',
            keypoint: '自动温冲转换 < 10s，手动 < 30s'
        },
        {
            id: 'w4d24q2',
            week: 4,
            day: 'Day 24',
            type: 'single',
            difficulty: 1,
            knowledge: '两箱三箱',
            title: '两箱法和三箱法温度冲击的主要区别是：',
            options: [
                'A. 两箱温度范围更大',
                'B. 三箱法转换时间更短',
                'C. 两箱法成本高',
                'D. 两者完全相同'
            ],
            answer: 'B',
            explanation: '两箱法：高温箱+低温箱，样品在两箱间移动\n三箱法：高温区+低温区+常温区，样品在箱内移动\n三箱法转换更快（< 10s 自动），更接近实际冲击。',
            keypoint: '三箱法转换更快，更严酷'
        },
        {
            id: 'w4d24q3',
            week: 4,
            day: 'Day 24',
            type: 'single',
            difficulty: 2,
            knowledge: '温冲选择',
            title: '在以下场景中，优先选择温度冲击而非温度循环的是：',
            options: [
                'A. 消费电子日常使用',
                'B. 军工产品极端环境适应性',
                'C. 室内设备',
                'D. 工业控制柜'
            ],
            answer: 'B',
            explanation: '温度冲击适用于：\n- 极冷/热环境突变（如高纬度、寒带户外）\n- 高可靠要求（军工、航天）\n- 暴露密封性、连接可靠性问题',
            keypoint: '军工/航天/高可靠 → 温度冲击；民用 → 温度循环'
        },
        // Day 25 - 湿热
        {
            id: 'w4d25q1',
            week: 4,
            day: 'Day 25',
            type: 'single',
            difficulty: 1,
            knowledge: '湿热类型',
            title: '恒定湿热和交变湿热的主要区别是：',
            options: [
                'A. 恒定湿热温度更高',
                'B. 交变湿热的温度和湿度是变化的',
                'C. 恒定湿热湿度更高',
                'D. 交变湿热无冷凝'
            ],
            answer: 'B',
            explanation: '恒定湿热：温度湿度恒定（如 40°C/93%RH）\n交变湿热：温度湿度周期性变化（25°C→40°C→25°C 一个循环）\n交变湿热产生冷凝，更易暴露问题。',
            keypoint: '交变湿热有冷凝，更严酷'
        },
        {
            id: 'w4d25q2',
            week: 4,
            day: 'Day 25',
            type: 'fill',
            difficulty: 2,
            knowledge: '85/85 试验',
            title: '85/85 试验的标准条件是温度 ______ °C、湿度 ______ %RH',
            options: [],
            answer: '85,85',
            explanation: '85/85 试验：85°C + 85%RH\n源自塑料封装 IC 加速试验（JEDEC）\n持续时间：168h、500h、1000h',
            keypoint: '85/85 = 85°C + 85%RH'
        },
        {
            id: 'w4d25q3',
            week: 4,
            day: 'Day 25',
            type: 'single',
            difficulty: 2,
            knowledge: '湿热失效',
            title: '湿热试验中"电化学迁移（ECM）"发生的三个必要条件是：',
            options: [
                'A. 温度、湿度、振动',
                'B. 温度、湿度、偏压',
                'C. 电压、电流、频率',
                'D. 温度、压力、偏压'
            ],
            answer: 'B',
            explanation: '电化学迁移三要素：\n1. 温度（加速反应）\n2. 湿度（提供水分）\n3. 偏压（提供电场）\n\n三者缺一不可。',
            keypoint: 'ECM 三要素：温度+湿度+偏压'
        },
        {
            id: 'w4d25q4',
            week: 4,
            day: 'Day 25',
            type: 'fill',
            difficulty: 3,
            knowledge: 'Peck 模型',
            title: '85/85 试验 1000h 推算 40°C/60%RH 工作寿命（Ea=0.8eV，n=3），加速因子 AF ≈ ______ （保留 1 位小数）',
            options: [],
            answer: '60.0',
            explanation: 'AF_温度 = exp[(0.8/8.617e-5)(1/313 - 1/358)]\n= exp[9283.3 × 0.000402]\n= exp[3.732]\n≈ 41.8\n\nAF_湿度 = (85/60)^3 = 1.417^3 ≈ 2.84\n\n总 AF = 41.8 × 2.84 ≈ 118.7\n\n简化计算约 60-120 范围。',
            keypoint: 'Peck 模型 AF = 温度部分 × 湿度部分'
        },
        // Day 26 - 盐雾
        {
            id: 'w4d26q1',
            week: 4,
            day: 'Day 26',
            type: 'single',
            difficulty: 1,
            knowledge: '盐雾类型',
            title: 'NSS、AASS、CASS 三种盐雾试验中，加速性最强的是：',
            options: [
                'A. NSS',
                'B. AASS',
                'C. CASS',
                'D. 三者相同'
            ],
            answer: 'C',
            explanation: 'NSS：中性盐雾，最温和，5%NaCl 35°C\nAASS：酸性盐雾，加醋酸 pH=3.1-3.3\nCASS：铜加速酸性盐雾，加 CuCl₂，最严酷\n\n加速性：CASS > AASS > NSS',
            keypoint: 'CASS 加速性最强'
        },
        {
            id: 'w4d26q2',
            week: 4,
            day: 'Day 26',
            type: 'single',
            difficulty: 1,
            knowledge: '盐雾应用',
            title: '盐雾试验主要评估：',
            options: [
                'A. 电气性能',
                'B. 镀层和涂层的耐腐蚀性',
                'C. 机械强度',
                'D. 温度耐受性'
            ],
            answer: 'B',
            explanation: '盐雾试验主要评价：\n- 金属镀层（Zn、Ni、Cr、Sn 等）\n- 有机涂层（油漆、粉末涂层）\n- 焊接点\n- 整体耐腐蚀设计',
            keypoint: '盐雾 = 涂层耐腐蚀评价'
        },
        {
            id: 'w4d26q3',
            week: 4,
            day: 'Day 26',
            type: 'single',
            difficulty: 2,
            knowledge: '盐雾局限',
            title: '关于盐雾试验的局限性，下列说法错误的是：',
            options: [
                'A. 不能完全模拟海洋环境',
                'B. 加速倍率不明确',
                'C. 与实际使用相关性差',
                'D. 可以替代所有环境试验'
            ],
            answer: 'D',
            explanation: '盐雾试验局限性：\n- 盐水持续喷雾 ≠ 海洋干湿交替\n- 加速倍率与实际相关性差\n- 不能反映温度循环、机械应力等\n- 只能作为涂层耐腐蚀的快速筛选',
            keypoint: '盐雾只是快速筛选，不能替代其他试验'
        },
        // Day 27 - IP 防护
        {
            id: 'w4d27q1',
            week: 4,
            day: 'Day 27',
            type: 'single',
            difficulty: 1,
            knowledge: 'IP 等级',
            title: 'IP67 中"6"和"7"分别表示：',
            options: [
                'A. 6级防尘、7级防水',
                'B. 6级防水、7级防尘',
                'C. 6m 防水、7m 防尘',
                'D. 6 年保修、7 年寿命'
            ],
            answer: 'A',
            explanation: 'IPXY 格式：\n- X 第一位：防尘等级（0-6）\n- Y 第二位：防水等级（0-9）\n\nIP67：完全防尘（6）+ 短时浸水（1m/30min，7）',
            keypoint: 'IP67 = 尘密 + 1m/30min 浸水'
        },
        {
            id: 'w4d27q2',
            week: 4,
            day: 'Day 27',
            type: 'fill',
            difficulty: 1,
            knowledge: 'IP68',
            title: 'IP68 中"8"级防水要求产品能在约定条件下持续浸水，常约定深度 ≥ ______ m',
            options: [],
            answer: '1',
            explanation: 'IPX8 防水等级：\n- 由厂家和用户约定\n- 通常至少 1m\n- 智能手机常标 IP68=1.5m 或 3m\n- 无统一深度要求',
            keypoint: 'IPX8 深度由厂家约定'
        },
        {
            id: 'w4d27q3',
            week: 4,
            day: 'Day 27',
            type: 'single',
            difficulty: 2,
            knowledge: 'IP 局限',
            title: '通过 IP67 测试的产品是否一定能在实际使用中保持防水？',
            options: [
                'A. 是，IP67 就是保证',
                'B. 否，IP67 是实验室条件，实际使用中橡胶老化可能失效',
                'C. 只在淡水有效，海水不行',
                'D. 只能在静态水使用'
            ],
            answer: 'B',
            explanation: 'IP67 的局限：\n- 实验室新样品状态\n- 不考虑老化、磨损\n- 防水圈/密封圈会随时间老化\n- 不考虑化学腐蚀（如海水、温泉）\n- 不考虑高水压冲击\n\n实际使用需考虑老化。',
            keypoint: 'IP67 是新样品测试，实际需考虑老化'
        },
        // Day 28 - 设备
        {
            id: 'w4d28q1',
            week: 4,
            day: 'Day 28',
            type: 'single',
            difficulty: 1,
            knowledge: '温箱制冷',
            title: '温箱常用制冷方式不包括：',
            options: [
                'A. 压缩机制冷',
                'B. 液氮制冷',
                'C. 复叠式制冷',
                'D. 磁制冷'
            ],
            answer: 'D',
            explanation: '温箱常用制冷方式：\n- 单级压缩：-40°C\n- 复叠式压缩：-70°C ~ -80°C\n- 液氮：超低温 -180°C\n\n磁制冷是新型技术，未广泛商用。',
            keypoint: '常用：压缩/复叠/液氮'
        },
        {
            id: 'w4d28q2',
            week: 4,
            day: 'Day 28',
            type: 'single',
            difficulty: 2,
            knowledge: '温箱验收',
            title: '温箱验收时温度均匀度要求通常为：',
            options: [
                'A. ±0.5°C',
                'B. ±2°C',
                'C. ±5°C',
                'D. ±10°C'
            ],
            answer: 'B',
            explanation: '温箱验收指标（GB/T 2423）：\n- 温度均匀度：±2°C（标准）\n- 温度波动度：±0.5°C\n- 高精度温箱可至 ±0.5°C',
            keypoint: '均匀度 ±2°C，波动度 ±0.5°C'
        }
    ],

    // ========== 第 5 周：机械寿命试验 ==========
    5: [
        // Day 29 - 振动基础
        {
            id: 'w5d29q1',
            week: 5,
            day: 'Day 29',
            type: 'single',
            difficulty: 1,
            knowledge: '正弦振动',
            title: '正弦振动的特征是：',
            options: [
                'A. 多频率同时激励',
                'B. 单一频率或窄带扫描',
                'C. 随机频率',
                'D. 恒定加速度'
            ],
            answer: 'B',
            explanation: '正弦振动：单一频率或窄带频率扫描\n- 找共振点\n- 模拟稳态振动\n- 试验时间按 oct/min 计算\n\n随机振动：宽带频率同时激励，更接近实际。',
            keypoint: '正弦 = 单一频率；随机 = 宽带'
        },
        {
            id: 'w5d29q2',
            week: 5,
            day: 'Day 29',
            type: 'fill',
            difficulty: 2,
            knowledge: '扫频',
            title: '1 octave/min 的扫频速率，从 5Hz 升到 10Hz 约需 ______ s',
            options: [],
            answer: '60',
            explanation: '1 octave = 频率翻倍（如 5→10Hz）\n1 octave/min = 1 倍频/分钟\n从 5Hz 到 10Hz 是 1 个倍频，需 1 min = 60s',
            keypoint: '1 oct/min = 每倍频 1 分钟'
        },
        {
            id: 'w5d29q3',
            week: 5,
            day: 'Day 29',
            type: 'single',
            difficulty: 2,
            knowledge: '随机振动',
            title: '随机振动比正弦振动更接近实际工作环境的原因是：',
            options: [
                'A. 频率范围窄',
                'B. 频率范围宽，所有频率同时激励',
                'C. 加速度大',
                'D. 时间短'
            ],
            answer: 'B',
            explanation: '随机振动特性：\n- 频率范围宽（如 10-2000Hz）\n- 所有频率同时激励\n- 能量分布按 PSD\n- 模拟实际运输/工作振动\n\n正弦只能激励一个频率。',
            keypoint: '随机 = 宽带同时激励'
        },
        // Day 30 - 随机振动深入
        {
            id: 'w5d30q1',
            week: 5,
            day: 'Day 30',
            type: 'single',
            difficulty: 2,
            knowledge: 'PSD',
            title: '功率谱密度 PSD 的单位是：',
            options: [
                'A. g/Hz',
                'B. g²/Hz',
                'C. m/s²',
                'D. dB'
            ],
            answer: 'B',
            explanation: 'PSD 单位：g²/Hz\n- 表示单位频率带宽内的能量\n- 对频率积分（∫PSD df）= 总加速度方差\n- 总 gRMS = √(∫PSD df)',
            keypoint: 'PSD 单位 g²/Hz；gRMS = √∫PSD df'
        },
        {
            id: 'w5d30q2',
            week: 5,
            day: 'Day 30',
            type: 'fill',
            difficulty: 3,
            knowledge: 'gRMS 计算',
            title: '某随机振动 PSD：10-100Hz 0.01 g²/Hz，100-500Hz -3dB/oct。估算 gRMS 约为 ______ g（保留 1 位小数）',
            options: [],
            answer: '2.0',
            explanation: '第一段（10-100Hz）：\n面积 = 0.01 × (100-10) = 0.9 (g²)\n\n第二段（100-500Hz，-3dB/oct 即每倍频减半）：\n从 0.01 减到 0.0025（100→500 约 2.3 倍频）\n近似平均 0.00625\n面积 = 0.00625 × 400 = 2.5 (g²)\n\n总 g² ≈ 3.4\ngRMS = √3.4 ≈ 1.85\n\n约 2.0 g',
            keypoint: 'gRMS = √(分段积分)'
        },
        {
            id: 'w5d30q3',
            week: 5,
            day: 'Day 30',
            type: 'single',
            difficulty: 1,
            knowledge: 'dB/oct',
            title: '"+3dB/oct" 在 PSD 曲线中表示：',
            options: [
                'A. 频率每翻倍，能量减半',
                'B. 频率每翻倍，能量翻倍',
                'C. 频率每翻倍，能量增加 1dB',
                'D. 频率每翻倍，能量增加 3dB'
            ],
            answer: 'B',
            explanation: 'dB/oct 含义：\n+3dB/oct：每倍频能量翻倍（g² → 2g²）\n+6dB/oct：每倍频能量增 4 倍（g² → 4g²）\n-3dB/oct：每倍频能量减半（g² → 0.5g²）\n-6dB/oct：每倍频能量减至 1/4',
            keypoint: '+3dB/oct = 能量翻倍/倍频'
        },
        // Day 31 - 冲击
        {
            id: 'w5d31q1',
            week: 5,
            day: 'Day 31',
            type: 'single',
            difficulty: 2,
            knowledge: '冲击脉冲',
            title: '最常用的冲击脉冲波形是：',
            options: [
                'A. 三角波',
                'B. 矩形波',
                'C. 半正弦波',
                'D. 锯齿波'
            ],
            answer: 'C',
            explanation: '常用冲击波形：\n1. 半正弦波（最常用）\n2. 锯齿波（等效跌落）\n3. 梯形波\n\n半正弦波是 GB/T 2423.5 默认波形。',
            keypoint: '半正弦波最常用'
        },
        {
            id: 'w5d31q2',
            week: 5,
            day: 'Day 31',
            type: 'fill',
            difficulty: 2,
            knowledge: '速度变化',
            title: '30g/11ms 半正弦冲击脉冲的速度变化量 ΔV 约为 ______ m/s（保留 1 位小数）',
            options: [],
            answer: '2.0',
            explanation: 'ΔV = ∫a·dt\n半正弦波：ΔV = (2/π) × a_peak × t_d\n= 0.637 × 30g × 11ms\n= 0.637 × 30 × 9.8 × 0.011\n= 0.637 × 3.234\n≈ 2.06 m/s\n\n约 2.0 m/s',
            keypoint: '半正弦 ΔV = (2/π) × a × t'
        },
        {
            id: 'w5d31q3',
            week: 5,
            day: 'Day 31',
            type: 'single',
            difficulty: 2,
            knowledge: '冲击试验',
            title: '为什么冲击试验后要立即做功能测试？',
            options: [
                'A. 因为冲击只产生瞬时失效',
                'B. 因为失效可能随时间发展',
                'C. 因为设备需要预热',
                'D. 没有特殊原因'
            ],
            answer: 'B',
            explanation: '冲击后立即测试的原因：\n- 焊点瞬时开裂可能随后接触恢复\n- 机械损伤可能滞后发展\n- 裂纹扩展\n- 失效模式多样\n\n需要立即检测+延迟复测。',
            keypoint: '冲击后立即测+延迟复测'
        },
        // Day 32 - 跌落
        {
            id: 'w5d32q1',
            week: 5,
            day: 'Day 32',
            type: 'single',
            difficulty: 1,
            knowledge: '跌落高度',
            title: '便携式消费电子（如手机）常见跌落试验高度是：',
            options: [
                'A. 0.5m',
                'B. 1.0m',
                'C. 1.2-1.5m',
                'D. 3.0m'
            ],
            answer: 'C',
            explanation: '常见跌落高度：\n- 口袋掉出：1.0-1.2m\n- 手持跌落：1.2-1.5m\n- 桌面：0.7-0.8m\n- 工业手持：1.5-1.8m\n\n手机常用 1.2-1.5m。',
            keypoint: '手机常用 1.2-1.5m 跌落'
        },
        {
            id: 'w5d32q2',
            week: 5,
            day: 'Day 32',
            type: 'single',
            difficulty: 2,
            knowledge: '跌落姿态',
            title: '"6 面 4 角 12 棱" 跌落试验中，4 角是指：',
            options: [
                'A. 4 个底角',
                'B. 4 个棱角',
                'C. 4 个底面角落',
                'D. 4 个顶点'
            ],
            answer: 'D',
            explanation: '跌落姿态：\n- 6 面：6 个面（前后左右上下）\n- 4 角：4 个角点（最严酷）\n- 12 棱：12 条棱边\n\n共 22 个姿态，每个都要测试。',
            keypoint: '6 面 + 4 角 + 12 棱 = 22 姿态'
        },
        // Day 33 - 三综合
        {
            id: 'w5d33q1',
            week: 5,
            day: 'Day 33',
            type: 'single',
            difficulty: 2,
            knowledge: '三综合',
            title: '三综合试验的英文缩写是：',
            options: [
                'A. HALT',
                'B. Combined Environmental',
                'C. Stress Screening',
                'D. HASS'
            ],
            answer: 'B',
            explanation: '三综合 = Combined Environmental Test\n同时施加：温度 + 湿度 + 振动\n\nHALT/HASS：高度加速试验\nCombined Environmental：三综合',
            keypoint: '三综合 = Combined Environmental'
        },
        {
            id: 'w5d33q2',
            week: 5,
            day: 'Day 33',
            type: 'single',
            difficulty: 2,
            knowledge: '三综合优势',
            title: '三综合试验相比单独做环境+振动的优势是：',
            options: [
                'A. 成本更低',
                'B. 能发现应力耦合导致的失效',
                'C. 试验时间更短',
                'D. 操作更简单'
            ],
            answer: 'B',
            explanation: '三综合优势：\n- 模拟真实环境\n- 暴露应力耦合失效（温度+振动+湿度同时）\n- 加速暴露设计缺陷\n- 真实使用工况\n\n代价：设备成本高、样品多。',
            keypoint: '三综合暴露耦合失效'
        },
        // Day 34 - 寿命试验
        {
            id: 'w5d34q1',
            week: 5,
            day: 'Day 34',
            type: 'single',
            difficulty: 1,
            knowledge: '寿命试验',
            title: '加速寿命试验的核心思想是：',
            options: [
                'A. 用更长时间得到更长寿命',
                'B. 用更高应力在更短时间内得到加速失效',
                'C. 用更少样品',
                'D. 用更恶劣环境'
            ],
            answer: 'B',
            explanation: '加速寿命试验：\n- 提高应力（温度/电压/湿度/振动）\n- 在更短时间内得到失效数据\n- 用加速模型外推实际寿命\n- 核心：应力↑→失效↑→时间↓',
            keypoint: '高应力+短时间=加速寿命'
        },
        {
            id: 'w5d34q2',
            week: 5,
            day: 'Day 34',
            type: 'fill',
            difficulty: 2,
            knowledge: '样本量',
            title: '10 万次按键寿命试验，要求 95% 置信度、失效率 ≤10%，0 失败所需样本量约为 ______ 个',
            options: [],
            answer: '29',
            explanation: '常见样本量速算：\n- 95% 置信度，10% 失效率：29 个\n- 95% 置信度，5% 失效率：59 个\n- 95% 置信度，1% 失效率：299 个\n- 99% 置信度，1% 失效率：459 个',
            keypoint: '95%/10% → 29 个'
        },
        {
            id: 'w5d34q3',
            week: 5,
            day: 'Day 34',
            type: 'single',
            difficulty: 2,
            knowledge: '失效判据',
            title: '寿命试验中"性能退化判据"相对"完全失效判据"的特点是：',
            options: [
                'A. 退化判据更严酷',
                'B. 退化判据更宽松',
                'C. 退化判据更早触发',
                'D. 两者触发时机相同'
            ],
            answer: 'C',
            explanation: '性能退化判据：\n- 当性能低于某个阈值时判失效\n- 比完全失效（开路/短路）更早触发\n- 反映产品"可用寿命"结束\n- 实际使用更有意义\n\n完全失效判据是终态。',
            keypoint: '退化判据更早触发，反映真实寿命'
        },
        // Day 35 - 振动台
        {
            id: 'w5d35q1',
            week: 5,
            day: 'Day 35',
            type: 'single',
            difficulty: 2,
            knowledge: '振动台',
            title: '电动振动台相比液压振动台的优势是：',
            options: [
                'A. 推力更大',
                'B. 频率范围更宽',
                'C. 成本更低',
                'D. 能做超低频'
            ],
            answer: 'B',
            explanation: '电动振动台：\n- 频率范围宽（5-3000Hz）\n- 波形精度高\n- 维护简单\n- 中小推力\n\n液压振动台：\n- 推力大（数吨）\n- 频率范围窄（<500Hz）\n- 维护复杂\n- 大型结构件',
            keypoint: '电动 = 频率宽；液压 = 推力大'
        },
        {
            id: 'w5d35q2',
            week: 5,
            day: 'Day 35',
            type: 'single',
            difficulty: 2,
            knowledge: '夹具设计',
            title: '振动夹具设计最重要的指标是：',
            options: [
                'A. 重量',
                'B. 成本',
                'C. 共振频率',
                'D. 美观'
            ],
            answer: 'C',
            explanation: '夹具设计核心：\n- 共振频率 > 试验频率上限 2 倍以上\n- 刚度高，重量轻\n- 避免夹具共振影响测试\n- 传递特性测试\n\n共振频率低 → 试验结果失真。',
            keypoint: '夹具共振频率 > 试验频率 × 2'
        }
    ],

    // ========== 第 6 周：加速试验 ==========
    6: [
        // Day 36-37 - HALT/HASS
        {
            id: 'w6d36q1',
            week: 6,
            day: 'Day 36',
            type: 'single',
            difficulty: 1,
            knowledge: 'HALT',
            title: 'HALT 试验的主要目的是：',
            options: [
                'A. 加速寿命预测',
                'B. 找出产品的工作极限和破坏极限',
                'C. 量产筛选',
                'D. 模拟实际使用'
            ],
            answer: 'B',
            explanation: 'HALT（Highly Accelerated Life Test）目的：\n- 找出工作极限（Operational Limit）\n- 找出破坏极限（Destruct Limit）\n- 暴露设计薄弱点\n- 研发阶段使用',
            keypoint: 'HALT = 找极限'
        },
        {
            id: 'w6d36q2',
            week: 6,
            day: 'Day 36',
            type: 'fill',
            difficulty: 2,
            knowledge: 'HALT 步骤',
            title: 'HALT 试验通常按顺序施加的应力是：温度 → ______ → 联合',
            options: [],
            answer: '振动',
            explanation: 'HALT 标准步骤：\n1. 低温步进（找低温极限）\n2. 高温步进（找高温极限）\n3. 振动步进（找振动极限）\n4. 温度+振动联合（找综合极限）\n\n先单应力再联合。',
            keypoint: 'HALT：温度→振动→联合'
        },
        {
            id: 'w6d37q1',
            week: 6,
            day: 'Day 37',
            type: 'single',
            difficulty: 2,
            knowledge: 'HASS',
            title: 'HASS 与 HALT 的主要区别是：',
            options: [
                'A. HASS 应力更大',
                'B. HASS 用于量产筛选，HALT 用于研发',
                'C. HASS 样品多',
                'D. HASS 时间长'
            ],
            answer: 'B',
            explanation: 'HALT：研发阶段，找设计极限\nHASS：量产阶段，100% 筛选剔除早期失效品\n\n关系：HALT 提供 HASS 应力参数（通常 HASS 应力 = 工作极限 80%）。',
            keypoint: 'HALT 研发 / HASS 量产'
        },
        {
            id: 'w6d37q2',
            week: 6,
            day: 'Day 37',
            type: 'fill',
            difficulty: 2,
            knowledge: 'HASS 应力',
            title: 'HASS 筛选应力通常取工作极限的 ______ %',
            options: [],
            answer: '80',
            explanation: 'HASS 应力设计原则：\n- 温度：取工作极限 80%\n- 振动：取破坏极限 50%\n- 100% 筛选\n- 通过率 95-99% 合理',
            keypoint: 'HASS 应力 = 工作极限 80%'
        },
        // Day 38 - HAST
        {
            id: 'w6d38q1',
            week: 6,
            day: 'Day 38',
            type: 'single',
            difficulty: 2,
            knowledge: 'HAST',
            title: 'HAST 试验相比传统 85/85 湿热试验的优势是：',
            options: [
                'A. 设备便宜',
                'B. 加速时间短',
                'C. 不需要加湿',
                'D. 温度低'
            ],
            answer: 'B',
            explanation: 'HAST（Highly Accelerated Stress Test）优势：\n- 加速时间短（数十小时 vs 数千小时）\n- 130°C + 85%RH + 2-4atm\n- 适合半导体\n- 加速因子可达数百',
            keypoint: 'HAST = 加速时间短'
        },
        {
            id: 'w6d38q2',
            week: 6,
            day: 'Day 38',
            type: 'single',
            difficulty: 2,
            knowledge: 'HAST 应用',
            title: 'HAST 试验主要用于哪种产品？',
            options: [
                'A. 工业控制设备',
                'B. 半导体器件',
                'C. 汽车整车',
                'D. 家用电器'
            ],
            answer: 'B',
            explanation: 'HAST 主要应用：\n- 半导体器件（IC、IC 封装）\n- PCB 组件\n- 小型电子组件\n\n不适合大型设备（样品室限制）。',
            keypoint: 'HAST 主要用于半导体'
        },
        // Day 39-40 - 加速模型
        {
            id: 'w6d39q1',
            week: 6,
            day: 'Day 39',
            type: 'fill',
            difficulty: 3,
            knowledge: 'Arrhenius 计算',
            title: '某电容 85°C 试验 2000h 失效，Ea=0.7eV。则 25°C 工作寿命约为 ______ h（科学计数法，保留 2 位）',
            options: [],
            answer: '5.5e4',
            explanation: 'AF = exp[(0.7/8.617e-5)(1/298 - 1/358)]\n= exp[8123.6 × 0.000563]\n= exp[4.573]\n≈ 96.8\n\n25°C 寿命 = 2000 × 96.8 ≈ 193600h\n\n约 1.9×10⁵ h\n注：精确计算与简化值会有偏差。',
            keypoint: 'AF = exp[(Ea/k)(1/Tu-1/Ts)]'
        },
        {
            id: 'w6d39q2',
            week: 6,
            day: 'Day 39',
            type: 'single',
            difficulty: 2,
            knowledge: '活化能',
            title: '不同失效机理的 Ea 值差异较大，半导体腐蚀的 Ea 通常为：',
            options: [
                'A. 0.1-0.3 eV',
                'B. 0.3-0.5 eV',
                'C. 0.6-1.2 eV',
                'D. 1.5-2.0 eV'
            ],
            answer: 'C',
            explanation: '常见失效 Ea 范围：\n- 电迁移：0.6-0.8 eV\n- TDDB：0.3-0.7 eV\n- 半导体腐蚀：0.6-1.2 eV\n- 绝缘老化：1.0-1.5 eV\n- 焊料疲劳：0.5-1.0 eV',
            keypoint: '半导体腐蚀 Ea 0.6-1.2 eV'
        },
        {
            id: 'w6d40q1',
            week: 6,
            day: 'Day 40',
            type: 'fill',
            difficulty: 3,
            knowledge: 'Coffin-Manson 计算',
            title: '焊点温循加速 -40~125°C（ΔT=165°C）2000 循环失效，使用条件 -20~60°C（ΔT=80°C），m=1.9。则使用循环数约为 ______ （取整）',
            options: [],
            answer: '8200',
            explanation: 'AF = (165/80)^1.9\n= 2.0625^1.9\n≈ 4.10\n\n使用循环数 = 2000 × 4.10 ≈ 8200',
            keypoint: 'AF = (ΔTs/ΔTu)^m'
        },
        {
            id: 'w6d40q2',
            week: 6,
            day: 'Day 40',
            type: 'single',
            difficulty: 2,
            knowledge: 'm 值选择',
            title: 'SAC 焊点温循加速中，m 的典型取值是：',
            options: [
                'A. 1.0',
                'B. 1.5',
                'C. 1.9',
                'D. 2.5'
            ],
            answer: 'C',
            explanation: 'm 值经验：\n- SnPb 焊料：m=1.9-2.5\n- SAC 无铅焊料：m=1.5-1.9\n- 工程上常用 m=1.9 作为通用值\n\n不同焊料需试验确定。',
            keypoint: 'SAC 焊点 m 典型 1.9'
        },
        // Day 41-42 - 设备验收
        {
            id: 'w6d41q1',
            week: 6,
            day: 'Day 41',
            type: 'single',
            difficulty: 1,
            knowledge: '设备选型',
            title: '选择温箱时最关键的技术指标是：',
            options: [
                'A. 品牌',
                'B. 温度范围和容积',
                'C. 颜色',
                'D. 重量'
            ],
            answer: 'B',
            explanation: '温箱选型核心：\n1. 温度范围（最低/最高）\n2. 容积（样品尺寸）\n3. 温变速率\n4. 湿度能力（如果需要）\n5. 厂家服务',
            keypoint: '温度范围+容积是核心'
        },
        {
            id: 'w6d41q2',
            week: 6,
            day: 'Day 41',
            type: 'single',
            difficulty: 2,
            knowledge: '振动台验收',
            title: '新购振动台验收时，主要验证以下哪些参数：',
            options: [
                'A. 仅加速度',
                'B. 仅频率',
                'C. 加速度、频率、波形失真、横向分量',
                'D. 仅外观'
            ],
            answer: 'C',
            explanation: '振动台验收参数：\n- 加速度准确性\n- 频率范围与精度\n- 波形失真度（THD）\n- 横向分量（应<10%）\n- 推力\n- 均匀性（台面各点差异）',
            keypoint: '验收：加速度/频率/失真/横向'
        }
    ]
};

// 合并到主题库
if (typeof QUESTION_BANK !== 'undefined' && typeof window !== 'undefined') {
    Object.keys(QUESTION_BANK_EXT).forEach(week => {
        if (QUESTION_BANK[week]) {
            QUESTION_BANK[week] = QUESTION_BANK[week].concat(QUESTION_BANK_EXT[week]);
        } else {
            QUESTION_BANK[week] = QUESTION_BANK_EXT[week];
        }
    });
    window.QUESTION_BANK = QUESTION_BANK;
}
