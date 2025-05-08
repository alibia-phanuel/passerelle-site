"use client";

import React from "react";
import Image from "next/image";

import { FaStar } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

export function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-xs rounded-lg bg-[#fad41a]">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="bg-transparent">
              <Card className="rounded-none">
                <CardContent className="flex flex-col items-center">
                  <div className="flex gap-2 w-full py-[14px]">
                    <FaStar className="text-[#FAAD13]" />
                    <FaStar className="text-[#FAAD13]" />
                    <FaStar className="text-[#FAAD13]" />
                    <FaStar className="text-[#FAAD13]" />
                    <FaStar className="text-[#FAAD13]" />
                  </div>
                  <div className="text-[#90A3B4] text-[16px] italic text-center">
                    “Avec Ehya, nous pouvons facilement suivre nos performances
                    en détail. <br />
                    C’est devenu un outil essentiel pour notre croissance et
                    pour interagir <br />
                    efficacement avec notre audience.”
                  </div>
                  <div className="flex items-center gap-4 justify-between mt-6">
                    <motion.div
                      className="w-[56px] h-[56px] border-white border-2 overflow-hidden rounded-full relative"
                      variants={{
                        hidden: { opacity: 0, scale: 0.6, y: 20 },
                        show: { opacity: 1, scale: 1, y: 0 },
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 25,
                      }}
                    >
                      <Image
                        src="/images/pp1.jpg"
                        alt="avatar"
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    <div>
                      <h2 className="text-[#FAAD13] text-[20px] font-bold">
                        Jaquon Hart
                      </h2>
                      <p className="text-[#90A3B4] text-sm">
                        Responsable marketing digital, Hypebeast
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
