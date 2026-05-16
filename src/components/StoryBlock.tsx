import { motion } from "framer-motion";

type Story = {
  name: string;
  city: string;
  quote: string;
  favorite?: string;
  rating?: number;
  imageSrc: string;
  imageAlt?: string;
};

function Leaves({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-1 text-brown/70">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 16 16" className="h-3 w-3" fill="currentColor" aria-hidden>
          <path d="M3 13c2-7 6-10 11-11-1 6-4 10-11 11Z" />
        </svg>
      ))}
    </div>
  );
}

export function StoryFeature({ story, reverse = false }: { story: Story; reverse?: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`grid gap-8 md:gap-14 md:grid-cols-12 items-center ${reverse ? "md:[direction:rtl]" : ""}`}
    >
      <div className="md:col-span-5 md:[direction:ltr]">
        <div className="relative">
          <img
            src={story.imageSrc}
            alt={story.imageAlt ?? story.name}
            loading="lazy"
            decoding="async"
            className="w-full aspect-[4/5] object-cover bg-muted"
            style={{ boxShadow: "var(--shadow-paper)" }}
          />
          <span className="absolute -top-3 left-6 h-4 w-14 rotate-[-3deg] bg-beige/80 shadow-sm" aria-hidden />
          <span className="absolute -top-3 right-8 h-4 w-12 rotate-[4deg] bg-beige/80 shadow-sm" aria-hidden />
        </div>
      </div>
      <div className="md:col-span-7 md:[direction:ltr]">
        <Leaves count={story.rating ?? 5} />
        <blockquote className="mt-4 font-display text-3xl md:text-5xl leading-[1.08] text-foreground">
          “{story.quote}”
        </blockquote>
        {story.favorite && (
          <p className="mt-6 font-hand text-xl text-brown">
            favorite moment — {story.favorite}
          </p>
        )}
        <p className="mt-8 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          {story.name} · {story.city}
        </p>
      </div>
    </motion.article>
  );
}

export function StorySnippet({ story, rotate = 0 }: { story: Story; rotate?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative bg-paper p-5 max-w-sm"
      style={{ boxShadow: "var(--shadow-paper)", transform: `rotate(${rotate}deg)` }}
    >
      <div className="flex items-center gap-3">
        <img
          src={story.imageSrc}
          alt={story.imageAlt ?? story.name}
          loading="lazy"
          decoding="async"
          className="h-12 w-12 object-cover rounded-sm bg-muted"
        />
        <div>
          <p className="text-sm font-medium">{story.name}</p>
          <p className="text-xs text-muted-foreground">{story.city}</p>
        </div>
      </div>
      <p className="mt-3 font-display text-lg leading-snug text-foreground">
        “{story.quote}”
      </p>
      <div className="mt-3"><Leaves count={story.rating ?? 5} /></div>
    </motion.article>
  );
}