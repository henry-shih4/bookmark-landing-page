import React from "react";
import { useState, useEffect, useMemo } from "react";

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(1);
  const [featureInfo, setFeatureInfo] = useState();

  const features = useMemo(
    () => [
      {
        id: 1,
        name: "Bookmark in one click",
        description:
          "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites.",
      },
      {
        id: 2,
        name: "Speedy Searching",
        title: "Intelligent Search",
        description:
          "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
      },
      {
        id: 3,
        name: "Easy Sharing",
        title: "Share your bookmarks",
        description:
          "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button",
      },
    ],
    []
  );

  useEffect(() => {
    const currentFeature = features.filter(
      (feature) => feature.id === activeFeature
    );
    setFeatureInfo(currentFeature[0]);
  }, [activeFeature, features]);

  return (
    <>
      <main className="min-h-[100dvh] h-[100vh] pb-4 font-rubik mb-10 md:min-h-[80dvh] md:h-[80dvh] overflow-hidden">
        <div className="min-h-[40%] p-6 pb-8 flex flex-col gap-y-4 justify-end items-center">
          <div
            className="text-2xl text-s-dark-blue font-[500]"
            data-value="Features"
          >
            Features
          </div>
          <div
            className="text-[16px] text-s-gray-blue
          text-center font-[400] md:w-[50%]"
          >
            Our aim is to make it quick and easy for you to access your favorite
            websites. Your bookmarks sync between your devices so you can access
            them on the go.
          </div>
          <div className="flex flex-col justify-center items-center w-[90%] md:my-4 ">
            <div className="w-full flex flex-col justify-center items-center md:flex-row md:gap-x-10 ">
              <div
                className={
                  activeFeature === 1
                    ? " text-center text-s-dark-blue font-[500] p-6 border-b-4 border-p-soft-red cursor-pointer"
                    : "text-s-dark-blue font-[500] p-6  hover:text-p-soft-red transition-colors duration-300 cursor-pointer"
                }
                onClick={() => {
                  setActiveFeature(1);
                }}
              >
                Simple Bookmarking
              </div>
              <div className="bg-slate-300 h-[1px] w-full md:hidden"></div>
              <div
                className={
                  activeFeature === 2
                    ? "text-s-dark-blue font-[500] p-6  border-b-4 border-p-soft-red cursor-pointer"
                    : "text-s-dark-blue font-[500] p-6 hover:text-p-soft-red transition-colors duration-300 cursor-pointer"
                }
                onClick={() => {
                  setActiveFeature(2);
                }}
              >
                Speedy Searching
              </div>
              <div className="bg-slate-300 h-[1px] w-full md:hidden"></div>
              <div
                className={
                  activeFeature === 3
                    ? "text-s-dark-blue font-[500] p-6  border-b-4 border-p-soft-red cursor-pointer"
                    : "text-s-dark-blue font-[500] p-6 hover:text-p-soft-red transition-colors duration-300 cursor-pointer"
                }
                onClick={() => {
                  setActiveFeature(3);
                }}
              >
                Easy Sharing
              </div>
            </div>
            <div className="bg-slate-300 h-[1px] w-full "></div>
          </div>
        </div>
        <div className="min-h-[60%] h-[60%] flex flex-col justify-start items-center gap-y-4 md:flex-row md:gap-x-4">
          <div className="h-[75%] relative flex justify-center items-center md:w-[50%] md:mx-4 ">
            <div className="z-[10] ">
              <img
                className="object-cover max-w-[320px] md:px-6  md:max-w-[400px] lg:max-w-[500px]"
                alt="feature"
                src={`/images/illustration-features-tab-${activeFeature}.svg`}
              />
              <div className="bg-p-soft-blue absolute h-[50%] w-[800px] top-[35%] right-[15%] rounded-r-[100px] -z-[1] md:h-[75%]"></div>
            </div>
          </div>
          <div className="max-w-[400px] px-6 flex flex-col gap-y-4 justify-center items-center md:w-[40%] md:items-start mb-8">
            <div className="text-2xl text-s-dark-blue font-[500] ">
              {featureInfo ? featureInfo.name : null}
            </div>
            <div
              className="text-[16px] text-s-gray-blue
          text-center font-[400] md:text-left"
            >
              {featureInfo ? featureInfo.description : null}
            </div>
            <button className=" bg-p-soft-blue text-white p-3 rounded-md shadow-slate-400 shadow-md text-[14px] w-[140px] transition-colors duration-500 border-2 border-transparent hover:bg-white hover:text-p-soft-blue hover:border-p-soft-blue">
              More Info
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
