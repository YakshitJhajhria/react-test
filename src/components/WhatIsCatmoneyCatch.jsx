import React from "react";
import { JackpotIcon, PawIcon } from "./common/Icons";

const WhatIsCatmoneyCatch = () => {
  return (
    <section className="px-4 bg-newDark pt-12 sm:pt-20 pb-12 sm:pb-20 md:pb-[104px]">
      <div className="max-w-[1280px] flex max-md:flex-col-reverse items-center justify-between gap-10 w-full mx-auto">
        <div className="md:max-w-[690px] w-full">
          <h2 className="text-primary text-[29px] uppercase max-sm:text-center sm:text-[48px] font-luckiest leading-[110%] tracking-[2px]">
            What is CatMoney Catch?
          </h2>
          <p className="mt-4 text-[20px] sm:text-[30px] font-normal leading-[140%]">
            Not just another meme token or game, CatMoney Catch is a
            revolutionary system designed to mix fun with real crypto earnings.
          </p>
          <div className="flex flex-col gap-3 sm:gap-5 mt-5">
            <p className="text-sm sm:text-[18px] font-normal leading-[150%]">
              It’s where the community, both cats and their hoomins, pool their
              resources—catnip, fish bones, and crypto—to fund the ultimate
              mission: building the Red Dot Catching Machine. Each week, the
              cats build a new machine to catch the elusive red dot, leading to
              big jackpots and growing rewards.
            </p>
            <p className="text-sm sm:text-[18px] font-normal leading-[150%]">
              Drawing inspiration from the fascinating behavior of our feline
              friends and the latest advancements in blockchain technology,
              CatMoney Catch brings a unique twist to DeFi.
            </p>
            <p className="text-sm sm:text-[18px] font-bold leading-[150%]">
              The brilliance of CatMoney Catch lies in its cyclical jackpot
              system.
            </p>
            <p className="text-sm sm:text-[18px] font-normal leading-[150%]">
              <span className="font-bold">Every week</span>, participants pool
              their resources to fund the Red Dot Catching Machine.
            </p>
            <p className="text-sm sm:text-[18px] font-normal leading-[150%]">
              When the machine is built and the red dot is caught, one or two
              lucky winners claim a majority of the jackpot, while the rest are
              distributed to token holders.
            </p>
            <p className="text-sm sm:text-[18px] font-normal leading-[150%]">
              The pool then resets, and the chase begins again, ensuring
              continuous engagement and opportunities to win.
            </p>
            <div className="flex items-center justify-start gap-3 sm:gap-5">
              <span>
                <JackpotIcon />
              </span>
              <p className="text-sm sm:text-[18px] font-bold leading-[150%]">
                And each month, a special bonus machine is constructed with an
                even bigger jackpot.
              </p>
            </div>
            <p className="text-sm sm:text-[18px] font-normal leading-[150%]">
              This grand monthly event offers participants the chance to win
              massive rewards.
            </p>
          </div>
        </div>
        <div className="relative">
          <img
            src="/images/png/catmoney-catch.png"
            alt="catmoney-catch"
            width={522}
            height={522}
            className="rounded-full"
          />
          <span className="absolute -top-10 -left-10 rotate-90">
            <PawIcon />
          </span>
          <span className="absolute -bottom-8 left-10 lg:left-32 rotate-90">
            <PawIcon />
          </span>
          <span className="absolute -bottom-10 right-10 lg:right-32 rotate-90">
            <PawIcon />
          </span>
          <span className="absolute -bottom-36 right-32 rotate-90">
            <PawIcon />
          </span>
          <span className="absolute -bottom-48 right-0 rotate-90">
            <PawIcon />
          </span>
        </div>
      </div>
    </section>
  );
};

export default WhatIsCatmoneyCatch;
