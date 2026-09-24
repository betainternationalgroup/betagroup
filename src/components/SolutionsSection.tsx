import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";
import { Bot, Zap, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const SolutionsSection = () => {
  const { t } = useLanguage();
  const solutions = t.solutions.items;

  const icons = [Bot, Zap];
  const gradients = [
    "from-electric/20 to-accent/10",
    "from-accent/20 to-electric/10",
  ];

  return (
    <section id="solutions" className="py-24 lg:py-32 relative z-10 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-electric/10 text-electric text-sm font-semibold mb-4">
            {t.solutions.badge}
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t.solutions.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.solutions.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {solutions.map((sol, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={sol.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group relative rounded-3xl border border-border bg-card overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500"
              >
                {/* Header gradient */}
                <div className={`bg-gradient-to-br ${gradients[i]} p-8 pb-6`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-electric/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-electric" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-electric uppercase tracking-wider">
                        {sol.tag}
                      </span>
                      <h3 className="font-display text-2xl font-bold text-foreground">
                        {sol.name}
                      </h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {sol.description}
                  </p>
                </div>

                {/* Features */}
                <div className="p-8 pt-6">
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                    {sol.featuresLabel}
                  </h4>
                  <ul className="space-y-3 mb-6">
                    {sol.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-electric/15 flex items-center justify-center mt-0.5 shrink-0">
                          <div className="w-2 h-2 rounded-full bg-electric" />
                        </div>
                        <span className="text-muted-foreground text-sm leading-relaxed">{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Target audience */}
                  <div className="rounded-xl bg-secondary/80 p-4">
                    <p className="text-sm text-foreground font-medium">
                      🎯 {sol.audience}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
