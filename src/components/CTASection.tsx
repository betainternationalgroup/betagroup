import { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import CalPopupDialog from "@/components/CalPopupDialog";

const CTASection = () => {
  const { t } = useLanguage();
  const [calOpen, setCalOpen] = useState(false);

  return (
    <section className="py-24 lg:py-32 relative z-10 bg-hero">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-electric/5 blur-[100px]" />
      </div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6">{t.cta.title}</h2>
          <p className="text-lg text-primary-foreground/60 mb-10">{t.cta.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-electric hover:bg-glow text-primary-foreground font-semibold px-8 py-6 text-lg gap-2 w-full sm:w-auto" onClick={() => setCalOpen(true)}>
              {t.cta.button} <ArrowRight size={20} />
            </Button>
            <a href="https://share.hsforms.com/1pTFSfeIWSUWl86V-oNypbg45u1l" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/5 px-8 py-6 text-lg gap-2 w-full sm:w-auto">
                <FileText size={18} /> {t.cta.buttonAlt}
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
      <CalPopupDialog open={calOpen} onOpenChange={setCalOpen} />
    </section>
  );
};

export default CTASection;
