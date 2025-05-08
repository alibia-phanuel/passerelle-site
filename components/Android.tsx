"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { CgArrowLongRight } from "react-icons/cg";
import { useRef } from "react";

const Android = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="min-h-screen flex justify-center items-center overflow-hidden">
      <div
        ref={ref}
        className="h-full gap-2 w-full max-md:flex-wrap flex justify-between items-center container p-4"
      >
        {/* Left part: Images */}
        <div className="relative">
          {/* Background image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute z-[-100]"
          >
            <Image
              className="relative"
              src="/images/lineCircle.png"
              width={700}
              height={700}
              alt="flexCircle"
            />
          </motion.div>

          {/* Foreground image (Android) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="z-10"
          >
            <Image
              src="/images/android.png"
              width={500}
              height={500}
              alt="AndroidIos"
            />
          </motion.div>
        </div>

        {/* Right part: Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative max-md:w-full max-md:text-center max-md:my-4"
        >
          <h1 className="text-[#fad41a] font-bold text-[36px]">
            Gérez tous vos services <br />à portée de main
          </h1>
          <p className="mt-[24px] mb-[36px] text-[#90A3B4]">
            Avec La Passerelle App, accédez à l’ensemble de nos services où que
            vous soyez. <br />
            Suivez vos demandes en temps réel, explorez nos solutions comme la
            location de <br /> véhicules, les services internet ou encore notre
            e-shop. shop, <br />
            le tout depuis une seule interface intuitive. Une seule application
            pour une gestion <br /> simplifiée et centralisée.
          </p>
          <p className="flex items-center text-[#fad41a]  py-2 gap-2 cursor-pointer max-md:w-full max-md:justify-center">
            <span>📊 Découvrir l’application</span>
            <CgArrowLongRight className="relative top-0.5" />
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Android;
