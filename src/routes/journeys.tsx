import { createFileRoute } from "@tanstack/react-router";
import { JourneyTeaser } from "@/components/JourneyTeaser";
import { journeys } from "@/lib/content";
import { buildWhatsappEnquiryUrl } from "@/lib/contact";

export const Route = createFileRoute("/journeys")({
  head: () => ({
    meta: [
      { title: "Journeys - HeraXopun" },
      {
        name: "description",
        content:
          "Upcoming HeraXopun trips across Northeast India. Small groups, slow days, long drives.",
      },
      { property: "og:title", content: "Journeys - HeraXopun" },
      {
        property: "og:description",
        content: "Join the next story.",
      },
    ],
  }),
  component: JourneysPage,
});

function JourneysPage() {
  return (
    <section className="pt-32 md:pt-40 pb-24 md:pb-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="max-w-2xl mb-14 md:mb-20">
          <p className="font-hand text-2xl text-brown">where to next</p>
          <h1 className="font-display text-5xl md:text-7xl text-foreground -mt-1">
            journeys
          </h1>
          <p className="mt-5 text-muted-foreground">
            We don't run tours. We run trips you'll talk about for years. Drop us
            a hello on WhatsApp and we'll send the whole picture.
          </p>
        </div>

        <div className="grid gap-12 md:gap-10 md:grid-cols-3">
          {journeys.map((j) => (
            <JourneyTeaser key={j.destination} {...j} />
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-28 md:mt-40 border-t border-border/60 pt-16 md:pt-24">
          <div className="grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-7">
              <p className="font-hand text-2xl text-brown">share your story</p>
              <h2 className="font-display text-3xl md:text-5xl text-foreground -mt-1 leading-tight">
                Already travelled with us? Tell us a moment we missed.
              </h2>
            </div>
            <div className="md:col-span-5 flex flex-col gap-4 md:items-end">
              <a
                href={buildWhatsappEnquiryUrl(
                  "Hi HeraXopun! I'd like to share my trip story / a memory.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-forest text-paper px-6 py-3.5 text-sm tracking-wide hover:opacity-90 transition-opacity min-h-12"
              >
                Send us a memory on WhatsApp
              </a>
              <a
                href={buildWhatsappEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-base underline-hand"
              >
                or enquire about the next trip →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}