import { siteConfig } from "@/data/site";

/** Arabic factual anchors — same numbers; phrasing tuned for Gulf / Egypt reader expectations. */
export const croCommercialFactsAr = {
  startingFrom: "من 9.8 مليون جنيه",
  downPayment: "دفعة حجز 5%",
  installments: "تقسيط حتى 10 سنوات",
  delivery: "تسليم من 2027",
} as const;

export const croCommercialSummaryLineAr =
  `${croCommercialFactsAr.startingFrom} · ${croCommercialFactsAr.downPayment} · ${croCommercialFactsAr.installments} · ${croCommercialFactsAr.delivery}.`;

export const croPrivateDeskTaglineAr = "استشارة خاصة · ORA Developer Egypt";

export const croCommercialChipLabelsAr = [
  croCommercialFactsAr.startingFrom,
  `${croCommercialFactsAr.downPayment} · عند الحجز`,
  `${croCommercialFactsAr.installments} · حسب الإصدار`,
  croCommercialFactsAr.delivery,
] as const;

export const croMessagingAr = {
  headerDesktopWhatsapp: "احصل على الأسعار",
  headerMobileWhatsapp: "اطلب الأسعار على واتساب",

  railEyebrow: "لمحة تجارية",
  railWhatsAppLabel: "اطلب أسعار سولانا ويست",
  railWhatsAppSubline: "أسعار سولانا ويست والمتاح حسب الوحدة والمرحلة",

  stickyWhatsAppLine: "واتساب",
  stickyWhatsAppSubline: "احصل على الأسعار",
  stickyCallLabel: "اتصال",
  stickyEnquiryLabel: "احجز زيارة",

  heroPrimaryCta: "احصل على الأسعار",
  heroSecondaryCtaLong: "الأسعار وأنظمة السداد",
  heroSecondaryCtaShort: "الأسعار",
  heroAnnotationTitle: "لمحة تجارية",

  paymentSectionCue:
    "نقرأ معك الدفعة الأولى، مراحل التقسيط، والرسوم قبل الحجز حتى تكون الصورة المالية واضحة من البداية.",
  paymentSectionCta: "اطلب تقسيط سولانا ويست",
  paymentSectionCtaSub: "ملخص واضح للأقساط والمواعيد قبل اتخاذ القرار.",
  internalPaymentPlanLink: "صفحة خطة السداد",

  finalPanelDeskAssurance:
    "تواصل هادئ وواضح للعائلات ومستثمري الخليج، بعيداً عن المبالغة والوعود غير الموثّقة.",

  leadFormEyebrow: "استفسار خاص",
  leadFormSubtitle: `${croCommercialSummaryLineAr} اذكر نوع الوحدة، أفق الشراء، وقناة التواصل المفضلة لنرتّب لك الرد بدقة.`,
  leadFormSubmitIdle: "اطلب أسعار سولانا ويست",
  leadFormSubmitPending: "جاري الإرسال…",
  leadFormRoutingNote:
    "تُراجع الاستفسارات قبل التواصل لضمان رد واضح يناسب نوع الوحدة والمرحلة.",
  leadFormWhatsappSecondary: "تواصل عبر واتساب",

  footerWhatsAppLabel: "واتساب — استشارة خاصة",
} as const;

export const croInvestorAssuranceAr = [
  {
    eyebrow: "المطور",
    title: siteConfig.developer,
    detail:
      "حضور ORA في المشاريع ذات التخطيط الواسع يمنح التجربة ثقة مؤسسية؛ التفاصيل الملزمة تبقى في إصدار الحجز والعقد.",
  },
  {
    eyebrow: "القيادة",
    title: siteConfig.founder,
    detail:
      "اسم قيادي حاضر في خلفية المجموعة ويضيف بعداً من الثقة للمستثمر، مع بقاء القرار النهائي مبنياً على المستندات الرسمية.",
  },
  {
    eyebrow: "الأفق",
    title: "تسليم من 2027",
    detail:
      "مخطط منخفض الكثافة بتسليم مرحلي؛ راجع موعد المرحلة والمرافق قبل تثبيت نموذجك المالي أو قرار السكن.",
  },
] as const;
