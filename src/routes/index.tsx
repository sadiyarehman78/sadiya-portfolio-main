import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import {
  About, Skills, Projects, Experience, Education,
  Certifications, Achievements, Contact, Footer,
} from "@/components/portfolio/Sections";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { Particles } from "@/components/portfolio/Particles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sadiya Rehman — AI & Full Stack Developer Portfolio" },
      { name: "description", content: "Portfolio of Sadiya Rehman, a CSE student in Bengaluru building AI and full-stack projects with Next.js, Java and Generative AI." },
      { property: "og:title", content: "Sadiya Rehman — AI & Full Stack Developer" },
      { property: "og:description", content: "CSE student crafting Generative AI and full-stack software." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Particles />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
