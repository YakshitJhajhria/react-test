import React, { useState } from "react";
import { DropdownIcon } from "./common/Icons";
import AnimateHeight from "react-animate-height";
import { faqsData } from "./common/Helper";

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="px-4 max-w-[1312px] w-full mx-auto mt-20 md:mt-[100px] lg:mt-[147px]">
      <h2 className="text-primary text-[30px] sm:text-[50px] lg:text-[73px] font-luckiest leading-[110%] tracking-[2px]">
        FAQS
      </h2>
      <div className="flex flex-col gap-4 mt-7 lg:mt-[53px]">
        {faqsData.map((faqItem, index) => (
          <div key={index} className="flex flex-col bg-tertiary">
            <button
              onClick={() => handleToggle(index)}
              className="flex items-start justify-between text-left px-4 sm:px-6 lg:px-10 py-4 lg:py-8 gap-4 text-[18px] sm:text-[20px] lg:text-[24px] font-comic font-bold leading-[120%]"
            >
              <span>{faqItem.question}</span>
              <span
                className={`transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              >
                <DropdownIcon />
              </span>
            </button>
            <AnimateHeight
              duration={300}
              height={activeIndex === index ? "auto" : 0}
            >
              {faqItem.answer.map((faqAnswer, faqAnswerIndex) => (
                <p
                  key={faqAnswerIndex}
                  className="text-sm sm:text-base lg:text-[20px] font-light leading-[150%] pb-4 lg:pb-8 px-4 sm:px-6 lg:px-10"
                >
                  {faqAnswer}
                </p>
              ))}
            </AnimateHeight>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faqs;
