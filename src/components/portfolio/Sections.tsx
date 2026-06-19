import { motion } from "framer-motion";
import { Section } from "./Section";
import {
  Code2, Database, Server, Sparkles, Wrench, Layout, Briefcase, GraduationCap,
  Award, Trophy, Github, ExternalLink, Mail, Phone, Linkedin, MapPin,
} from "lucide-react";
import {
  profile, skillGroups, projects, experience, education, certifications, achievements,
} from "@/lib/portfolio-data";


const skillIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Languages: Code2, Frontend: Layout, Backend: Server, Database: Database,
  "AI & ML": Sparkles, Tools: Wrench,
};

export function About() {
  return (
    <Section id="about" eyebrow="01 — About" title="About me">
<div className="mx-auto max-w-3xl rounded-2xl glass p-8 text-center text-lg text-foreground">        <p>
          I'm a Computer Science and Engineering student from India who loves turning ideas into working software. My focus areas are
          <span className="text-foreground"> Artificial Intelligence, Generative AI, and Full-Stack Development</span>.
        </p>
        <p className="mt-4">
          I believe great engineers are built on three habits — <span className="text-foreground">curiosity, consistency, and clean problem solving</span>.
          I'm constantly shipping side projects, exploring new frameworks, and preparing for software engineering and AI roles where I can grow alongside a strong team.
        </p>
      </div>
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" eyebrow="02 — Skills" title="Tech I work with">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => {
          const Icon = skillIcons[g.title] ?? Code2;
          return (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl glass p-6 transition-shadow hover:glow-ring"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl btn-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-semibold">{g.title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span key={s} className="rounded-full border border-border bg-accent/40 px-3 py-1 text-xs text-foreground/90 transition-colors group-hover:border-primary/60">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

export function Projects() {
  return (
    <Section id="projects" eyebrow="03 — Projects" title="Selected work">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.07 }}
            whileHover={{ y: -6 }}
            className="group overflow-hidden rounded-2xl glass"
          >
            <div className="relative overflow-hidden">
              <img
                src={p.image}
                alt={`${p.title} preview`}
                loading="lazy"
                width={1024}
                height={640}
                className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
<div className="absolute inset-0 dark:bg-gradient-to-t dark:from-background dark:via-background/20 dark:to-transparent"></div>            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
              <ul className="mt-3 grid gap-1 text-xs text-muted-foreground">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-primary">▹</span> {f}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-md border border-border bg-accent/30 px-2 py-0.5 font-mono text-[11px]">{t}</span>
                ))}
              </div>
              <div className="mt-5 flex gap-3">
                {p.github ? (
                  <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-lg btn-outline-glass px-3 py-1.5 text-xs">
                    <Github className="h-3.5 w-3.5" /> Code
                  </a>
                ) : null}
                {p.demo ? (
                  <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-lg btn-primary px-3 py-1.5 text-xs">
                    <ExternalLink className="h-3.5 w-3.5" /> Live
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-accent/30 px-3 py-1.5 text-xs text-muted-foreground">
                    Not deployed
                  </span>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience" eyebrow="04 — Experience" title="Where I've grown">
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-[var(--gradient-primary)] md:left-1/2" />
        <div className="space-y-8">
          {experience.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, x: i % 2 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`relative pl-12 md:w-1/2 md:pl-0 ${i % 2 ? "md:ml-auto md:pl-10" : "md:pr-10 md:text-right"}`}
            >
              <span className={`absolute left-2 top-3 h-3 w-3 rounded-full bg-primary shadow-[0_0_12px_var(--color-primary)] md:left-auto ${i % 2 ? "md:-left-[7px]" : "md:-right-[7px]"}`} />
              <div className="rounded-2xl glass p-5">
                <p className="font-mono text-xs text-muted-foreground">{e.period}</p>
                <h3 className="mt-1 font-display text-lg font-semibold">{e.title}</h3>
                <p className="text-sm text-primary">{e.org}</p>
                <p className="mt-2 text-sm text-muted-foreground">{e.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education" eyebrow="05 — Education" title="Academic background">
      <div className="mx-auto max-w-3xl space-y-6">
        {education.map((ed) => (
          <motion.div
            key={ed.degree}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl glass p-6"
          >
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl btn-primary">
                <GraduationCap className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <h3 className="font-display text-lg font-semibold">{ed.degree}</h3>
                <p className="text-sm text-primary">{ed.school}</p>
                <p className="mt-1 font-mono text-xs text-muted-foreground">{ed.period} • {ed.cgpa.includes("%") ? "Percentage" : "CGPA"} {ed.cgpa}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {ed.courses.map((c) => (
                    <span key={c} className="rounded-full border border-border bg-accent/40 px-2.5 py-1 text-xs text-muted-foreground">{c}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="06 — Certifications" title="Continuous learning">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            whileHover={{ y: -4 }}
            className="flex items-start gap-3 rounded-2xl glass p-5"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl btn-primary">
              <Award className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-medium leading-snug">{c.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{c.issuer} • {c.year}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="07 — Achievements" title="Highlights & milestones">
      <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
        {achievements.map((a, i) => (
          <motion.div
            key={a}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="flex items-start gap-3 rounded-2xl glass p-5"
          >
            <Trophy className="mt-0.5 h-5 w-5 text-[oklch(0.82_0.16_200)]" />
            <p className="text-sm text-muted-foreground">{a}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export function Contact() {
  return (
    <Section id="contact" eyebrow="08 — Contact" title="Let's build something">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl glass p-6"
        >
          <h3 className="font-display text-xl font-semibold">Reach out</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            I'm open to internships, freelance work and collaborations. Drop a line — I usually reply within a day.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-primary" /><a href={`mailto:${profile.email}`} className="hover:text-primary">{profile.email}</a></li>
            <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-primary" /><span>{profile.phone}</span></li>
            <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-primary" /><span>{profile.location}</span></li>
            <li className="flex items-center gap-3"><Github className="h-4 w-4 text-primary" /><a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-primary">{profile.github.replace("https://", "")}</a></li>
            <li className="flex items-center gap-3"><Linkedin className="h-4 w-4 text-primary" /><a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary">{profile.linkedin.replace("https://", "")}</a></li>
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="mx-auto mt-10 w-[min(96%,1100px)] border-t border-border py-8 text-center text-sm text-muted-foreground">
      <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}. Crafted with React & Tailwind.</p>
        <div className="flex gap-3">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-lg btn-outline-glass p-2"><Github className="h-4 w-4" /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-lg btn-outline-glass p-2"><Linkedin className="h-4 w-4" /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="rounded-lg btn-outline-glass p-2"><Mail className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}

export const _icons = { Briefcase }; // keep tree-shake happy
export function Sections() {
  return (
    <>
      <About />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Certifications />
            <Achievements />
            <Contact />
            <Footer />
    </>
  );
}

