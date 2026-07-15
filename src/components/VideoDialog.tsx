import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useLanguage } from "@/hooks/useLanguage";

interface VideoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  customUrl?: string;
}

const VIDEO_URLS = {
  fr: "https://www.youtube.com/embed/tQ3uyVkkSns",
  en: "https://www.youtube.com/embed/6rklfe9S27o",
};

const VideoDialog = ({ open, onOpenChange, customUrl }: VideoDialogProps) => {
  const { lang } = useLanguage();
  const videoSrc = customUrl || VIDEO_URLS[lang];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[900px] bg-black border-0 p-0 gap-0 overflow-hidden">
        <div className="relative w-full aspect-video">
          {open && (
            <iframe
              src={`${videoSrc}?autoplay=1&rel=0`}
              className="absolute inset-0 w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={lang === "fr" ? "Beta International — Solutions IA" : "Beta International — AI Solutions"}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoDialog;
