import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";
import TypewriterText from "@/components/TypewriterText";
import HeroCarousel from "@/components/HeroCarousel";
import { openZanjForm } from "@/lib/openZanjForm";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="top" className="relative min-h-screen flex items-center bg-hero overflow-hidden pt-32 md:pt-40">
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-electric/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-y-0 items-start max-w-6xl mx-auto text-center lg:text-left">
         <div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
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
            className="text-base md:text-lg text-primary-foreground/60 max-w-2xl mx-auto lg:mx-0 mb-10"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-3 justify-center lg:justify-start"
          >
            <button
              onClick={() => openZanjForm('contact')}
              style={{
                background: '#1e3a8a',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                padding: '10px 20px',
                fontSize: '14px',
                cursor: 'pointer',
              }}
            >
              {t.hero.expertBtn}
            </button>
            <a
              href="https://www.zanj.ai"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#fff',
                color: '#1e3a8a',
                border: '1px solid #1e3a8a',
                borderRadius: '8px',
                padding: '10px 20px',
                fontSize: '14px',
                cursor: 'pointer',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              {t.hero.tryBtn}
            </a>
          </motion.div>

         </div>

         {/* Carousel - right column on desktop */}
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.7, delay: 0.7 }}
           className="mt-14 lg:mt-0 max-w-2xl mx-auto lg:mx-0 w-full flex flex-col items-center lg:items-start"
         >
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric/10 border border-electric/20 mb-4"
           >
             <span className="text-sm font-medium text-electric">{t.hero.badge}</span>
           </motion.div>
           <HeroCarousel />
         </motion.div>

         {/* Stats — under the carousel on desktop */}
         <motion.div
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.9 }}
           className="grid grid-cols-3 gap-8 mt-0 mb-8 max-w-xl mx-auto lg:col-start-2 lg:mx-0"
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
