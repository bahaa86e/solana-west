import { siteConfig } from "@/data/site";

export const heroEnquiryCopyEn = {
  sectionLabel: "Private sales desk",
  title: "Request Prices & Payment Plan",
  subtitle: `Luxury residences by ${siteConfig.developer}`,
  body:
    "Share your preferred unit and project. The sales desk replies with current price bands, payment schedule context, and availability aligned to your timeline — without generic brochures.",
  trustHighlights: [
    "ORA Developers Egypt — institutional delivery discipline",
    "New Zayed & West Cairo — investor-grade master planning",
    "Clear payment structure — 5% down, up to 10 years",
  ] as const,
  responseNote: "Most enquiries receive a first response within one business day. WhatsApp remains the fastest channel for live availability.",
  submitLabel: "Send Enquiry",
  submitPending: "Sending…",
  whatsappEscalation: "Prefer WhatsApp? Message the desk",
} as const;

export const heroEnquiryCopyAr = {
  sectionLabel: "مكتب المبيعات",
  title: "اطلب الأسعار وخطة السداد",
  subtitle: `مساكن فاخرة من ${siteConfig.developer}`,
  body:
    "شارك نوع الوحدة والمشروع المفضل. يرد فريق المبيعات بأسعار محدثة، سياق التقسيط، والمتاح وفق جدولك — دون كتيبات عامة.",
  trustHighlights: [
    "ORA Developer Egypt — انضباط تسليم مؤسسي",
    "نيو زايد وغرب القاهرة — تخطيط يستهدف المستثمر",
    "هيكل سداد واضح — 5٪ مقدم · حتى 10 سنوات",
  ] as const,
  responseNote: "غالباً ما يصل أول رد خلال يوم عمل. واتساب يبقى الأسرع للمتاح الفوري.",
  submitLabel: "إرسال الاستفسار",
  submitPending: "جاري الإرسال…",
  whatsappEscalation: "تفضّل واتساب؟ راسل المكتب",
} as const;
