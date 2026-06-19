import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto w-[min(96%,1100px)] scroll-mt-28 py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-10 text-center md:mb-14"
      >
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">{eyebrow}</p>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl md:text-5xl">
          <span className="text-gradient">{title}</span>
        </h2>
        <div className="mx-auto mt-4 h-px w-20 bg-[var(--gradient-primary)]" />
      </motion.div>
      {children}
    </section>
  );
}
