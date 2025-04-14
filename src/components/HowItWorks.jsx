import React from "react";
import { howitworksData } from "./common/Helper";

const HowItWorks = () => {
  return (
    <section className="bg-tertiary shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] pt-[78px] pb-[70px]">
      <div className="max-w-[1312px] w-full mx-auto px-4">
        <h2 className="text-primary text-[30px] uppercase max-sm:text-center sm:text-[50px] lg:text-[73px] font-luckiest leading-[110%] tracking-[2px]">
          Here’s how it works
        </h2>
        <div className="grid grid-cols-1 mt-[52px] md:grid-cols-2 gap-8 sm:gap-16 lg:gap-[49px]">
          {howitworksData.map((howitworksItem, howitworksItemIndex) => (
            <div key={howitworksItemIndex} className="md:max-w-[522px] w-full">
              <div className="relative">
                <img
                  src={howitworksItem.image}
                  alt={howitworksItem.heading}
                  width={200}
                  height={200}
                  className="rounded-full max-sm:w-[150px] max-sm:h-[150px] max-sm:mx-auto"
                />
                {howitworksItemIndex === 2 && (
                  <div className="absolute -top-9 sm:-top-8 left-12 sm:left-0">
                    <img
                      src="/images/png/red-dot.png"
                      alt="red-dot"
                      width={340}
                      height={124}
                    />
                  </div>
                )}
              </div>
              <div className="mt-5 flex flex-col gap-4 max-sm:items-center max-sm:text-center">
                <h2 className="font-bold text-[22px] sm:text-[28px] leading-[120%] font-comic">
                  {howitworksItem.heading}
                </h2>
                <p className="text-base sm:text-[18px] font-light leading-[150%]">
                  {howitworksItem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
