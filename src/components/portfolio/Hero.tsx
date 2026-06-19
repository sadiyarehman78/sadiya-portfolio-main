import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Download, ArrowDown, Mail } from "lucide-react";
import profileImg from "@/assets/profile.jpg";
import { profile } from "@/lib/portfolio-data";

function useTyping(words: string[]) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const word = words[i % words.length];
    const speed = del ? 50 : 90;
    const t = setTimeout(() => {
      const next = del ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1);
      setText(next);
      if (!del && next === word) setTimeout(() => setDel(true), 1400);
      else if (del && next === "") { setDel(false); setI((v) => v + 1); }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i, words]);
  return text;
}

export function Hero() {
  const typed = useTyping(profile.roles);
  return (
    <section id="home" className="relative mx-auto flex min-h-screen w-[min(96%,1100px)] flex-col items-center justify-center gap-10 pt-32 pb-16 md:flex-row md:gap-16 md:pt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex-1 text-center md:text-left"
      >
        <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
          Open to SDE & AI internships
        </span>
        <h1 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          Hi, I'm <span className="text-gradient">{profile.name}</span>
        </h1>
        <p className="mt-4 text-xl text-muted-foreground sm:text-2xl">
          <span className="font-mono text-foreground">{typed}</span>
          <span className="caret" />
        </p>
        <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground md:mx-0">
          Computer Science Engineering student at Sri Krishna Institute of Technology, Bengaluru — building practical software at the intersection of Generative AI and full-stack development.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
          <a href={profile.resume} download className="inline-flex items-center gap-2 rounded-xl btn-primary px-5 py-2.5 text-sm font-medium">
            <Download className="h-4 w-4" /> Resume
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl btn-outline-glass px-5 py-2.5 text-sm font-medium">
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl btn-outline-glass px-5 py-2.5 text-sm font-medium">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-xl btn-outline-glass px-5 py-2.5 text-sm font-medium">
            <Mail className="h-4 w-4" /> Email
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative shrink-0"
      >
        <div className="absolute -inset-6 rounded-full bg-[var(--gradient-primary)] opacity-40 blur-3xl" />
        <div className="relative animate-float">
          <div className="rounded-full p-[3px] bg-[var(--gradient-text)]">
            <img
              src={profileImg}
              alt={`${profile.name} portrait`}
              width={320}
              height={320}
              className="h-56 w-56 rounded-full object-cover sm:h-72 sm:w-72"
            />
          </div>
        </div>
      </motion.div>

      <a href="#about" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground" aria-label="Scroll down">
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
