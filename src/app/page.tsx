import Image from "next/image";

import { getUrqlClient } from "@/app/lib/urql";
import {
  SignupDocument,
  SignupMutation,
  SignupMutationVariables,
} from "../../graphQL/operations";
import Navbar from "@/components/ui/navbar";

async function getAllFilms() {
  const { client } = getUrqlClient();
  const result = await client.mutation<SignupMutation, SignupMutationVariables>(
    SignupDocument,
    {
      signupInput: {
        email: "guieller@gmail.com",
        fullName: "Guillermo Zevallos",
        password: "yosoybonito",
      },
    }
  );
  return result;
}

export default async function Home() {
  // const { data, error } = await getAllFilms();

  return (
    <main className="overflow-x-hidden">
      <section className="relative overflow-hidden flex flex-col justify-between rounded-[2rem] mx-4 h-screen bg-blue-400">
        <div className="font-bold text-[20vw] text-center leading-tight">
          <p>Stickers</p>
          <div className="absolute bottom-0 w-[50vw] p-6  h-[70vh] left-1/2 transform -translate-x-1/2">
            <Image priority src={"/stickerHome.svg"} alt="stickerHome" fill className="transition-all object-cover object-top"/>
          </div>
          <p>
          </p>
        </div>
        {/* <div className="w-60 mx-4 left-0 top-0 flex justify-center border-b  bg-gradient-to-b  pb-6 pt-8 backdrop-blur-2xl dark:from-inherit lg:static lg:rounded-xl lg:border  lg:p-4 ">
          HOLAMUNDO
        </div> */}

        <div className="relative after:right-10  z-[10] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-pink-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#51ff01] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]"></div>
        <div className="relative after:right-52  z-[10] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-pink-700 before:dark:opacity-10 after:dark:from-sky-500 after:dark:via-[#ff9901] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]"></div>
        <div className="relative z-[10] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-pink-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#01ffaa] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]"></div>
        <div className="relative  z-[10] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[280px] after:w-full after:translate-x-1/2 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-pink-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#ff01dd] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]"></div>
      </section>
      
      <section
        className="mx-4 z-[11] bg-black min-h-20 relative  before:content-[''] before:h-12 before:rounded-t-[2rem] before:z-[11] before:absolute before:bg-black before:-top-10  before:w-full"
      >

      </section>
    </main>
  );
}
