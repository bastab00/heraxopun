import { createFileRoute } from "@tanstack/react-router";
import { AftermovieCard } from "@/components/AftermovieCard";
import { aftermovies } from "@/lib/content";

export const Route = createFileRoute("/aftermovies")({
  head: () => ({
    meta: [
      { title: "Aftermovies - HeraXopun" },
      {
        name: "description",
        content:
          "Cinematic reels and aftermovies from HeraXopun trips across Northeast India.",
      },
      { property: "og:title", content: "Aftermovies - HeraXopun" },
      {
        property: "og:description",
        content: "Moments that stayed with us.",
      },
    ],
  }),
  component: AftermoviesPage,
});

function AftermoviesPage() {
  const [feature, ...rest] = aftermovies;

  return (
    <section className="bg-ink text-paper pt-32 md:pt-40 pb-24 md:pb-32 grain relative">
      <div className="mx-auto max-w-7xl px-5 md:px-10 relative z-10">
        <div className="max-w-3xl mb-14 md:mb-20">
          <p className="font-hand text-2xl text-sage">a quiet rewatch</p>
          <h1 className="font-display text-5xl md:text-8xl leading-[0.95] -mt-1">
            Moments that <em className="not-italic text-sage">stayed</em> with us.
          </h1>
        </div>

        <AftermovieCard {...feature} large />

        <div className="mt-10 md:mt-14 grid gap-8 md:gap-10 md:grid-cols-2">
          {rest.map((m) => (
            <AftermovieCard key={m.title} {...m} />
          ))}
        </div>

        <p className="mt-20 text-center font-hand text-xl text-sage/80">
          best watched with headphones, late at night.
        </p>
      </div>
    </section>
  );
}