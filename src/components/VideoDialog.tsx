import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
      <DialogContent className="sm:max-w-[800px] bg-card border-border p-0 overflow-hidden">
        <DialogHeader className="p-4 pb-0">
          <DialogTitle className="font-display text-lg text-foreground">
            {lang === "fr" ? "Découvrez nos solutions IA" : "Discover our AI solutions"}
          </DialogTitle>
        </DialogHeader>
        <div className="p-4 pt-2">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden">
            {open && (
              <iframe
                src={`${videoSrc}?autoplay=1&rel=0`}
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Beta International AI Solutions"
              />
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoDialog;
