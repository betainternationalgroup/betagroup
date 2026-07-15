import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";
import { Linkedin, Mail, Phone, Calendar } from "lucide-react";

const FooterSection = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative z-10 bg-navy-dark border-t border-primary-foreground/10 py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <a href="#" className="font-display text-2xl font-bold text-primary-foreground tracking-tight">
              Beta<span className="text-electric">.</span>
            </a>
            <p className="text-primary-foreground/50 mt-4 max-w-md leading-relaxed">{t.footer.description}</p>
            <div className="flex gap-4 mt-6">
              <a href="https://www.linkedin.com/in/bruner" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-primary-foreground/5 flex items-center justify-center text-primary-foreground/50 hover:text-electric hover:bg-electric/10 transition-all">
                <Linkedin size={18} />
              </a>
              <a href="mailto:equipe@beta.international" className="w-10 h-10 rounded-lg bg-primary-foreground/5 flex items-center justify-center text-primary-foreground/50 hover:text-electric hover:bg-electric/10 transition-all">
                <Mail size={18} />
              </a>
              <a href="tel:+5145451030" className="w-10 h-10 rounded-lg bg-primary-foreground/5 flex items-center justify-center text-primary-foreground/50 hover:text-electric hover:bg-electric/10 transition-all">
                <Phone size={18} />
              </a>
              <a href="https://cal.com/beta-group/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 h-10 px-4 rounded-lg bg-electric/10 text-electric hover:bg-electric hover:text-primary-foreground transition-all text-sm font-semibold">
                <Calendar size={16} /> {t.nav.cta}
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">{t.footer.services}</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/50">
              <li><a href="#services" className="hover:text-electric transition-colors">{t.services.s1Title}</a></li>
              <li><a href="#services" className="hover:text-electric transition-colors">{t.services.s2Title}</a></li>
              <li><a href="#services" className="hover:text-electric transition-colors">{t.services.s3Title}</a></li>
              <li><a href="#services" className="hover:text-electric transition-colors">{t.services.s5Title}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">{t.footer.company}</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/50">
              <li><a href="#team" className="hover:text-electric transition-colors">{t.footer.about}</a></li>
              <li><a href="#" className="hover:text-electric transition-colors">{t.footer.blog}</a></li>
              <li><Link to="/conformite" className="hover:text-electric transition-colors">Conformité</Link></li>
              <li><a href="#" className="hover:text-electric transition-colors">{t.footer.privacy}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/40">© {new Date().getFullYear()} Beta International. {t.footer.rights}</p>
          <p className="text-sm text-primary-foreground/40">{t.footer.madeIn}</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
