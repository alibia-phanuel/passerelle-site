"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Brand = () => {
  const avatars = [
    "/images/pp1.jpg",
    "/images/pp2.jpg",
    "/images/pp3.jpg",
    "/images/pp4.jpg",
    "/images/pp5.jpg",
  ];

  return (
    <div className="min-h-[360px] max-md:h-auto flex justify-center overflow-hidden p-4">
      <motion.div
        className="container px-[91px] rounded-lg flex min-h-[360px] justify-between bg-gradient-to-r from-[#292c2c] to-[#edea24bf] items-center max-md:flex-wrap max-md:flex-col max-md:justify-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <div className="flex flex-col max-md:justify-center max-md:items-center">
          <motion.h1
            className="font-bold text-[#fad41a] text-[36px] max-md:text-center"
            variants={{
              hidden: { opacity: 0, y: -30 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Développez la présence de votre marque
            <br className="max-md:hidden" />
            sur les réseaux <br className="max-md:hidden" /> sociaux
          </motion.h1>

          <motion.p
            className="text-[14px] text-[#FFFFFF] py-4  max-md:text-center"
            variants={{
              hidden: { opacity: 0, y: -20 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Rejoignez plus de{" "}
            <span className="font-semibold text-[#fad41a]">1 200</span> clients
            satisfaits
          </motion.p>

          <motion.div
            className="w-[225px] my-[10px] h-[32px] flex  max-md:my-6  items-center justify-between"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <div className="flex items-center">
              {avatars.map((src, i) => (
                <motion.div
                  key={i}
                  className={`w-[37px] h-[37px] border-white border-2 overflow-hidden rounded-full relative ${
                    i !== 0 ? "-ml-2" : ""
                  }`}
                  variants={{
                    hidden: { opacity: 0, scale: 0.6, y: 20 },
                    show: { opacity: 1, scale: 1, y: 0 },
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                >
                  <Image
                    src={src}
                    alt={`Avatar ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
            <motion.div
              className="text-[#FFFFFF] text-[14px]"
              variants={{
                hidden: { opacity: 0, x: 20 },
                show: { opacity: 1, x: 0 },
              }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              et autre
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            show: { opacity: 1, scale: 1 },
          }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <Button
            variant="outline"
            className="py-[18px] text-[#070707] px-[32px] bg-white cursor-pointer mb-[34px]"
          >
            Essayez gratuitement maintenant
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Brand;
