import { LanguageProvider, useLanguage } from "@/hooks/useLanguage";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import CalPopupDialog from "@/components/CalPopupDialog";
import { motion } from "framer-motion";
import { Server, Lock, FileSearch, Eye, Shield, Database, Key, Bot, Brain, Code, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

const complianceFr = {
  back: "Retour à l'accueil",
  badge: "Conformité & Souveraineté",
  title: "Infrastructure souveraine & conforme",
  subtitle: "Pour garantir une conformité stricte (SOC2, ISO 42001, PIPEDA, Loi 25), nous privilégions une infrastructure souveraine où vous gardez la pleine propriété de vos clés de chiffrement et de la localisation de vos données.",
  badges: ["SOC2 Type II", "ISO 42001", "PIPEDA", "Loi 25 QC", "RGPD", "SecNumCloud"],
  cta: "Discuter de vos besoins en conformité",
  sections: [
    {
      icon: "server",
      title: "1. Infrastructure Souveraine",
      subtitle: "Conformité de base",
      description: "OVHcloud est l'un des rares fournisseurs à proposer des zones SecNumCloud (le plus haut standard de sécurité européen) ou des environnements isolés.",
      points: [
        {
          title: "Trusted Cloud d'OVHcloud",
          desc: "Instances de Public Cloud basées en France ou au Canada pour répondre aux exigences de la Loi 25 (Québec) et de la PIPEDA (Canada) concernant la localisation des données.",
        },
        {
          title: "Chiffrement au repos (At-rest)",
          desc: "Utilisation du service KMS (Key Management Service) d'OVH pour gérer vos propres clés de chiffrement. Indispensable pour valider l'audit SOC2.",
        },
      ],
    },
    {
      icon: "brain",
      title: "2. Modèles d'IA « Privacy-First »",
      subtitle: "ISO 42001 — Gouvernance de l'IA",
      description: "Pour l'ISO 42001, vous ne pouvez pas envoyer de données sensibles vers des APIs grand public sans garanties juridiques lourdes.",
      points: [
        {
          title: "OVHcloud AI Endpoints",
          desc: "Modèles Open Source (Mistral, Llama 3) hébergés directement par OVH. Les données ne sortent jamais de l'infrastructure, garantissant la confidentialité requise par la Loi 25.",
        },
        {
          title: "vLLM sur GPU OVH",
          desc: "Déployez votre propre moteur d'inférence pour un contrôle total sur les logs et la rétention des données — un point critique pour le SOC2 Type II.",
        },
      ],
    },
    {
      icon: "shield",
      title: "3. Gouvernance & Conformité",
      subtitle: "ISO 42001 & Loi 25",
      description: "L'ISO 42001 exige une documentation sur la transparence et les biais de vos agents IA.",
      points: [
        {
          title: "Automatisation des certifications",
          desc: "Les plateformes IA automatisent la collecte de preuves pour vos certifications SOC2 et ISO, vérifiant que vos bases de données sont chiffrées et vos accès sécurisés.",
        },
        {
          title: "Gestion des Consentements",
          desc: "Pour la Loi 25, intégration d'une brique de gestion d'identité (Keycloak auto-hébergé) permettant aux utilisateurs de supprimer leurs données ou de retirer leur consentement facilement.",
        },
      ],
    },
    {
      icon: "code",
      title: "4. Pipeline DevSecOps",
      subtitle: "Sécurité intégrée au développement",
      description: "Des règles de codage strictes garantissent que tout code généré respecte les standards de sécurité.",
      points: [
        {
          title: "Validation de schémas de données",
          desc: "Tout code inclut des validations strictes pour éviter les fuites de données sensibles.",
        },
        {
          title: "RBAC (Role-Based Access Control)",
          desc: "Contrôle d'accès basé sur les rôles strict pour chaque agent IA créé.",
        },
      ],
    },
  ],
  dataLocalization: {
    title: "Conseil crucial pour la Loi 25 / PIPEDA",
    desc: "Nos bases de données sont configurées uniquement dans les centres de données de Beauharnois (Montréal) pour garantir que les données des citoyens québécois restent sur le territoire.",
  },
};

const complianceEn = {
  back: "Back to home",
  badge: "Compliance & Sovereignty",
  title: "Sovereign & compliant infrastructure",
  subtitle: "To ensure strict compliance (SOC2, ISO 42001, PIPEDA, Law 25), we prioritize sovereign infrastructure where you retain full ownership of your encryption keys and data localization.",
  badges: ["SOC2 Type II", "ISO 42001", "PIPEDA", "Law 25 QC", "GDPR", "SecNumCloud"],
  cta: "Discuss your compliance needs",
  sections: [
    {
      icon: "server",
      title: "1. Sovereign Infrastructure",
      subtitle: "Baseline Compliance",
      description: "OVHcloud is one of the few providers offering SecNumCloud zones (the highest European security standard) or isolated environments.",
      points: [
        {
          title: "OVHcloud Trusted Cloud",
          desc: "Public Cloud instances based in France or Canada to meet Law 25 (Quebec) and PIPEDA (Canada) data localization requirements.",
        },
        {
          title: "At-Rest Encryption",
          desc: "Using OVH's KMS (Key Management Service) to manage your own encryption keys. Essential for SOC2 audit validation.",
        },
      ],
    },
    {
      icon: "brain",
      title: "2. Privacy-First AI Models",
      subtitle: "ISO 42001 — AI Governance",
      description: "For ISO 42001 compliance, you cannot send sensitive data to public APIs without heavy legal guarantees.",
      points: [
        {
          title: "OVHcloud AI Endpoints",
          desc: "Open Source models (Mistral, Llama 3) hosted directly by OVH. Data never leaves the infrastructure, ensuring the confidentiality required by Law 25.",
        },
        {
          title: "vLLM on OVH GPUs",
          desc: "Deploy your own inference engine for full control over logs and data retention — critical for SOC2 Type II.",
        },
      ],
    },
    {
      icon: "shield",
      title: "3. Governance & Compliance",
      subtitle: "ISO 42001 & Law 25",
      description: "ISO 42001 requires documentation on the transparency and biases of your AI agents.",
      points: [
        {
          title: "Certification Automation",
          desc: "AI platforms automate evidence collection for your SOC2 and ISO certifications, verifying that your databases are encrypted and access is secured.",
        },
        {
          title: "Consent Management",
          desc: "For Law 25, integration of a self-hosted identity management layer (Keycloak) allowing users to delete their data or withdraw consent easily.",
        },
      ],
    },
    {
      icon: "code",
      title: "4. DevSecOps Pipeline",
      subtitle: "Security built into development",
      description: "Strict coding rules ensure that all generated code meets security standards.",
      points: [
        {
          title: "Data Schema Validation",
          desc: "All code includes strict validations to prevent sensitive data leaks.",
        },
        {
          title: "RBAC (Role-Based Access Control)",
          desc: "Strict role-based access control for every AI agent created.",
        },
      ],
    },
  ],
  dataLocalization: {
    title: "Critical note for Law 25 / PIPEDA",
    desc: "Our databases are configured exclusively in the Beauharnois (Montreal) data centers to ensure that Quebec citizens' data remains within the territory.",
  },
};

const iconMap: Record<string, React.ElementType> = {
  server: Server,
  brain: Brain,
  shield: Shield,
  code: Code,
};

const ComplianceContent = () => {
  const { lang } = useLanguage();
  const t = lang === "fr" ? complianceFr : complianceEn;
  const [calOpen, setCalOpen] = useState(false);

  return (
    <>
      <main className="pt-20 lg:pt-24">
        {/* Hero */}
        <section className="py-20 lg:py-32 relative z-10 bg-[hsl(var(--navy-dark))]">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
              <Link to="/" className="inline-flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary-foreground mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4" /> {t.back}
              </Link>
              <div className="inline-block px-4 py-1.5 rounded-full bg-electric/10 border border-electric/20 text-electric text-sm font-semibold mb-6">
                <Shield className="w-4 h-4 inline mr-2" />{t.badge}
              </div>
              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">{t.title}</h1>
              <p className="text-lg md:text-xl text-primary-foreground/70 mb-8 leading-relaxed">{t.subtitle}</p>
              <div className="flex flex-wrap justify-center gap-3">
                {t.badges.map((badge) => (
                  <span key={badge} className="px-4 py-2 rounded-full bg-electric/10 border border-electric/20 text-electric font-semibold text-sm">
                    {badge}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Sections */}
        {t.sections.map((section, i) => {
          const Icon = iconMap[section.icon] || Shield;
          return (
            <section key={i} className={`py-20 lg:py-28 relative z-10 ${i % 2 === 0 ? "bg-background" : "bg-muted/30"}`}>
              <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-electric" />
                    </div>
                    <span className="text-sm font-semibold text-electric">{section.subtitle}</span>
                  </div>
                  <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-4">{section.title}</h2>
                  <p className="text-muted-foreground text-lg mb-10 max-w-3xl">{section.description}</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    {section.points.map((point, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: j * 0.1 }}
                        className="p-6 rounded-2xl bg-card border border-border shadow-sm"
                      >
                        <h3 className="font-display text-lg font-semibold text-foreground mb-3">{point.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{point.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>
          );
        })}

        {/* Data Localization Callout */}
        <section className="py-16 relative z-10 bg-[hsl(var(--navy-dark))]">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-electric/10 flex items-center justify-center mx-auto mb-6">
                <Database className="w-8 h-8 text-electric" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">{t.dataLocalization.title}</h2>
              <p className="text-primary-foreground/70 text-lg leading-relaxed max-w-2xl mx-auto mb-8">{t.dataLocalization.desc}</p>
              <Button
                className="bg-electric hover:bg-glow text-primary-foreground font-semibold px-8 py-6 text-base"
                onClick={() => setCalOpen(true)}
              >
                {t.cta}
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <CalPopupDialog open={calOpen} onOpenChange={setCalOpen} />
    </>
  );
};

const Compliance = () => (
  <LanguageProvider>
    <Navbar />
    <ComplianceContent />
    <FooterSection />
  </LanguageProvider>
);

export default Compliance;
