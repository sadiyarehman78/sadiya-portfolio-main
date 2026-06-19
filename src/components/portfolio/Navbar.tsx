import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certs" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
  }, [light]);
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-4 z-50 mx-auto flex w-[min(96%,1100px)] items-center justify-between rounded-2xl glass px-4 py-3 sm:px-6"
    >
      <a href="#home" className="flex items-center gap-2 font-display text-lg font-bold">
        <span className="grid h-8 w-8 place-items-center rounded-lg btn-primary text-sm">SR</span>
        <span className="hidden sm:inline text-gradient">Sadiya Rehman</span>
      </a>
      <nav className="hidden md:flex items-center gap-1">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">
            {l.label}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-2">
        <button
          onClick={() => setLight((v) => !v)}
          aria-label="Toggle theme"
          className="rounded-lg btn-outline-glass p-2"
        >
          {light ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
        </button>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="md:hidden rounded-lg btn-outline-glass p-2"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>
      {open && (
        <div className="absolute left-0 right-0 top-full mt-2 rounded-2xl glass-strong p-3 md:hidden">
          <nav className="grid gap-1">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </motion.header>
  );
}
