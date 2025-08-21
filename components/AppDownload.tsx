"use client";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { motion } from "framer-motion";

const AppDownload = () => {
  // Animation pour les titres et paragraphes
  const textVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, type: "spring", stiffness: 50 },
    }),
  };

  return (
    <div className="bg-[#081315] py-16 flex flex-col items-center gap-8 px-4">
      {/* Titre */}
      <motion.h2
        custom={0}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariant}
        className="text-3xl md:text-4xl font-bold text-white text-center"
      >
        Téléchargez notre application
      </motion.h2>

      {/* Description */}
      <motion.p
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariant}
        className="text-[#D3D6D8] text-center max-w-xl"
      >
        Découvrez toutes les fonctionnalités de La Passerelle sur votre mobile.
        Disponible sur iOS et Android.
      </motion.p>

      {/* Boutons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 80 }}
        viewport={{ once: true }}
        className="flex gap-6 flex-wrap justify-center mt-4"
      >
        <a
          href="https://apps.apple.com/us/app/la-passerelle/id6742491347"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-[#000000] text-white px-6 py-3 rounded-lg hover:bg-[#333333] transition transform hover:-translate-y-1 hover:scale-105"
        >
          <FaApple className="text-2xl" />
          <div className="flex flex-col text-left">
            <span className="text-[12px]">Télécharger sur</span>
            <span className="font-bold text-[16px]">App Store</span>
          </div>
        </a>

        <a
          href="https://play.google.com/store/apps/details?id=com.ikoumalabs.ikouma_labs"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-[#000000] text-white px-6 py-3 rounded-lg hover:bg-[#333333] transition transform hover:-translate-y-1 hover:scale-105"
        >
          <FaGooglePlay className="text-2xl" />
          <div className="flex flex-col text-left">
            <span className="text-[12px]">Disponible sur</span>
            <span className="font-bold text-[16px]">Google Play</span>
          </div>
        </a>
      </motion.div>
    </div>
  );
};

export default AppDownload;
