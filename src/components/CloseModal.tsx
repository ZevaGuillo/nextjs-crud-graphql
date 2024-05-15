"use client";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { PropsWithChildren, useEffect } from "react";
import { useMemo } from "react";
import {
  cacheExchange,
  createClient,
  fetchExchange,
  ssrExchange,
  UrqlProvider,
} from "@urql/next";

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

  const [client, ssr] = useMemo(() => {
    const ssr = ssrExchange({
      isClient: typeof window !== "undefined",
    });
    const client = createClient({
      url: "http://localhost:3001/graphql",
      exchanges: [cacheExchange, ssr, fetchExchange],
      suspense: true,
    });

    return [client, ssr];
  }, []);

  return (
    <UrqlProvider
      client={client}
      ssr={ssr}>
      <div
        className="fixed inset-0 flex justify-center items-center bg-zinc-900/20 z-10 "
        onClick={() => route.back()}>
        <div
          className=" flex items-center justify-center w-[20vw] min-h-1/2 max-w-lg mx-auto py-4"
          onClick={event => {
            event.stopPropagation();
          }}>
          {children}
        </div>
      </div>
    </UrqlProvider>
  );
};

export default CloseModal;
