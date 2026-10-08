// ========== 可靠性测试工程师题库 - 第 10-12 周 ==========

const QUESTION_BANK_EXT3 = {
    // ========== 第 10 周：标准体系 ==========
    10: [
        // Day 64-69 - 标准
        {
            id: 'w10d64q1',
            week: 10,
            day: 'Day 64',
            type: 'single',
            difficulty: 1,
            knowledge: 'GB/T 2423',
            title: 'GB/T 2423 系列标准主要规范：',
            options: [
                'A. 质量管理体系',
                'B. 环境试验',
                'C. 可靠性预计',
                'D. 软件测试'
            ],
            answer: 'B',
            explanation: 'GB/T 2423 系列：\n- 等同采用 IEC 60068\n- 电工电子产品环境试验\n- 30+ 分册，覆盖温度、湿度、振动、冲击、盐雾等\n\n是国标环境试验的核心标准。',
            keypoint: 'GB/T 2423 = 环境试验'
        },
        {
            id: 'w10d64q2',
            week: 10,
            day: 'Day 64',
            type: 'fill',
            difficulty: 1,
            knowledge: '标准号',
            title: 'GB/T 2423 中"温度循环"对应的分册是 GB/T 2423.______',
            options: [],
            answer: '22',
            explanation: 'GB/T 2423.22 环境试验 温度循环\nGB/T 2423.1 低温\nGB/T 2423.2 高温\nGB/T 2423.3 恒定湿热\nGB/T 2423.5 冲击\nGB/T 2423.10 振动',
            keypoint: '温度循环 = 2423.22'
        },
        {
            id: 'w10d65q1',
            week: 10,
            day: 'Day 65',
            type: 'single',
            difficulty: 2,
            knowledge: '严酷等级',
            title: 'GB/T 2423.22 温度循环的严酷等级包括：',
            options: [
                'A. 仅温度',
                'B. 仅循环次数',
                'C. 温度+循环次数',
                'D. 仅温变速率'
            ],
            answer: 'C',
            explanation: '温度循环严酷等级 = 温度（极值）+ 循环次数\n\n例：-20~70°C, 100 循环\n-40~85°C, 500 循环\n-55~125°C, 1000 循环',
            keypoint: '温循严酷 = 温度+次数'
        },
        {
            id: 'w10d66q1',
            week: 10,
            day: 'Day 66',
            type: 'single',
            difficulty: 2,
            knowledge: 'MIL-STD-810',
            title: 'MIL-STD-810 美军标包含多少个试验方法（Methods）？',
            options: [
                'A. 10 个',
                'B. 20 个',
                'C. 约 28 个',
                'D. 50 个以上'
            ],
            answer: 'C',
            explanation: 'MIL-STD-810H 包含约 28 个 Methods：\n- Method 500 系列：低气压、温度\n- Method 510：太阳辐射\n- Method 514：振动\n- Method 516：冲击\n- Method 520：温度湿度\n等',
            keypoint: '810H 有约 28 个方法'
        },
        {
            id: 'w10d66q2',
            week: 10,
            day: 'Day 66',
            type: 'single',
            difficulty: 2,
            knowledge: '810 与 2423',
            title: 'MIL-STD-810 与 GB/T 2423 的主要区别是：',
            options: [
                'A. 完全相同',
                'B. 810 更注重实战环境模拟，2423 更标准化',
                'C. 2423 更严酷',
                'D. 810 仅用于军工'
            ],
            answer: 'B',
            explanation: '两标准区别：\n- 810：按"任务剖面"剪裁，每个方法详细描述试验流程\n- 2423：标准化试验方法，普适性强\n- 810：定制化、实战化\n- 2423：通用化、模块化',
            keypoint: '810=定制实战；2423=通用标准'
        },
        {
            id: 'w10d67q1',
            week: 10,
            day: 'Day 67',
            type: 'single',
            difficulty: 1,
            knowledge: 'ISO 16750',
            title: 'ISO 16750 主要适用于：',
            options: [
                'A. 军工产品',
                'B. 汽车电子',
                'C. 医疗设备',
                'D. 消费电子'
            ],
            answer: 'B',
            explanation: 'ISO 16750：\n- 道路车辆 - 电气和电子设备环境条件和试验\n- 5 部分：通用/电气负载/机械/气候/化学\n- 汽车电子必标',
            keypoint: 'ISO 16750 = 汽车电子'
        },
        {
            id: 'w10d68q1',
            week: 10,
            day: 'Day 68',
            type: 'single',
            difficulty: 2,
            knowledge: 'AEC-Q',
            title: 'AEC-Q100 Grade 0 的工作温度范围是：',
            options: [
                'A. 0~70°C',
                'B. -40~85°C',
                'C. -40~125°C',
                'D. -40~150°C'
            ],
            answer: 'D',
            explanation: 'AEC-Q100 Grade 等级：\n- Grade 0：-40~150°C（最严酷）\n- Grade 1：-40~125°C\n- Grade 2：-40~105°C\n- Grade 3：-40~85°C\n- Grade 4：0~70°C',
            keypoint: 'Grade 0 = -40~150°C'
        },
        {
            id: 'w10d68q2',
            week: 10,
            day: 'Day 68',
            type: 'fill',
            difficulty: 1,
            knowledge: 'HTOL',
            title: 'AEC-Q100 中 HTOL 是指 ______ 试验（英文全称）',
            options: [],
            answer: 'High Temperature Operating Life',
            explanation: 'HTOL = High Temperature Operating Life\n高温工作寿命试验\n最严酷的加速寿命试验之一\n通常 125°C 或 150°C，1000h 起',
            keypoint: 'HTOL = 高温工作寿命'
        },
        {
            id: 'w10d69q1',
            week: 10,
            day: 'Day 69',
            type: 'single',
            difficulty: 1,
            knowledge: 'UN 38.3',
            title: 'UN 38.3 主要针对：',
            options: [
                'A. 半导体器件',
                'B. 锂电池运输',
                'C. 通讯设备',
                'D. 汽车电子'
            ],
            answer: 'B',
            explanation: 'UN 38.3：\n- 联合国危险品运输试验\n- 锂电池/电池组空运/海运/陆运必测\n- T1-T8 八个试验（高度模拟、温度、振动、冲击、外部短路、撞击、过充、强制放电）',
            keypoint: 'UN 38.3 = 锂电池运输'
        },
        {
            id: 'w10d69q2',
            week: 10,
            day: 'Day 69',
            type: 'single',
            difficulty: 2,
            knowledge: '标准选择',
            title: '某消费电子产品需要做可靠性试验，最常引用的标准是：',
            options: [
                'A. MIL-STD-810',
                'B. ISO 16750',
                'C. GB/T 2423',
                'D. AEC-Q100'
            ],
            answer: 'C',
            explanation: '不同领域：\n- 消费电子：GB/T 2423 系列（国标）\n- 汽车：AEC-Q、ISO 16750\n- 军工：MIL-STD-810、GJB\n- 通讯：Telcordia GR',
            keypoint: '消费电子首选 GB/T 2423'
        }
    ],

    // ========== 第 11 周：跨部门协作 ==========
    11: [
        // Day 71-77
        {
            id: 'w11d71q1',
            week: 11,
            day: 'Day 71',
            type: 'single',
            difficulty: 1,
            knowledge: '设计评审',
            title: '可靠性角度的设计评审应关注：',
            options: [
                'A. 仅外观',
                'B. 降额、热设计、冗余等',
                'C. 仅成本',
                'D. 仅功能'
            ],
            answer: 'B',
            explanation: '可靠性设计评审要点：\n- 降额设计\n- 热设计\n- 冗余设计\n- EMC\n- 可测试性、可制造性\n- 失效安全（Fail Safe）',
            keypoint: '降额+热+冗余+EMC+DFM'
        },
        {
            id: 'w11d72q1',
            week: 11,
            day: 'Day 72',
            type: 'single',
            difficulty: 2,
            knowledge: 'FA 流程',
            title: '失效分析（FA）的标准流程顺序是：',
            options: [
                'A. 直接剖片分析',
                'B. 外观→电学→无损→破坏性→综合',
                'C. 随机拆解',
                'D. 仅靠经验'
            ],
            answer: 'B',
            explanation: 'FA 标准流程：\n1. 现象确认（外观、目检）\n2. 非破坏分析（X-ray、超声）\n3. 电学测试（曲线追踪、I-V）\n4. 破坏性分析（剖片、去封装）\n5. 物理/化学分析（SEM、EDS）\n6. 综合判定',
            keypoint: 'FA：非破坏→破坏'
        },
        {
            id: 'w11d72q2',
            week: 11,
            day: 'Day 72',
            type: 'single',
            difficulty: 2,
            knowledge: 'FA 工具',
            title: 'SEM/EDS 主要用于失效分析的哪个阶段？',
            options: [
                'A. 外观检查',
                'B. 微观结构和成分分析',
                'C. 电气测试',
                'D. 温度测试'
            ],
            answer: 'B',
            explanation: 'SEM/EDS：\n- SEM（扫描电镜）：高倍微观形貌\n- EDS（能谱）：元素成分\n- 用于：判断腐蚀物、断裂源、污染物\n- 分辨率：纳米级',
            keypoint: 'SEM/EDS = 微观+成分'
        },
        {
            id: 'w11d73q1',
            week: 11,
            day: 'Day 73',
            type: 'single',
            difficulty: 1,
            knowledge: '8D',
            title: '8D 报告中的 D4 是：',
            options: [
                'A. 团队组建',
                'B. 临时遏制措施',
                'C. 根本原因分析',
                'D. 永久对策'
            ],
            answer: 'C',
            explanation: '8D 流程：\nD1 团队组建\nD2 问题描述\nD3 临时遏制\nD4 根因分析\nD5 永久对策\nD6 实施\nD7 预防再发\nD8 团队表彰',
            keypoint: 'D4 = 根因分析'
        },
        {
            id: 'w11d73q2',
            week: 11,
            day: 'Day 73',
            type: 'single',
            difficulty: 1,
            knowledge: '5Why',
            title: '"5Why"分析法的核心是：',
            options: [
                'A. 问 5 个聪明问题',
                'B. 连续追问 5 个为什么，找到根因',
                'C. 5 个人一起讨论',
                'D. 5 天内解决'
            ],
            answer: 'B',
            explanation: '5Why 分析：\n- 对问题连续追问 5 次"为什么"\n- 从表象追到根因\n- 不必拘泥于 5 次，可能 3 次或 7 次\n- 例：机器停了 → 保险丝断了 → 过载 → 轴承磨损 → 缺润滑油',
            keypoint: '5Why = 连续追问'
        },
        {
            id: 'w11d74q1',
            week: 11,
            day: 'Day 74',
            type: 'single',
            difficulty: 2,
            knowledge: 'CNAS/CMA',
            title: 'CNAS 与 CMA 的主要区别是：',
            options: [
                'A. CNAS 是国家认可，CMA 是资质认定',
                'B. 两者完全相同',
                'C. CMA 是国际认证',
                'D. CNAS 仅适用外资'
            ],
            answer: 'A',
            explanation: 'CNAS：中国合格评定国家认可委员会（国际互认）\nCMA：检验检测机构资质认定（国内法律要求）\n\n第三方检测机构通常需要两者都具备。',
            keypoint: 'CNAS=国际互认；CMA=国内法定'
        },
        {
            id: 'w11d74q2',
            week: 11,
            day: 'Day 74',
            type: 'single',
            difficulty: 2,
            knowledge: '体系文件',
            title: 'CNAS 实验室体系文件结构层次一般是：',
            options: [
                'A. 手册+程序+作业指导+记录',
                'B. 仅一本手册',
                'C. 仅程序文件',
                'D. 随机文件'
            ],
            answer: 'A',
            explanation: '四级文件结构：\n一级：质量手册（纲领）\n二级：程序文件（流程）\n三级：作业指导书（SOP）\n四级：记录表单（证据）\n\n每级是上级的细化和支撑。',
            keypoint: '手册→程序→SOP→记录'
        },
        {
            id: 'w11d75q1',
            week: 11,
            day: 'Day 75',
            type: 'single',
            difficulty: 1,
            knowledge: 'LIMS',
            title: 'LIMS 系统的核心功能是：',
            options: [
                'A. 财务记账',
                'B. 实验室信息管理（样品、数据、报告）',
                'C. 客户管理',
                'D. 邮件系统'
            ],
            answer: 'B',
            explanation: 'LIMS = Laboratory Information Management System\n- 样品登记/流转\n- 数据采集/存储\n- 报告生成\n- 仪器连接\n- 人员权限',
            keypoint: 'LIMS = 实验室信息管理'
        },
        {
            id: 'w11d76q1',
            week: 11,
            day: 'Day 76',
            type: 'single',
            difficulty: 1,
            knowledge: '甘特图',
            title: '甘特图主要展示：',
            options: [
                'A. 成本预算',
                'B. 项目进度（时间 vs 任务）',
                'C. 组织架构',
                'D. 客户关系'
            ],
            answer: 'B',
            explanation: '甘特图（Gantt Chart）：\n- 横轴：时间\n- 纵轴：任务\n- 条形长度：任务持续时间\n- 用于项目计划和进度跟踪',
            keypoint: '甘特图 = 时间-任务图'
        },
        {
            id: 'w11d76q2',
            week: 11,
            day: 'Day 76',
            type: 'single',
            difficulty: 2,
            knowledge: '关键路径',
            title: '"关键路径"是指：',
            options: [
                'A. 最重要的路径',
                'B. 项目中决定总工期的任务链',
                'C. 成本最高的路径',
                'D. 风险最大的路径'
            ],
            answer: 'B',
            explanation: '关键路径（Critical Path）：\n- 项目网络图中工期最长的路径\n- 决定项目总工期\n- 关键路径上任务延误 = 项目延误\n- 重点监控和管理',
            keypoint: '关键路径 = 最长任务链'
        }
    ],

    // ========== 第 12 周：项目实战 ==========
    12: [
        // 相机模组实战
        {
            id: 'w12d78q1',
            week: 12,
            day: 'Day 78',
            type: 'single',
            difficulty: 1,
            knowledge: '项目章程',
            title: '项目章程的核心要素不包括：',
            options: [
                'A. 项目目标',
                'B. 范围界定',
                'C. 具体元器件型号',
                'D. 关键里程碑'
            ],
            answer: 'C',
            explanation: '项目章程核心：\n- 项目目标\n- 范围（做什么/不做什么）\n- 干系人\n- 关键里程碑\n- 风险初识\n- 资源估算\n\n具体元器件型号是设计阶段的事。',
            keypoint: '章程=目标+范围+里程碑'
        },
        {
            id: 'w12d79q1',
            week: 12,
            day: 'Day 79',
            type: 'single',
            difficulty: 2,
            knowledge: '试验方案',
            title: '相机模组环境试验方案设计时，优先考虑：',
            options: [
                'A. 所有环境应力都做',
                'B. 根据产品实际使用环境选择相关试验',
                'C. 随机选择',
                'D. 只做高温'
            ],
            answer: 'B',
            explanation: '试验方案设计原则：\n- 基于产品实际使用环境\n- 基于失效模式分析\n- 平衡成本与覆盖率\n- 优先核心应力\n\n相机模组：温循、湿热、振动、跌落为核心。',
            keypoint: '基于使用环境选试验'
        },
        {
            id: 'w12d79q2',
            week: 12,
            day: 'Day 79',
            type: 'single',
            difficulty: 2,
            knowledge: '相机模组',
            title: '相机模组特有的失效模式"镜头雾化"主要由哪种应力引起？',
            options: [
                'A. 振动',
                'B. 温湿度',
                'C. 静电',
                'D. 跌落'
            ],
            answer: 'B',
            explanation: '镜头雾化：\n- 高温高湿下镜头内部结雾\n- 不可恢复\n- 主要由温湿度应力引起\n- 试验：60°C/90%RH 或 85/85',
            keypoint: '镜头雾化 = 温湿度'
        },
        {
            id: 'w12d80q1',
            week: 12,
            day: 'Day 80',
            type: 'single',
            difficulty: 2,
            knowledge: '夹具设计',
            title: '相机模组振动夹具设计时，最关键的是：',
            options: [
                'A. 夹具美观',
                'B. 共振频率高于试验频率',
                'C. 重量最大',
                'D. 成本最低'
            ],
            answer: 'B',
            explanation: '相机模组夹具：\n- 共振频率 > 试验频率上限 2 倍\n- 重量轻（避免过载）\n- 安装面平整（保证振动传递）\n- 不影响散热（如果加温试验）',
            keypoint: '夹具共振频率 > 试验频率'
        },
        {
            id: 'w12d81q1',
            week: 12,
            day: 'Day 81',
            type: 'single',
            difficulty: 1,
            knowledge: 'SOP',
            title: '试验 SOP 应包含以下哪些内容：',
            options: [
                'A. 仅试验条件',
                'B. 试验条件+步骤+判据+异常处理',
                'C. 仅试验步骤',
                'D. 仅设备操作'
            ],
            answer: 'B',
            explanation: 'SOP 必备：\n- 适用范围\n- 设备/工装\n- 样品要求\n- 试验条件\n- 操作步骤\n- 数据记录\n- 判据\n- 异常处理',
            keypoint: 'SOP=条件+步骤+判据+异常'
        },
        {
            id: 'w12d82q1',
            week: 12,
            day: 'Day 82',
            type: 'single',
            difficulty: 1,
            knowledge: '数据记录',
            title: '试验数据记录应遵循：',
            options: [
                'A. 试验后补记',
                'B. 边做边记，原始数据不可涂改',
                'C. 仅记录异常',
                'D. 凭记忆记录'
            ],
            answer: 'B',
            explanation: '数据记录原则：\n- 原始记录（第一手）\n- 同步记录（不能回忆）\n- 不可涂改（错误划线签字）\n- 完整可追溯\n- CNAS/CMA 体系要求',
            keypoint: '同步+不可改+可追溯'
        },
        {
            id: 'w12d83q1',
            week: 12,
            day: 'Day 83',
            type: 'single',
            difficulty: 2,
            knowledge: '数据分析',
            title: '用 Minitab 拟合威布尔分布时，最重要的输出指标是：',
            options: [
                'A. 拟合度 R²',
                'B. AD 统计量和 P 值',
                'C. 颜色',
                'D. 样本数'
            ],
            answer: 'B',
            explanation: '威布尔拟合优度：\n- AD（Anderson-Darling）越小越好\n- P 值 > 0.05 表示拟合可接受\n- 概率图：数据点接近直线\n- β、η 是参数估计',
            keypoint: 'AD + P 值 + 概率图'
        },
        {
            id: 'w12d83q2',
            week: 12,
            day: 'Day 83',
            type: 'single',
            difficulty: 2,
            knowledge: '加速因子',
            title: '某相机模组 85°C 试验 1000h 失效，AF=8（85→25°C），则 25°C 工作寿命约为：',
            options: [
                'A. 1000h',
                'B. 8000h',
                'C. 5000h',
                'D. 500h'
            ],
            answer: 'B',
            explanation: '使用条件寿命 = 试验寿命 × AF\n= 1000h × 8\n= 8000h\n\nAF 表示加速倍数，工作条件下要用更长时间才会失效。',
            keypoint: '使用寿命 = 试验寿命 × AF'
        },
        {
            id: 'w12d84q1',
            week: 12,
            day: 'Day 84',
            type: 'single',
            difficulty: 1,
            knowledge: '报告结构',
            title: '可靠性试验报告的核心结构不包括：',
            options: [
                'A. 试验目的和依据',
                'B. 试验条件和样品',
                'C. 个人感想',
                'D. 数据分析和结论'
            ],
            answer: 'C',
            explanation: '报告必备：\n- 目的与依据\n- 样品信息\n- 设备与试验条件\n- 过程记录\n- 数据与图表\n- 失效分析\n- 结论与建议\n\n个人感想不属于技术报告。',
            keypoint: '目的+条件+数据+结论'
        },
        {
            id: 'w12d84q2',
            week: 12,
            day: 'Day 84',
            type: 'single',
            difficulty: 2,
            knowledge: '报告建议',
            title: '试验报告的"建议"部分应包含：',
            options: [
                'A. 个人评价',
                'B. 设计/工艺改进建议和后续行动',
                'C. 与产品无关的话题',
                'D. 仅赞美之词'
            ],
            answer: 'B',
            explanation: '建议部分：\n- 设计改进建议\n- 工艺改进建议\n- 后续验证建议\n- 量产监控建议\n- 风险预警\n\n应基于数据，客观可执行。',
            keypoint: '建议=可执行+基于数据'
        }
    ]
};

// 合并
if (typeof QUESTION_BANK !== 'undefined' && typeof window !== 'undefined') {
    Object.keys(QUESTION_BANK_EXT3).forEach(week => {
        if (QUESTION_BANK[week]) {
            QUESTION_BANK[week] = QUESTION_BANK[week].concat(QUESTION_BANK_EXT3[week]);
        } else {
            QUESTION_BANK[week] = QUESTION_BANK_EXT3[week];
        }
    });
    window.QUESTION_BANK = QUESTION_BANK;
}
