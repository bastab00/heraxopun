import { createFileRoute } from "@tanstack/react-router";
import { StoryFeature, StorySnippet } from "@/components/StoryBlock";
import { stories } from "@/lib/content";

export const Route = createFileRoute("/stories")({
  head: () => ({
    meta: [
      { title: "Stories - HeraXopun" },
      {
        name: "description",
        content:
          "Real travelers, real words. Testimonials and journal entries from HeraXopun journeys.",
      },
      { property: "og:title", content: "Stories - HeraXopun" },
      {
        property: "og:description",
        content: "Real people. Real words. From the road.",
      },
    ],
  }),
  component: StoriesPage,
});

function StoriesPage() {
  const features = stories.slice(0, 3);
  const snippets = stories.slice(3);

  return (
    <section className="pt-32 md:pt-40 pb-24 md:pb-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="max-w-2xl mb-16 md:mb-24">
          <p className="font-hand text-2xl text-brown">in their own words</p>
          <h1 className="font-display text-5xl md:text-7xl text-foreground -mt-1">
            stories
          </h1>
          <p className="mt-5 text-muted-foreground">
            What travelers said when they got home and the dust hadn't settled yet.
          </p>
        </div>

        <div className="space-y-24 md:space-y-40">
          {features.map((s, i) => (
            <StoryFeature key={s.name} story={s} reverse={i % 2 === 1} />
          ))}
        </div>

        {snippets.length > 0 && (
          <div className="mt-28 md:mt-40">
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-10">
              shorter notes from the road
            </p>
            <div className="grid gap-8 md:grid-cols-2">
              {snippets.map((s, i) => (
                <StorySnippet key={s.name} story={s} rotate={i % 2 === 0 ? -1.5 : 1.5} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}