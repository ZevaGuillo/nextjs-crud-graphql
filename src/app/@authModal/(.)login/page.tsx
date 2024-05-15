import React from "react";
import CloseModal, { ModalLayout } from "@/components/CloseModal";
import Link from "next/link";

const page = () => {
  console.log("hola");

  return (
    <ModalLayout >
        <div className="relative bg-background w-full h-fit rounded-xl py-20 px-2">
            <div className="absolute top-4 right-4">
                <CloseModal/>
            </div>
            {/* <SignIn/> */}
            <p>login</p>
            <Link href="/signup">sign up</Link>
        </div>
    </ModalLayout>
  );
};

export default page;
