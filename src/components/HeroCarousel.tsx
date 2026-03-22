import { useState, useEffect, useCallback } from "react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import VideoDialog from "@/components/VideoDialog";
import aiAgenticImg from "@/assets/ai-agentic.jpg";
import aiAgentImg from "@/assets/carousel-ai-agent.jpg";
import aiCallcenterImg from "@/assets/carousel-ai-callcenter.jpg";

type Slide =
  | { type: "video"; thumbnail: string; videoId: string }
  | { type: "image"; src: string; alt: string };

const slides: Record<"fr" | "en", Slide[]> = {
  fr: [
    { type: "video", thumbnail: aiAgenticImg, videoId: "tQ3uyVkkSns" },
    { type: "video", thumbnail: aiCallcenterImg, videoId: "giE7I9iMPfg" },
    { type: "image", src: aiAgentImg, alt: "Agent IA – Beta International" },
  ],
  en: [
    { type: "video", thumbnail: aiAgenticImg, videoId: "6rklfe9S27o" },
    { type: "video", thumbnail: aiCallcenterImg, videoId: "giE7I9iMPfg" },
    { type: "image", src: aiAgentImg, alt: "AI Agent – Beta International" },
  ],
};

const HeroCarousel = () => {
  const { lang } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);
  const [activeVideoUrl, setActiveVideoUrl] = useState("");

  const items = slides[lang];

  const next = useCallback(() => setCurrent((c) => (c + 1) % items.length), [items.length]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + items.length) % items.length), [items.length]);

  // Auto-advance every 5s
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const handleSlideClick = (slide: Slide) => {
    if (slide.type === "video") {
      setActiveVideoUrl(`https://www.youtube.com/embed/${slide.videoId}`);
      setVideoOpen(true);
    }
  };

  const currentSlide = items[current];

  return (
    <>
      <div className="relative rounded-2xl overflow-hidden border border-electric/20 shadow-2xl shadow-electric/10">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4 }}
            className="cursor-pointer group"
            onClick={() => handleSlideClick(currentSlide)}
          >
            <img
              src={currentSlide.type === "video" ? currentSlide.thumbnail : currentSlide.src}
              alt={currentSlide.type === "video" ? "Video thumbnail" : currentSlide.alt}
              className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {currentSlide.type === "video" && (
              <div className="absolute inset-0 bg-background/30 flex items-center justify-center group-hover:bg-background/20 transition-colors duration-300">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-electric/90 flex items-center justify-center shadow-lg shadow-electric/30 group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-7 h-7 md:w-9 md:h-9 text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/60 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-background/80 transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/60 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-background/80 transition-colors"
        >
          <ChevronRight size={20} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-electric" : "bg-primary-foreground/40"}`}
            />
          ))}
        </div>
      </div>

      {/* Video dialog with custom URL */}
      <VideoDialog
        open={videoOpen}
        onOpenChange={setVideoOpen}
        customUrl={activeVideoUrl}
      />
    </>
  );
};

export default HeroCarousel;
