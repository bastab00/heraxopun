import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import heraxopunLogo from "@/assets/heraxopun-logo.png";
import heraxopunWordmark from "@/assets/heraxopun-logo-name.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/memories", label: "Memories" },
  { to: "/stories", label: "Stories" },
  { to: "/aftermovies", label: "Aftermovies" },
  { to: "/journeys", label: "Journeys" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-md bg-paper/70 border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10 md:py-5">
          <Link
            to="/"
            className="flex items-center gap-1 text-foreground"
            aria-label="HeraXopun home"
          >
            <img src={heraxopunLogo} alt="HeraXopun mark" className="h-14 w-auto" />
            <img src={heraxopunWordmark} alt="HeraXopun wordmark" className="h-8 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.slice(1).map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm tracking-wide text-foreground/75 hover:text-foreground transition-colors"
                activeProps={{ className: "text-foreground" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <div
        className={`fixed inset-0 z-[70] bg-paper transition-opacity duration-500 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-1"
          >
            <img src={heraxopunLogo} alt="HeraXopun mark" className="h-24 w-auto" />
            <img src={heraxopunWordmark} alt="HeraXopun wordmark" className="h-10 w-auto" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex flex-col gap-1 px-8 pt-12">
          {links.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="font-display text-4xl py-3 text-foreground"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(12px)",
                transition: `opacity 500ms var(--ease-cinema) ${120 + i * 60}ms, transform 500ms var(--ease-cinema) ${120 + i * 60}ms`,
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <p className="absolute bottom-10 left-8 right-8 font-hand text-xl text-brown">
          maybe the best stories begin with saying yes.
        </p>
      </div>
    </>
  );
}