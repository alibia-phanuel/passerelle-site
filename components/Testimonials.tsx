import React from "react";
import { CarouselDemo } from "@/components/CarouselDemo";
const Testimonials = () => {
  return (
    <div className=" min-h-[60vh]  flex justify-center overflow-hidden p-4">
      <div className="container flex justify-between items-center max-md:flex-wrap max-md:flex-col max-md:justify-center">
        <div>
          <h1 className="text-[#fad41a] font-bold text-[36px] my-[24px] max-md:text-center">
            Alimenter la croissance de plus de <br/> 100 entreprises & détaillants en
            Indonésie.
          </h1>
          <p className="py-4 text-[16px] text-[#90A3B4]">
            Des magasins uniques, des startups, aux grandes marques
            multi-magasins.
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
