import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";
import { Bot, Brain, Search, Layers, GraduationCap, BarChart3 } from "lucide-react";

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    { icon: Bot, title: t.services.s1Title, desc: t.services.s1Desc },
    { icon: Brain, title: t.services.s2Title, desc: t.services.s2Desc },
    { icon: Search, title: t.services.s3Title, desc: t.services.s3Desc },
    { icon: Layers, title: t.services.s4Title, desc: t.services.s4Desc },
    { icon: GraduationCap, title: t.services.s5Title, desc: t.services.s5Desc },
    { icon: BarChart3, title: t.services.s6Title, desc: t.services.s6Desc },
  ];

  return (
    <section id="services" className="py-24 lg:py-32 relative z-10 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">{t.services.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.services.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-electric/30 shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center mb-6 group-hover:bg-electric/20 transition-colors">
                <s.icon className="w-6 h-6 text-electric" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
