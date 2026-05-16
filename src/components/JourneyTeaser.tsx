import { buildWhatsappEnquiryUrl } from "@/lib/contact";

type JourneyTeaserProps = {
  destination: string;
  poeticLine: string;
  imageSrc: string;
  imageAlt?: string;
};

export function JourneyTeaser({
  destination,
  poeticLine,
  imageSrc,
  imageAlt,
}: JourneyTeaserProps) {
  const enquiryMessage = `Hi HeraXopun! I'd like to enquire about the ${destination} trip.`;

  return (
    <article className="group flex flex-col gap-4">
      <div className="aspect-[4/5] overflow-hidden bg-muted">
        <img
          src={imageSrc}
          alt={imageAlt ?? destination}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-serif text-2xl tracking-tight text-foreground">
          {destination}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {poeticLine}
        </p>
      </div>

      <a
        href={buildWhatsappEnquiryUrl(enquiryMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-1 inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-full border border-foreground/30 px-5 py-2.5 font-serif text-sm tracking-wide text-foreground transition-colors duration-300 hover:bg-foreground hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40"
        aria-label={`Enquire on WhatsApp about the ${destination} trip`}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="currentColor"
        >
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.09.55 4.13 1.6 5.93L0 24l6.4-1.68a11.83 11.83 0 0 0 5.64 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.13-3.37-8.43ZM12.05 21.3h-.01a9.45 9.45 0 0 1-4.82-1.32l-.35-.21-3.8 1 1.02-3.7-.23-.38a9.43 9.43 0 0 1-1.45-5.04c0-5.22 4.25-9.46 9.47-9.46 2.53 0 4.9.99 6.69 2.78a9.4 9.4 0 0 1 2.77 6.69c0 5.23-4.25 9.47-9.47 9.47Zm5.2-7.08c-.28-.14-1.69-.83-1.95-.93-.26-.1-.45-.14-.64.14-.19.28-.74.93-.9 1.12-.17.19-.33.21-.61.07-.28-.14-1.2-.44-2.28-1.41-.84-.75-1.41-1.68-1.58-1.96-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.5.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.5-.07-.14-.64-1.55-.88-2.12-.23-.55-.47-.48-.64-.49l-.55-.01c-.19 0-.5.07-.76.35-.26.28-1 .98-1 2.39s1.02 2.78 1.16 2.97c.14.19 2.01 3.07 4.87 4.31.68.29 1.21.47 1.62.6.68.22 1.3.19 1.79.11.55-.08 1.69-.69 1.93-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.54-.33Z" />
        </svg>
        Enquire to book your trip
      </a>
    </article>
  );
}