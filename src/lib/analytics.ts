type EventName =
  | "page_view"
  | "cta_whatsapp_click"
  | "form_submit"
  | "lead_captured"
  | "newsletter_subscribe";

interface EventProperties {
  page?: string;
  source?: string;
  form_type?: string;
  [key: string]: string | undefined;
}

export function trackEvent(name: EventName, properties?: EventProperties) {
  // Ready for analytics integration (Google Analytics, Plausible, Mixpanel, etc.)
  if (typeof window !== "undefined") {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const gtag = (window as any).gtag;
    if (typeof gtag === "function") {
      gtag("event", name, properties);
    }
  }
}
