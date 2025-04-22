import React from "react";
import { CarouselDemo } from "@/components/CarouselDemo";
const Testimonials = () => {
  return (
    <div className=" min-h-[60vh]  flex justify-center overflow-hidden p-4">
      <div className="container flex justify-between items-center max-md:flex-wrap max-md:flex-col max-md:justify-center">
        <div>
          <h1 className="text-[#034D82] font-bold text-[36px] my-[24px] max-md:text-center">
            Powering the growth of <br /> 100+ business & retailers in ,<br />{" "}
            Indonesia.
          </h1>
          <p className="py-4 text-[16px] text-[#90A3B4]">
            From single store, startups, to large multi-store brands.
          </p>
        </div>
        <div className="bg-[#999]">
          <CarouselDemo />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
