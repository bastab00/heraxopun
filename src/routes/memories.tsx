import { createFileRoute } from "@tanstack/react-router";
import { Polaroid } from "@/components/Polaroid";
import { memories } from "@/lib/content";

export const Route = createFileRoute("/memories")({
  head: () => ({
    meta: [
      { title: "Memories - HeraXopun" },
      {
        name: "description",
        content:
          "A scrapbook of candid moments from HeraXopun journeys across Northeast India.",
      },
      { property: "og:title", content: "Memories - HeraXopun" },
      {
        property: "og:description",
        content: "Polaroids, 3am chai stops, and the in-between moments.",
      },
    ],
  }),
  component: MemoriesPage,
});

function MemoriesPage() {
  return (
    <section className="pt-32 md:pt-40 pb-24 md:pb-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="max-w-2xl mb-14 md:mb-20">
          <p className="font-hand text-2xl text-brown">a wall of</p>
          <h1 className="font-display text-5xl md:text-7xl text-foreground -mt-1">
            memories
          </h1>
          <p className="mt-5 text-muted-foreground">
            Unedited, mostly grainy, occasionally blurry. The way trips actually feel.
          </p>
        </div>

        {/* Masonry columns */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-5 md:gap-8 [column-fill:_balance]">
          {memories.map((m, i) => (
            <div key={i} className="mb-5 md:mb-8 break-inside-avoid">
              <Polaroid
                src={m.src}
                alt={m.alt}
                caption={m.caption}
                rotate={m.rotate}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
