import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Props = {
  title: string;
  description: string;
  triggerText: string;
};

function CustomDialog({ title, description, triggerText }: Props) {
  return (
    <div>
      <Dialog>
        <DialogTrigger>{triggerText}</DialogTrigger>
        <DialogContent className="w-full sm:max-w-[450px]">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CustomDialog;
