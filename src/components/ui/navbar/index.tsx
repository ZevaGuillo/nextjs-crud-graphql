import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className=" py-4 z-10 w-screen items-center justify-center lg:flex">
      <div className="justify-center w-screen mx-4 rounded-2xl bg-slate-800">
        <div className="flex flex-col w-full px-8 py-2 mx-auto md:px-12 md:items-center md:justify-between md:flex-row lg:px-5 ">
          <div className="flex flex-row items-center justify-between text-white">
            <a
              className="inline-flex items-center gap-3 text-xl font-bold tracking-tight text-white"
              href="/">
              <span> ❖ </span>
              <span>Zevaguillo</span>
            </a>
            <button className="rounded-lg md:hidden focus:outline-none focus:shadow-outline">
              <svg
                className="w-6 h-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24">
                <path
                  className="inline-flex"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"></path>
                <path
                  className="hidden"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <nav className="flex-col items-center flex-grow hidden gap-3 p-4 px-5 text-sm font-medium text-gray-300 md:px-0 md:pb-0 md:flex md:justify-start md:flex-row lg:p-0 md:mt-0">
            <div className="hidden md:block lg:ml-auto lg:w-[50vw]">
              <div
                className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="text-gray-400 size-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true">
                    <path
                      d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"></path>
                  </svg>
                </span>
                <input
                  type="text"
                  className="w-full py-2 pl-10 pr-4 text-slate-900 bg-slate-700 border border-slate-600 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-500 sm:text-sm rounded-xl placeholder:text-gray-400 focus:border-blue-500"
                  placeholder="Search"
                  aria-label="Search"
                  data-dashlane-rid="3dad5566cea1ea8b"
                  data-form-type=""
                />
              </div>
            </div>

            <a
              className="hover:text-white focus:outline-none focus:text-gray-200 md:ml-auto"
              href="#_">
              Features
            </a>
            <a
              className="hover:text-white focus:outline-none focus:text-gray-200"
              href="#_">
              About
            </a>

            <Link
              className="inline-flex items-center justify-center w-full h-8 gap-3 px-5 py-3 text-xs font-medium text-white duration-200 bg-gray-900 rounded-lg md:w-auto hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-white"
              href="/signup"
              role="button">
              Sign In
            </Link>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
