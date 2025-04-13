import React from "react";
import { roadmapData } from "./common/Helper";
import { CatClawIcon } from "./common/Icons";

const OurRoadMap = () => {
  return (
    <section className="px-4 max-w-[1312px] w-full mx-auto mt-20 md:mt-[100px] lg:mt-[147px] flex flex-col gap-6 sm:gap-10 lg:gap-[54px]">
      <h2 className="text-primary text-[30px] sm:text-[50px] lg:text-[73px] font-luckiest leading-[110%] tracking-[2px]">
        OUR ROADMAP
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-y-10">
        {roadmapData.map((roadmapItem, roadmapItemIndex) => (
          <div
            key={roadmapItemIndex}
            className="flex items-start justify-start gap-x-5 "
          >
            <div className="flex flex-col items-center justify-center sm:hidden">
              <span>
                <CatClawIcon />
              </span>
              <div className="w-[1px] h-[400px] bg-primary"></div>
            </div>
            <div className="flex flex-col gap-6 sm:gap-10 lg:gap-[54px] max-sm:pt-1 max-sm:pb-5 w-full">
              <div>
                <h3 className="font-luckiest text-[26px] lg:text-[32px] font-normal leading-[120%] tracking-[2px] mb-2">
                  {roadmapItem.heading}
                </h3>
                <img
                  src="/images/png/roadmap-step.png"
                  alt="roadmap-step"
                  className="max-sm:hidden"
                />
              </div>
              <div className="sm:max-w-[290px] w-full">
                <h3 className="text-[40px] lg:text-[56px] font-normal text-transparent stroked-text tracking-[4px] leading-[110%] font-luckiest mb-2">
                  PHASE {roadmapItem.phase}
                </h3>
                <p className="mb-4 font-bold font-comic text-[22px] leading-[120%]">
                  {roadmapItem.listHeading}
                </p>
                <ul className="list-disc pl-6 flex flex-col gap-4">
                  {roadmapItem.list.map(
                    (roadmapItemList, roadmapItemListIndex) => (
                      <li
                        key={roadmapItemListIndex}
                        className="text-[18px] font-light leading-[120%]"
                      >
                        {roadmapItemList}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurRoadMap;
