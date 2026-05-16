import { motion } from "framer-motion";
import type { CSSProperties } from "react";

type PolaroidProps = {
  src: string;
  alt: string;
  caption?: string;
  rotate?: number;
  width?: number;
  height?: number;
  className?: string;
  style?: CSSProperties;
  priority?: boolean;
};

export function Polaroid({
  src,
  alt,
  caption,
  rotate = 0,
  width,
  height,
  className = "",
  style,
  priority = false,
}: PolaroidProps) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 20, rotate: rotate - 4 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ rotate: rotate + 1.5, y: -4, transition: { duration: 0.4 } }}
      className={`relative bg-paper p-3 pb-10 will-change-transform ${className}`}
      style={{
        boxShadow: "var(--shadow-paper)",
        ...style,
      }}
    >
      <div className="relative overflow-hidden bg-muted">
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="block h-full w-full object-cover"
        />
      </div>
      {caption && (
        <figcaption className="absolute bottom-2 left-0 right-0 text-center font-hand text-base text-brown">
          {caption}
        </figcaption>
      )}
    </motion.figure>
  );
}