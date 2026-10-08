// ========== 环境试验项目库 ==========
// 25+ 试验项目，每个含完整说明

const ENVIRONMENT_TESTS = [
    // ===== 气候环境 =====
    {
        id: 'env-001',
        category: '气候环境',
        name: '低温试验',
        icon: '🥶',
        standards: ['GB/T 2423.1', 'IEC 60068-2-1', 'MIL-STD-810 Method 502'],
        purpose: '评估产品在低温环境下的耐受能力，发现材料脆化、润滑失效、密封失效等问题',
        conditions: {
            temperature: '-65 ~ -10°C（按产品规范选择）',
            duration: '16h / 72h / 96h / 168h',
            state: '运行/存储',
            cycle: '恒温'
        },
        severity: [
            { temp: '-10°C', duration: '16h', use: '一般消费电子' },
            { temp: '-25°C', duration: '72h', use: '工业设备' },
            { temp: '-40°C', duration: '96h', use: '车载/工业' },
            { temp: '-55°C', duration: '96h', use: '军工/航空' },
            { temp: '-65°C', duration: '16h', use: '航空机载' }
        ],
        failureModes: ['材料脆化开裂', '润滑失效', '密封漏气', '电池容量下降', 'LCD 响应慢', '塑料件破裂'],
        applications: ['户外产品', '车载', '工业控制', '军工', '航空', '极地科考'],
        equipment: '高低温试验箱（最低温度覆盖）',
        tips: '低温保持时间从产品达到温度稳定后开始计算；开关和通电在最后 1h 进行'
    },
    {
        id: 'env-002',
        category: '气候环境',
        name: '高温试验',
        icon: '🔥',
        standards: ['GB/T 2423.2', 'IEC 60068-2-2', 'MIL-STD-810 Method 501'],
        purpose: '评估产品在高温环境下的耐受能力，发现材料软化、老化、加速化学反应等问题',
        conditions: {
            temperature: '+30 ~ +200°C',
            duration: '16h / 72h / 96h / 168h / 500h / 1000h',
            state: '运行/存储',
            cycle: '恒温'
        },
        severity: [
            { temp: '+40°C', duration: '96h', use: '室内设备' },
            { temp: '+55°C', duration: '96h', use: '商用' },
            { temp: '+70°C', duration: '168h', use: '消费电子' },
            { temp: '+85°C', duration: '500h', use: '工业/汽车' },
            { temp: '+125°C', duration: '1000h', use: '军工/汽车发动机舱' },
            { temp: '+200°C', duration: '48h', use: '特殊高温' }
        ],
        failureModes: ['材料软化', '塑料变形', '电解电容漏液', '焊点氧化', '绝缘老化', '电池鼓包', '油脂蒸发'],
        applications: ['发动机舱', '暖通设备', '沙漠环境', '工业炉旁'],
        equipment: '高低温试验箱（最高温度覆盖）',
        tips: '高温运行试验时监测功能是否正常；存储试验结束后恢复常温再测功能'
    },
    {
        id: 'env-003',
        category: '气候环境',
        name: '温度循环',
        icon: '🔄',
        standards: ['GB/T 2423.22 Na/Nb', 'IEC 60068-2-14', 'MIL-STD-810 Method 503'],
        purpose: '暴露 CTE 失配引起的热应力失效，模拟实际使用中的温度交变',
        conditions: {
            temperature: '按产品规范',
            ramp: '1°C/min / 3°C/min / 5°C/min',
            dwell: '15 min / 30 min',
            cycles: '100 / 500 / 1000'
        },
        severity: [
            { range: '-20~70°C', rate: '3°C/min', cycles: 100, use: '消费电子' },
            { range: '-40~85°C', rate: '3°C/min', cycles: 500, use: '汽车电子' },
            { range: '-40~125°C', rate: '5°C/min', cycles: 1000, use: '军工/发动机舱' },
            { range: '-55~150°C', rate: '5°C/min', cycles: 1000, use: '航空机载' }
        ],
        failureModes: ['焊点疲劳开裂', '封装开裂', '接触不良', 'FPC 分层', '密封失效'],
        applications: ['焊点可靠性', '封装完整性', 'BGA/CSP 器件'],
        equipment: '高低温试验箱（带程序控制）',
        tips: '保持时间从样品所有点达到稳态后开始；监控样品功能在中间检测点'
    },
    {
        id: 'env-004',
        category: '气候环境',
        name: '温度冲击（温冲）',
        icon: '⚡',
        standards: ['GB/T 2423.22 Nc', 'IEC 60068-2-14 Na', 'MIL-STD-810 Method 503.4'],
        purpose: '评估产品在温度突变下的耐受能力，比温循更严酷',
        conditions: {
            transfer: '手动 < 30s / 自动 < 10s',
            dwell: '≥ 15min',
            cycles: '5 / 10 / 50 / 100 / 300 / 500'
        },
        severity: [
            { range: '-40~85°C', transfer: '10s', cycles: 100, use: '汽车' },
            { range: '-55~125°C', transfer: '10s', cycles: 100, use: '军工' },
            { range: '-65~150°C', transfer: '10s', cycles: 500, use: '航空' }
        ],
        failureModes: ['密封失效', '焊点断裂', '材料分层', '玻璃破裂', '陶瓷电容开裂'],
        applications: ['军工', '航天', '户外极端环境'],
        equipment: '两箱法或三箱法温冲试验箱',
        tips: '三箱法转换时间更短（< 10s），更严酷；转换时间要严格控制'
    },
    {
        id: 'env-005',
        category: '气候环境',
        name: '恒定湿热',
        icon: '💧',
        standards: ['GB/T 2423.3', 'IEC 60068-2-78'],
        purpose: '评估产品在恒定高温高湿环境下的耐受能力，主要暴露吸湿、扩散问题',
        conditions: {
            temperature: '40°C ± 2°C',
            humidity: '93% ± 3% RH',
            duration: '21d / 56d'
        },
        severity: [
            { temp: '40°C', rh: '93%', days: 21, use: '一般产品' },
            { temp: '40°C', rh: '93%', days: 56, use: '长寿命产品' }
        ],
        failureModes: ['绝缘电阻下降', '吸湿膨胀', '材料水解', '电化学腐蚀', '霉变'],
        applications: ['热带产品', '长期使用产品', '户内高湿环境'],
        equipment: '恒温恒湿箱',
        tips: '样品不能有凝露；定期监测功能；使用去离子水'
    },
    {
        id: 'env-006',
        category: '气候环境',
        name: '交变湿热',
        icon: '💦',
        standards: ['GB/T 2423.4', 'IEC 60068-2-30'],
        purpose: '评估产品在循环湿热条件下的耐受能力，含凝露过程，模拟实际昼夜温湿变化',
        conditions: {
            cycle: '25°C→40°C→25°C 一个循环',
            humidity: '95% RH（升温段）',
            cycles: '2 / 6 / 21 / 56'
        },
        severity: [
            { cycles: 2, use: '快速筛选' },
            { cycles: 6, use: '一般产品' },
            { cycles: 21, use: '高可靠产品' },
            { cycles: 56, use: '长寿命产品' }
        ],
        failureModes: ['凝露导致的短路', '表面腐蚀', '绝缘下降', '分层', 'CAF'],
        applications: ['户外产品', '周期性温湿环境'],
        equipment: '温湿循环试验箱',
        tips: '注意冷凝过程（升温时易凝露）；中间检测要快'
    },
    {
        id: 'env-007',
        category: '气候环境',
        name: '85/85 试验',
        icon: '🌡️',
        standards: ['JESD22-A101', 'JESD22-A110'],
        purpose: '半导体封装加速湿热试验，评价塑料封装吸湿和可靠性',
        conditions: {
            temperature: '85°C ± 2°C',
            humidity: '85% ± 3% RH',
            duration: '168h / 500h / 1000h / 2000h',
            bias: '可选（推荐加偏压）'
        },
        severity: [
            { hours: 168, use: '快速筛选' },
            { hours: 500, use: '消费电子' },
            { hours: 1000, use: '工业' },
            { hours: 2000, use: '汽车/军工' }
        ],
        failureModes: ['爆米花效应', '封装分层', '焊点腐蚀', '铝布线腐蚀', '参数漂移'],
        applications: ['半导体封装', 'IC', 'PCB 组件'],
        equipment: '恒温恒湿箱（85/85 模式）',
        tips: '推荐加偏压（模拟实际使用）；用去离子水；样品摆放间距 ≥ 50mm'
    },
    {
        id: 'env-008',
        category: '气候环境',
        name: 'HAST 加速湿热',
        icon: '⚗️',
        standards: ['JESD22-A118', 'IEC 62073'],
        purpose: '高压加速湿热试验，比 85/85 快数十倍，主要用于半导体',
        conditions: {
            temperature: '110°C / 120°C / 130°C',
            humidity: '85% RH',
            pressure: '0.2 / 0.3 / 0.4 MPa',
            duration: '24h / 48h / 96h'
        },
        severity: [
            { conditions: '130°C/85%/2atm', duration: '96h', use: '车规 IC' },
            { conditions: '130°C/85%/4atm', duration: '48h', use: '快速筛选' }
        ],
        failureModes: ['封装失效', '铝腐蚀', '分层', 'CAF'],
        applications: ['IC 封装可靠性', '车规芯片', 'BGA 模块'],
        equipment: 'HAST 试验箱（专用）',
        tips: '样品量小（受腔体限制）；用于半导体级筛选；不能完全替代 85/85'
    },
    {
        id: 'env-009',
        category: '气候环境',
        name: '盐雾试验（NSS）',
        icon: '🧂',
        standards: ['GB/T 2423.17', 'GB/T 10125', 'ASTM B117', 'ISO 9227'],
        purpose: '评价金属镀层、有机涂层的耐盐雾腐蚀能力',
        conditions: {
            solution: '5% ± 1% NaCl（去离子水）',
            pH: '6.5 ~ 7.2',
            temperature: '35 ± 2°C',
            duration: '24h / 48h / 96h / 168h / 240h / 480h / 720h'
        },
        severity: [
            { hours: 24, use: '快速筛选' },
            { hours: 48, use: '一般消费' },
            { hours: 96, use: '工业' },
            { hours: 168, use: '汽车' },
            { hours: 480, use: '海洋' },
            { hours: 720, use: '严酷海洋' }
        ],
        failureModes: ['镀层腐蚀', '涂层起泡', '基体锈蚀', '焊点腐蚀'],
        applications: ['海洋产品', '沿海设备', '冬季化雪环境', '户外金属'],
        equipment: '盐雾试验箱',
        tips: '倾斜角 15°-30°；沉降量 1-2ml/80cm²/h；不能用 AASS 替代 NSS'
    },
    {
        id: 'env-010',
        category: '气候环境',
        name: '酸性盐雾（AASS/CASS）',
        icon: '🧪',
        standards: ['GB/T 10125', 'ISO 9227'],
        purpose: '比 NSS 更严酷的盐雾试验，加速评价耐腐蚀性',
        conditions: {
            AASS: { ph: '3.1-3.3（加醋酸）', duration: '同 NSS' },
            CASS: { addition: '0.26g/L CuCl₂', ph: '3.1-3.3', duration: '为 NSS 的 1/3' }
        },
        severity: [
            { type: 'AASS', hours: 96, use: '严酷环境' },
            { type: 'CASS', hours: 24, use: '等同 NSS 96h' }
        ],
        failureModes: ['同 NSS，更快暴露'],
        applications: ['汽车外饰件', '严酷环境金属'],
        equipment: '盐雾试验箱（pH 控制）',
        tips: 'CASS 加速性约为 NSS 的 3-4 倍；与实际环境相关性需验证'
    },
    {
        id: 'env-011',
        category: '气候环境',
        name: '低气压（高海拔）',
        icon: '🏔️',
        standards: ['GB/T 2423.21', 'IEC 60068-2-13', 'MIL-STD-810 Method 500'],
        purpose: '模拟高海拔低气压环境，暴露散热不良、绝缘击穿、密封漏气',
        conditions: {
            altitude: '1500m / 3000m / 4500m / 5500m / 8000m',
            pressure: '对应气压',
            duration: '2h / 6h / 16h'
        },
        severity: [
            { alt: '3000m', pressure: '70kPa', use: '一般高海拔' },
            { alt: '5500m', pressure: '50kPa', use: '航空/高原' },
            { alt: '10000m', pressure: '26kPa', use: '航空机载' },
            { alt: '20000m', pressure: '5.5kPa', use: '航天' }
        ],
        failureModes: ['散热不良', '绝缘击穿', '密封鼓包/漏气', '电晕放电'],
        applications: ['航空机载', '高原使用', '无人机', '便携式医疗'],
        equipment: '低气压试验箱（真空罐）',
        tips: '温度+低气压组合更真实；观察样品是否鼓包；测量电气参数变化'
    },
    {
        id: 'env-012',
        category: '气候环境',
        name: '太阳辐射',
        icon: '☀️',
        standards: ['GB/T 2423.24', 'ASTM G155', 'MIL-STD-810 Method 505'],
        purpose: '模拟阳光照射对材料老化的影响，主要评价塑料、橡胶、涂层',
        conditions: {
            irradiance: '1120W/m²（340nm 以上）',
            cycle: '连续或循环 24h',
            duration: '连续 56d 或循环更多'
        },
        severity: [
            { days: 7, use: '快速筛选' },
            { days: 28, use: '一般产品' },
            { days: 56, use: '长寿命户外' }
        ],
        failureModes: ['塑料褪色', '橡胶硬化', '涂层粉化', 'UV 降解', '热老化'],
        applications: ['户外产品', '光伏', '汽车外饰', '建筑材料'],
        equipment: '氙灯老化箱 / UV 老化箱',
        tips: '氙灯最接近阳光；UVA-340 用于户外；UVB-313 用于加速筛选'
    },
    {
        id: 'env-013',
        category: '气候环境',
        name: 'IP 防护（防尘防水）',
        icon: '💦',
        standards: ['GB/T 4208', 'IEC 60529'],
        purpose: '评价产品防尘防水能力，用 IPXY 等级表示',
        conditions: {
            dust: 'IP5X/IP6X（滑石粉/沙尘）',
            water: 'IPX1-IPX9（滴/溅/喷/浸/高压高温）'
        },
        severity: [
            { level: 'IP54', desc: '防尘+溅水' },
            { level: 'IP65', desc: '尘密+喷水' },
            { level: 'IP67', desc: '尘密+1m/30min 浸水' },
            { level: 'IP68', desc: '尘密+持续浸水（约定）' }
        ],
        failureModes: ['灰尘进入', '进水', '密封失效', '凝露'],
        applications: ['户外产品', '水下设备', '工业防水', '手机', '智能手表'],
        equipment: '沙尘箱 + 滴/溅/喷/浸水设备',
        tips: 'IP67 后老化要考虑；样品需代表量产；先做防尘再做防水'
    },
    // ===== 机械环境 =====
    {
        id: 'env-014',
        category: '机械环境',
        name: '正弦振动',
        icon: '〰️',
        standards: ['GB/T 2423.10', 'IEC 60068-2-6', 'MIL-STD-810 Method 514'],
        purpose: '找产品共振点，验证产品对单一频率振动的耐受能力',
        conditions: {
            frequency: '5-500Hz / 5-2000Hz',
            amplitude: '1g / 2g / 5g / 10g',
            sweep: '1 octave/min',
            axis: 'X / Y / Z',
            duration: '每轴 1h / 2h / 4h'
        },
        severity: [
            { range: '10-55Hz', amp: '0.35mm 位移', use: '一般消费' },
            { range: '10-500Hz', amp: '2g', use: '便携设备' },
            { range: '10-2000Hz', amp: '5g', use: '车载' },
            { range: '10-2000Hz', amp: '10g', use: '航空' }
        ],
        failureModes: ['结构共振破坏', '紧固件松动', '焊点开裂', '元件引脚断裂'],
        applications: ['所有电子产品', '寻找结构薄弱点'],
        equipment: '电动振动台',
        tips: '先扫频找共振点；再 Dwell 测试；共振点 Dwell 10min'
    },
    {
        id: 'env-015',
        category: '机械环境',
        name: '随机振动',
        icon: '🌊',
        standards: ['GB/T 2423.56', 'IEC 60068-2-64', 'MIL-STD-810 Method 514.5'],
        purpose: '模拟真实运输和工作环境中的宽带随机振动',
        conditions: {
            frequency: '10-2000Hz',
            psd: '功率谱密度（g²/Hz）',
            grms: '总加速度均方根',
            axis: 'X / Y / Z 各轴',
            duration: '每轴 1h / 2h / 4h / 8h'
        },
        severity: [
            { grms: '1.04g', use: '商用环境' },
            { grms: '2.16g', use: '便携产品' },
            { grms: '4.0g', use: '车载环境' },
            { grms: '6.0g', use: '越野车辆' },
            { grms: '8.0g+', use: '航空机载' }
        ],
        failureModes: ['疲劳断裂', '紧固件松动', '接触不良', '元件位移'],
        applications: ['运输模拟', '工作环境模拟', '车规', '机载'],
        equipment: '电动振动台 + 随机振动控制器',
        tips: '需计算总 gRMS；用夹具要校准；事先验证夹具响应'
    },
    {
        id: 'env-016',
        category: '机械环境',
        name: '机械冲击',
        icon: '💥',
        standards: ['GB/T 2423.5', 'IEC 60068-2-27', 'MIL-STD-810 Method 516'],
        purpose: '评估产品对瞬态冲击的耐受能力（装卸、运输、碰撞）',
        conditions: {
            waveform: '半正弦 / 锯齿波',
            peak: '15g / 30g / 50g / 100g / 1500g',
            duration: '6ms / 11ms / 18ms',
            directions: '± X / Y / Z 共 6 向',
            shocks: '每方向 3 次'
        },
        severity: [
            { peak: '15g', duration: '11ms', use: '消费电子' },
            { peak: '30g', duration: '11ms', use: '商用' },
            { peak: '50g', duration: '11ms', use: '车载' },
            { peak: '100g', duration: '6ms', use: '机载' },
            { peak: '1500g', duration: '0.5ms', use: '炮弹/枪击' }
        ],
        failureModes: ['结构断裂', '元件引脚断', '焊点瞬断', '电池位移'],
        applications: ['装卸', '运输', '跌落仿真', '机载'],
        equipment: '冲击台',
        tips: '冲击后立即做功能检查（间歇失效检测）；半正弦最常用'
    },
    {
        id: 'env-017',
        category: '机械环境',
        name: '自由跌落',
        icon: '⬇️',
        standards: ['GB/T 2423.7/8', 'IEC 60068-2-31', 'MIL-STD-810 Method 516.6'],
        purpose: '评估产品从一定高度跌落到硬表面的耐受能力',
        conditions: {
            height: '0.5m / 1.0m / 1.2m / 1.5m / 1.8m',
            surface: '钢板 / 木板 / 水泥 / 瓷砖',
            postures: '6 面 + 4 角 + 12 棱 = 22 姿态',
            count: '每姿态 1-2 次'
        },
        severity: [
            { height: '0.5m', use: '桌面使用' },
            { height: '1.0m', use: '手持设备' },
            { height: '1.2m', use: '口袋取出' },
            { height: '1.5m', use: '手机标准' },
            { height: '1.8m', use: '工业手持' }
        ],
        failureModes: ['外壳破裂', '屏幕碎裂', '结构变形', '内部元件位移'],
        applications: ['手机', '平板电脑', '可穿戴', '手持设备', 'POS'],
        equipment: '跌落试验台 / 钢面',
        tips: '包装状态和单机状态分别测；角和棱更严酷；4 角先测'
    },
    {
        id: 'env-018',
        category: '机械环境',
        name: '三综合试验（温+湿+振）',
        icon: '🔀',
        standards: ['GJB 150', 'MIL-STD-810 Method 520', 'IEC 60068-2-50'],
        purpose: '在温度+湿度+振动同时作用下，暴露应力耦合导致的失效',
        conditions: {
            temperature: '-40~85°C',
            humidity: '95% RH',
            vibration: '随机/正弦',
            duration: '24h / 48h / 96h'
        },
        severity: [
            { hours: 24, use: '快速验证' },
            { hours: 96, use: '产品认证' }
        ],
        failureModes: ['耦合失效', '加速腐蚀+机械应力', '热+机械疲劳'],
        applications: ['车规', '军品', '高可靠产品', '机载'],
        equipment: '三综合试验箱（温+湿+振）',
        tips: '设备昂贵；样品多；用真实任务剖面参数；含通电监控'
    },
    {
        id: 'env-019',
        category: '机械环境',
        name: '碰撞',
        icon: '🔁',
        standards: ['GB/T 2423.6', 'IEC 60068-2-29'],
        purpose: '评估产品对重复冲击的耐受能力（运输颠簸）',
        conditions: {
            peak: '10g / 25g / 50g',
            duration: '16ms',
            count: '1000 / 4000 / 10000 次',
            rate: '1-3 次/秒'
        },
        severity: [
            { count: 1000, use: '一般运输' },
            { count: 4000, use: '频繁装卸' },
            { count: 10000, use: '长寿命运输' }
        ],
        failureModes: ['疲劳损伤累积', '紧固件松动', '结构松动'],
        applications: ['便携设备', '频繁运输产品'],
        equipment: '碰撞台',
        tips: '比冲击次数多得多；关注疲劳累积损伤'
    },
    {
        id: 'env-020',
        category: '机械环境',
        name: '恒加速度',
        icon: '🚀',
        standards: ['GB/T 2423.15', 'MIL-STD-810 Method 513'],
        purpose: '评估产品在持续加速度下的耐受能力（火箭、旋转机械）',
        conditions: {
            acceleration: '10g / 50g / 100g / 1000g / 10000g',
            duration: '1min / 10min',
            direction: 'X / Y / Z 三向'
        },
        severity: [
            { acc: '50g', use: '一般机载' },
            { acc: '100g', use: '飞机机动' },
            { acc: '1000g', use: '火箭发射' },
            { acc: '10000g+', use: '炮弹/子弹' }
        ],
        failureModes: ['结构变形', '元件位移', '绝缘击穿', '密度分层'],
        applications: ['火箭', '导弹', '飞机', '旋转机械', '炮弹'],
        equipment: '离心机',
        tips: '确定最严酷方向；与振动/冲击区分'
    },
    // ===== 综合环境 =====
    {
        id: 'env-021',
        category: '综合环境',
        name: 'HALT 高加速寿命试验',
        icon: '🚀',
        standards: ['内部标准（行业最佳实践）'],
        purpose: '快速找出产品的工作极限和破坏极限，研发阶段使用',
        conditions: {
            temperature: '步进到破坏（-50~+120°C 起）',
            vibration: '步进到破坏（5~50g 起）',
            combined: '温+振联合',
            step: '10°C / 5g 步进',
            samples: '3-5 个'
        },
        severity: [
            { desc: '通常 6-12 步达到破坏极限' }
        ],
        failureModes: ['所有可暴露的早期失效'],
        applications: ['研发阶段', '设计验证', '改版评估'],
        equipment: 'HALT 专用设备（液氮+振动）',
        tips: '不用于验收；目标是找极限；保留所有失效模式数据；样品 ≥ 3 个'
    },
    {
        id: 'env-022',
        category: '综合环境',
        name: 'HASS 高加速应力筛选',
        icon: '⚙️',
        standards: ['内部标准（基于 HALT）'],
        purpose: '量产阶段 100% 筛选，剔除早期失效品',
        conditions: {
            temperature: '工作极限的 80%',
            vibration: '破坏极限的 50%',
            duration: '每个产品 5-10min',
            samples: '100%（全检）'
        },
        severity: [
            { yield: '95-99%', desc: '合理范围' }
        ],
        failureModes: ['同 HALT'],
        applications: ['量产筛选', '关键产品', '军工/医疗'],
        equipment: 'HASS 设备（量产型）',
        tips: 'HASS 应力基于 HALT 结果；不应力过大致误杀；监控通过率'
    },
    {
        id: 'env-023',
        category: '综合环境',
        name: '老化筛选',
        icon: '🔥',
        standards: ['MIL-STD-883', 'JESD22', 'GJB 548'],
        purpose: '剔除元器件早期失效（婴儿期失效）',
        conditions: {
            HTOL: '125°C/168h 高温运行',
            TCT: '-65~150°C 10 循环',
            HTSL: '150°C/1000h 存储',
            vibration: '0.1g-20g 扫描'
        },
        severity: [
            { grade: 'A', hours: '168+', use: '军用' },
            { grade: 'B', hours: '96+', use: '工业' },
            { grade: 'C', hours: '48+', use: '消费' }
        ],
        failureModes: ['剔除早期失效品'],
        applications: ['军用元件', '汽车元件', '工业元件'],
        equipment: '高温箱 + 温循箱 + 振动台',
        tips: 'A 级 100% 筛选；不要过筛（误杀合格品）；记录缺陷'
    },
    // ===== 特殊 =====
    {
        id: 'env-024',
        category: '特殊环境',
        name: '流动混合气体腐蚀',
        icon: '💨',
        standards: ['GB/T 2423.51', 'IEC 60068-2-60', 'ISA 71.04'],
        purpose: '模拟工业污染大气，评价耐腐蚀性',
        conditions: {
            gases: 'H₂S / Cl₂ / NO₂',
            concentration: 'ppb 级',
            humidity: '70-75% RH',
            duration: '4d / 10d / 21d'
        },
        severity: [
            { days: 4, use: '一般工业环境' },
            { days: 10, use: '严酷工业环境' },
            { days: 21, use: '化工环境' }
        ],
        failureModes: ['银迁移', '镀层腐蚀', '接触电阻增大', '绝缘下降'],
        applications: ['数据中心', '化工厂', '工业控制', 'PCB 长期使用'],
        equipment: '混合气体腐蚀箱',
        tips: '对银镀层特别敏感；数据中心/通信设备关键'
    },
    {
        id: 'env-025',
        category: '特殊环境',
        name: '沙尘试验',
        icon: '🏜️',
        standards: ['GB/T 2423.37', 'IEC 60068-2-68', 'MIL-STD-810 Method 510'],
        purpose: '模拟沙尘环境对产品的影响',
        conditions: {
            dust: '滑石粉 / 硅砂 / 石英砂',
            concentration: '0.1-10 g/m³',
            duration: '1h / 6h / 24h',
            airflow: '静置或吹尘'
        },
        severity: [
            { hours: 1, use: '轻度' },
            { hours: 6, use: '中度' },
            { hours: 24, use: '沙漠/矿场' }
        ],
        failureModes: ['粉尘进入', '堵塞', '磨损', '接触不良'],
        applications: ['沙漠设备', '矿场', '工程机械', '户外传感器'],
        equipment: '沙尘试验箱',
        tips: '关注 IP5X/IP6X；细粉尘对轴承危害大；IP5X 用滑石粉'
    },
    {
        id: 'env-026',
        category: '特殊环境',
        name: '霉菌试验',
        icon: '🍄',
        standards: ['GB/T 2423.16', 'IEC 60068-2-10', 'MIL-STD-810 Method 508'],
        purpose: '评价产品在湿热环境下抗霉菌生长能力',
        conditions: {
            temperature: '28-30°C',
            humidity: '95% RH',
            duration: '28d / 56d / 84d',
            spores: '混合霉菌孢子'
        },
        severity: [
            { days: 28, use: '一般产品' },
            { days: 56, use: '长寿命产品' },
            { days: 84, use: '热带/军用' }
        ],
        failureModes: ['材料长霉', '绝缘下降', '接触不良', '外观损坏'],
        applications: ['军用装备', '热带产品', '长期存储产品'],
        equipment: '霉菌培养箱',
        tips: '需要专业的微生物实验室；使用标准菌种；防护操作'
    },
    {
        id: 'env-027',
        category: '特殊环境',
        name: '高压蒸煮（PCT）',
        icon: '💧',
        standards: ['JESD22-A102', 'IEC 60068-2-66'],
        purpose: '半导体封装饱和湿热试验，比 85/85 更严酷',
        conditions: {
            temperature: '121°C',
            humidity: '100% RH',
            pressure: '2 atm（饱和）',
            duration: '96h / 168h / 240h'
        },
        severity: [
            { hours: 96, use: '快速筛选' },
            { hours: 168, use: '汽车级' },
            { hours: 240, use: '军用' }
        ],
        failureModes: ['封装失效', '铝腐蚀', '爆米花', '分层', 'CAF'],
        applications: ['IC 封装', '车规半导体', '高可靠芯片'],
        equipment: '高压蒸煮锅（高压釜）',
        tips: '比 85/85 严酷；饱和条件；样品需密封；用于封装级筛选'
    },
    {
        id: 'env-028',
        category: '特殊环境',
        name: '振动+温度综合（混振）',
        icon: '🌡️',
        standards: ['GJB 150.16', 'MIL-STD-810 Method 520'],
        purpose: '在温度循环过程中叠加振动，暴露温度+振动耦合失效',
        conditions: {
            temperature: '工作温度循环',
            vibration: '随机或正弦',
            duration: '每个温区 1-3 循环'
        },
        severity: [
            { desc: '根据产品使用环境定制' }
        ],
        failureModes: ['温+振耦合失效', '密封件老化', '焊点加速开裂'],
        applications: ['车规', '军品', '机载', '高可靠产品'],
        equipment: '振动台+温箱联合',
        tips: '比三综合少湿度，更聚焦温度+振动；适合外露设备'
    }
];

if (typeof window !== 'undefined') {
    window.ENVIRONMENT_TESTS = ENVIRONMENT_TESTS;
}
