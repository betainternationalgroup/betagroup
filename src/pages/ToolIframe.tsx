import Navbar from "@/components/Navbar";
import AIBackground from "@/components/AIBackground";
import FooterSection from "@/components/FooterSection";
import { LanguageProvider, useLanguage } from "@/hooks/useLanguage";

interface Props {
  src: string;
  titleFr: string;
  titleEn: string;
}

const Inner = ({ src, titleFr, titleEn }: Props) => {
  const { lang } = useLanguage();
  const title = lang === "fr" ? titleFr : titleEn;
  return (
    <>
      <AIBackground />
      <Navbar />
      <main className="pt-24 pb-16 relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            {title}
          </h1>
          <div className="rounded-2xl overflow-hidden border border-primary-foreground/10 bg-primary-foreground/5 shadow-2xl shadow-electric/10">
            <iframe
              src={src}
              title={title}
              className="w-full h-[80vh] min-h-[600px] border-0 bg-white"
              loading="lazy"
              allow="clipboard-write; fullscreen"
            />
          </div>
        </div>
      </main>
      <FooterSection />
    </>
  );
};

const ToolIframe = (props: Props) => (
  <LanguageProvider>
    <Inner {...props} />
  </LanguageProvider>
);

export default ToolIframe;