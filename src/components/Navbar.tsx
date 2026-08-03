import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown } from "lucide-react";
import logoImg from "@/assets/logo-beta.png";
import CalPopupDialog from "@/components/CalPopupDialog";

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [calOpen, setCalOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const hrefFor = (hash: string) => (isHome ? hash : `/${hash}`);

  const links = [
    { href: "#top", label: t.nav.home },
    { href: "#services", label: t.nav.services },
    { href: "#solutions", label: t.nav.solutions },
    { href: "#why", label: t.nav.why },
    { href: "#case-studies", label: t.nav.caseStudies },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-dark/90 backdrop-blur-xl border-b border-primary/10">
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-16 lg:h-20">
          <a href={isHome ? "#top" : "/"} className="flex items-center gap-2">
            <img src={logoImg} alt="Beta International" className="h-9 w-auto" />
            <div className="flex flex-col">
              <span className="font-display text-2xl font-bold text-primary-foreground tracking-tight leading-none">
                Beta<span className="text-electric">.</span>
              </span>
              <span className="text-[9px] text-primary-foreground/50 font-medium tracking-wide leading-none mt-0.5">
                {t.nav.slogan}
              </span>
            </div>
          </a>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={hrefFor(l.href)} className="text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                {l.label}
              </a>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground transition-colors flex items-center gap-1 outline-none">
                {t.nav.tools} <ChevronDown size={14} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-navy-dark border-primary-foreground/10">
                <DropdownMenuItem asChild>
                  <a href="/outils/calculateur" className="text-primary-foreground/80 hover:text-primary-foreground focus:text-primary-foreground focus:bg-electric/10 cursor-pointer">
                    {t.nav.toolsRoi}
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/outils/audit" className="text-primary-foreground/80 hover:text-primary-foreground focus:text-primary-foreground focus:bg-electric/10 cursor-pointer">
                    {t.nav.toolsAudit}
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="flex items-center gap-2 ml-4">
              <button onClick={() => setLang("fr")} className={`text-xs font-bold px-2 py-1 rounded ${lang === "fr" ? "bg-electric text-primary-foreground" : "text-primary-foreground/50 hover:text-primary-foreground/80"}`}>FR</button>
              <button onClick={() => setLang("en")} className={`text-xs font-bold px-2 py-1 rounded ${lang === "en" ? "bg-electric text-primary-foreground" : "text-primary-foreground/50 hover:text-primary-foreground/80"}`}>EN</button>
            </div>
            <Button variant="default" className="bg-electric hover:bg-glow text-primary-foreground font-semibold" onClick={() => setCalOpen(true)}>
              {t.nav.cta}
            </Button>
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
                <a key={l.href} href={hrefFor(l.href)} onClick={() => setOpen(false)} className="text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground">
                  {l.label}
                </a>
              ))}
              <div className="text-sm font-medium text-primary-foreground/70 pt-2 border-t border-primary-foreground/10">
                {t.nav.tools}
              </div>
              <a href="/outils/calculateur" onClick={() => setOpen(false)} className="text-sm font-medium text-primary-foreground/50 hover:text-primary-foreground pl-3">
                {t.nav.toolsRoi}
              </a>
              <a href="/outils/audit" onClick={() => setOpen(false)} className="text-sm font-medium text-primary-foreground/50 hover:text-primary-foreground pl-3">
                {t.nav.toolsAudit}
              </a>
              <div className="flex gap-2">
                <button onClick={() => setLang("fr")} className={`text-xs font-bold px-2 py-1 rounded ${lang === "fr" ? "bg-electric text-primary-foreground" : "text-primary-foreground/50"}`}>FR</button>
                <button onClick={() => setLang("en")} className={`text-xs font-bold px-2 py-1 rounded ${lang === "en" ? "bg-electric text-primary-foreground" : "text-primary-foreground/50"}`}>EN</button>
              </div>
              <Button variant="default" className="w-full bg-electric hover:bg-glow text-primary-foreground font-semibold" onClick={() => { setCalOpen(true); setOpen(false); }}>
                {t.nav.cta}
              </Button>
            </div>
          </div>
        )}
      </nav>

      <CalPopupDialog open={calOpen} onOpenChange={setCalOpen} />
    </>
  );
};

export default Navbar;
