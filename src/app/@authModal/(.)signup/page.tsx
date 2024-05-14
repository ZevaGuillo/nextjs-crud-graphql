import React from "react";
import { Modal } from "./modal";

const page = () => {
  console.log("hola");

  return (
    <div className="fixed inset-0 bg-zinc-900/20 z-10">
      <Modal><>HOLA</></Modal>
    </div>
  );
};

export default page;
