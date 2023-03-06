import React from "react";

export default function Downloads() {
  return (
    <>
      <div className="min-h-[100dvh] flex flex-col justify-start items-center font-rubik pb-10">
        <div className="py-10 w-[90%] gap-y-3 flex flex-col justify-center items-center">
          <div className="text-2xl text-s-dark-blue font-[500] ">
            Download the extension
          </div>
          <div
            className="text-[14px] text-s-gray-blue
          text-center font-[500] w-[50%]"
          >
            We've got more browsers in the pipeline. Please do let us know if
            you've got a favorite you'd like us to prioritize.
          </div>
        </div>
        <div className="flex flex-col gap-y-4 justify-center items-center md:flex-row md:gap-x-6">
          <div className="shadow-xl rounded-lg flex flex-col p-4 justify-center items-center w-[90%]">
            <div className="flex flex-col justify-center items-center gap-y-1  p-8">
              <img
                alt="chrome-logo"
                src="/images/logo-chrome.svg"
                className="mb-6"
              />
              <div className="text-xl font-[500]"> Add to Chrome</div>
              <p className="text-sm text-s-gray-blue">Minimum version 62</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-y-4">
              <img alt="dots" src="/images/bg-dots.svg" />
              <button className="bg-p-soft-blue text-white p-3 rounded-md shadow-slate-400 shadow-sm text-[14px] w-[200px]">
                Add & Install Extension
              </button>
            </div>
          </div>

          <div className=" shadow-xl rounded-lg flex flex-col p-4 justify-center items-center w-[90%] md:mt-[80px]">
            <div className="flex flex-col justify-center items-center gap-y-1  p-8">
              <img
                alt="firefox-logo"
                src="/images/logo-firefox.svg"
                className="mb-6"
              />
              <div className="text-xl font-[500]"> Add to Firefox</div>
              <p className="text-sm text-s-gray-blue">Minimum version 55</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-y-4">
              <img alt="dots" src="/images/bg-dots.svg" />
              <button className="bg-p-soft-blue text-white p-3 rounded-md shadow-slate-400 shadow-sm text-[14px] w-[200px]">
                Add & Install Extension
              </button>
            </div>
          </div>

          <div className=" shadow-xl rounded-lg flex flex-col p-4 justify-center items-center w-[90%] md:mt-[160px]">
            <div className="flex flex-col justify-center items-center gap-y-1  p-8">
              <img
                alt="opera-logo"
                src="/images/logo-opera.svg"
                className="mb-6"
              />
              <div className="text-xl font-[500]"> Add to Opera</div>
              <p className="text-sm text-s-gray-blue">Minimum version 48</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-y-4">
              <img alt="dots" src="/images/bg-dots.svg" />
              <button className="bg-p-soft-blue text-white p-3 rounded-md shadow-slate-400 shadow-sm text-[14px] w-[200px]">
                Add & Install Extension
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
