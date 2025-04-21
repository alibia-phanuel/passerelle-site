"use client";

import Image from "next/image";
import { motion } from "framer-motion";
const logos = [
  "/images/logo1.png",
  "/images/logo2.png",
  "/images/logo3.png",
  "/images/logo4.png",
  "/images/logo5.png",
];
function Marques() {
  return (
    <div className="flex justify-center items-center  py-[50px] overflow-hidden">
      <div className="container flex flex-wrap justify-center md:justify-between items-center gap-6">
        {logos.map((src, index) => (
          <motion.div
            key={index}
            className="w-[150px] flex justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Image
              src={src}
              alt={`logo-${index + 1}`}
              width={100}
              height={100}
              className="object-contain"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Marques;
