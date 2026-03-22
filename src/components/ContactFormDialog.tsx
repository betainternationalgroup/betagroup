import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useLanguage } from "@/hooks/useLanguage";

interface ContactFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactFormDialog = ({ open, onOpenChange }: ContactFormDialogProps) => {
  const { lang } = useLanguage();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] bg-card border-border p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="font-display text-xl text-foreground">
            {lang === "fr" ? "Contactez-nous" : "Contact Us"}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {lang === "fr"
              ? "Remplissez le formulaire et notre équipe vous contactera rapidement."
              : "Fill out the form and our team will get back to you shortly."}
          </DialogDescription>
        </DialogHeader>
        <div className="px-6 pb-6 overflow-y-auto max-h-[70vh]">
          <iframe
            src="https://share.hsforms.com/2NoAzaXsyQ_KJluo9fyRbRg45u1l"
            className="w-full min-h-[500px] border-0 rounded-lg"
            title={lang === "fr" ? "Formulaire de contact" : "Contact form"}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactFormDialog;
