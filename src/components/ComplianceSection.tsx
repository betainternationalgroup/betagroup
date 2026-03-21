import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";
import { Server, Lock, FileSearch, Eye } from "lucide-react";

const ComplianceSection = () => {
  const { t } = useLanguage();

  const cards = [
    { icon: Server, title: t.compliance.c1Title, desc: t.compliance.c1Desc },
    { icon: Lock, title: t.compliance.c2Title, desc: t.compliance.c2Desc },
    { icon: FileSearch, title: t.compliance.c3Title, desc: t.compliance.c3Desc },
    { icon: Eye, title: t.compliance.c4Title, desc: t.compliance.c4Desc },
  ];

  return (
    <section id="compliance" className="py-24 lg:py-32 relative z-10 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">{t.compliance.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">{t.compliance.subtitle}</p>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {t.compliance.badges.map((badge) => (
              <span key={badge} className="px-4 py-2 rounded-full bg-electric/10 border border-electric/20 text-electric font-semibold text-sm">
                {badge}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border shadow-card"
            >
              <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center mb-5">
                <card.icon className="w-6 h-6 text-electric" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;
