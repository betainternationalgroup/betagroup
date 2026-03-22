import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";
import { MapPin, Shield, Award, Handshake, Linkedin, CheckCircle, Users } from "lucide-react";

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

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
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

        {/* Team - integrated */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-2">{t.team.title}</h3>
          <p className="text-primary-foreground/60 max-w-xl mx-auto">{t.team.subtitle}</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-8 items-center p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 mb-6"
          >
            <div className="w-32 h-32 rounded-2xl bg-electric/20 flex items-center justify-center shrink-0">
              <div className="font-display text-4xl font-bold text-electric">BN</div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h4 className="font-display text-xl font-bold text-primary-foreground">{t.team.bruner.name}</h4>
              <p className="text-electric font-medium mb-3">{t.team.bruner.role}</p>
              <p className="text-primary-foreground/60 leading-relaxed mb-3 text-sm">{t.team.bruner.bio}</p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-3">
                {t.team.bruner.credentials.map((c) => (
                  <span key={c} className="inline-flex items-center gap-1.5 text-xs font-medium text-electric bg-electric/10 px-3 py-1 rounded-full">
                    <CheckCircle size={12} /> {c}
                  </span>
                ))}
              </div>
              <a href="https://www.linkedin.com/in/bruner" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-electric transition-colors">
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 p-5 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10"
          >
            <Users className="w-7 h-7 text-electric shrink-0" />
            <p className="text-primary-foreground/70 leading-relaxed text-sm">{t.team.teamMembers}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
