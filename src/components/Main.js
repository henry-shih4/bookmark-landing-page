import React from "react";

export default function Main() {
  return (
    <>
      <main className="min-h-[70dvh] h-[70vh]  md:flex flex-row-reverse md:justify-center md:w-[85%]md:items-center md:min-h-[50dvh] md:h-[50dvh] overflow-hidden">
        <div className="relative bg-white h-[50%] flex justify-center items-center overflow-x-hidden md:w-[50%]  md:h-[100%]">
          <div className="z-[10]">
            <img
              className="object-cover max-w-[320px] md:max-w-[400px] lg:max-w-[550px]"
              alt="hero"
              src="images/illustration-hero.svg"
            />
            <div className="bg-p-soft-blue absolute h-[50%] w-[800px] rounded-l-[100px] left-[20%] top-[35%] z-[-1] md:h-[50%] md:top-[40%]"></div>
          </div>
        </div>
        <div className="bg-white   flex justify-center items-center min-h-[50%] font-rubik px-8 text-center md:w-[50%]">
          <div className="flex flex-col justify-center items-center gap-y-6 md:w-[70%] md:items-start md:text-left">
            <div className="text-3xl text-s-dark-blue font-[500] md:text-5xl">
              A Simple Bookmark Manager
            </div>
            <div className="text-s-gray-blue text-[16px]">
              A clean and simple interface to organize your favorite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </div>
            <div className="flex justify-center items-center gap-x-4 font-[500]">
              <div className="w-[50%]">
                <button className="bg-p-soft-blue text-white p-3 rounded-md shadow-slate-400 shadow-md text-[14px] w-[140px] transition-colors duration-500 border-2 border-transparent hover:bg-white hover:text-p-soft-blue hover:border-p-soft-blue">
                  Get it on Chrome
                </button>
              </div>
              <div className="w-[50%]">
                <button className="bg-slate-100 text-s-dark-blue p-3 rounded-md shadow-slate-400 shadow-md text-[14px] w-[140px] transition-colors duration-500 border-2 border-transparent hover:bg-white hover:text-s-gray-blue hover:border-s-dark-blue">
                  Get it on Firefox
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
