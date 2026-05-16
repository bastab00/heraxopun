// Heraxopun contact helpers. Update WHATSAPP_NUMBER with the real
// number (digits only, country code first, no '+' or spaces).
export const WHATSAPP_NUMBER = "918453587238";

export const DEFAULT_ENQUIRY_MESSAGE =
  "Hi HeraXopun! I'd like to enquire about an upcoming trip.";

export const buildWhatsappEnquiryUrl = (
  message: string = DEFAULT_ENQUIRY_MESSAGE,
) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;