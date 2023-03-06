import React from "react";
import { useState } from "react";

export default function Header() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <>
      <header
        className={
          showMobileNav
            ? " h-16 w-[100%] bg-white flex flex-[0_1_50%] justify-between items-center p-8 font-rubik text-[14px] translate-y-[-100%] transition-transform duration-500"
            : "h-16 w-[100%] bg-white flex flex-[0_1_50%] justify-between items-center p-8 font-rubik text-[14px] translate-y-[0%] transition-transform duration-500"
        }
      >
        <div className="w-[50%]">
          <img alt="bookmark-logo" src="images/logo-bookmark.svg" />
        </div>
        <nav className="hidden bg-blue-200 md:flex justify-center items-center gap-x-8 text-s-dark-blue tracking-widest h-full">
          <button
            className="px-2 cursor-pointer duration-300 hover:text-p-soft-red"
            data-value="FEATURES"
          >
            FEATURES
          </button>
          <button
            className="cursor-pointer duration-300 hover:text-p-soft-red"
            data-value="PRICING"
          >
            PRICING
          </button>
          <button
            className="cursor-pointer duration-300 hover:text-p-soft-red"
            data-value="CONTACT"
          >
            CONTACT
          </button>
          <div>
            <button
              className="p-2 px-8 bg-p-soft-red rounded-md text-white hover:bg-white transition-colors border-transparent hover:text-p-soft-red duration-300 border-2 hover:border-p-soft-red"
              data-value="LOGIN"
            >
              LOGIN
            </button>
          </div>
        </nav>

        <div>
          <img
            className="md:hidden cursor-pointer"
            alt="hamburger-icon"
            src="images/icon-hamburger.svg"
            onClick={() => {
              setShowMobileNav(true);
            }}
          />
        </div>
      </header>

      <nav
        className={
          showMobileNav
            ? "top-0 min-h-[100dvh] h-[100dvh] w-[100%] fixed z-[50] py-4 text-white bg-s-dark-blue bg-opacity-90 transition-transform translate-x-0 duration-500 linear"
            : "top-0 min-h-[100dvh] h-[100dvh] w-[100%] fixed z-[50] py-4 text-white bg-s-dark-blue bg-opacity-90 transition-transform translate-x-[-100%] duration-500 linear"
        }
      >
        <div className=" flex justify-center items-center">
          <div className="w-[90%] flex flex-col justify-center items-center gap-y-10 text-[18px] tracking-widest">
            <div className="flex w-full justify-around ">
              <img alt="logo" src="/images/logo-bookmark-white.svg" />
              <img
                alt="close-icon"
                className="object-contain cursor-pointer"
                src="/images/icon-close.svg"
                onClick={() => {
                  setShowMobileNav(false);
                }}
              />
            </div>
            <button
              className="hover:text-p-soft-red duration-300 cursor-pointer"
              data-value="FEATURES"
            >
              FEATURES
            </button>
            <button
              className="hover:text-p-soft-red duration-300 cursor-pointer"
              data-value="PRICING"
            >
              PRICING
            </button>
            <button
              className="hover:text-p-soft-red duration-300 cursor-pointer"
              data-value="CONTACT"
            >
              CONTACT
            </button>
            <div className="w-full">
              <button
                className="w-full py-2 border-white border-2 rounded-lg tracking-widest hover:bg-white hover:text-p-soft-blue duration-300"
                data-value="LOGIN"
              >
                LOGIN
              </button>
            </div>
            <div className="pt-[10rem] flex w-full justify-center items-center gap-x-8">
              <svg
                className="group cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
              >
                <path
                  className="duration-300 group-hover:fill-p-soft-red"
                  fill="#FFF"
                  fill-rule="evenodd"
                  d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
                />
              </svg>
              <svg
                className="group cursor-pointer "
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="20"
              >
                <path
                  fill="#FFF"
                  className="duration-300 group-hover:fill-p-soft-red"
                  fill-rule="evenodd"
                  d="M24 2.557a9.83 9.83 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337.608a9.864 9.864 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 0 1 1.671 1.149a4.93 4.93 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.419A9.9 9.9 0 0 1 0 17.54a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0 0 24 2.557z"
                />
              </svg>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
