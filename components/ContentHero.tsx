"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";
const ContentHero = () => {
  return (
    <div className="w-full flex justify-center h-full items-center">
      <div className="container flex  justify-between items-center px-6  my-4 relative h-full ">
        <div className="text-white">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative font-bold z-10 text-[64px]"
          >
            We help you <br />
            to grow your business <br />
            faster
            <Image
              src="/images/line.png"
              alt="Picture of the author"
              width={170}
              height={170}
            />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="my-[32px]"
          >
            Ehya is the Instagram analytics platform teams use to stay <br />
            focused on the goals, track engagement for report your <br />
            business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap max-md:gap-2.5 gap-32"
          >
            <Button
              variant="outline"
              className="py-[18px] px-[36px] text-[#00A8DB]"
            >
              See how it works
            </Button>
            <div className="text-white flex items-center justify-center cursor-pointer">
              <Link href="/" className="flex items-center justify-center">
                <p> Get a free demo </p>
                <IoIosArrowRoundForward className="text-white text-[30px]" />
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="max-lg:hidden absolute right-0 top-0">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute"
          >
            <Image
              className="relative"
              src="/images/circle.png"
              alt="Background Circle"
              width={430}
              height={430}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative top-[130px]"
          >
            <Image
              src="/images/baner.png"
              alt="Hero Illustration"
              width={700}
              height={700}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContentHero;
