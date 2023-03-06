import React from "react";
import { useState } from "react";

export default function Questions() {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "What is a Bookmark?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus diam sed risus vulputate euismod. Vivamus id aliquam tortor. Mauris auctor posuere turpis vitae tempor. Fusce in lacus a risus egestas aliquet vitae vel velit.",
      active: false,
    },
    {
      id: 2,
      question: "How can I request a new browser?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus diam sed risus vulputate euismod. Vivamus id aliquam tortor. Mauris auctor posuere turpis vitae tempor. Fusce in lacus a risus egestas aliquet vitae vel velit.",
      active: false,
    },
    {
      id: 3,
      question: "Is there a mobile app?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus diam sed risus vulputate euismod. Vivamus id aliquam tortor. Mauris auctor posuere turpis vitae tempor. Fusce in lacus a risus egestas aliquet vitae vel velit.",
      active: false,
    },
    {
      id: 4,
      question: "What about other Chromium browsers?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus diam sed risus vulputate euismod. Vivamus id aliquam tortor. Mauris auctor posuere turpis vitae tempor. Fusce in lacus a risus egestas aliquet vitae vel velit.",
      active: false,
    },
  ]);

  const toggleFAQ = (id) => {
    console.log(id);
    setQuestions(
      questions.map((faq) => {
        if (id === faq.id) {
          faq.active = !faq.active;
        } else {
          faq.active = false;
        }
        return faq;
      })
    );
  };

  return (
    <>
      <main className="min-h-[70dvh] h-max  pt-10 font-rubik flex justify-start items-center flex-col md:min-h-[50dvh] md:pt-0">
        <div className="w-[90%] gap-y-3 flex justify-center items-center flex-col ">
          <div className="text-2xl text-s-dark-blue font-[500] text-center ">
            Frequently Asked Questions
          </div>
          <div
            className="text-[16px] text-s-gray-blue
          text-center font-[400]"
          >
            Here are some of our FAQs. If you have any other questions you'd
            like answered please feel free to email us.
          </div>
        </div>
        <div className="w-[90%] pt-10 md:w-[50%]">
          <div className="w-full flex flex-col justify-center items-center gap-y-6">
            <div className="w-full">
              {questions.map((item) => {
                return (
                  <div key={item.id} className="w-full">
                    <div className="flex flex-col justify-center w-full items-center py-2">
                      <div className="flex w-full justify-between items-center py-4">
                        <p
                          onClick={() => toggleFAQ(item.id)}
                          className={
                            !item.active
                              ? "text-[14px] cursor-pointer hover:text-p-soft-red duration-300"
                              : "text-[14px] cursor-pointer"
                          }
                        >
                          {item.question}
                        </p>
                        <div
                          className="cursor-pointer"
                          onClick={() => toggleFAQ(item.id)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="12"
                            className={
                              item.active
                                ? "rotate-180 transition duration-300 ease-out"
                                : "rotate-[-180] transition duration-300 ease-out"
                            }
                          >
                            <path
                              fill="none"
                              stroke={item.active ? "#FA5757" : "#5267DF"}
                              stroke-width="3"
                              d="M1 1l8 8 8-8"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="max-h-[200px]">
                        {item.active ? item.answer : null}
                      </div>
                    </div>
                    <div className="bg-slate-300 h-[1px] w-full"></div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="h-40 flex justify-center items-center w-full">
            <button className="bg-p-soft-blue text-white p-3 rounded-md shadow-slate-400 shadow-md text-[14px] w-[140px] transition-colors duration-500 border-2 border-transparent hover:bg-white hover:text-p-soft-blue hover:border-p-soft-blue">
              More Info
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
