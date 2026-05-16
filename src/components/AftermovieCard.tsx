import { Play } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
  posterSrc: string;
  title: string;
  meta?: string;
  large?: boolean;
};

export function AftermovieCard({ posterSrc, title, meta, large = false }: Props) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden ${large ? "aspect-[16/9]" : "aspect-[4/5]"}`}
    >
      <img
        src={posterSrc}
        alt={title}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
      <div className="absolute inset-0 flex items-end justify-between p-6 md:p-8">
        <div className="text-paper">
          <p className="text-[10px] uppercase tracking-[0.3em] opacity-70">{meta}</p>
          <h3 className="font-display text-2xl md:text-4xl mt-1 leading-tight">{title}</h3>
        </div>
        <div className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-paper/90 text-ink flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
          <Play className="h-5 w-5 ml-0.5" fill="currentColor" />
        </div>
      </div>
    </motion.figure>
  );
}