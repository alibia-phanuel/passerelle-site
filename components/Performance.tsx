"use client";

import { HashtagCard } from "@/components/HashtagCard";
import { hashtagCards } from "@/data/hashtagCards";
const Performance = () => {
  return (
    <div className="bg-[#2121219a] min-h-[70vh] flex justify-center overflow-hidden p-4 ">
      <div className="container h-full">
        <div className="mt-[80px] mb-[76px]">
          <h1 className="text-center text-[#fad41a] font-bold text-[36px]">
            Des solutions adaptées à chaque besoin
          </h1>
          <p className="text-center text-[#fff] my-[24px]">
            Que vous soyez une entreprise ou un particulier, La Passerelle vous
            propose des services sur mesure pour <br /> améliorer votre
            quotidien et optimiser votre activité.
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
