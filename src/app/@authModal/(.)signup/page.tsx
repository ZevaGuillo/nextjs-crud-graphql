import React from "react";
import CloseModal, { ModalLayout } from "@/components/CloseModal";
import Link from "next/link";
import { SignupForm } from "@/app/ui/SignupForm";

const page = () => {
  console.log("hola");

  return (
    <ModalLayout >
        <div className="relative bg-background px-5 pb-12 flex flex-col justify-between w-full h-full rounded-xl">
            <div className="absolute top-4 right-4">
                <CloseModal/>
            </div>
            {/* <SignIn/> */}
            <section className="h-full pt-8">

              <SignupForm/>
            </section>
            <Link href="/login">
              login
            </Link>
        </div>
    </ModalLayout>
  );
};

export default page;
