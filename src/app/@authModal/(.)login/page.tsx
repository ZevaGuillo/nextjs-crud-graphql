import React from "react";
import CloseModal, { ModalLayout } from "@/components/CloseModal";
import Link from "next/link";
import { LoginForm } from "@/components/LoginForm";

const page = () => {
  console.log("hola");

  return (
    <ModalLayout >
        <div className="relative bg-background px-5 pb-12 flex flex-col justify-between w-full h-full rounded-xl">
            <div className="absolute top-4 right-4">
                <CloseModal/>
            </div>
            {/* LOGIN */}
            <section className="h-full pt-8">

              <LoginForm/>
            </section>
            <Link href="/signup" className="pb-4">sign up</Link>
        </div>
    </ModalLayout>
  );
};

export default page;
