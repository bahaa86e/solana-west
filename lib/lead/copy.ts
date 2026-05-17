export function leadErrorCopy(isAr: boolean) {
  return {
    nameInvalid: isAr ?
      "يرجى إدخال اسم صالح (حرفين على الأقل)."
    : "Please enter a valid name.",
    phoneInvalid: isAr ?
      "يرجى إدخال رقم يمكن لمكتب المبيعات التواصل عبره."
    : "Please enter a phone number sales can reach you on.",
    interestInvalid: isAr ?
      "يرجى اختيار نوع الوحدة."
    : "Please choose what you are interested in.",
    emailInvalid: isAr ?
      "يرجى إدخال بريد إلكتروني صالح."
    : "Please enter a valid email address.",
    projectInvalid: isAr ?
      "يرجى اختيار المشروع."
    : "Please select a project.",
    deliveryPaused: isAr ?
      "الاستفسارات عبر الموقع غير متاحة مؤقتًا. تواصل عبر الواتساب أو الهاتف — القنوات موجودة على الصفحة."
    : "Online enquiries are paused. Please use WhatsApp or call the desk — details are shown on this page.",
    deliveryFailed: isAr ?
      "لم ننجح في إرسال الطلب تقنيًا. حاول مجدداً خلال قليل أو تواصل مع المبيعات عبر الواتساب."
    : "We could not complete the request. Please try again in a moment or message sales on WhatsApp.",
    deliveryTimeout: isAr ?
      "انتهت مهلة الاتصال بخادم الاستفسارات. حاول مجدداً أو استخدم الواتساب."
    : "The enquiry service timed out. Please try again or use WhatsApp.",
    invalidRequest: isAr ?
      "تعذر معالجة الطلب. يرجى تحديث الصفحة والمحاولة مرة أخرى."
    : "We could not process this request. Please refresh and try again.",
  } as const;
}
