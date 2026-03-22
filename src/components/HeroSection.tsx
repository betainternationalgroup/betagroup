import { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import TypewriterText from "@/components/TypewriterText";
import ContactFormDialog from "@/components/ContactFormDialog";
import HeroCarousel from "@/components/HeroCarousel";

const HeroSection = () => {
  const { t } = useLanguage();
  const [contactOpen, setContactOpen] = useState(false);

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
            <span className="text-gradient">
              <TypewriterText text={t.hero.titleAccent} speed={50} />
            </span>
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
            className="flex justify-center"
          >
            <Button
              size="lg"
              className="bg-electric hover:bg-glow text-primary-foreground font-semibold px-8 py-6 text-lg gap-2"
              onClick={() => setContactOpen(true)}
            >
              {t.hero.cta2} <ArrowRight size={20} />
            </Button>
          </motion.div>

          {/* Video Thumbnail */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-14 max-w-2xl mx-auto cursor-pointer group"
            onClick={() => setVideoOpen(true)}
          >
            <div className="relative rounded-2xl overflow-hidden border border-electric/20 shadow-2xl shadow-electric/10">
              <img
                src={aiAgenticImg}
                alt="AI Agents - Beta International"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/30 flex items-center justify-center group-hover:bg-background/20 transition-colors duration-300">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-electric/90 flex items-center justify-center shadow-lg shadow-electric/30 group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-7 h-7 md:w-9 md:h-9 text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid grid-cols-3 gap-8 mt-16 max-w-xl mx-auto"
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

      <ContactFormDialog open={contactOpen} onOpenChange={setContactOpen} />
      <VideoDialog open={videoOpen} onOpenChange={setVideoOpen} />
    </section>
  );
};

export default HeroSection;
