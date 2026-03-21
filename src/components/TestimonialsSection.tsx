import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const { t } = useLanguage();

  const testimonials = [t.testimonials.t1, t.testimonials.t2, t.testimonials.t3];

  return (
    <section id="testimonials" className="py-24 lg:py-32 relative z-10 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">{t.testimonials.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.testimonials.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((test, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="p-8 rounded-2xl bg-card border border-border shadow-card"
            >
              <Quote className="w-8 h-8 text-electric/30 mb-4" />
              <p className="text-foreground/80 leading-relaxed mb-6 italic">"{test.quote}"</p>
              <div>
                <div className="font-display font-semibold text-foreground">{test.author}</div>
                <div className="text-sm text-muted-foreground">{test.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
