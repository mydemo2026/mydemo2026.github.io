(function () {
  var STORAGE_KEY = 'lang';
  var translations = {
    zh: {
      nav: { home: '首页', products: '产品目录', contact: '联系我们' },
      index: {
        title: '首页 | 工业零件外贸',
        tagline: '精密制造 · 全球供应',
        heroTitle: '工业零件外贸，品质与交付的可靠伙伴',
        heroDesc: '专注机械零部件出口，从标准件到定制件，为全球客户提供稳定供应与专业服务。',
        viewProducts: '查看产品',
        getQuote: '获取报价',
        whyUs: '为什么选择我们',
        years: '年行业经验',
        countries: '国家与地区客户',
        quality: '质检出厂',
        capabilities: '核心能力',
        cap1: '标准件与定制件一站式采购，支持图纸与样品打样',
        cap2: '严格质检与包装，保障海运/空运交付安全',
        cap3: '多语言商务支持，响应及时，流程透明'
      },
      products: {
        title: '产品目录 | 工业零件外贸',
        label: '产品目录',
        heading: '产品目录',
        desc: '标准件、非标件及定制加工，支持小批量与大批量订单。如需规格书或报价，请通过联系表单告知需求。',
        cat1: '紧固件',
        cat1Desc: '螺栓、螺母、垫片、销钉等，多种材质与表面处理。',
        cat2: '传动件',
        cat2Desc: '齿轮、皮带轮、联轴器、轴承等传动与支承件。',
        cat3: '结构件',
        cat3Desc: '支架、法兰、壳体及钣金加工件。',
        cat4: '液压气动件',
        cat4Desc: '接头、阀块、缸体及密封件等。',
        cat5: '精密加工件',
        cat5Desc: 'CNC 车铣、线切割、磨削等定制精密零件。',
        cat6: '表面处理',
        cat6Desc: '镀锌、发黑、阳极氧化、喷涂等。',
        customTip: '未找到所需品类？欢迎提供图纸或样品，我们支持定制开发。',
        submitNeed: '提交需求'
      },
      contact: {
        title: '联系我们 | 工业零件外贸',
        label: 'Contact',
        heading: '联系我们',
        intro: '请填写以下表单，我们会尽快回复您的询盘或报价需求。',
        name: '姓名 / Name',
        namePlaceholder: '您的姓名',
        company: '公司 / Company',
        companyPlaceholder: '公司名称',
        email: '邮箱 / Email',
        emailPlaceholder: 'your@email.com',
        subject: '主题 / Subject',
        subjectQuote: '询价 / Quote',
        subjectSample: '样品请求 / Sample',
        subjectCoop: '合作咨询 / Cooperation',
        subjectOther: '其他 / Other',
        message: '留言 / Message',
        messagePlaceholder: '请描述您的产品需求、规格或问题...',
        send: '发送 / Send',
        contactInfo: '联系方式',
        address: '办公地址',
        addressText: '中国 · 工业区 / 园区地址',
        hours: '工作时间',
        hoursText: '周一至周五 9:00–18:00（GMT+8）',
        phone: '电话',
        emailLabel: '邮箱',
        phoneLabel: '电话'
      },
      thankYou: {
        title: '提交成功 | 工业零件外贸',
        label: 'Thank you',
        heading: '提交成功',
        message: '感谢您的留言，我们会尽快与您联系。',
        again: '继续留言',
        backHome: '返回首页'
      },
      footer: { copyright: '© 2026 Industrial Parts. All rights reserved.' }
    },
    en: {
      nav: { home: 'Home', products: 'Products', contact: 'Contact' },
      index: {
        title: 'Home | Industrial Parts',
        tagline: 'Precision Manufacturing · Global Supply',
        heroTitle: 'Industrial Parts Trading: Your Reliable Partner for Quality & Delivery',
        heroDesc: 'We focus on mechanical components export, from standard to custom parts, providing stable supply and professional service worldwide.',
        viewProducts: 'View Products',
        getQuote: 'Get a Quote',
        whyUs: 'Why Choose Us',
        years: 'Years of Experience',
        countries: 'Countries & Regions',
        quality: 'Quality Assured',
        capabilities: 'Core Capabilities',
        cap1: 'One-stop for standard and custom parts, with drawing and sample prototyping.',
        cap2: 'Strict QC and packaging for safe sea/air delivery.',
        cap3: 'Multilingual support, responsive and transparent process.'
      },
      products: {
        title: 'Products | Industrial Parts',
        label: 'Product Catalog',
        heading: 'Product Catalog',
        desc: 'Standard, non-standard and custom machining; small to large batch orders. For specs or quotes, please use the contact form.',
        cat1: 'Fasteners',
        cat1Desc: 'Bolts, nuts, washers, pins, various materials and surface treatments.',
        cat2: 'Transmission Parts',
        cat2Desc: 'Gears, pulleys, couplings, bearings and related components.',
        cat3: 'Structural Parts',
        cat3Desc: 'Brackets, flanges, housings and sheet metal fabrications.',
        cat4: 'Hydraulic & Pneumatic',
        cat4Desc: 'Fittings, valve blocks, cylinders and seals.',
        cat5: 'Precision Machining',
        cat5Desc: 'CNC turning/milling, wire cutting, grinding and custom precision parts.',
        cat6: 'Surface Treatment',
        cat6Desc: 'Zinc plating, black oxide, anodizing, coating, etc.',
        customTip: "Can't find what you need? Send us drawings or samples—we support custom development.",
        submitNeed: 'Submit Request'
      },
      contact: {
        title: 'Contact | Industrial Parts',
        label: 'Contact',
        heading: 'Contact Us',
        intro: 'Fill in the form below and we will get back to you as soon as possible.',
        name: 'Name',
        namePlaceholder: 'Your name',
        company: 'Company',
        companyPlaceholder: 'Company name',
        email: 'Email',
        emailPlaceholder: 'your@email.com',
        subject: 'Subject',
        subjectQuote: 'Quote',
        subjectSample: 'Sample Request',
        subjectCoop: 'Cooperation',
        subjectOther: 'Other',
        message: 'Message',
        messagePlaceholder: 'Describe your requirements, specs or questions...',
        send: 'Send',
        contactInfo: 'Contact',
        address: 'Address',
        addressText: 'China · Industrial Park',
        hours: 'Hours',
        hoursText: 'Mon–Fri 9:00–18:00 (GMT+8)',
        phone: 'Phone',
        emailLabel: 'Email',
        phoneLabel: 'Phone'
      },
      thankYou: {
        title: 'Thank You | Industrial Parts',
        label: 'Thank you',
        heading: 'Message Sent',
        message: 'Thank you for your message. We will get back to you soon.',
        again: 'Send Another',
        backHome: 'Back to Home'
      },
      footer: { copyright: '© 2026 Industrial Parts. All rights reserved.' }
    }
  };

  function getLang() {
    var params = new URLSearchParams(window.location.search);
    if (params.get('lang') === 'en' || params.get('lang') === 'zh') return params.get('lang');
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'en' || stored === 'zh') return stored;
    } catch (e) {}
    var nav = navigator.language || navigator.userLanguage || '';
    return (nav.indexOf('zh') === 0) ? 'zh' : 'en';
  }

  function setLang(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    window.__lang = lang;
  }

  function t(key) {
    var keys = key.split('.');
    var o = translations[window.__lang || 'zh'];
    for (var i = 0; i < keys.length && o != null; i++) o = o[keys[i]];
    return o != null ? o : key;
  }

  function apply() {
    var lang = window.__lang || getLang();
    setLang(lang);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var val = t(key);
      if (el.tagName === 'OPTION') {
        el.textContent = val;
      } else if (el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA') {
        el.textContent = val;
      }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
    });
    document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
      document.title = t(el.getAttribute('data-i18n-title'));
    });

    var titleEl = document.querySelector('[data-i18n-page-title]');
    if (titleEl) document.title = t(titleEl.getAttribute('data-i18n-page-title'));

    document.querySelectorAll('.lang-switch [data-lang]').forEach(function (btn) {
      btn.classList.toggle('font-medium', btn.getAttribute('data-lang') === lang);
      btn.classList.toggle('text-steel-900', btn.getAttribute('data-lang') === lang);
      btn.classList.toggle('text-steel-500', btn.getAttribute('data-lang') !== lang);
    });
  }

  function init() {
    apply();
    document.querySelectorAll('.lang-switch [data-lang]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLang(btn.getAttribute('data-lang'));
        apply();
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
