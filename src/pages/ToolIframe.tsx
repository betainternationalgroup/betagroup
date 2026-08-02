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
      <main className="pt-24 pb-0 relative z-10">
        <iframe
          src={src}
          title={title}
          className="w-full h-[85vh] min-h-[700px] border-0 block"
          loading="lazy"
          allow="clipboard-write; fullscreen"
        />
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