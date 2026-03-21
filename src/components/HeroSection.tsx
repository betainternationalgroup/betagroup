import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center bg-hero overflow-hidden pt-20">
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-electric/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric/10 border border-electric/20 mb-8"
          >
            <span className="text-sm font-medium text-electric">{t.hero.badge}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6"
          >
            {t.hero.title1}
            <br />
            <span className="text-gradient">{t.hero.titleAccent}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-primary-foreground/60 max-w-2xl mx-auto mb-10"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="https://calendly.com/bruner" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-electric hover:bg-glow text-primary-foreground font-semibold px-8 py-6 text-lg gap-2 w-full sm:w-auto">
                {t.hero.cta1} <ArrowRight size={20} />
              </Button>
            </a>
            <a href="#services">
              <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/5 px-8 py-6 text-lg gap-2 w-full sm:w-auto">
                <Play size={18} /> {t.hero.cta2}
              </Button>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-3 gap-8 mt-20 max-w-xl mx-auto"
          >
            {[
              { value: t.hero.stat1, label: t.hero.stat1Label },
              { value: t.hero.stat2, label: t.hero.stat2Label },
              { value: t.hero.stat3, label: t.hero.stat3Label },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-electric">{stat.value}</div>
                <div className="text-xs md:text-sm text-primary-foreground/50 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
