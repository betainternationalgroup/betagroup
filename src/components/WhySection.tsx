import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";
import { MapPin, Shield, Award, Handshake } from "lucide-react";

const WhySection = () => {
  const { t } = useLanguage();

  const items = [
    { icon: MapPin, title: t.why.w1Title, desc: t.why.w1Desc },
    { icon: Shield, title: t.why.w2Title, desc: t.why.w2Desc },
    { icon: Award, title: t.why.w3Title, desc: t.why.w3Desc },
    { icon: Handshake, title: t.why.w4Title, desc: t.why.w4Desc },
  ];

  return (
    <section id="why" className="py-24 lg:py-32 relative z-10 bg-hero">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">{t.why.title}</h2>
          <p className="text-lg text-primary-foreground/60 max-w-2xl mx-auto">{t.why.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex gap-5 p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10"
            >
              <div className="w-12 h-12 rounded-xl bg-electric/20 flex items-center justify-center shrink-0">
                <item.icon className="w-6 h-6 text-electric" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-primary-foreground mb-2">{item.title}</h3>
                <p className="text-primary-foreground/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
