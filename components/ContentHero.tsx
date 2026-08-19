"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const ContentHero = () => {
  return (
    <div className="w-full flex justify-center h-full items-center">
      <div className="container flex justify-between items-center px-4 sm:px-6 my-4 relative h-full">
        <div className="text-white">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative font-bold z-10 text-[32px] sm:text-[40px] md:text-[52px] lg:text-[64px] leading-tight"
          >
            Accélérez votre succès
            <br className="hidden sm:block" /> avec nos services
            <br className="hidden sm:block" /> complets
            <Image
              src="/images/line.png"
              alt="Décoration"
              width={170}
              height={170}
              className="w-16 sm:w-24 lg:w-[170px] h-auto"
            />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="my-6 lg:my-[32px] text-sm sm:text-base max-w-xl"
          >
            La Passerelle accompagne les entreprises dans leur croissance grâce
            à des services innovants : application mobile, production
            artistique, e-shop, internet haut débit, location de véhicules, et
            bien plus.
          </motion.p>
        </div>

        <div className="max-lg:hidden absolute right-0 top-0 overflow-hidden h-full">
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
