import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="min-h-[60dvh] h-[60vh] flex flex-col justify-center items-center font-rubik text-white md:min-h-[40dvh] md:h-[40vh]">
        <div className="h-[50%] bg-p-soft-blue flex justify-center items-center w-full md:h-[90%]">
          <div className="w-[90%] flex flex-col gap-y-2 md:w-[25%]">
            <div className="flex justify-center items-center ">
              <div className="tracking-widest text-md">
                35,000+ ALREADY JOINED
              </div>
            </div>
            <div className="text-2xl font-[500] text-center">
              Stay up-to-date with what we're doing
            </div>
            <form className="flex w-full flex-col gap-y-4 mt-4 md:flex-row justify-center items-center md:gap-x-4">
              <input
                required={true}
                type="email"
                placeholder="Enter your email address"
                className="p-2 text-s-gray-blue rounded-md text-[16px] pl-4"
              />
              <button
                className="min-w-[120px] p-2 rounded-md bg-p-soft-red text-sm transition-colors border-transparent hover:text-p-soft-red hover:bg-white duration-300 border-2 hover:border-p-soft-red"
                data-value="Contact Us"
              >
                Contact Us
              </button>
            </form>
          </div>
        </div>
        <div className="h-[50%] w-full  flex justify-center items-center bg-s-dark-blue md:h-[20%] md:justify-between md:p-4">
          <div className="w-[75%] flex flex-col justify-center items-center gap-y-6 text-[14px] tracking-widest md:flex-row md:w-full md:justify-between">
            <div>
              <img
                alt="bookmark-logo-white"
                src="/images/logo-bookmark-white.svg"
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
            <div className="flex w-full justify-center items-center gap-x-8 md:w-[30%]">
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
      </footer>
    </>
  );
}
