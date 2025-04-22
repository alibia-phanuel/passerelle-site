"use client";

import { HashtagCard } from "@/components/HashtagCard";
import { hashtagCards } from "@/data/hashtagCards";
const Performance = () => {
  return (
    <div className="bg-[#18b7e726] min-h-[70vh] flex justify-center overflow-hidden p-4 ">
      <div className="container h-full">
        <div className="mt-[80px] mb-[76px]">
          <h1 className="text-center text-[#034D82] font-bold text-[36px]">
            Track any hashtag(s) Performance
          </h1>
          <p className="text-center text-[#8EA9C1] my-[24px]">
            Don’t waste time on search manual tasks. Let Automation do it for
            you. <br /> Simplify workflows, reduce errors, and save time.
          </p>
        </div>
        <div className="mb-[36px] flex justify-between items-center mt-[76px] max-md:flex-wrap max-md:justify-center gap-2">
          {hashtagCards.map((card, index) => (
            <HashtagCard key={index} {...card} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Performance;
