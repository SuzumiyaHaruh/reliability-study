// ========== 高级可靠性工程师习题（80 道） ==========

const ADVANCED_QUESTIONS = [
    // ===== 系统可靠性建模（15 道）=====
    {
        id: 'a-sys01', week: 101, day: '高级·1.1', type: 'single', difficulty: 2,
        knowledge: '桥式网络',
        title: '5 元件桥式网络（每元件 R=0.9）的系统可靠度约为：',
        options: ['A. 0.85', 'B. 0.90', 'C. 0.95', 'D. 0.99'],
        answer: 'C',
        explanation: '桥式网络用条件概率法：\nP(C 工作)·R1 + P(C 失效)·R2\n= 0.9 × 0.963 + 0.1 × 0.81\n= 0.867 + 0.081\n= 0.948 ≈ 0.95\n其中 R1 = 1-(1-0.9)² ≈ 0.99，R2 = 1-(1-0.9²)² = 0.963。',
        keypoint: '桥式网络用条件概率法分解'
    },
    {
        id: 'a-sys02', week: 101, day: '高级·1.1', type: 'single', difficulty: 2,
        knowledge: 'CCF',
        title: 'β 因子模型中，β=0.1 表示：',
        options: ['A. 10% 元器件失效', 'B. 10% 失效率来自共因失效', 'C. 失效率降为 10%', 'D. 共因失效修正系数为 10'],
        answer: 'B',
        explanation: 'β 因子：\nλ_CCF = β × λ\nβ 表示总失效率中由共因导致的比例\nβ=0.1 → 10% 失效是共因引起\nβ=0 → 无共因（独立）\nβ=1 → 全部共因',
        keypoint: 'β = 共因失效率占比'
    },
    {
        id: 'a-sys03', week: 101, day: '高级·1.1', type: 'single', difficulty: 2,
        knowledge: '动态 RBD',
        title: '双机冷备系统比双机热备系统：',
        options: ['A. 可靠度更高', 'B. 可靠度更低', 'C. 一样', 'D. 取决于切换时间'],
        answer: 'B',
        explanation: '冷备：备机断电，不累积失效率，但需切换时间\n热备：备机通电，累积失效率，但切换快\n\n冷备的缺点：\n- 切换延迟（瞬时不可用）\n- 切换失败风险\n\n热备总体可靠度更高（除电源等共享失效）。',
        keypoint: '热备 > 冷备 > 单机'
    },
    {
        id: 'a-sys04', week: 102, day: '高级·1.2', type: 'single', difficulty: 2,
        knowledge: 'Markov 基础',
        title: 'Markov 过程的核心假设是：',
        options: ['A. 状态独立', 'B. 无记忆性（未来只依赖现在）', 'C. 失效率恒定', 'D. 不可修'],
        answer: 'B',
        explanation: 'Markov 核心假设：\n- 无记忆性：未来状态只依赖当前状态\n- 与过去无关（这是优点也是限制）\n\n可放宽为半 Markov（任意维修时间）。',
        keypoint: 'Markov = 无记忆性'
    },
    {
        id: 'a-sys05', week: 102, day: '高级·1.2', type: 'fill', difficulty: 2,
        knowledge: 'Markov 稳态',
        title: '单部件工作-失效 Markov 系统，λ=0.001/h，μ=1/h，稳态可用度 A = ______ （保留 4 位小数）',
        options: [],
        answer: '0.9990',
        explanation: 'A = μ/(λ+μ)\n= 1/(0.001+1)\n= 1/1.001\n≈ 0.9990',
        keypoint: 'A = μ/(λ+μ)'
    },
    {
        id: 'a-sys06', week: 102, day: '高级·1.2', type: 'single', difficulty: 3,
        knowledge: '双机并联 Markov',
        title: '2 个相同单元并联，λ=0.001/h，μ=1/h（指数分布），系统稳态可用度约为：',
        options: ['A. 0.9990', 'B. 0.9995', 'C. 0.9999', 'D. 0.99999'],
        answer: 'C',
        explanation: '2 单元并联 Markov 稳态：\nA ≈ 2μ²/(2λ²+2λμ+μ²) ≈ 1 - 2λ²/μ²\n= 1 - 2×(0.001)²/1²\n= 1 - 2×10⁻⁶\n= 0.999998 ≈ 0.9999\n\n可见双机并联极大提高可用度。',
        keypoint: '并联显著提高可用度'
    },
    {
        id: 'a-sys07', week: 103, day: '高级·1.3', type: 'single', difficulty: 2,
        knowledge: 'PAND 门',
        title: '故障树中的 PAND（顺序与门）要求：',
        options: ['A. 输入事件同时发生', 'B. 输入事件按指定顺序发生', 'C. 任一输入事件发生即可', 'D. 输入事件互斥'],
        answer: 'B',
        explanation: 'PAND = Priority AND：\n- 必须按指定顺序\n- 顺序错误则不触发输出\n\n例：检测器失效 PAND 启动器失效 → 系统失效\n但反向不成立。',
        keypoint: 'PAND = 顺序与'
    },
    {
        id: 'a-sys08', week: 103, day: '高级·1.3', type: 'single', difficulty: 2,
        knowledge: 'CSP 门',
        title: '冷备门（CSP）表示：',
        options: ['A. 备机一直通电', 'B. 备机失效后才工作（失效率从 0 累加）', 'C. 备机一直不工作', 'D. 备机自动切换'],
        answer: 'B',
        explanation: 'CSP = Cold Spare：\n- 备机不工作时不老化\n- 主单元失效后切换\n- 备机失效率从切换时刻开始累加\n\nHSP（热备）：备机一直工作，累积失效率。',
        keypoint: 'CSP = 失效率从切换后累加'
    },
    // ===== 多应力加速（10 道）=====
    {
        id: 'a-acc01', week: 104, day: '高级·2.1', type: 'single', difficulty: 2,
        knowledge: 'Peck 模型',
        title: 'Peck 模型中典型 Ea 和 n 值分别为：',
        options: ['A. Ea=0.3eV, n=1', 'B. Ea=0.8eV, n=3', 'C. Ea=1.2eV, n=5', 'D. Ea=2.0eV, n=10'],
        answer: 'B',
        explanation: 'Peck 模型典型参数：\n- Ea = 0.7-1.0 eV（化学反应）\n- n = 2-3（湿度敏感度）\n\n不同失效机理会有偏差，需试验确定。',
        keypoint: 'Peck: Ea=0.8eV, n=3'
    },
    {
        id: 'a-acc02', week: 104, day: '高级·2.1', type: 'fill', difficulty: 3,
        knowledge: 'Peck 计算',
        title: '85/85 试验 1000h，Ea=0.8eV，n=3。推 25°C/50%RH 使用寿命（AF 约 200），则使用约 ______ 年',
        options: [],
        answer: '23',
        explanation: '使用时间 = 试验时间 × AF\n= 1000h × 200\n= 200000h\n≈ 22.8 年\n\n约 23 年。',
        keypoint: '使用时间 = 试验 × AF'
    },
    {
        id: 'a-acc03', week: 104, day: '高级·2.1', type: 'single', difficulty: 2,
        knowledge: '模型选择',
        title: '焊点温循加速试验应选择：',
        options: ['A. Arrhenius', 'B. Coffin-Manson', 'C. Peck', 'D. 逆幂律'],
        answer: 'B',
        explanation: '焊点温循失效机理：\n- 热疲劳（CTE 失配）\n- 应变主导\n- 与温差强相关\n\nCoffin-Manson 公式：AF = (ΔTs/ΔTu)^m 描述温差影响。\nArrhenius 适合化学反应（不适合焊点机械疲劳）。',
        keypoint: '焊点温循 → Coffin-Manson'
    },
    {
        id: 'a-acc04', week: 104, day: '高级·2.1', type: 'single', difficulty: 2,
        knowledge: 'Eyring',
        title: '绝缘击穿试验应选择哪种模型？',
        options: ['A. Arrhenius', 'B. Coffin-Manson', 'C. Eyring（温度+电压）', 'D. 逆幂律'],
        answer: 'C',
        explanation: '绝缘击穿：\n- 温度加速：化学反应\n- 电压加速：电场致击穿\n- 双应力：Eyring 模型\n\nAF = Arrhenius × exp[γ(Vs-Vu)]',
        keypoint: '绝缘击穿 → Eyring'
    },
    {
        id: 'a-acc05', week: 105, day: '高级·2.2', type: 'single', difficulty: 2,
        knowledge: '竞争失效',
        title: '识别竞争失效模式最直接的方法是：',
        options: ['A. 加速试验', 'B. 现场失效统计分析', 'C. 仿真', 'D. 查标准'],
        answer: 'B',
        explanation: '现场失效统计分析：\n- 最真实反映各模式比例\n- 大量样本基础\n- 可与加速试验对比\n\n其他方法都是补充。',
        keypoint: '现场数据是金标准'
    },
    {
        id: 'a-acc06', week: 105, day: '高级·2.2', type: 'single', difficulty: 2,
        knowledge: '模式识别',
        title: '威布尔概率图上数据呈折线（两段斜率）通常表示：',
        options: ['A. 试验误差', 'B. 两种竞争失效模式', 'C. 样品质量问题', 'D. 试验时间不够'],
        answer: 'B',
        explanation: '威布尔概率图折线 = 多模式：\n- 早期段斜率：早期失效模式\n- 后期段斜率：磨耗失效模式\n\n可分别拟合两个威布尔分布，组合成总分布。',
        keypoint: '折线 = 多模式'
    },
    // ===== 可靠性预计（10 道）=====
    {
        id: 'a-pred01', week: 106, day: '高级·3.1', type: 'single', difficulty: 2,
        knowledge: 'SR-332',
        title: 'Telcordia SR-332 相比 MIL-HDBK-217 的主要改进是：',
        options: ['A. 更复杂的公式', 'B. 可融合现场数据', 'C. 只适用军工', 'D. 不需要参数'],
        answer: 'B',
        explanation: 'SR-332 创新：\n- λ_G 可基于现场数据更新\n- Bayesian 融合\n- 现代产品适用\n\nMIL-HDBK-217 较静态，2010 年代起逐步被 SR-332 取代。',
        keypoint: 'SR-332 = 融合现场数据'
    },
    {
        id: 'a-pred02', week: 106, day: '高级·3.1', type: 'fill', difficulty: 2,
        knowledge: '预计计算',
        title: '系统 50 个 IC，每个 λ_G=10×10⁻⁹/h，π_E=2，π_Q=1，π_T=3，则系统 λ ≈ ______ ×10⁻⁶/h',
        options: [],
        answer: '3.0',
        explanation: '每个 IC：λ = 10e-9 × 2 × 1 × 3 = 60e-9 = 60 FIT\n50 IC：λ = 50 × 60e-9 = 3000e-9 = 3×10⁻⁶/h',
        keypoint: 'λ_system = Σλᵢ'
    },
    {
        id: 'a-pred03', week: 106, day: '高级·3.1', type: 'single', difficulty: 2,
        knowledge: '预计局限',
        title: '可靠性预计最主要的局限是：',
        options: ['A. 公式太复杂', 'B. 假设过于乐观，忽略集成度、工艺、软件', 'C. 不够通用', 'D. 需要查表'],
        answer: 'B',
        explanation: '预计局限：\n- IC 简单按 1 个计算（实际含数十亿晶体管）\n- 不含软件失效\n- 不含工艺缺陷（占总失效 30-50%）\n- 集成度提升后预测更不可靠',
        keypoint: '预计通常严重高估'
    },
    // ===== 高级数据分析（8 道）=====
    {
        id: 'a-data01', week: 107, day: '高级·4.1', type: 'single', difficulty: 2,
        knowledge: '删失数据',
        title: '20 个样品试验，10 个失效，10 个未失效仍在运行。这种数据是：',
        options: ['A. 完整数据', 'B. 右删失数据', 'C. 左删失数据', 'D. 无效数据'],
        answer: 'B',
        explanation: '右删失：\n- 试验结束时事件未发生\n- 知道的是"大于某时间"\n- 仍是有价值信息（说明至少能工作这么久）\n\n应使用 MLE 等方法利用全部信息。',
        keypoint: '右删失 = 试验结束未失效'
    },
    {
        id: 'a-data02', week: 107, day: '高级·4.1', type: 'single', difficulty: 2,
        knowledge: 'MLE',
        title: '最大似然估计（MLE）的核心思想是：',
        options: ['A. 最小化误差', 'B. 让观察到的数据出现概率最大', 'C. 最小化方差', 'D. 最大化相关性'],
        answer: 'B',
        explanation: 'MLE 思想：\n- 给定数据，反推参数\n- 选使数据出现概率最大的参数\n- 即最大化似然函数 L(θ|data)',
        keypoint: 'MLE = 数据概率最大'
    },
    {
        id: 'a-data03', week: 107, day: '高级·4.1', type: 'single', difficulty: 2,
        knowledge: '退化分析',
        title: '退化数据分析适用于：',
        options: ['A. 短寿命产品', 'B. 长寿命产品（不可能等到失效）', 'C. 一次性产品', 'D. 软件产品'],
        answer: 'B',
        explanation: '退化分析适用：\n- 长寿命（10+ 年）\n- 性能参数渐变\n- 不能等失效\n\n方法：定期测量 → 拟合退化路径 → 外推到失效阈值。',
        keypoint: '退化 = 长寿命产品'
    },
    // ===== 失效物理（10 道）=====
    {
        id: 'a-pof01', week: 108, day: '高级·5.1', type: 'single', difficulty: 2,
        knowledge: '电迁移',
        title: '电迁移（EM）失效的物理机理是：',
        options: ['A. 热膨胀', 'B. 电子撞击金属原子使其迁移', 'C. 化学反应', 'D. 机械应力'],
        answer: 'B',
        explanation: '电迁移：\n- 高电流密度\n- 电子动量传递给金属原子\n- 原子沿电子流方向迁移\n- 形成空洞（开路）和小丘（短路）\n\n加速：温度 + 电流密度',
        keypoint: 'EM = 金属原子被电子撞走'
    },
    {
        id: 'a-pof02', week: 108, day: '高级·5.1', type: 'single', difficulty: 2,
        knowledge: 'TDDB',
        title: 'TDDB 主要影响 IC 的哪个部分？',
        options: ['A. 金属互连', 'B. 栅氧介质', 'C. 封装', 'D. 引脚'],
        answer: 'B',
        explanation: 'TDDB（Time Dependent Dielectric Breakdown）：\n- 栅氧介质逐步退化\n- 缺陷累积形成导电通道\n- 最终短路\n\n加速：温度 + 电压',
        keypoint: 'TDDB = 栅氧'
    },
    {
        id: 'a-pof03', week: 108, day: '高级·5.1', type: 'single', difficulty: 2,
        knowledge: 'NBTI',
        title: 'NBTI 失效主要发生在：',
        options: ['A. NMOS 器件', 'B. PMOS 器件', 'C. 电阻', 'D. 电容'],
        answer: 'B',
        explanation: 'NBTI（Negative Bias Temperature Instability）：\n- PMOS 在负栅压下\n- 高温加速\n- 阈值电压漂移\n\n加速：温度 + 负栅压 + 时间',
        keypoint: 'NBTI = PMOS'
    },
    {
        id: 'a-pof04', week: 108, day: '高级·5.1', type: 'single', difficulty: 2,
        knowledge: 'CAF',
        title: 'PCB 上的 CAF（Conductive Anodic Filament）失效机理是：',
        options: ['A. 焊点开裂', 'B. 阳极金属沿玻纤界面迁移形成导电丝', 'C. 铜箔腐蚀', 'D. 阻焊脱落'],
        answer: 'B',
        explanation: 'CAF：\n- 阳极 Cu 溶解\n- 沿玻纤界面迁移\n- 阴极还原沉积\n- 形成导电丝\n- 短路\n\n加速：温度 + 湿度 + 偏压',
        keypoint: 'CAF = 玻纤界面导电丝'
    },
    {
        id: 'a-pof05', week: 108, day: '高级·5.1', type: 'single', difficulty: 2,
        knowledge: '爆米花',
        title: '"爆米花效应"主要发生在 IC 封装的哪个阶段？',
        options: ['A. 运输中', 'B. 回流焊时', 'C. 使用中', 'D. 测试时'],
        answer: 'B',
        explanation: '爆米花效应：\n- 封装吸潮\n- 回流焊高温（~260°C）\n- 水汽急剧膨胀\n- 封装开裂\n\n预防：\n- 防潮包装\n- 烘烤除湿\n- 低吸潮材料',
        keypoint: '爆米花 = 回流焊时封装开裂'
    },
    // ===== 鉴定试验（8 道）=====
    {
        id: 'a-cert01', week: 109, day: '高级·6.1', type: 'fill', difficulty: 2,
        knowledge: '样本量',
        title: '要达到 95% 置信度、5% 失效率，0 失败方案需要 ______ 个样品',
        options: [],
        answer: '59',
        explanation: 'n = ln(1-0.95)/ln(1-0.05) = ln(0.05)/ln(0.95) = -2.996/-0.0513 ≈ 58.4\n约 59 个。',
        keypoint: '95%/5% → 59 个'
    },
    {
        id: 'a-cert02', week: 109, day: '高级·6.1', type: 'single', difficulty: 2,
        knowledge: 'α β 风险',
        title: '"消费者风险"β 指的是：',
        options: ['A. 拒收好批的概率', 'B. 接收坏批的概率', 'C. 失效率', 'D. 样品数'],
        answer: 'B',
        explanation: 'β 风险 = 消费者风险 = 第二类错误\n- 真实不合格但被判接收的概率\n- 对消费者（使用者）不利\n- β 越低越好，但样本量 ↑',
        keypoint: 'β = 接收坏批'
    },
    {
        id: 'a-cert03', week: 109, day: '高级·6.1', type: 'single', difficulty: 2,
        knowledge: 'OC 曲线',
        title: 'OC 曲线最陡峭（区分力强）的方案是：',
        options: ['A. 样本量大', 'B. 样本量小', 'C. 样品全检', 'D. 不抽样'],
        answer: 'A',
        explanation: 'OC 曲线越陡：\n- 在 p₀ 和 p₁ 之间跳变越快\n- 区分合格/不合格能力越强\n- 样本量越大，曲线越陡\n\n代价：成本增加。',
        keypoint: '样本量 ↑ → OC 陡'
    },
    // ===== 软件可靠性（6 道）=====
    {
        id: 'a-sw01', week: 110, day: '高级·7.1', type: 'single', difficulty: 2,
        knowledge: '软件失效',
        title: '软件失效与硬件失效最本质的区别是：',
        options: ['A. 软件不会重复失效', 'B. 软件不会随时间老化', 'C. 软件失效概率更高', 'D. 软件失效更严重'],
        answer: 'B',
        explanation: '软件 vs 硬件：\n- 硬件：物理老化，失效率随时间\n- 软件：设计缺陷，不会老化，但发现一个修一个\n\n软件可靠性本质是"缺陷清理"过程。',
        keypoint: '软件不会老化'
    },
    {
        id: 'a-sw02', week: 110, day: '高级·7.1', type: 'single', difficulty: 2,
        knowledge: '运行剖面',
        title: '软件可靠性"运行剖面"指：',
        options: ['A. 软件架构', 'B. 各种使用模式的发生概率分布', 'C. 代码结构', 'D. 错误日志'],
        answer: 'B',
        explanation: '运行剖面 = Operational Profile：\n- 各种操作模式的发生概率\n- 决定哪些功能用得多\n- 指导测试用例权重\n- 影响软件可靠性',
        keypoint: '运行剖面 = 使用模式概率'
    },
    {
        id: 'a-sw03', week: 110, day: '高级·7.1', type: 'single', difficulty: 2,
        knowledge: 'Musa 模型',
        title: 'Musa 软件可靠性模型中，失效强度 λ(t) 随时间：',
        options: ['A. 指数衰减', 'B. 指数增长', 'C. 恒定', 'D. 振荡'],
        answer: 'A',
        explanation: 'Musa 模型：\nλ(t) = λ₀ × exp(-θt)\n- 测试时间越长，失效强度越低\n- θ 是衰减率\n- 反映"调试效率"',
        keypoint: 'Musa：λ 指数衰减'
    },
    // ===== 测试性维修性（6 道）=====
    {
        id: 'a-rms01', week: 111, day: '高级·8.1', type: 'single', difficulty: 2,
        knowledge: 'FDR',
        title: '故障检测率 FDR=95% 意味着：',
        options: ['A. 95% 故障可自动修复', 'B. 95% 故障可被 BIT 检测到', 'C. 5% 故障可被检测', 'D. 95% 故障可被隔离'],
        answer: 'B',
        explanation: 'FDR = Fault Detection Rate：\n- BIT 能检测到的故障占比\n- 目标 ≥ 95%\n- 与 FIR 区别：FIR 是隔离能力',
        keypoint: 'FDR = 检测能力'
    },
    {
        id: 'a-rms02', week: 111, day: '高级·8.1', type: 'single', difficulty: 2,
        knowledge: '虚警',
        title: 'BIT 虚警率过高最常见的原因是：',
        options: ['A. 测试点少', 'B. 阈值设置不当 + 间歇故障', 'C. 算法简单', 'D. 设备老化'],
        answer: 'B',
        explanation: '虚警原因：\n- 阈值太敏感\n- 间歇性故障\n- 测试环境差异\n- 噪声干扰\n\n解决：\n- 多次检测确认\n- 动态阈值\n- AI 辅助',
        keypoint: '虚警 = 阈值+间歇故障'
    },
    {
        id: 'a-rms03', week: 111, day: '高级·8.1', type: 'single', difficulty: 2,
        knowledge: 'MTTR',
        title: 'MTTR = MLDT + MTTI + MTTT + MRT 中，MRT 指：',
        options: ['A. 备件等待时间', 'B. 维修时间（不含管理）', 'C. 故障定位时间', 'D. 修复后测试时间'],
        answer: 'A',
        explanation: 'MTTR 分解：\n- MLDT：Mean Logistic Delay Time（备件等待）\n- MTTI：Mean Time To Isolate（故障定位）\n- MTTT：Mean Time To Test（修复后测试）\n- MRT：Mean Repair Time（实际维修）\n\n注意：MTTR 有时也指纯 MRT，要看上下文。',
        keypoint: 'MTTR 包含多个子过程'
    },
    // ===== 行业案例（10 道）=====
    {
        id: 'a-case01', week: 112, day: '高级·9.1', type: 'single', difficulty: 2,
        knowledge: '汽车标准',
        title: '汽车电子最关键的标准是：',
        options: ['A. GB/T 2423', 'B. MIL-STD-810', 'C. AEC-Q100/200 + ISO 16750', 'D. IEC 60601'],
        answer: 'C',
        explanation: '汽车电子标准：\n- AEC-Q100/Q101/Q200：元器件应力\n- ISO 16750：环境条件\n- ISO 7637：电气瞬态\n- ISO 26262：功能安全\n\nIEC 60601 是医疗，2423 是通用。',
        keypoint: '汽车 = AEC + ISO 16750 + 26262'
    },
    {
        id: 'a-case02', week: 112, day: '高级·9.1', type: 'single', difficulty: 2,
        knowledge: '汽车电子',
        title: '汽车 ECU 工作温度典型为：',
        options: ['A. 0~50°C', 'B. -20~70°C', 'C. -40~85°C（发动机舱可达 125°C）', 'D. -55~125°C'],
        answer: 'C',
        explanation: '汽车 ECU 温度：\n- 乘客舱：-40~85°C\n- 发动机舱：-40~125°C（更严酷）\n- 靠近排气管：更高\n\nAEC-Q100 Grade 0 要求 -40~150°C。',
        keypoint: '发动机舱最严酷'
    },
    {
        id: 'a-case03', week: 112, day: '高级·9.1', type: 'single', difficulty: 2,
        knowledge: 'ISO 26262',
        title: 'ISO 26262 中 ASIL D 表示：',
        options: ['A. 最低风险', 'B. 中等风险', 'C. 高风险', 'D. 最高风险'],
        answer: 'D',
        explanation: 'ASIL 等级（A-D）：\n- A：最低\n- B：低\n- C：中\n- D：最高（关系生命安全）\n\nASIL D 例子：\n- 安全气囊控制\n- 线控转向\n- 自动驾驶',
        keypoint: 'ASIL D = 最高'
    },
    {
        id: 'a-case04', week: 113, day: '高级·9.2', type: 'single', difficulty: 2,
        knowledge: '医疗器械',
        title: '医疗器械最重要的国际标准是：',
        options: ['A. IEC 60601', 'B. ISO 9001', 'C. GB/T 2423', 'D. IPC-A-610'],
        answer: 'A',
        explanation: 'IEC 60601：\n- 医疗器械电气安全核心\n- 第 1 部分：通用\n- 第 2 部分：专用（数十种设备）\n- 第 3 部分：EMC\n\nISO 14971 是风险管理。',
        keypoint: 'IEC 60601 = 医疗核心'
    },
    {
        id: 'a-case05', week: 113, day: '高级·9.2', type: 'single', difficulty: 2,
        knowledge: '医疗软件',
        title: 'IEC 62304 中软件安全等级 C 表示：',
        options: ['A. 不可能伤害', 'B. 严重伤害', 'C. 死亡或严重伤害', 'D. 灾难性'],
        answer: 'C',
        explanation: 'IEC 62304 软件安全等级：\n- A：不可能造成伤害\n- B：可能造成非严重伤害\n- C：可能造成死亡或严重伤害\n\nC 级要求最严格的开发流程。',
        keypoint: 'C 级 = 死亡风险'
    },
    // ===== 认证考试（7 道）=====
    {
        id: 'a-exam01', week: 114, day: '高级·10.1', type: 'single', difficulty: 2,
        knowledge: 'CRE 考试',
        title: 'ASQ CRE 考试的题目数量和时间是：',
        options: ['A. 100 题 4 小时', 'B. 150 题 4.5 小时', 'C. 200 题 5 小时', 'D. 75 题 3 小时'],
        answer: 'B',
        explanation: 'ASQ CRE 考试：\n- 150 题单选\n- 4.5 小时\n- 约 70% 通过\n- 英文',
        keypoint: 'CRE = 150 题 4.5h'
    },
    {
        id: 'a-exam02', week: 114, day: '高级·10.1', type: 'single', difficulty: 2,
        knowledge: 'CRE 内容',
        title: 'CRE 考试中分值最高的部分是：',
        options: ['A. 可靠性工程基础', 'B. 可靠性建模与预测', 'C. 失效分析', 'D. 维修性'],
        answer: 'B',
        explanation: 'CRE 考试分值：\n- 基础 15%\n- 建模与预测 20%（最高）\n- 测试 20%\n- 失效分析 15%\n- 维修性 10%\n- 质量管理 10%\n- 工具 10%',
        keypoint: '建模预测分值最高'
    },
    {
        id: 'a-exam03', week: 114, day: '高级·10.1', type: 'single', difficulty: 2,
        knowledge: '续证',
        title: 'ASQ CRE 证书有效期和续证要求是：',
        options: ['A. 5 年 30 PDH', 'B. 3 年 18 PDH', 'C. 2 年 10 PDH', 'D. 永久'],
        answer: 'B',
        explanation: 'ASQ 续证：\n- 周期 3 年\n- 需要 18 PDH（Professional Development Hours）\n- 通过培训、会议、自学获得',
        keypoint: '3 年 18 PDH'
    }
];

// 合并到 QUESTION_BANK（高级题用 100+ 周数避免冲突）
if (typeof QUESTION_BANK !== 'undefined' && typeof window !== 'undefined') {
    ADVANCED_QUESTIONS.forEach(q => {
        const w = q.week;
        if (!QUESTION_BANK[w]) QUESTION_BANK[w] = [];
        QUESTION_BANK[w].push(q);
    });
    window.QUESTION_BANK = QUESTION_BANK;
}
