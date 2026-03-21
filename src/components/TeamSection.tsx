import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";
import { Linkedin, CheckCircle, Users } from "lucide-react";

const TeamSection = () => {
  const { t } = useLanguage();

  return (
    <section id="team" className="py-24 lg:py-32 relative z-10 bg-hero">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">{t.team.title}</h2>
          <p className="text-lg text-primary-foreground/60 max-w-2xl mx-auto">{t.team.subtitle}</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Bruner profile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-8 items-center p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 mb-10"
          >
            <div className="w-40 h-40 rounded-2xl bg-electric/20 flex items-center justify-center shrink-0 overflow-hidden">
              <div className="font-display text-5xl font-bold text-electric">BN</div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-display text-2xl font-bold text-primary-foreground">{t.team.bruner.name}</h3>
              <p className="text-electric font-medium mb-4">{t.team.bruner.role}</p>
              <p className="text-primary-foreground/60 leading-relaxed mb-4">{t.team.bruner.bio}</p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-4">
                {t.team.bruner.credentials.map((c) => (
                  <span key={c} className="inline-flex items-center gap-1.5 text-xs font-medium text-electric bg-electric/10 px-3 py-1.5 rounded-full">
                    <CheckCircle size={12} /> {c}
                  </span>
                ))}
              </div>
              <a href="https://www.linkedin.com/in/bruner" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-electric transition-colors">
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Team description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10"
          >
            <Users className="w-8 h-8 text-electric shrink-0" />
            <p className="text-primary-foreground/70 leading-relaxed">{t.team.teamMembers}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
