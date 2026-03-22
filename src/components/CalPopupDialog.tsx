import { Dialog, DialogContent } from "@/components/ui/dialog";

interface CalPopupDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CalPopupDialog = ({ open, onOpenChange }: CalPopupDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] p-0 bg-black border-white/10 overflow-hidden">
        <iframe
          src="https://cal.com/beta-group/30min?embed=true"
          className="w-full h-[600px] border-0"
          title="Book a meeting"
        />
      </DialogContent>
    </Dialog>
  );
};

export default CalPopupDialog;
