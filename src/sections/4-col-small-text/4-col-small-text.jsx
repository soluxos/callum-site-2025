import React from "react";

const FourColSmallText = () => {
  return (
    <section className="bg-[linear-gradient(to_right,#1D211B_0%,#1D211B_50%,#1D241A_50%,#1D241A_100%)] w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {/* Card 1 */}
        <div className="flex flex-col justify-end bg-[#2E312C] min-h-[300px] p-10 md:p-15 lg:p-20">
          <div className="flex flex-col gap-1">
            <p className="text-[#626262] text-[12px] font-departure-mono uppercase">
              My love for design
            </p>
            <p className="text-[#B1B1B1] leading-[150%] text-[16px] font-satoshi font-medium">
              Honestly, the reason I wanted to learn design is because I didn’t want to make things
              that looked crap.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col justify-end bg-[#1D241A] min-h-[300px] p-10 md:p-15 lg:p-20">
          <div className="flex flex-col gap-1">
            <p className="text-[#626262] text-[12px] font-departure-mono uppercase">
              Why I started coding
            </p>
            <p className="text-[#B1B1B1] leading-[150%] text-[16px] font-satoshi font-medium">
              I’ve been making websites since I was around 11 years old. There I was sitting in my
              room with a laptop, making crappy HTML sites to host my videos.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col justify-end bg-[#2E312C] min-h-[300px] p-10 md:p-15 lg:p-20">
          <div className="flex flex-col gap-1">
            <p className="text-[#626262] text-[12px] font-departure-mono uppercase">
              My love for design
            </p>
            <p className="text-[#B1B1B1] leading-[150%] text-[16px] font-satoshi font-medium">
              Honestly, the reason I wanted to learn design is because I didn’t want to make things
              that looked crap.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col justify-end bg-[#1D241A] min-h-[300px] p-10 md:p-15 lg:p-20">
          <div className="flex flex-col gap-1">
            <p className="text-[#626262] text-[12px] font-departure-mono uppercase">
              Why I started coding
            </p>
            <p className="text-[#B1B1B1] leading-[150%] text-[16px] font-satoshi font-medium">
              I’ve been making websites since I was around 11 years old. There I was sitting in my
              room with a laptop, making crappy HTML sites to host my videos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourColSmallText;
