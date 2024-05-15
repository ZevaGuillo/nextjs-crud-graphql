"use client";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { PropsWithChildren, useEffect } from "react";

const CloseModal = () => {
  const route = useRouter();
    console.log("MODAL");
    
  return (
    <Button
      aria-label="close modal"
      variant="secondary"
      className="h-6 w-6 p-0 rounded-2xl"
      onClick={() => route.back()}>
      <X className="h-4 w-4" />
    </Button>
  );
};

export const ModalLayout = ({ children }: PropsWithChildren) => {
  const route = useRouter();

  return (
    <div
      className="fixed inset-0 bg-zinc-900/20 z-10 "
      onClick={() => route.back()}>
      <div className="container flex items-center h-full max-w-lg mx-auto" onClick={(event)=>{event.stopPropagation()}}>{children}</div>
    </div>
  );
};

export default CloseModal;
