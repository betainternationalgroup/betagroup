import { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#services", label: t.nav.services },
    { href: "#why", label: t.nav.why },
    { href: "#compliance", label: t.nav.compliance },
    { href: "#team", label: t.nav.team },
    { href: "#testimonials", label: t.nav.testimonials },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-dark/90 backdrop-blur-xl border-b border-primary/10">
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        <a href="#" className="font-display text-2xl font-bold text-primary-foreground tracking-tight">
          Beta<span className="text-electric">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-2 ml-4">
            <button onClick={() => setLang("fr")} className={`text-xs font-bold px-2 py-1 rounded ${lang === "fr" ? "bg-electric text-primary-foreground" : "text-primary-foreground/50 hover:text-primary-foreground/80"}`}>FR</button>
            <button onClick={() => setLang("en")} className={`text-xs font-bold px-2 py-1 rounded ${lang === "en" ? "bg-electric text-primary-foreground" : "text-primary-foreground/50 hover:text-primary-foreground/80"}`}>EN</button>
          </div>
          <a href="https://calendly.com/bruner" target="_blank" rel="noopener noreferrer">
            <Button variant="default" className="bg-electric hover:bg-glow text-primary-foreground font-semibold">
              {t.nav.cta}
            </Button>
          </a>
        </div>

        {/* Mobile */}
        <button className="lg:hidden text-primary-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-navy-dark/95 backdrop-blur-xl border-t border-primary/10 pb-6">
          <div className="container mx-auto px-4 flex flex-col gap-4 pt-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground">
                {l.label}
              </a>
            ))}
            <div className="flex gap-2">
              <button onClick={() => setLang("fr")} className={`text-xs font-bold px-2 py-1 rounded ${lang === "fr" ? "bg-electric text-primary-foreground" : "text-primary-foreground/50"}`}>FR</button>
              <button onClick={() => setLang("en")} className={`text-xs font-bold px-2 py-1 rounded ${lang === "en" ? "bg-electric text-primary-foreground" : "text-primary-foreground/50"}`}>EN</button>
            </div>
            <a href="https://calendly.com/bruner" target="_blank" rel="noopener noreferrer">
              <Button variant="default" className="w-full bg-electric hover:bg-glow text-primary-foreground font-semibold">
                {t.nav.cta}
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
