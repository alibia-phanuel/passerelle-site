"use client";

import { HashtagCard } from "@/components/HashtagCard";
import { hashtagCards } from "@/data/hashtagCards";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const Performance = () => {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname]);

  return (
    <div
      id="projets"
      className="bg-[#2121219a] min-h-fit md:min-h-[70vh] flex justify-center overflow-hidden px-2 sm:px-4 py-12 md:py-4"
    >
      <div className="container h-full">
        <div className="mt-8 mb-10 md:mt-[80px] md:mb-[76px]">
          <h1 className="text-center text-[#fad41a] font-bold text-2xl sm:text-3xl md:text-[36px] px-2">
            Des solutions adaptées à chaque besoin
          </h1>
          <p className="text-center text-[#fff] my-4 md:my-[24px] text-sm sm:text-base max-w-2xl mx-auto">
            Que vous soyez une entreprise ou un particulier, La Passerelle vous
            propose des services sur mesure pour améliorer votre quotidien et
            optimiser votre activité.
          </p>
        </div>
        <div className="mb-8 md:mb-[36px] flex justify-between items-center mt-8 md:mt-[76px] max-md:flex-wrap max-md:justify-center gap-4">
          {hashtagCards.map((card, index) => (
            <HashtagCard key={index} {...card} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Performance;
