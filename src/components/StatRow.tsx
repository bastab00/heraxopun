import { motion } from "framer-motion";

type Stat = { value: string; label: string };

export function StatRow({ stats }: { stats: Stat[] }) {
  return (
    <div className="border-y border-border/60 py-12 md:py-20">
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-y-0">
        {stats.map((s, i) => (
          <motion.li
            key={s.label}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center"
          >
            <span className="font-display text-5xl md:text-7xl font-light text-foreground tracking-tight">
              {s.value}
            </span>
            <span className="mt-3 text-[10px] md:text-xs uppercase tracking-[0.3em] text-muted-foreground">
              {s.label}
            </span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}