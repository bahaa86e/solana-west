import { siteConfig } from "@/data/site";

/** Arabic factual anchors — same numbers; phrasing tuned for Gulf / Egypt reader expectations. */
export const croCommercialFactsAr = {
  startingFrom: "ابتداءً من 9.8 مليون جنيه",
  downPayment: "مقدم 5%",
  installments: "أقساط حتى 10 سنوات",
  delivery: "تسليم اعتباراً من 2027",
} as const;

export const croCommercialSummaryLineAr =
  `${croCommercialFactsAr.startingFrom} · ${croCommercialFactsAr.downPayment} · ${croCommercialFactsAr.installments} · ${croCommercialFactsAr.delivery}.`;

export const croPrivateDeskTaglineAr = "مكتب اقتناء خاص · ORA";

export const croReferenceChipLabelsAr = [
  croCommercialFactsAr.startingFrom,
  `${croCommercialFactsAr.downPayment} · عند الحجز`,
  `${croCommercialFactsAr.installments} · جدول الإصدار`,
  croCommercialFactsAr.delivery,
] as const;

export const croMessagingAr = {
  headerDesktopWhatsapp: "مكتب المبيعات",
  headerMobileWhatsapp: "تواصل واتساب",

  railEyebrow: "استشارة",
  railWhatsAppLabel: "تحدث مع فريق الاستشارة",
  railWhatsAppSubline: "تنسيق الأسعار والمتاح وفق إصدار المطور",

  stickyWhatsAppLine: "واتساب",
  stickyWhatsAppSubline: "أسرع ردّ",
  stickyCallLabel: "اتصال",
  stickyEnquiryLabel: "استفسار",

  heroPrimaryCta: "مكتب اقتناء خاص",
  heroSecondaryCtaLong: "عرض أسعار ومتاح",
  heroSecondaryCtaShort: "التسعير",
  heroAnnotationTitle: "مرجع إصدار",

  paymentSectionCue:
    "تفاصيل المقدم والمراحل وأي فوائد إدارية موجودة فقط في مستند الحجز؛ نساعدك على قراءة البنود قبل التوقيع.",
  paymentSectionCta: "تواصل مع المستشار",
  paymentSectionCtaSub: "اطلب ملخص الجدول الزمني للأقساط بصياغة واضحة لفريقك المالي.",
  internalPaymentPlanLink: "صفحة خطة السداد",

  finalPanelDeskAssurance:
    "الردود تأتي عبر القنوات المعتمدة للمطور—صياغة هادئة للعائلات ومستثمري الخليج وليس لغة إعلانية.",

  leadFormEyebrow: "استفسار استشاري",
  leadFormSubtitle: `${croCommercialSummaryLineAr} اذكر نوع الوحدة أفق الاحتفاظ وقناة التواصل لتوجيه الطلب بسرعة.`,
  leadFormSubmitIdle: "طلب أسعار ومتاح",
  leadFormSubmitPending: "جاري الإرسال…",
  leadFormRoutingNote:
    "تُوجَّه الاستفسارات للمراجعة عبر المكتب المعتمد. أسرع سياق تجاري منظّم غالباً عبر واتساب.",
  leadFormWhatsappSecondary: "مكتب اقتناء عبر واتساب",

  footerWhatsAppLabel: "واتساب — مكتب اقتناء خاص",
} as const;

export const croInvestorAssuranceAr = [
  {
    eyebrow: "المطور",
    title: siteConfig.developer,
    detail:
      "تجربة ORA في المشاريع ذات المخطط الواسع؛ الالتزام التعاقدي يُحدَّد عبر إصدار الحجز لا عبر العناوين الإعلانية.",
  },
  {
    eyebrow: "القيادة",
    title: siteConfig.founder,
    detail:
      "سياق رئاسة المجموعة كمرجع ثقة للمستثمر؛ التفاصيل الملزمة تبقى في عقود الإصدار المعتمدة.",
  },
  {
    eyebrow: "الأفق",
    title: "تسليم من 2027",
    detail:
      "مخطط منخفض الكثافة مع تسليم مرحلي—تأكد من موعد الكتلة ومخرجات المرافق وفق ملف الإصدار قبل بناء نموذجك المالي.",
  },
] as const;
