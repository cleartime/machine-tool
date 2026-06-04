import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const config = JSON.parse(fs.readFileSync(path.join(root, "site.config.json"), "utf8"));
const productsConfig = JSON.parse(fs.readFileSync(path.join(root, "products.config.json"), "utf8"));
const siteUrl = config.siteUrl.replace(/\/$/, "");
const locales = config.locales;
const defaultLocale = locales.find((locale) => locale.code === config.defaultLocale);
const products = productsConfig.products;
const companyNameZh = config.brand.zh;
const companyNameEn = config.brand.default;
const companyTagline = "SONIQSHINE ULTRASONIC";
const contactEmail = "ted@eurostarultrasonic.com";
const contactPhone = "+86 13370278385";
const contactPhoneHref = "+8613370278385";
const contactPhoneSchema = "+86-133-7027-8385";
const contactAddressZh = "江苏省昆山市张浦镇亲和路331号";
const contactAddressEn = "No. 331, Qinhe Road, Zhangpu Town, Kunshan City, Jiangsu Province, China 215321";
const formEndpoint = `https://formsubmit.co/ajax/${contactEmail}`;
const assetVersion = "20260604-seo";
const lastModified = "2026-06-03";
const catalogs = {
  "food-cutting": {
    slug: "",
    title: { zh: "超声波食品切割产品", en: "Ultrasonic Food Cutting Machines and Blades" },
    description: {
      zh: "基于食品切割设备和刀具类别整理的产品目录，覆盖自动化切割、手持切割、发生器系统和多尺寸钛合金刀具。",
      en: "A product catalog for ultrasonic food cutting equipment and blades, covering automated cutting, handheld cutters, generator systems and titanium blades in multiple sizes."
    },
    groups: ["equipment", "blade"]
  },
  "ultrasonic-cutting-devices": {
    slug: "ultrasonic-cutting-devices",
    title: { zh: "超声波切割设备", en: "Ultrasonic Cutting Devices and Components" },
    description: {
      zh: "来自 RINCO 超声波切割设备分类的产品目录，包含切割进给装置、切割头、切割工位、手持式切割设备和食品切割换能器。",
      en: "A catalog of RINCO ultrasonic cutting devices including cutting actuators, cutting heads, cutting stations, handheld cutters and food cutting converters."
    },
    groups: ["cutting-device", "cutting-head", "handheld-device", "converter"]
  }
};

const copyByLanguage = {
  en: {
    title: `Ultrasonic Food Cutting Machines, Blades & Systems | ${companyNameEn}`,
    description: `${companyNameEn} manufactures ultrasonic food cutting machines, titanium cutting blades, generators and automation-ready systems for cake, cheese, bread, bakery, frozen food and confectionery production.`,
    keywords: "ultrasonic food cutting, food cutting machine, ultrasonic cutting equipment, cake cutting, cheese cutting, bakery slicing, food automation",
    brand: companyNameEn,
    nav: ["Solutions", "Benefits", "Process", "Systems", "Contact"],
    heroTitle: "Ultrasonic Food Cutting Machines",
    heroText: "Food-grade ultrasonic cutting machines, blades and integrated systems for bakery, dairy, frozen food and composite food production.",
    primaryCta: "Get a Solution",
    secondaryCta: "View Applications",
    breadcrumb: ["Home", "Applications", "Food Cutting"],
    introTitle: "Cleaner and more stable food portioning",
    introText: "Ultrasonic cutting uses high-frequency vibration to reduce friction between the blade and the product. It is well suited for sticky, brittle, layered, frozen or soft foods, helping create clean cuts with less dragging, sticking and deformation.",
    contactUs: "Contact Us",
    featureTitle: "Clean cutting powered by ultrasonic technology",
    featureText: "From single cutting tools to automated modules, each system can be configured around product dimensions, cycle time, temperature and hygiene requirements. Applications include cheese slices, cakes, bread, wraps, confectionery and frozen semi-finished foods.",
    checks: ["Smooth cut surfaces with fewer crumbs and coating smears", "Less product adhesion on the blade for easier cleaning", "Integration with conveyors, robots and vision positioning systems"],
    benefitsTitle: "Why choose ultrasonic food cutting",
    benefitsText: "For high-viscosity, multi-layer and hygienic production requirements, ultrasonic cutting offers a wider and more stable process window than conventional mechanical cutting.",
    benefits: [
      ["Low-friction cutting", "High-frequency vibration helps the blade pass through food with less compression, indentation and edge breakage."],
      ["Reduced adhesion", "Cream, cheese, syrup and filled products leave less residue on the blade, reducing cleaning downtime."],
      ["Automation ready", "Modules can work with conveyors, positioning, sorting and packaging equipment for continuous production."],
      ["Flexible cut profiles", "Straight, strip, block, circular, serrated and custom cutting tools can be engineered for different products."]
    ],
    stats: ["Typical operating frequency", "Custom thin-blade options", "Continuous line operation", "Clean maintenance planning"],
    processTitle: "Implementation from sample to production",
    processText: "Validate cut quality and cycle time first, then define tooling, generator, transducer and automation interfaces.",
    steps: [["Sample review", "Confirm product structure, temperature, size, moisture and cutting targets."], ["Cutting trial", "Compare surfaces, adhesion, crumbs and throughput across frequencies and blade profiles."], ["System integration", "Design mounting, motion axes, conveying rhythm and safety protection."], ["Production delivery", "Complete commissioning, operator training, spare-parts planning and maintenance guidance."]],
    systemsTitle: "Food cutting systems and components",
    systemsText: "Manual stations, semi-automatic equipment and full-line integration can be customized around site space and production speed.",
    systems: [["Ultrasonic generators", "Stable high-frequency power with monitoring, alarms and automation control interfaces."], ["Transducers and boosters", "Energy transfer matched to food thickness and cutting resistance."], ["Food-grade cutting sonotrodes", "Straight, round, serrated and custom tools designed for sanitary cleaning."], ["Automated cutting modules", "Connect with conveyors, servo axes, robots and upper-level control systems."]],
    downloadTitle: "Request the food cutting guide",
    downloadText: "A practical overview of common food categories, cutting issues, tooling selection and integration considerations.",
    requestGuide: "Request Guide",
    contactTitle: "Let an engineer review your food cutting requirement",
    contactText: "Share the product type, current cutting method and target capacity. We will prepare an initial recommendation based on the sample and site conditions.",
    contactFields: ["Phone", "Email", "Address", "Services"],
    contactValues: [contactPhone, contactEmail, contactAddressEn, "Sample trials, custom blades, line integration"],
    form: ["Name", "Your name", "Phone or email", "How should we reply?", "Product type", "Requirement", "Cut size, cycle time, sticking issue, etc.", "Submit Request"],
    options: ["Cake / bakery", "Cheese / dairy", "Wraps / composite food", "Frozen food", "Other"],
    footer: ["Focused on industrial ultrasonic cutting, welding and automation applications.", "Applications", "Food cutting", "System components", "Support", "Implementation process", "Contact an engineer"],
    imageAlt: ["Close-up of an ultrasonic blade cutting food cleanly", "Cake, wrap and ultrasonic cutting blade application scenes"]
  },
  zh: {
    title: `超声波食品切割解决方案 | ${companyNameZh}`,
    description: `${companyNameZh}提供食品级超声波切割设备、刀具和自动化集成方案，适用于蛋糕、奶酪、面包、卷饼、冷冻食品等洁净分切场景。`,
    keywords: "超声波食品切割,食品切割机,超声波切割设备,蛋糕切割,奶酪切割,食品自动化切割,超声波刀具",
    brand: companyNameZh,
    nav: ["解决方案", "优势", "工艺", "设备", "联系"],
    heroTitle: "食品切割",
    heroText: "面向烘焙、乳制品、冷冻食品和复合食品的超声波洁净切割方案。",
    primaryCta: "获取方案",
    secondaryCta: "查看应用",
    breadcrumb: ["主页", "应用", "食品切割"],
    introTitle: "更干净、更稳定的食品分切",
    introText: "超声波切割通过高频振动降低刀具与物料之间的摩擦，适合黏性、松脆、夹层、冷冻或柔软食品。切口整齐，减少拖拽、粘刀和产品变形，帮助产线保持稳定节拍。",
    contactUs: "请联系我们",
    featureTitle: "恒助超声波技术实现洁净切割",
    featureText: "从单机刀具到自动化模组，系统可根据产品尺寸、切割节拍、温度和卫生等级进行组合。适用于奶酪片、蛋糕、面包、卷饼、糖果和半成品冷冻食品。",
    checks: ["切面平整，减少碎屑和涂层拖尾", "刀具表面附着少，清洁维护更轻", "可集成输送线、机器人和视觉定位系统"],
    benefitsTitle: "为什么选择超声波食品切割",
    benefitsText: "针对高黏度、多层结构和洁净生产需求，提供比传统机械切割更稳定的工艺窗口。",
    benefits: [["低摩擦切割", "高频振动让刀具更容易穿过物料，降低压痕、挤压和边缘破损。"], ["减少产品附着", "奶油、芝士、糖浆或夹心食品更少残留在刀面，产线停机清洁次数更少。"], ["适配自动化", "可与输送、定位、分拣和包装设备联动，实现连续生产节拍。"], ["切割形状灵活", "支持直线、分条、分块、圆弧、锯齿边等多种焊头和刀具形态。"]],
    stats: ["常用工作频率", "可定制薄刃方案", "适合连续产线", "可规划洁净维护"],
    processTitle: "从样品到量产的导入流程",
    processText: "先验证切口和节拍，再确定刀具、发生器、换能器和自动化接口。",
    steps: [["样品评估", "确认食品结构、温度、尺寸、含水量和切割目标。"], ["试切验证", "用不同频率和刀型比较切面、附着、碎屑和产能。"], ["系统集成", "设计固定方式、运动轴、输送节拍和安全防护。"], ["量产交付", "完成设备调试、操作培训、备件建议和维护计划。"]],
    systemsTitle: "食品切割设备与组件",
    systemsText: "覆盖手动工位、半自动设备和整线集成，可按现场空间和节拍定制。",
    systems: [["超声波发生器", "稳定输出高频能量，支持功率监控、报警和自动化控制接口。"], ["换能器与变幅杆", "根据食品厚度和切割阻力匹配能量传递效率。"], ["食品级切割焊头", "提供直刀、圆刀、锯齿边和异形刀具，便于卫生清洁。"], ["自动化切割模组", "可接入输送线、伺服轴、机器人和上位机控制系统。"]],
    downloadTitle: "下载食品切割方案资料",
    downloadText: "整理常见食品类别、切割问题、刀具选择和集成注意事项，便于内部评估。",
    requestGuide: "索取资料",
    contactTitle: "让工程师评估您的食品切割需求",
    contactText: "留下产品类型、当前切割方式和目标产能，我们会根据样品和现场条件给出初步方案。",
    contactFields: ["电话", "邮箱", "地址", "服务"],
    contactValues: [contactPhone, contactEmail, contactAddressZh, "样品试切、刀具定制、整线集成"],
    form: ["姓名", "请输入姓名", "手机或邮箱", "用于回复方案", "食品类型", "需求说明", "例如切割尺寸、节拍、粘刀问题等", "提交需求"],
    options: ["蛋糕 / 烘焙", "奶酪 / 乳制品", "卷饼 / 复合食品", "冷冻食品", "其他"],
    footer: ["专注工业超声波切割、焊接与自动化应用。", "应用", "食品切割", "设备组件", "支持", "导入流程", "联系工程师"],
    imageAlt: ["超声波刀具切割食品的近景", "蛋糕、卷饼和超声波刀具应用场景"]
  }
};

const languageAliases = {
  es: { from: "en", title: `Soluciones de corte ultrasónico de alimentos | ${companyNameEn}`, heroTitle: "Corte de alimentos", primaryCta: "Solicitar solución", secondaryCta: "Ver aplicaciones", contactUs: "Contactar", requestGuide: "Solicitar guía" },
  fr: { from: "en", title: `Solutions de découpe alimentaire par ultrasons | ${companyNameEn}`, heroTitle: "Découpe alimentaire", primaryCta: "Demander une solution", secondaryCta: "Voir les applications", contactUs: "Contact", requestGuide: "Demander le guide" },
  pt: { from: "en", title: `Soluções de corte ultrassônico de alimentos | ${companyNameEn}`, heroTitle: "Corte de alimentos", primaryCta: "Solicitar solução", secondaryCta: "Ver aplicações", contactUs: "Contato", requestGuide: "Solicitar guia" },
  de: { from: "en", title: `Ultraschall-Lösungen zum Schneiden von Lebensmitteln | ${companyNameEn}`, heroTitle: "Lebensmittel schneiden", primaryCta: "Lösung anfragen", secondaryCta: "Anwendungen ansehen", contactUs: "Kontakt", requestGuide: "Leitfaden anfordern" },
  it: { from: "en", title: `Soluzioni di taglio alimentare a ultrasuoni | ${companyNameEn}`, heroTitle: "Taglio alimentare", primaryCta: "Richiedi soluzione", secondaryCta: "Vedi applicazioni", contactUs: "Contatto", requestGuide: "Richiedi guida" },
  da: { from: "en", title: `Ultralydsløsninger til fødevareskæring | ${companyNameEn}`, heroTitle: "Fødevareskæring", primaryCta: "Få en løsning", secondaryCta: "Se applikationer", contactUs: "Kontakt", requestGuide: "Anmod om guide" },
  sv: { from: "en", title: `Ultraljudslösningar för livsmedelsskärning | ${companyNameEn}`, heroTitle: "Livsmedelsskärning", primaryCta: "Få en lösning", secondaryCta: "Visa tillämpningar", contactUs: "Kontakt", requestGuide: "Begär guide" },
  pl: { from: "en", title: `Ultradźwiękowe rozwiązania do cięcia żywności | ${companyNameEn}`, heroTitle: "Cięcie żywności", primaryCta: "Zapytaj o rozwiązanie", secondaryCta: "Zobacz zastosowania", contactUs: "Kontakt", requestGuide: "Poproś o przewodnik" },
  tr: { from: "en", title: `Ultrasonik gıda kesim çözümleri | ${companyNameEn}`, heroTitle: "Gıda kesimi", primaryCta: "Çözüm alın", secondaryCta: "Uygulamaları görün", contactUs: "İletişim", requestGuide: "Rehber isteyin" }
};

const statValues = ["20-40 kHz", "0.2 mm", "24/7", "CIP"];
const sectionIds = ["solutions", "benefits", "process", "systems", "contact"];
const plasticWeldingSlug = "ultrasonic-plastic-welding-machine";

const weldingSeo = {
  en: {
    title: `Ultrasonic Plastic Welding Machines | ${companyNameEn}`,
    description: `${companyNameEn} supplies ultrasonic plastic welding machines, sonic welders, generators, transducers, boosters and custom horns for automotive, packaging, medical device and electronics production.`,
    keywords: "ultrasonic plastic welding machine, ultrasonic plastic welder, sonic welder, ultrasonic welding equipment, plastic welding machine, 20kHz ultrasonic welder, 35kHz ultrasonic welder, ultrasonic generator, ultrasonic transducer, ultrasonic horn, servo ultrasonic welding, pneumatic ultrasonic welding",
    heroTitle: "Ultrasonic Plastic Welding Machines",
    heroText: "Servo, pneumatic and automation-ready ultrasonic plastic welding systems for precise thermoplastic joining.",
    introTitle: "Plastic welding systems for stable production",
    introText: "Ultrasonic plastic welding joins thermoplastic parts with high-frequency vibration, localized heat and controlled pressure. It is widely used for automotive parts, packaging, medical devices, electronics, filters and consumer products where repeatable strength, clean seams and high throughput matter.",
    featureTitle: "Core configurations",
    features: [
      ["Servo ultrasonic welder", "Precise depth, force and speed control for demanding plastic joining applications."],
      ["Pneumatic ultrasonic welder", "Cost-effective equipment for standard 15kHz, 20kHz, 35kHz and 40kHz welding tasks."],
      ["Handheld ultrasonic spot welder", "Portable ultrasonic welding tools for repair, spot welding and flexible assembly."],
      ["Automation actuator", "Ultrasonic welding actuators, generators and control interfaces for automated production lines."]
    ],
    applicationsTitle: "Typical applications",
    applications: ["Automotive interior parts and filters", "Medical device housings and fluid components", "Electronics, sensors and small plastic assemblies", "Packaging, caps and consumer product components"],
    componentTitle: "Welding components and tooling",
    components: ["Digital ultrasonic generator", "Ultrasonic transducer and booster", "Custom titanium, steel or aluminum welding horn", "Fixtures, nests and automation integration"],
    ctaTitle: "Send your plastic welding requirement",
    ctaText: "Share material, product size, joint design, target cycle time and photos or drawings. Our engineers can recommend frequency, power, horn design and automation approach.",
    cta: "Contact an Engineer"
  },
  zh: {
    title: `超声波塑料焊接机 | ${companyNameZh}`,
    description: `${companyNameZh}提供超声波塑料焊接机、发生器、换能器、变幅杆和定制焊头方案，适用于汽车、包装、医疗器械、电子和塑料制品装配。`,
    keywords: "超声波塑料焊接机,超声波焊接设备,塑料焊接机,超声波焊机,20kHz超声波焊接,35kHz超声波焊接,超声波发生器,超声波换能器,超声波焊头,伺服超声波焊接,气动超声波焊接",
    heroTitle: "超声波塑料焊接机",
    heroText: "面向热塑性塑料连接的伺服、气动和自动化超声波焊接系统。",
    introTitle: "适合稳定量产的塑料焊接系统",
    introText: "超声波塑料焊接通过高频振动、局部热量和受控压力连接热塑性塑料，适用于汽车零件、包装、医疗器械、电子、滤芯和消费品等高一致性装配场景。",
    featureTitle: "核心配置",
    features: [
      ["伺服超声波焊接机", "适合对深度、压力和速度控制要求高的塑料连接场景。"],
      ["气动超声波焊接机", "适合 15kHz、20kHz、35kHz、40kHz 等常规焊接任务。"],
      ["手持式超声波点焊机", "适合维修、点焊和灵活装配。"],
      ["自动化焊接执行器", "提供发生器、换能器和控制接口，便于接入自动化产线。"]
    ],
    applicationsTitle: "典型应用",
    applications: ["汽车内饰件和滤芯", "医疗器械外壳和流体部件", "电子、传感器和小型塑料组件", "包装、瓶盖和消费品部件"],
    componentTitle: "焊接组件与工装",
    components: ["数字超声波发生器", "超声波换能器与变幅杆", "钛合金、钢或铝制定制焊头", "夹具、定位工装和自动化集成"],
    ctaTitle: "发送您的塑料焊接需求",
    ctaText: "请提供材料、产品尺寸、焊线结构、目标节拍和图片或图纸，工程师可推荐频率、功率、焊头设计和自动化方式。",
    cta: "联系工程师"
  }
};

const seoGuides = [
  {
    slug: "ultrasonic-food-cutting-machine-for-cake",
    category: "food-cutting",
    en: {
      title: `Ultrasonic Food Cutting Machine for Cake | ${companyNameEn}`,
      description: "How to choose an ultrasonic food cutting machine for cake, cheesecake, Swiss roll and bakery production, including blade length, frequency, automation and sample testing.",
      kicker: "Cake Cutting Guide",
      h1: "Ultrasonic Food Cutting Machine for Cake",
      intro: "Cake and bakery products often combine soft sponge, cream, mousse, fruit layers and frozen textures. Ultrasonic cutting reduces blade friction and helps create clean portions with less smearing, compression and crumbs.",
      sections: [
        ["When ultrasonic cake cutting helps", "Ultrasonic cake cutting is useful when traditional blades drag cream, deform soft layers, create crumbs or require frequent cleaning. It is commonly used for cheesecake, mousse cake, Swiss roll, sandwich cake, sponge cake and frozen desserts."],
        ["Machine and blade selection", "Selection depends on cake size, target portion shape, product temperature, required cycle time and hygiene requirements. A 20 kHz system is common for larger blades and automated cutting, while smaller tools can be matched for compact machines or manual stations."],
        ["Automation options", "Cake cutting systems can be configured as desktop machines, conveyorized machines or fully automated modules with servo axes and recipe control. For high-volume bakeries, positioning, indexing and easy-clean tooling are usually more important than cutting speed alone."]
      ],
      faqs: [
        ["Can ultrasonic cutters cut frozen cake?", "Yes, ultrasonic cutting can be used for frozen or semi-frozen cakes, but blade geometry and power must be matched to product hardness and temperature."],
        ["Does ultrasonic cake cutting reduce cleaning time?", "It can reduce cream and mousse adhesion on the blade, which usually lowers cleaning frequency compared with conventional knives."],
        ["What should I send for a cake cutting trial?", "Send cake dimensions, temperature, target portion size, photos, current cutting issues and required output per hour."]
      ]
    },
    zh: {
      title: `蛋糕超声波食品切割机 | ${companyNameZh}`,
      description: "介绍蛋糕、芝士蛋糕、瑞士卷和烘焙产品如何选择超声波食品切割机，包括刀具长度、频率、自动化方式和样品试切。",
      kicker: "蛋糕切割指南",
      h1: "蛋糕超声波食品切割机",
      intro: "蛋糕和烘焙产品通常包含海绵胚、奶油、慕斯、水果夹层和冷冻结构。超声波切割可降低刀具摩擦，减少拖尾、压痕和碎屑。",
      sections: [
        ["什么时候适合用超声波切蛋糕", "当传统刀具容易带走奶油、压坏夹层、产生碎屑或频繁清洁时，超声波切割更有优势。常见应用包括芝士蛋糕、慕斯蛋糕、瑞士卷、夹心蛋糕和冷冻甜品。"],
        ["设备和刀具选择", "需要根据蛋糕尺寸、分切形状、产品温度、节拍和卫生要求选择。较长刀具和自动化设备常用 20 kHz 系统，小型工具可用于桌面机或手动工位。"],
        ["自动化方式", "可配置桌面机、输送式切割机或带伺服轴和配方控制的自动化模组。对批量烘焙产线来说，定位、分度和易清洁工装通常比单纯速度更重要。"]
      ],
      faqs: [
        ["超声波刀可以切冷冻蛋糕吗？", "可以用于冷冻或半冷冻蛋糕，但刀具形状和功率需要根据硬度和温度匹配。"],
        ["超声波切蛋糕能减少清洁时间吗？", "通常可以减少奶油和慕斯在刀具上的附着，从而降低清洁频率。"],
        ["试切蛋糕需要提供什么？", "建议提供蛋糕尺寸、温度、目标分切尺寸、照片、当前问题和每小时产能要求。"]
      ]
    }
  },
  {
    slug: "ultrasonic-cheese-cutting-machine",
    category: "food-cutting",
    en: {
      title: `Ultrasonic Cheese Cutting Machine | ${companyNameEn}`,
      description: "A practical guide to ultrasonic cheese cutting machines for soft cheese, processed cheese, blocks and slices, with notes on sticking, blade design and automation.",
      kicker: "Cheese Cutting Guide",
      h1: "Ultrasonic Cheese Cutting Machine",
      intro: "Cheese can be sticky, elastic or brittle depending on fat, moisture and temperature. Ultrasonic vibration helps the blade pass through cheese with less drag and a cleaner cut face.",
      sections: [
        ["Typical cheese applications", "Ultrasonic cheese cutting is used for soft cheese, processed cheese, cream cheese, cheese blocks, cheese bars and portioned dairy products. It is especially useful when product residue builds up quickly on a mechanical knife."],
        ["Important process variables", "Temperature, moisture, fat content, blade width, amplitude and cutting speed all affect cut quality. A sample test should compare residue, edge deformation, surface finish and cleaning interval."],
        ["Line integration", "Cheese cutting modules can be combined with conveyors, indexing tables, servo axes and packaging lines. For dairy production, stainless construction, washable design and tool access should be considered early."]
      ],
      faqs: [
        ["Is ultrasonic cutting suitable for soft cheese?", "Yes, soft and sticky cheese is one of the common reasons to use ultrasonic cutting, provided the blade and amplitude are correctly selected."],
        ["Can one ultrasonic blade cut different cheese sizes?", "Some size ranges can share tooling, but blade length and support must match the widest product and required cutting height."],
        ["What data is needed to quote a cheese cutting system?", "Product size, cheese type, temperature, required cuts per minute, cleaning requirements and layout constraints are the key inputs."]
      ]
    },
    zh: {
      title: `超声波奶酪切割机 | ${companyNameZh}`,
      description: "介绍软质奶酪、再制奶酪、奶酪块和奶酪条的超声波切割机选择，覆盖粘刀、刀具设计和自动化集成。",
      kicker: "奶酪切割指南",
      h1: "超声波奶酪切割机",
      intro: "奶酪会因脂肪、含水量和温度不同呈现黏性、弹性或脆性。超声波振动可帮助刀具更低阻力地切入奶酪，获得更干净的切面。",
      sections: [
        ["典型奶酪应用", "适用于软质奶酪、再制奶酪、奶油奶酪、奶酪块、奶酪条和分份乳制品，尤其适合机械刀具残留较快的场景。"],
        ["关键工艺变量", "温度、含水量、脂肪含量、刀宽、振幅和切割速度都会影响切割质量。试切时应比较残留、边缘变形、切面和清洁间隔。"],
        ["产线集成", "奶酪切割模组可结合输送线、分度台、伺服轴和包装线。乳制品产线应提前考虑不锈钢结构、可清洗设计和刀具维护空间。"]
      ],
      faqs: [
        ["软质奶酪适合超声波切割吗？", "适合。软质和黏性奶酪是超声波切割的常见应用之一，但需要正确选择刀具和振幅。"],
        ["一把超声波刀能切不同尺寸奶酪吗？", "部分尺寸范围可以共用刀具，但刀具长度和支撑方式需要匹配最大产品宽度和切割高度。"],
        ["奶酪切割设备报价需要哪些信息？", "产品尺寸、奶酪类型、温度、每分钟切割次数、清洁要求和现场布局是关键参数。"]
      ]
    }
  },
  {
    slug: "20khz-ultrasonic-food-cutting-blade",
    category: "food-cutting",
    en: {
      title: `20kHz Ultrasonic Food Cutting Blade | ${companyNameEn}`,
      description: "Learn when to use a 20kHz ultrasonic food cutting blade, how blade length and titanium tooling affect performance, and what to check before ordering.",
      kicker: "Blade Selection Guide",
      h1: "20kHz Ultrasonic Food Cutting Blade",
      intro: "A 20kHz ultrasonic food cutting blade is commonly selected for larger blades, thicker food products and automated systems that need stable amplitude and robust tooling.",
      sections: [
        ["Why 20kHz is common for food cutting", "Lower ultrasonic frequency can support larger sonotrodes and higher cutting loads. This makes 20kHz a practical choice for cake, cheese, frozen food, sandwiches and wide slicing applications."],
        ["Blade design considerations", "Blade length, thickness, edge geometry, titanium material, mounting position and nodal support affect resonance and cutting quality. A blade should be designed together with the converter, booster and generator."],
        ["Maintenance and spare parts", "Food cutting blades should be inspected for edge damage, loosened mounting, surface wear and cleaning damage. For automated lines, keeping tuned spare blades reduces downtime."]
      ],
      faqs: [
        ["Is 20kHz always better than 30kHz or 40kHz?", "No. 20kHz is useful for larger tools and higher loads, while higher frequencies may suit smaller precision tools."],
        ["Can ultrasonic food cutting blades be customized?", "Yes. Length, edge profile, mounting and food-contact finish can be customized around the product and equipment."],
        ["What components work with the blade?", "A complete system normally includes a generator, converter, booster, blade or sonotrode, mounting and safety controls."]
      ]
    },
    zh: {
      title: `20kHz 超声波食品切割刀 | ${companyNameZh}`,
      description: "介绍 20kHz 超声波食品切割刀的应用场景、刀具长度和钛合金设计对性能的影响，以及订购前需要确认的参数。",
      kicker: "刀具选择指南",
      h1: "20kHz 超声波食品切割刀",
      intro: "20kHz 超声波食品切割刀常用于较长刀具、较厚食品和需要稳定振幅的自动化系统。",
      sections: [
        ["为什么食品切割常用 20kHz", "较低频率可以支持更大的焊头和更高的切割负载，因此 20kHz 常用于蛋糕、奶酪、冷冻食品、三明治和宽幅切片。"],
        ["刀具设计要点", "刀具长度、厚度、刃口形状、钛合金材料、安装位置和节点支撑都会影响谐振和切割质量。刀具应与换能器、变幅杆和发生器配套设计。"],
        ["维护和备件", "食品切割刀应检查刃口损伤、安装松动、表面磨损和清洗损伤。自动化产线建议准备调谐好的备用刀具。"]
      ],
      faqs: [
        ["20kHz 一定比 30kHz 或 40kHz 好吗？", "不是。20kHz 适合较大工具和较高负载，高频率则可能更适合小型精密工具。"],
        ["超声波食品切割刀可以定制吗？", "可以。长度、刃口、安装方式和食品接触面处理都可以按产品和设备定制。"],
        ["刀具需要配哪些组件？", "完整系统通常包括发生器、换能器、变幅杆、刀具或焊头、安装结构和安全控制。"]
      ]
    }
  },
  {
    slug: "ultrasonic-plastic-welding-machine-frequency-guide",
    category: "plastic-welding",
    en: {
      title: `Ultrasonic Plastic Welding Machine Frequency Guide | ${companyNameEn}`,
      description: "Compare 15kHz, 20kHz, 35kHz and 40kHz ultrasonic plastic welding machines and learn how to choose frequency by part size, material and weld area.",
      kicker: "Plastic Welding Guide",
      h1: "Ultrasonic Plastic Welding Machine Frequency Guide",
      intro: "Frequency selection is one of the first decisions in ultrasonic plastic welding. It affects horn size, amplitude, audible noise, weld area, part stress and cosmetic results.",
      sections: [
        ["15kHz and 20kHz welding", "15kHz and 20kHz systems are often used for larger plastic parts, higher amplitude requirements and bigger weld areas. They are common in automotive parts, filters, containers and structural plastic assemblies."],
        ["35kHz and 40kHz welding", "35kHz and 40kHz systems are often selected for smaller, precision or cosmetic parts. They can reduce visible marking and are common for electronics, medical components and small housings."],
        ["How to confirm the right frequency", "Material, joint design, wall thickness, weld area, strength target, appearance requirements and automation method should be reviewed together. A welding trial with the real part is the most reliable confirmation."]
      ],
      faqs: [
        ["Which frequency is best for plastic welding?", "There is no universal best frequency. Larger parts often use 15kHz or 20kHz, while smaller precision parts often use 35kHz or 40kHz."],
        ["Can one machine weld different plastics?", "Yes, if tooling and parameters are changed, but material compatibility and joint design still determine weld quality."],
        ["What information is needed for a welding trial?", "Material grade, part drawings, joint design, target strength, surface requirements and production cycle time are the most useful inputs."]
      ]
    },
    zh: {
      title: `超声波塑料焊接机频率选择指南 | ${companyNameZh}`,
      description: "比较 15kHz、20kHz、35kHz 和 40kHz 超声波塑料焊接机，并说明如何根据产品尺寸、材料和焊接面积选择频率。",
      kicker: "塑料焊接指南",
      h1: "超声波塑料焊接机频率选择指南",
      intro: "频率选择是超声波塑料焊接的关键决策之一，会影响焊头尺寸、振幅、噪声、焊接面积、产品应力和外观效果。",
      sections: [
        ["15kHz 和 20kHz 焊接", "15kHz 和 20kHz 常用于较大塑料件、更高振幅和较大焊接面积，常见于汽车零件、滤芯、容器和结构塑料件。"],
        ["35kHz 和 40kHz 焊接", "35kHz 和 40kHz 常用于小型、精密或外观要求高的部件，可降低表面压痕，常见于电子、医疗部件和小外壳。"],
        ["如何确认合适频率", "需要综合评估材料、焊线设计、壁厚、焊接面积、强度目标、外观要求和自动化方式。用真实产品试焊是最可靠的确认方式。"]
      ],
      faqs: [
        ["塑料焊接哪个频率最好？", "没有通用最佳频率。较大部件常用 15kHz 或 20kHz，小型精密件常用 35kHz 或 40kHz。"],
        ["一台机器能焊不同塑料吗？", "可以通过更换工装和参数实现，但材料相容性和焊线设计仍然决定焊接质量。"],
        ["试焊需要哪些资料？", "材料牌号、产品图纸、焊线设计、目标强度、外观要求和生产节拍最有参考价值。"]
      ]
    }
  }
];

function textFor(lang) {
  if (copyByLanguage[lang]) return copyByLanguage[lang];
  const alias = languageAliases[lang];
  return { ...copyByLanguage[alias.from], ...alias };
}

function weldingCopy(locale) {
  return locale.lang.startsWith("zh") ? weldingSeo.zh : weldingSeo.en;
}

function guideCopy(guide, locale) {
  return locale.lang.startsWith("zh") ? guide.zh : guide.en;
}

function esc(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

function jsonLd(data) {
  return JSON.stringify(data).replaceAll("</", "<\\/");
}

function schemaTag(data) {
  return `<script type="application/ld+json">${jsonLd(data)}</script>`;
}

function contactValueHtml(value) {
  if (value === contactEmail) return `<a href="mailto:${contactEmail}">${contactEmail}</a>`;
  if (value === contactPhone) return `<a href="tel:${contactPhoneHref}">${esc(contactPhone)}</a>`;
  return esc(value);
}

function iconLinks() {
  return `<link rel="icon" href="/favicon.ico" sizes="any" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />`;
}

function organizationSchema(copy, locale, canonical) {
  const isChinese = locale.lang.toLowerCase().startsWith("zh");
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: copy.brand,
    alternateName: ["SoniqShine Ultrasonic", "SoniqShine", "盛新超声科技"],
    url: siteUrl,
    logo: `${siteUrl}/assets/shengxin-logo.svg`,
    description: copy.description,
    email: contactEmail,
    telephone: contactPhoneSchema,
    address: {
      "@type": "PostalAddress",
      streetAddress: isChinese ? "亲和路331号" : "No. 331, Qinhe Road",
      addressLocality: isChinese ? "昆山市张浦镇" : "Zhangpu Town, Kunshan City",
      addressRegion: isChinese ? "江苏省" : "Jiangsu Province",
      addressCountry: "CN",
      postalCode: "215321"
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: contactPhoneSchema,
      email: contactEmail,
      contactType: "sales",
      availableLanguage: ["zh-CN", "en", "es", "fr", "pt", "de", "it", "da", "sv", "pl", "tr"]
    }
  });
}

function websiteSchema(copy) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: "SoniqShine Ultrasonic",
    alternateName: copy.brand,
    publisher: { "@id": `${siteUrl}/#organization` },
    inLanguage: ["en", "zh-CN", "es", "fr", "pt", "de", "it", "da", "sv", "pl", "tr"]
  };
}

function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

function faqSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer
      }
    }))
  };
}

function localizedPath(locale, rootPath) {
  if (locale.code === config.defaultLocale) return rootPath;
  return `${locale.path}${rootPath.replace(/^\//, "")}`;
}

function localizedUrl(locale, rootPath) {
  return `${siteUrl}${localizedPath(locale, rootPath)}`;
}

function relativePrefix(locale) {
  return locale.path === "/" ? "" : "../";
}

function alternateLinks(rootPath = "/") {
  const links = locales.map((locale) => `<link rel="alternate" hreflang="${esc(locale.code)}" href="${localizedUrl(locale, rootPath)}" />`);
  links.push(`<link rel="alternate" hreflang="x-default" href="${siteUrl}/" />`);
  return links.join("\n    ");
}

function productCatalog(product) {
  return product.catalog || "food-cutting";
}

function catalogPath(catalog = "food-cutting") {
  const definition = catalogs[catalog] || catalogs["food-cutting"];
  return definition.slug ? `products/${definition.slug}/` : "products/";
}

function productListUrl(locale, rootPage = false, catalog = "food-cutting") {
  const rootPath = `/${catalogPath(catalog)}`;
  return rootPage ? `${siteUrl}${rootPath}` : localizedUrl(locale, rootPath);
}

function productDetailUrl(locale, product, rootPage = false) {
  const basePath = catalogPath(productCatalog(product));
  const rootPath = `/${basePath}${product.slug}/`;
  return rootPage ? `${siteUrl}${rootPath}` : localizedUrl(locale, rootPath);
}

function productListPath(locale, rootPage = false, catalog = "food-cutting") {
  const rootPath = `/${catalogPath(catalog)}`;
  return rootPage ? rootPath : localizedPath(locale, rootPath);
}

function weldingPath(locale, rootPage = false) {
  const rootPath = `/${plasticWeldingSlug}/`;
  return rootPage ? rootPath : localizedPath(locale, rootPath);
}

function weldingUrl(locale, rootPage = false) {
  const rootPath = `/${plasticWeldingSlug}/`;
  return rootPage ? `${siteUrl}${rootPath}` : localizedUrl(locale, rootPath);
}

function guidePath(locale, guide, rootPage = false) {
  const rootPath = `/guides/${guide.slug}/`;
  return rootPage ? rootPath : localizedPath(locale, rootPath);
}

function guideUrl(locale, guide, rootPage = false) {
  const rootPath = `/guides/${guide.slug}/`;
  return rootPage ? `${siteUrl}${rootPath}` : localizedUrl(locale, rootPath);
}

function productDetailPath(locale, product, rootPage = false) {
  return `${productListPath(locale, rootPage, productCatalog(product))}${product.slug}/`;
}

function categoryName(category, isChinese) {
  return productsConfig.categories[category][isChinese ? "zh" : "en"];
}

function productName(product, locale) {
  const isChinese = locale.lang.startsWith("zh");
  return product.names?.[isChinese ? "zh" : "en"] || product.name;
}

function catalogTitle(catalog, locale) {
  const definition = catalogs[catalog] || catalogs["food-cutting"];
  return definition.title[locale.lang.startsWith("zh") ? "zh" : "en"];
}

function catalogDescription(catalog, locale) {
  const definition = catalogs[catalog] || catalogs["food-cutting"];
  return definition.description[locale.lang.startsWith("zh") ? "zh" : "en"];
}

function productMenu(locale, options = {}) {
  const ui = productUi(locale);
  const isChinese = locale.lang.startsWith("zh");
  const rootPage = Boolean(options.root);
  const currentCatalog = options.catalog;
  const menuCatalogs = ["food-cutting", "ultrasonic-cutting-devices"];
  return `<div class="product-menu" data-product-menu>
      <a class="product-menu-trigger ${options.active ? "is-active" : ""}" href="${productListPath(locale, rootPage, currentCatalog || "food-cutting")}" aria-haspopup="true">${esc(ui.productsNav)}</a>
      <div class="product-menu-panel" role="menu">
        ${menuCatalogs.map((catalog) => {
          const items = products.filter((product) => productCatalog(product) === catalog).slice(0, catalog === "food-cutting" ? 6 : 6);
          return `<section class="product-menu-group">
            <a class="product-menu-title" href="${productListPath(locale, rootPage, catalog)}">${esc(catalogTitle(catalog, locale))}</a>
            ${items.map((product) => `<a role="menuitem" href="${productDetailPath(locale, product, rootPage)}"><span>${esc(productName(product, locale))}</span><small>${esc(categoryName(product.category, isChinese))}</small></a>`).join("")}
            <a class="product-menu-all" href="${productListPath(locale, rootPage, catalog)}">${esc(isChinese ? "查看全部产品" : "View all products")}</a>
          </section>`;
        }).join("")}
        <section class="product-menu-group">
          <a class="product-menu-title" href="${weldingPath(locale, rootPage)}">${esc(isChinese ? "超声波塑料焊接机" : "Ultrasonic Plastic Welding Machines")}</a>
          <a role="menuitem" href="${weldingPath(locale, rootPage)}"><span>${esc(isChinese ? "伺服和气动塑料焊接系统" : "Servo and pneumatic plastic welding systems")}</span><small>${esc(isChinese ? "塑料焊接" : "Plastic welding")}</small></a>
        </section>
      </div>
    </div>`;
}

function productUi(locale) {
  const isChinese = locale.lang.startsWith("zh");
  return {
    productsNav: isChinese ? "产品" : "Products",
    listTitle: isChinese ? "超声波食品切割产品" : "Ultrasonic Food Cutting Products",
    listText: isChinese
      ? "基于食品切割设备和刀具类别整理的产品目录，覆盖自动化切割、手持切割、发生器系统和多尺寸钛合金刀具。"
      : "A product catalog for ultrasonic food cutting equipment and blades, covering automated cutting, handheld cutters, generator systems and titanium blades in multiple sizes.",
    view: isChinese ? "查看详情" : "View Details",
    specs: isChinese ? "关键参数" : "Key Specifications",
    applications: isChinese ? "适用场景" : "Applications",
    ask: isChinese ? "咨询该产品" : "Ask About This Product",
    overview: isChinese ? "产品概述" : "Product Overview",
    benefits: isChinese ? "产品优势" : "Product Benefits",
    related: isChinese ? "相关产品" : "Related Products",
    sourceNote: isChinese
      ? "产品名称和类别基于公开产品目录整理，页面文案和图片已按本站风格重新制作。"
      : "Product names and categories are organized from public catalog information. Copy and images are rebuilt for this website.",
    labels: {
      frequency: isChinese ? "工作频率" : "Frequency",
      power: isChinese ? "功率/配置" : "Power / configuration",
      bladeLength: isChinese ? "刀具长度" : "Blade length",
      category: isChinese ? "类别" : "Category"
    }
  };
}

function productSummary(product, locale) {
  const isChinese = locale.lang.startsWith("zh");
  const sourcedDescription = product.descriptions?.[isChinese ? "zh" : "en"];
  if (sourcedDescription) return sourcedDescription;
  const app = product.applications.join(", ");
  if (product.category === "blade") {
    return isChinese
      ? `${product.name} 是面向 ${app} 的钛合金超声波食品切割刀具，可与 20 kHz 切割系统配套，用于减少粘刀、拖尾和切口变形。`
      : `${product.name} is a titanium ultrasonic food cutting blade for ${app}. It pairs with 20 kHz cutting systems to reduce sticking, smearing and product deformation.`;
  }
  return isChinese
    ? `${product.name} 适用于 ${app} 等食品分切场景，可用于手动工位、半自动设备或自动化产线集成。`
    : `${product.name} is designed for ${app} food cutting scenarios and can support manual stations, semi-automatic machines or automated line integration.`;
}

function productBenefits(product, locale) {
  const isChinese = locale.lang.startsWith("zh");
  if (productCatalog(product) === "ultrasonic-cutting-devices") {
    return isChinese
      ? ["超声波切割和封边可在一个工序内完成", "适合自动化集成、手动工位或食品切割模组", "可根据切割对象匹配发生器、换能器和切割焊头"]
      : ["Ultrasonic cutting and edge sealing can be completed in one process", "Suitable for automation integration, manual stations or food cutting modules", "Generator, converter and sonotrode can be matched to the cutting task"];
  }
  if (isChinese) {
    return product.category === "blade"
      ? ["钛合金刀体适合食品级洁净维护", "高频振动降低刀具与物料之间的摩擦", "可按产品尺寸、切割形状和产线节拍定制"]
      : ["降低粘刀和碎屑，提升切面一致性", "可结合输送、伺服、机器人和视觉定位", "适合蛋糕、奶酪、面包、卷饼和冷冻食品等应用"];
  }
  return product.category === "blade"
    ? ["Titanium blade body supports hygienic maintenance", "High-frequency vibration reduces friction against food products", "Customizable around product size, cut profile and production rhythm"]
    : ["Reduces sticking and crumbs while improving cut consistency", "Can integrate with conveyors, servo axes, robots and vision positioning", "Suitable for cakes, cheese, bread, wraps and frozen food applications"];
}

function homeSeoFaq(locale) {
  if (locale.lang.startsWith("zh")) {
    return [
      ["超声波食品切割适合哪些食品？", "适合蛋糕、奶酪、面包、卷饼、糖果、冷冻食品和带夹心的复合食品，尤其适合容易粘刀、变形或掉屑的产品。"],
      ["超声波食品切割机可以接入自动化产线吗？", "可以。切割系统可与输送线、伺服轴、机器人、视觉定位和包装设备集成，用于连续切割和分切。"],
      ["如何选择超声波刀具和频率？", "通常需要根据食品厚度、温度、含水量、切割尺寸和节拍要求确认。建议先进行样品试切，再确定刀具、发生器和换能器配置。"]
    ];
  }
  return [
    ["What foods can ultrasonic food cutting machines cut?", "Ultrasonic food cutting machines are used for cakes, cheese, bread, wraps, confectionery, frozen food and layered products that tend to stick, smear, crumble or deform during mechanical cutting."],
    ["Can ultrasonic food cutters be integrated into automated production lines?", "Yes. Ultrasonic cutting modules can be integrated with conveyors, servo axes, robots, vision positioning and packaging equipment for continuous portioning and slicing."],
    ["How do I choose an ultrasonic blade and frequency?", "Blade profile, frequency and power should be selected around product thickness, temperature, moisture, target cut size and cycle time. A sample cutting trial is the best way to confirm the system configuration."]
  ];
}

function weldingSeoFaq(locale) {
  if (locale.lang.startsWith("zh")) {
    return [
      ["超声波塑料焊接机适合哪些材料？", "适合 ABS、PP、PE、PC、PA、PS、POM 等常见热塑性塑料。最终效果取决于材料相容性、焊线结构、产品壁厚和焊接参数。"],
      ["20kHz、35kHz 和 40kHz 超声波焊接怎么选？", "20kHz 常用于较大或较硬的塑料件，35kHz 和 40kHz 更适合小型、精密或外观要求较高的部件。具体频率需要结合产品尺寸和焊接面积评估。"],
      ["伺服超声波焊接机和气动超声波焊接机有什么区别？", "伺服机更适合对焊接深度、压力、速度和数据追溯要求高的应用；气动机更适合标准塑料件和成本敏感的批量生产。"]
    ];
  }
  return [
    ["What materials can ultrasonic plastic welding machines join?", "Ultrasonic plastic welding is commonly used for thermoplastics such as ABS, PP, PE, PC, PA, PS and POM. Final weld quality depends on material compatibility, joint design, wall thickness and process settings."],
    ["How should I choose 20kHz, 35kHz or 40kHz ultrasonic welding?", "20kHz is often used for larger or stiffer plastic parts, while 35kHz and 40kHz are commonly selected for smaller, precise or cosmetic assemblies. Frequency should be matched to part size, weld area and strength targets."],
    ["What is the difference between servo and pneumatic ultrasonic welding machines?", "Servo ultrasonic welders provide tighter control of depth, force, speed and process data. Pneumatic welders are cost-effective for standard plastic assemblies and common batch production tasks."]
  ];
}

function renderFaqSection(title, items) {
  return `<section class="section-inner seo-faq"><div class="section-title compact"><h2>${esc(title)}</h2></div><div class="faq-list">${items.map(([question, answer]) => `<details><summary>${esc(question)}</summary><p>${esc(answer)}</p></details>`).join("")}</div></section>`;
}

function renderGuideCards(locale, rootPage = false) {
  const isChinese = locale.lang.startsWith("zh");
  const title = isChinese ? "应用指南" : "Application Guides";
  const intro = isChinese
    ? "围绕常见食品切割和塑料焊接问题整理的长尾应用内容，便于选型、试样和产线规划。"
    : "Long-tail application guides for food cutting and plastic welding searches, written to help engineers compare machines, blades and process options.";
  const cards = seoGuides.map((guide) => {
    const page = guideCopy(guide, locale);
    return `<article class="guide-card"><a href="${guidePath(locale, guide, rootPage)}"><span>${esc(page.kicker)}</span><h3>${esc(page.h1)}</h3><p>${esc(page.description)}</p><strong>${esc(isChinese ? "阅读指南" : "Read guide")}</strong></a></article>`;
  }).join("");
  return `<section class="section-inner guide-links" id="guides"><div class="section-title compact"><h2>${esc(title)}</h2><p>${esc(intro)}</p></div><div class="guide-grid">${cards}</div></section>`;
}

function languageMenu(currentCode, pathForLocale = (locale) => localizedPath(locale, "/")) {
  const groups = new Map();
  for (const locale of locales) {
    if (!groups.has(locale.group)) groups.set(locale.group, []);
    groups.get(locale.group).push(locale);
  }
  return `<details class="language-picker">
            <summary>${esc(currentCode.toUpperCase())}</summary>
            <div class="language-panel">
              ${Array.from(groups.entries()).map(([group, items]) => `<div class="language-group"><strong>${esc(group)}</strong>${items.map((locale) => `<a href="${pathForLocale(locale)}" hreflang="${esc(locale.code)}" class="${locale.code === currentCode ? "is-current" : ""}">${esc(locale.country)}</a>`).join("")}</div>`).join("")}
            </div>
          </details>`;
}

function renderPage(locale, options = {}) {
  const copy = textFor(locale.lang.split("-")[0]);
  const prefix = options.root ? "" : relativePrefix(locale);
  const rootPath = "/";
  const canonical = options.root || locale.code === config.defaultLocale ? `${siteUrl}/` : localizedUrl(locale, rootPath);
  const titleSuffix = locale.country && locale.country !== "Global" && locale.country !== "全球" && locale.country !== "Globale" ? ` (${locale.country})` : "";
  const title = copy.title.replace(" | ", `${titleSuffix} | `);
  const ui = productUi(locale);
  const navItems = [
    `<a href="#${sectionIds[0]}">${esc(copy.nav[0])}</a>`,
    productMenu(locale, { root: options.root }),
    ...copy.nav.slice(1).map((label, offset) => `<a href="#${sectionIds[offset + 1]}">${esc(label)}</a>`)
  ].join("");
  const benefitCards = copy.benefits.map(([title, body]) => `<article><span class="icon-check"></span><h3>${esc(title)}</h3><p>${esc(body)}</p></article>`).join("");
  const stats = copy.stats.map((label, index) => `<div><strong>${statValues[index]}</strong><span>${esc(label)}</span></div>`).join("");
  const steps = copy.steps.map(([title, body], index) => `<article><span>${String(index + 1).padStart(2, "0")}</span><h3>${esc(title)}</h3><p>${esc(body)}</p></article>`).join("");
  const systems = copy.systems.map(([title, body]) => `<article><h3>${esc(title)}</h3><p>${esc(body)}</p></article>`).join("");
  const faqs = homeSeoFaq(locale);
  const faqTitle = locale.lang.startsWith("zh") ? "超声波食品切割常见问题" : "Ultrasonic Food Cutting FAQ";
  const breadcrumbItems = [
    { name: copy.breadcrumb[0], url: `${siteUrl}/` },
    { name: copy.breadcrumb[1], url: `${canonical}#solutions` },
    { name: copy.breadcrumb[2], url: canonical }
  ];
  return `<!doctype html>
<html lang="${esc(locale.lang)}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(copy.description)}" />
    <meta name="keywords" content="${esc(copy.keywords)}" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <meta name="theme-color" content="#17191c" />
    <link rel="canonical" href="${canonical}" />
    ${alternateLinks(rootPath)}
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${esc(title)}" />
    <meta property="og:description" content="${esc(copy.description)}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${siteUrl}/assets/hero-food-cutting.png" />
    <meta name="twitter:card" content="summary_large_image" />
    ${iconLinks()}
    <link rel="stylesheet" href="${prefix}styles.css?v=${assetVersion}" />
    <script type="application/ld+json">${organizationSchema(copy, locale, canonical)}</script>
    ${schemaTag(websiteSchema(copy))}
    ${schemaTag(breadcrumbSchema(breadcrumbItems))}
    ${schemaTag({
      "@context": "https://schema.org",
      "@type": "Service",
      name: copy.heroTitle,
      serviceType: "Ultrasonic food cutting machines, blades and automation systems",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: locale.country,
      description: copy.description,
      url: canonical
    })}
    ${schemaTag(faqSchema(faqs))}
  </head>
  <body>
    <header class="site-header" data-header>
      <a class="brand" href="#top" aria-label="${esc(copy.brand)}">
        <img class="brand-logo" src="/assets/shengxin-logo.svg" alt="" aria-hidden="true" />
        <span class="brand-text"><strong>${esc(copy.brand)}</strong><small>${companyTagline}</small></span>
      </a>
      <nav class="nav" data-nav aria-label="Main navigation">${navItems}</nav>
      <div class="header-actions">
        ${languageMenu(locale.code, (target) => localizedPath(target, rootPath))}
        <a class="phone-link" href="tel:${contactPhoneHref}" aria-label="Call"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8c1.5 3 3.6 5.1 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1.3.4 2.6.6 4 .6.7 0 1.2.5 1.2 1.2v3.5c0 .7-.5 1.2-1.2 1.2C10.6 22 2 13.4 2 3.4 2 2.5 2.5 2 3.2 2h3.5C7.5 2 8 2.5 8 3.2c0 1.4.2 2.7.6 4 .1.4 0 .9-.3 1.2l-2.1 2.4z"/></svg></a>
        <button class="menu-toggle" type="button" data-menu-toggle aria-label="Menu" aria-expanded="false"><span></span><span></span><span></span></button>
      </div>
    </header>
    <main id="top">
      <section class="hero">
        <img src="${prefix}assets/hero-food-cutting.png" alt="${esc(copy.imageAlt[0])}" />
        <div class="hero-overlay"></div>
        <div class="hero-content">
          <svg class="hero-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M8 44h13V26H8v18Zm18 0h10V18H26v26Zm15 0h16V30H41v14ZM12 33h5v7h-5v-7Zm30 1h11v6H42v-6Z" /><path d="M18 17c9-7 20-7 29 0" /><path d="M24 23c5-4 12-4 18 0" /></svg>
          <h1>${esc(copy.heroTitle)}</h1>
          <p>${esc(copy.heroText)}</p>
          <div class="hero-ctas"><a class="button primary" href="#contact">${esc(copy.primaryCta)}</a><a class="button ghost" href="#solutions">${esc(copy.secondaryCta)}</a></div>
        </div>
      </section>
      <section class="breadcrumb section-inner" aria-label="Breadcrumb"><a href="#top">${esc(copy.breadcrumb[0])}</a><span>›</span><a href="#solutions">${esc(copy.breadcrumb[1])}</a><span>›</span><strong>${esc(copy.breadcrumb[2])}</strong></section>
      <section class="intro section-inner"><div class="intro-copy"><h2>${esc(copy.introTitle)}</h2><p>${esc(copy.introText)}</p></div><a class="button primary" href="#contact">${esc(copy.contactUs)}</a></section>
      <section class="feature-band" id="solutions"><div class="section-inner split"><div><h2>${esc(copy.featureTitle)}</h2><p>${esc(copy.featureText)}</p><ul class="check-list">${copy.checks.map((item) => `<li>${esc(item)}</li>`).join("")}</ul></div><figure class="media-frame"><img src="${prefix}assets/application-panels.png" alt="${esc(copy.imageAlt[1])}" /></figure></div></section>
      <section class="section-inner" id="benefits"><div class="section-title"><h2>${esc(copy.benefitsTitle)}</h2><p>${esc(copy.benefitsText)}</p></div><div class="benefit-grid">${benefitCards}</div></section>
      <section class="stats"><div class="section-inner stats-grid">${stats}</div></section>
      <section class="section-inner process" id="process"><div class="section-title"><h2>${esc(copy.processTitle)}</h2><p>${esc(copy.processText)}</p></div><div class="steps">${steps}</div></section>
      <section class="systems" id="systems"><div class="section-inner"><div class="section-title inverted"><h2>${esc(copy.systemsTitle)}</h2><p>${esc(copy.systemsText)}</p></div><div class="system-grid">${systems}</div></div></section>
      ${renderGuideCards(locale, options.root)}
      ${renderFaqSection(faqTitle, faqs)}
      <section class="download section-inner"><div><h2>${esc(copy.downloadTitle)}</h2><p>${esc(copy.downloadText)}</p></div><a class="button secondary" href="#contact">${esc(copy.requestGuide)}</a></section>
      <section class="contact" id="contact"><div class="section-inner contact-grid"><div class="contact-copy"><h2>${esc(copy.contactTitle)}</h2><p>${esc(copy.contactText)}</p><dl>${copy.contactFields.map((field, index) => `<div><dt>${esc(field)}</dt><dd>${contactValueHtml(copy.contactValues[index])}</dd></div>`).join("")}</dl></div><form class="contact-form" data-contact-form action="${formEndpoint}" method="POST"><input type="hidden" name="_subject" value="New SoniqShine Ultrasonic website inquiry" /><input type="hidden" name="_template" value="table" /><input type="hidden" name="_captcha" value="false" /><input type="hidden" name="page" value="${canonical}" /><label>${esc(copy.form[0])}<input name="name" type="text" placeholder="${esc(copy.form[1])}" required /></label><label>${esc(copy.form[2])}<input name="contact" type="text" placeholder="${esc(copy.form[3])}" required /></label><label>${esc(copy.form[4])}<select name="product">${copy.options.map((option) => `<option>${esc(option)}</option>`).join("")}</select></label><label class="contact-message">${esc(copy.form[5])}<textarea name="message" rows="4" placeholder="${esc(copy.form[6])}"></textarea></label><button class="button primary" type="submit">${esc(copy.form[7])}</button><p class="form-note" data-form-note aria-live="polite"></p></form></div></section>
    </main>
    <footer class="site-footer"><div class="section-inner footer-grid"><div><strong>${esc(copy.brand)}</strong><p>${esc(copy.footer[0])}</p></div><div><span>${esc(copy.footer[1])}</span><a href="#solutions">${esc(copy.footer[2])}</a><a href="#systems">${esc(copy.footer[3])}</a></div><div><span>${esc(copy.footer[4])}</span><a href="#process">${esc(copy.footer[5])}</a><a href="#contact">${esc(copy.footer[6])}</a></div></div></footer>
    <script src="${prefix}script.js?v=${assetVersion}"></script>
  </body>
</html>
`;
}

function writePage(pagePath, contents) {
  fs.mkdirSync(path.dirname(pagePath), { recursive: true });
  fs.writeFileSync(pagePath, contents);
}

function weldingAlternateLinks() {
  const links = locales.map((locale) => `<link rel="alternate" hreflang="${esc(locale.code)}" href="${weldingUrl(locale)}" />`);
  links.push(`<link rel="alternate" hreflang="x-default" href="${weldingUrl(defaultLocale, true)}" />`);
  return links.join("\n    ");
}

function guideAlternateLinks(guide) {
  const links = locales.map((locale) => `<link rel="alternate" hreflang="${esc(locale.code)}" href="${guideUrl(locale, guide)}" />`);
  links.push(`<link rel="alternate" hreflang="x-default" href="${guideUrl(defaultLocale, guide, true)}" />`);
  return links.join("\n    ");
}

function renderWeldingPage(locale, options = {}) {
  const copy = textFor(locale.lang.split("-")[0]);
  const page = weldingCopy(locale);
  const rootPath = `/${plasticWeldingSlug}/`;
  const canonical = options.root || locale.code === config.defaultLocale ? weldingUrl(defaultLocale, true) : weldingUrl(locale);
  const features = page.features.map(([title, body]) => `<article><span class="icon-check"></span><h3>${esc(title)}</h3><p>${esc(body)}</p></article>`).join("");
  const applications = page.applications.map((item) => `<li>${esc(item)}</li>`).join("");
  const components = page.components.map((item) => `<li>${esc(item)}</li>`).join("");
  const faqs = weldingSeoFaq(locale);
  const faqTitle = locale.lang.startsWith("zh") ? "超声波塑料焊接常见问题" : "Ultrasonic Plastic Welding FAQ";
  const breadcrumbItems = [
    { name: locale.lang.startsWith("zh") ? "主页" : "Home", url: `${siteUrl}/` },
    { name: locale.lang.startsWith("zh") ? "产品" : "Products", url: productListUrl(locale, false, "food-cutting") },
    { name: page.heroTitle, url: canonical }
  ];
  return `<!doctype html>
<html lang="${esc(locale.lang)}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${esc(page.title)}</title>
    <meta name="description" content="${esc(page.description)}" />
    <meta name="keywords" content="${esc(page.keywords)}" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <link rel="canonical" href="${canonical}" />
    ${weldingAlternateLinks()}
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${esc(page.title)}" />
    <meta property="og:description" content="${esc(page.description)}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${siteUrl}/assets/product-system.png" />
    ${iconLinks()}
    <link rel="stylesheet" href="/styles.css?v=${assetVersion}" />
    <script type="application/ld+json">${organizationSchema(copy, locale, canonical)}</script>
    ${schemaTag(breadcrumbSchema(breadcrumbItems))}
    ${schemaTag({
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.heroTitle,
      serviceType: "Ultrasonic plastic welding machine and tooling",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: locale.country || "Global",
      description: page.description,
      url: canonical,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: page.heroTitle,
        itemListElement: page.features.map(([name, description]) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name,
            description
          }
        }))
      }
    })}
    ${schemaTag(faqSchema(faqs))}
  </head>
  <body>
    ${renderProductHeader(locale, locale.code, { rootPath })}
    <main class="product-main">
      <section class="product-hero"><div class="section-inner"><p class="product-kicker">${esc(locale.lang.startsWith("zh") ? "塑料焊接" : "Plastic Welding")}</p><h1>${esc(page.heroTitle)}</h1><p>${esc(page.heroText)}</p><div class="hero-ctas"><a class="button primary" href="${localizedPath(locale, "/")}#contact">${esc(page.cta)}</a><a class="button secondary" href="${productListPath(locale, options.root)}">${esc(locale.lang.startsWith("zh") ? "查看食品切割产品" : "View Food Cutting Products")}</a></div></div></section>
      <section class="intro section-inner"><div class="intro-copy"><h2>${esc(page.introTitle)}</h2><p>${esc(page.introText)}</p></div></section>
      <section class="section-inner"><div class="section-title compact"><h2>${esc(page.featureTitle)}</h2></div><div class="benefit-grid product-benefits">${features}</div></section>
      <section class="section-inner detail-grid">
        <article><h2>${esc(page.applicationsTitle)}</h2><ul class="check-list">${applications}</ul></article>
        <article><h2>${esc(page.componentTitle)}</h2><ul class="check-list">${components}</ul></article>
      </section>
      ${renderFaqSection(faqTitle, faqs)}
      <section class="download section-inner"><div><h2>${esc(page.ctaTitle)}</h2><p>${esc(page.ctaText)}</p></div><a class="button secondary" href="${localizedPath(locale, "/")}#contact">${esc(page.cta)}</a></section>
    </main>
    ${renderProductFooter(locale)}
    <script src="/script.js?v=${assetVersion}"></script>
  </body>
</html>`;
}

function renderGuidePage(locale, guide, options = {}) {
  const copy = textFor(locale.lang.split("-")[0]);
  const page = guideCopy(guide, locale);
  const rootPath = `/guides/${guide.slug}/`;
  const canonical = options.root || locale.code === config.defaultLocale ? guideUrl(defaultLocale, guide, true) : guideUrl(locale, guide);
  const isChinese = locale.lang.startsWith("zh");
  const sections = page.sections.map(([title, body]) => `<section><h2>${esc(title)}</h2><p>${esc(body)}</p></section>`).join("");
  const relatedLinks = [
    `<a class="button primary" href="${productListPath(locale, options.root, "food-cutting")}">${esc(isChinese ? "查看食品切割产品" : "View Food Cutting Products")}</a>`,
    `<a class="button secondary" href="${weldingPath(locale, options.root)}">${esc(isChinese ? "查看塑料焊接方案" : "View Plastic Welding Machines")}</a>`
  ].join("");
  const breadcrumbItems = [
    { name: isChinese ? "主页" : "Home", url: `${siteUrl}/` },
    { name: isChinese ? "应用指南" : "Application Guides", url: `${localizedUrl(locale, "/")}#guides` },
    { name: page.h1, url: canonical }
  ];
  return `<!doctype html>
<html lang="${esc(locale.lang)}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${esc(page.title)}</title>
    <meta name="description" content="${esc(page.description)}" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <link rel="canonical" href="${canonical}" />
    ${guideAlternateLinks(guide)}
    <meta property="og:type" content="article" />
    <meta property="og:title" content="${esc(page.title)}" />
    <meta property="og:description" content="${esc(page.description)}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${siteUrl}/assets/hero-food-cutting.png" />
    ${iconLinks()}
    <link rel="stylesheet" href="/styles.css?v=${assetVersion}" />
    <script type="application/ld+json">${organizationSchema(copy, locale, canonical)}</script>
    ${schemaTag(breadcrumbSchema(breadcrumbItems))}
    ${schemaTag({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: page.h1,
      description: page.description,
      mainEntityOfPage: canonical,
      author: { "@id": `${siteUrl}/#organization` },
      publisher: { "@id": `${siteUrl}/#organization` },
      datePublished: "2026-06-04",
      dateModified: "2026-06-04",
      inLanguage: locale.lang
    })}
    ${schemaTag(faqSchema(page.faqs))}
  </head>
  <body>
    ${renderProductHeader(locale, locale.code, { rootPath })}
    <main class="product-main guide-main">
      <section class="product-hero guide-hero"><div class="section-inner"><p class="product-kicker">${esc(page.kicker)}</p><h1>${esc(page.h1)}</h1><p>${esc(page.intro)}</p><div class="hero-ctas"><a class="button primary" href="${localizedPath(locale, "/")}#contact">${esc(isChinese ? "咨询工程师" : "Contact an Engineer")}</a><a class="button secondary" href="${localizedPath(locale, "/")}#guides">${esc(isChinese ? "更多指南" : "More Guides")}</a></div></div></section>
      <section class="breadcrumb section-inner product-breadcrumb" aria-label="Breadcrumb"><a href="${localizedPath(locale, "/")}">${esc(isChinese ? "主页" : "Home")}</a><span>›</span><a href="${localizedPath(locale, "/")}#guides">${esc(isChinese ? "应用指南" : "Application Guides")}</a><span>›</span><strong>${esc(page.h1)}</strong></section>
      <article class="section-inner guide-article">${sections}</article>
      ${renderFaqSection(isChinese ? "常见问题" : "Frequently Asked Questions", page.faqs)}
      <section class="download section-inner"><div><h2>${esc(isChinese ? "需要确认设备配置？" : "Need to confirm a machine configuration?")}</h2><p>${esc(isChinese ? "把产品照片、切割尺寸、产能节拍和现场条件发给我们，工程师会评估刀具、频率和自动化方案。" : "Send product photos, target portion size, cycle time and line conditions. An engineer will review blade, frequency and automation options.")}</p></div><div class="guide-actions">${relatedLinks}</div></section>
    </main>
    ${renderProductFooter(locale)}
    <script src="/script.js?v=${assetVersion}"></script>
  </body>
</html>`;
}

writePage(path.join(root, "index.html"), renderPage(defaultLocale, { root: true }));
writePage(path.join(root, plasticWeldingSlug, "index.html"), renderWeldingPage(defaultLocale, { root: true }));
for (const guide of seoGuides) {
  writePage(path.join(root, "guides", guide.slug, "index.html"), renderGuidePage(defaultLocale, guide, { root: true }));
}
for (const locale of locales) {
  writePage(path.join(root, locale.path, "index.html"), renderPage(locale));
  writePage(path.join(root, locale.path, plasticWeldingSlug, "index.html"), renderWeldingPage(locale));
  for (const guide of seoGuides) {
    writePage(path.join(root, locale.path, "guides", guide.slug, "index.html"), renderGuidePage(locale, guide));
  }
}

function renderProductHeader(locale, currentCode, options = {}) {
  const copy = textFor(locale.lang.split("-")[0]);
  const rootPath = options.rootPath || "/";
  const navItems = [
    `<a href="${localizedPath(locale, "/")}#solutions">${esc(copy.nav[0])}</a>`,
    productMenu(locale, { active: true, catalog: options.catalog }),
    `<a href="${localizedPath(locale, "/")}#benefits">${esc(copy.nav[1])}</a>`,
    `<a href="${localizedPath(locale, "/")}#process">${esc(copy.nav[2])}</a>`,
    `<a href="${localizedPath(locale, "/")}#systems">${esc(copy.nav[3])}</a>`,
    `<a href="${localizedPath(locale, "/")}#contact">${esc(copy.nav[4])}</a>`
  ].join("");
  return `<header class="site-header" data-header>
      <a class="brand" href="${localizedPath(locale, "/")}" aria-label="${esc(copy.brand)}">
        <img class="brand-logo" src="/assets/shengxin-logo.svg" alt="" aria-hidden="true" />
        <span class="brand-text"><strong>${esc(copy.brand)}</strong><small>${companyTagline}</small></span>
      </a>
      <nav class="nav" data-nav aria-label="Main navigation">${navItems}</nav>
      <div class="header-actions">${languageMenu(currentCode, (target) => localizedPath(target, rootPath))}<a class="phone-link" href="tel:${contactPhoneHref}" aria-label="Call"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8c1.5 3 3.6 5.1 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1.3.4 2.6.6 4 .6.7 0 1.2.5 1.2 1.2v3.5c0 .7-.5 1.2-1.2 1.2C10.6 22 2 13.4 2 3.4 2 2.5 2.5 2 3.2 2h3.5C7.5 2 8 2.5 8 3.2c0 1.4.2 2.7.6 4 .1.4 0 .9-.3 1.2l-2.1 2.4z"/></svg></a><button class="menu-toggle" type="button" data-menu-toggle aria-label="Menu" aria-expanded="false"><span></span><span></span><span></span></button></div>
    </header>`;
}

function productAlternateLinks(product = null, catalog = "food-cutting") {
  const links = locales.map((locale) => `<link rel="alternate" hreflang="${esc(locale.code)}" href="${product ? productDetailUrl(locale, product) : productListUrl(locale, false, catalog)}" />`);
  links.push(`<link rel="alternate" hreflang="x-default" href="${product ? productDetailUrl(defaultLocale, product, true) : productListUrl(defaultLocale, true, catalog)}" />`);
  return links.join("\n    ");
}

function renderProductFooter(locale) {
  const copy = textFor(locale.lang.split("-")[0]);
  return `<footer class="site-footer"><div class="section-inner footer-grid"><div><strong>${esc(copy.brand)}</strong><p>${esc(copy.footer[0])}</p></div><div><span>${esc(copy.footer[1])}</span><a href="${localizedPath(locale, "/")}#solutions">${esc(copy.footer[2])}</a><a href="${localizedPath(locale, "/")}#systems">${esc(copy.footer[3])}</a></div><div><span>${esc(copy.footer[4])}</span><a href="${localizedPath(locale, "/")}#process">${esc(copy.footer[5])}</a><a href="${localizedPath(locale, "/")}#contact">${esc(copy.footer[6])}</a></div></div></footer>`;
}

function renderProductList(locale, options = {}) {
  const catalog = options.catalog || "food-cutting";
  const ui = productUi(locale);
  const copy = textFor(locale.lang.split("-")[0]);
  const title = catalogTitle(catalog, locale);
  const description = catalogDescription(catalog, locale);
  const canonical = options.root ? productListUrl(defaultLocale, true, catalog) : productListUrl(locale, false, catalog);
  const definition = catalogs[catalog] || catalogs["food-cutting"];
  const groups = definition.groups;
  const catalogProducts = products.filter((product) => productCatalog(product) === catalog);
  const breadcrumbItems = [
    { name: locale.lang.startsWith("zh") ? "主页" : "Home", url: `${siteUrl}/` },
    { name: title, url: canonical }
  ];
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: title,
    description,
    url: canonical,
    numberOfItems: catalogProducts.length,
    itemListElement: catalogProducts.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: productDetailUrl(locale, product),
      name: productName(product, locale)
    }))
  };
  return `<!doctype html>
<html lang="${esc(locale.lang)}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${esc(title)} | ${esc(copy.brand)}</title>
    <meta name="description" content="${esc(description)}" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <link rel="canonical" href="${canonical}" />
    ${productAlternateLinks(null, catalog)}
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${esc(title)} | ${esc(copy.brand)}" />
    <meta property="og:description" content="${esc(description)}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${siteUrl}/assets/product-automatic.png" />
    ${iconLinks()}
    <link rel="stylesheet" href="/styles.css?v=${assetVersion}" />
    ${schemaTag(breadcrumbSchema(breadcrumbItems))}
    ${schemaTag(itemListSchema)}
  </head>
  <body>
    ${renderProductHeader(locale, locale.code, { catalog, rootPath: `/${catalogPath(catalog)}` })}
    <main class="product-main">
      <section class="product-hero"><div class="section-inner"><p class="product-kicker">${esc(ui.productsNav)}</p><h1>${esc(title)}</h1><p>${esc(description)}</p></div></section>
      <section class="section-inner product-note">${esc(ui.sourceNote)}</section>
      ${groups.map((group) => `<section class="section-inner product-section"><div class="section-title compact"><h2>${esc(categoryName(group, locale.lang.startsWith("zh")))}</h2></div><div class="product-grid">${catalogProducts.filter((product) => product.category === group).map((product) => `<article class="product-card"><a href="${productDetailPath(locale, product, options.root)}"><img loading="lazy" src="/assets/${esc(product.image)}" alt="${esc(`${productName(product, locale)} - ${categoryName(product.category, locale.lang.startsWith("zh"))}`)}" /><div><span>${esc(categoryName(product.category, locale.lang.startsWith("zh")))}</span><h3>${esc(productName(product, locale))}</h3><p>${esc(productSummary(product, locale))}</p><strong>${esc(ui.view)}</strong></div></a></article>`).join("")}</div></section>`).join("")}
    </main>
    ${renderProductFooter(locale)}
    <script src="/script.js?v=${assetVersion}"></script>
  </body>
</html>`;
}

function renderProductDetail(locale, product, options = {}) {
  const ui = productUi(locale);
  const copy = textFor(locale.lang.split("-")[0]);
  const displayName = productName(product, locale);
  const canonical = options.root ? productDetailUrl(defaultLocale, product, true) : productDetailUrl(locale, product);
  const catalog = productCatalog(product);
  const listUrl = productListPath(locale, options.root, catalog);
  const specs = [
    [ui.labels.category, categoryName(product.category, locale.lang.startsWith("zh"))],
    [ui.labels.frequency, product.frequency || "custom"],
    [ui.labels.power, product.power || "custom"],
    [ui.labels.bladeLength, product.bladeLength || product.certification || "matched to system"]
  ].filter(([, value]) => value);
  const related = products.filter((item) => productCatalog(item) === catalog && item.category === product.category && item.slug !== product.slug).slice(0, 3);
  const gallery = product.images?.length ? product.images : [product.image];
  const summary = productSummary(product, locale);
  const categoryDisplay = categoryName(product.category, locale.lang.startsWith("zh"));
  const breadcrumbItems = [
    { name: locale.lang.startsWith("zh") ? "主页" : "Home", url: `${siteUrl}/` },
    { name: catalogTitle(catalog, locale), url: productListUrl(locale, false, catalog) },
    { name: displayName, url: canonical }
  ];
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${canonical}#product`,
    name: displayName,
    image: gallery.map((image) => `${siteUrl}/assets/${image}`),
    description: summary,
    sku: product.slug,
    url: canonical,
    brand: { "@type": "Brand", name: copy.brand },
    manufacturer: { "@id": `${siteUrl}/#organization` },
    category: categoryName(product.category, false),
    additionalProperty: specs.map(([name, value]) => ({
      "@type": "PropertyValue",
      name,
      value
    }))
  };
  const galleryMarkup = `<div class="product-gallery" data-product-gallery>
          <div class="gallery-stage">
            <button class="gallery-button" type="button" data-gallery-prev aria-label="Previous image">‹</button>
            <img src="/assets/${esc(gallery[0])}" alt="${esc(`${displayName} product image`)}" data-gallery-main />
            <span class="gallery-counter" data-gallery-counter>1 / ${gallery.length}</span>
            <button class="gallery-button" type="button" data-gallery-next aria-label="Next image">›</button>
          </div>
          <div class="gallery-thumbs">${gallery.map((image, index) => `<button class="${index === 0 ? "is-active" : ""}" type="button" data-gallery-thumb="${index}" aria-label="${esc(displayName)} image ${index + 1}"><img loading="lazy" src="/assets/${esc(image)}" alt="${esc(`${displayName} thumbnail ${index + 1}`)}" /></button>`).join("")}</div>
        </div>`;
  return `<!doctype html>
<html lang="${esc(locale.lang)}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${esc(displayName)} | ${esc(copy.brand)}</title>
    <meta name="description" content="${esc(productSummary(product, locale))}" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <link rel="canonical" href="${canonical}" />
    ${productAlternateLinks(product)}
    <meta property="og:type" content="product" />
    <meta property="og:title" content="${esc(displayName)} | ${esc(copy.brand)}" />
    <meta property="og:description" content="${esc(summary)}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${siteUrl}/assets/${esc(product.image)}" />
    ${iconLinks()}
    <link rel="stylesheet" href="/styles.css?v=${assetVersion}" />
    ${schemaTag(breadcrumbSchema(breadcrumbItems))}
    ${schemaTag(productSchema)}
  </head>
  <body>
    ${renderProductHeader(locale, locale.code, { catalog, rootPath: `/${catalogPath(catalog)}${product.slug}/` })}
    <main class="product-main">
      <section class="breadcrumb section-inner product-breadcrumb" aria-label="Breadcrumb"><a href="${localizedPath(locale, "/")}">${esc(locale.lang.startsWith("zh") ? "主页" : "Home")}</a><span>›</span><a href="${listUrl}">${esc(catalogTitle(catalog, locale))}</a><span>›</span><strong>${esc(displayName)}</strong></section>
      <section class="product-detail-hero section-inner">
        <div><p class="product-kicker">${esc(categoryDisplay)}</p><h1>${esc(displayName)}</h1><p>${esc(summary)}</p><div class="hero-ctas"><a class="button primary" href="${localizedPath(locale, "/")}#contact">${esc(ui.ask)}</a><a class="button secondary" href="${listUrl}">${esc(catalogTitle(catalog, locale))}</a></div></div>
        ${galleryMarkup}
      </section>
      <section class="section-inner detail-grid">
        <article><h2>${esc(ui.specs)}</h2><dl class="spec-list">${specs.map(([key, value]) => `<div><dt>${esc(key)}</dt><dd>${esc(value)}</dd></div>`).join("")}</dl></article>
        <article><h2>${esc(ui.applications)}</h2><ul class="check-list">${product.applications.map((item) => `<li>${esc(item)}</li>`).join("")}</ul></article>
      </section>
      <section class="feature-band detail-copy"><div class="section-inner split"><div><h2>${esc(ui.overview)}</h2><p>${esc(summary)}</p><p>${esc(ui.sourceNote)}</p></div><figure class="media-frame"><img loading="lazy" src="/assets/${esc(gallery[1] || gallery[0])}" alt="${esc(`${displayName} detail view`)}" /></figure></div></section>
      <section class="section-inner"><div class="section-title compact"><h2>${esc(ui.benefits)}</h2></div><div class="benefit-grid product-benefits">${productBenefits(product, locale).map((item) => `<article><span class="icon-check"></span><h3>${esc(item)}</h3><p>${esc(product.category === "blade" ? (locale.lang.startsWith("zh") ? "适合食品切割刀具定制与产线维护。" : "Useful for blade customization and production-line maintenance.") : (locale.lang.startsWith("zh") ? "适合食品加工产线的稳定切割需求。" : "Designed for stable cutting needs in food processing lines."))}</p></article>`).join("")}</div></section>
      <section class="section-inner product-section"><div class="section-title compact"><h2>${esc(ui.related)}</h2></div><div class="product-grid related-grid">${related.map((item) => `<article class="product-card"><a href="${productDetailPath(locale, item, options.root)}"><img loading="lazy" src="/assets/${esc(item.image)}" alt="${esc(productName(item, locale))}" /><div><span>${esc(categoryName(item.category, locale.lang.startsWith("zh")))}</span><h3>${esc(productName(item, locale))}</h3><strong>${esc(ui.view)}</strong></div></a></article>`).join("")}</div></section>
    </main>
    ${renderProductFooter(locale)}
    <script src="/script.js?v=${assetVersion}"></script>
  </body>
</html>`;
}

for (const catalog of Object.keys(catalogs)) {
  writePage(path.join(root, catalogPath(catalog), "index.html"), renderProductList(defaultLocale, { root: true, catalog }));
  for (const product of products.filter((item) => productCatalog(item) === catalog)) {
    writePage(path.join(root, catalogPath(catalog), product.slug, "index.html"), renderProductDetail(defaultLocale, product, { root: true }));
  }
}
for (const locale of locales) {
  for (const catalog of Object.keys(catalogs)) {
    writePage(path.join(root, locale.path, catalogPath(catalog), "index.html"), renderProductList(locale, { catalog }));
    for (const product of products.filter((item) => productCatalog(item) === catalog)) {
      writePage(path.join(root, locale.path, catalogPath(catalog), product.slug, "index.html"), renderProductDetail(locale, product));
    }
  }
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${[
    ...locales.map((locale) => ({ loc: localizedUrl(locale, "/"), priority: locale.code === config.defaultLocale ? "1.0" : "0.8", alternates: locales.map((alternate) => localizedUrl(alternate, "/")), xDefault: `${siteUrl}/` })),
    ...locales.map((locale) => ({ loc: weldingUrl(locale), priority: locale.code === config.defaultLocale ? "0.95" : "0.8", alternates: locales.map((alternate) => weldingUrl(alternate)), xDefault: weldingUrl(defaultLocale, true) })),
    ...seoGuides.flatMap((guide) => locales.map((locale) => ({ loc: guideUrl(locale, guide), priority: locale.code === config.defaultLocale ? "0.9" : "0.7", alternates: locales.map((alternate) => guideUrl(alternate, guide)), xDefault: guideUrl(defaultLocale, guide, true) }))),
    ...Object.keys(catalogs).flatMap((catalog) => locales.map((locale) => ({ loc: productListUrl(locale, false, catalog), priority: locale.code === config.defaultLocale ? "0.9" : "0.8", alternates: locales.map((alternate) => productListUrl(alternate, false, catalog)), xDefault: productListUrl(defaultLocale, true, catalog) }))),
    ...products.flatMap((product) => locales.map((locale) => ({ loc: productDetailUrl(locale, product), priority: locale.code === config.defaultLocale ? "0.85" : "0.7", alternates: locales.map((alternate) => productDetailUrl(alternate, product)), xDefault: productDetailUrl(defaultLocale, product, true) })))
  ].map((entry) => `<url>
    <loc>${entry.loc}</loc>
    <lastmod>2026-06-04</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${entry.priority}</priority>
    ${locales.map((alternate, index) => `<xhtml:link rel="alternate" hreflang="${alternate.code}" href="${entry.alternates[index]}" />`).join("\n    ")}
    <xhtml:link rel="alternate" hreflang="x-default" href="${entry.xDefault}" />
  </url>`).join("\n  ")}
</urlset>
`;
fs.writeFileSync(path.join(root, "sitemap.xml"), sitemap);

fs.writeFileSync(path.join(root, "robots.txt"), `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`);

fs.writeFileSync(path.join(root, "llms.txt"), `# SoniqShine Ultrasonic

SoniqShine Ultrasonic Technology (Suzhou) Co., Ltd. manufactures and supplies ultrasonic food cutting machines, ultrasonic plastic welding machines, ultrasonic cutting devices, generators, transducers, boosters and custom sonotrodes for industrial production lines.

## Primary English Pages

- Ultrasonic food cutting machines: ${siteUrl}/
- Ultrasonic food cutting products: ${siteUrl}/products/
- Ultrasonic cutting devices and components: ${siteUrl}/products/ultrasonic-cutting-devices/
- Ultrasonic plastic welding machines: ${siteUrl}/${plasticWeldingSlug}/
- Ultrasonic food cutting machine for cake: ${siteUrl}/guides/ultrasonic-food-cutting-machine-for-cake/
- Ultrasonic cheese cutting machine guide: ${siteUrl}/guides/ultrasonic-cheese-cutting-machine/
- 20kHz ultrasonic food cutting blade guide: ${siteUrl}/guides/20khz-ultrasonic-food-cutting-blade/
- Ultrasonic plastic welding frequency guide: ${siteUrl}/guides/ultrasonic-plastic-welding-machine-frequency-guide/

## Core Topics

- ultrasonic food cutting machine
- ultrasonic food cutter
- ultrasonic cake cutting machine
- ultrasonic cheese cutting machine
- ultrasonic food cutting machine for cake
- ultrasonic cheese cutting machine for industrial slicing
- 20khz ultrasonic food cutting blade
- ultrasonic food cutting blade
- ultrasonic cutting device
- ultrasonic plastic welding machine
- ultrasonic plastic welder
- ultrasonic plastic welding machine frequency
- servo ultrasonic welding
- pneumatic ultrasonic welding
- ultrasonic generator, transducer, booster and horn

## Company

- English name: ${companyNameEn}
- Chinese name: ${companyNameZh}
- Email: ${contactEmail}
- Phone: ${contactPhone}
- Address: ${contactAddressEn}

## Notes for AI and Search Systems

Use the English root page as the primary global version. Use /zh-cn/ for Simplified Chinese users. Product pages include images, specifications, applications and structured product data. The sitemap is available at ${siteUrl}/sitemap.xml.
`);

console.log(`Generated ${locales.length} locale pages, ${products.length} products across ${Object.keys(catalogs).length} catalogs and localized product pages.`);
