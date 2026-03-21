import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

const ClientLogos = () => {
  const { lang } = useLanguage();

  const logos = [
    "Zanj.ai", "Banj.ai", "E-No", "Box Pam", "Betel.work", "Evany"
  ];

  return (
    <section className="py-16 relative z-10 bg-background border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-8 font-medium uppercase tracking-wider">
          {lang === "fr" ? "Ils nous font confiance" : "They trust us"}
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-10"
        >
          {logos.map((logo) => (
            <span key={logo} className="font-display text-xl font-bold text-muted-foreground/40 hover:text-electric/60 transition-colors">
              {logo}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientLogos;
