import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

import { Button } from "../ui/button";
import { TFunction } from "i18next";

interface AppCloseAlertModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  t: TFunction;
}

export function AppCloseAlertModal({
  open,
  setOpen,
  t,
}: AppCloseAlertModalProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogTitle>{t("common:confirmCloseTitle")}</DialogTitle>
        <DialogDescription>{t("common:confirmCloseText")}</DialogDescription>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" onClick={() => setOpen(false)}>
              {t("common:cancelButton")}
            </Button>
          </DialogClose>
          <Button
            variant={"destructive"}
            onClick={() => window.api.closeMainWindow()}
          >
            {t("common:confirmCloseButton")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
