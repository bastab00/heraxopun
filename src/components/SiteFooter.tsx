import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { LeafLogo } from "./LeafLogo";
import { buildWhatsappEnquiryUrl } from "@/lib/contact";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border/60 bg-paper">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="font-display text-3xl md:text-5xl leading-[1.05] text-foreground max-w-xl">
              Maybe the best stories begin with saying{" "}
              <span className="font-hand text-brown text-4xl md:text-6xl">yes</span>.
            </p>
            <div className="mt-10 flex items-center gap-2 text-foreground">
              <LeafLogo className="h-12 w-auto" />
              <span className="text-muted-foreground text-sm">· Northeast India</span>
            </div>
          </div>

          <div className="md:col-span-5 grid grid-cols-2 gap-8 text-sm">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Wander
              </p>
              <ul className="space-y-2.5">
                <li><Link to="/memories" className="hover:text-forest transition-colors">Memories</Link></li>
                <li><Link to="/stories" className="hover:text-forest transition-colors">Stories</Link></li>
                <li><Link to="/aftermovies" className="hover:text-forest transition-colors">Aftermovies</Link></li>
                <li><Link to="/journeys" className="hover:text-forest transition-colors">Journeys</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Say hi
              </p>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="https://instagram.com/heraxopun"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-forest transition-colors"
                  >
                    <Instagram className="h-4 w-4" /> Instagram
                  </a>
                </li>
                <li>
                  <a
                    href={buildWhatsappEnquiryUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-forest transition-colors"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <Link to="/journeys" className="hover:text-forest transition-colors">
                    Share your story
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-muted-foreground border-t border-border/50 pt-6">
          <p>© {new Date().getFullYear()} HeraXopun · made with chai & long drives</p>
          <p className="font-hand text-base text-brown">
            26.1151° N 91.7032° E
          </p>
        </div>
      </div>
    </footer>
  );
}