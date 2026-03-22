import { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Clock, DollarSign, Users, BarChart3, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import CalPopupDialog from "@/components/CalPopupDialog";

const iconMap = [TrendingUp, Clock, DollarSign, Users, BarChart3, Zap];

const CaseStudiesSection = () => {
  const { t, lang } = useLanguage();
  const [calOpen, setCalOpen] = useState(false);
  const cases = t.caseStudies;

  return (
    <section id="case-studies" className="py-24 lg:py-32 relative z-10 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            {cases.badge}
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            {cases.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {cases.subtitle}
          </p>
        </motion.div>

        <div className="grid gap-8 max-w-6xl mx-auto">
          {cases.items.map((cs, i) => {
            const Icon = iconMap[i % iconMap.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-2xl border border-border bg-card shadow-card overflow-hidden hover:border-accent/30 transition-all duration-300"
              >
                <div className="grid md:grid-cols-[1fr_auto] gap-0">
                  {/* Content */}
                  <div className="p-8 lg:p-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                          {cs.industry}
                        </span>
                        <h3 className="font-display text-xl font-bold text-foreground leading-tight">
                          {cs.client}
                        </h3>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {cs.challenge}
                    </p>
                    <p className="text-foreground/80 mb-6 leading-relaxed">
                      <span className="font-semibold text-accent">{lang === "fr" ? "Solution:" : "Solution:"}</span>{" "}
                      {cs.solution}
                    </p>

                    {/* Results */}
                    <div className="flex flex-wrap gap-3">
                      {cs.results.map((result, j) => (
                        <div
                          key={j}
                          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-accent/5 border border-accent/10"
                        >
                          <TrendingUp className="w-4 h-4 text-accent" />
                          <span className="text-sm font-semibold text-foreground">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Side accent strip */}
                  <div className="hidden md:flex w-2 bg-gradient-to-b from-accent/20 via-accent/40 to-accent/20 group-hover:from-accent/40 group-hover:via-accent/60 group-hover:to-accent/40 transition-all duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-xl px-8 gap-2"
            onClick={() => window.open("https://calendly.com/beta-international", "_blank")}
          >
            {lang === "fr" ? "Discuter de votre projet" : "Discuss your project"}
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
