import React from "react";
import { FeaturesData } from "./common/Helper";

const Features = () => {
  return (
    <section className="max-w-[1312px] w-full mx-auto px-4 mt-[76px] mb-20 md:mb-[100px] lg:mb-[147px]">
      <div className="flex flex-col gap-4 md:gap-8 md:w-1/2">
        <p className="text-[18px] font-light leading-[150%]">
          The magic happens through our innovative pooling and reward mechanism,
          where contributions are funneled back into the community.
        </p>
        <p className="text-[18px] font-light leading-[150%]">
          Each successful red dot catch triggers the purchase and immediate
          burning of CatMoney Tokens, increasing demand, reducing supply, and
          driving prices to the moon. Pool ur moneys, catch da red dot, and
          watch ur returns skyrocket!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 lg:gap-16 mt-5 sm:mt-14 lg:mt-20">
        {FeaturesData.map((featuresItem, featuresItemIndex) => (
          <div
            key={featuresItemIndex}
            className="flex items-start gap-4 sm:gap-6"
          >
            <span className="min-w-[96px] h-[96px] flex items-center justify-center bg-tertiary rounded-full">
              {featuresItem.image}
            </span>
            <div className="md:max-w-[414px] w-full flex flex-col gap-2">
              <h2 className="font-bold text-[20px] sm:text-[24px] leading-[120%] font-comic">
                {featuresItem.heading}
              </h2>
              <p className="text-base sm:text-[18px] font-light leading-[150%]">
                {featuresItem.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
