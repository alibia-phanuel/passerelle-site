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
    <div
      className="relative h-[80vh] bg-fixed bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('/images/bg-app.png')", // remplace par ton image
      }}
    >
      {/* Overlay semi-transparent */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Contenu animé */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariant}
        className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 gap-6"
      >
        <motion.h2
          custom={0}
          variants={textVariant}
          className="text-3xl md:text-4xl font-bold text-center"
        >
          Découvrez notre application mobile
        </motion.h2>

        <motion.p
          custom={1}
          variants={textVariant}
          className="max-w-xl text-center text-lg"
        >
          Profitez d’une expérience unique avec notre application mobile.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 80 }}
          viewport={{ once: true }}
          className="flex gap-6 flex-wrap justify-center"
        >
          <a
            href="https://apps.apple.com/us/app/la-passerelle/id6742491347"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#000000]/70 px-6 py-3 rounded-lg hover:bg-[#000000]/90 transition transform hover:-translate-y-1 hover:scale-105"
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
            className="flex items-center gap-3 bg-[#000000]/70 px-6 py-3 rounded-lg hover:bg-[#000000]/90 transition transform hover:-translate-y-1 hover:scale-105"
          >
            <FaGooglePlay className="text-2xl" />
            <div className="flex flex-col text-left">
              <span className="text-[12px]">Disponible sur</span>
              <span className="font-bold text-[16px]">Google Play</span>
            </div>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AppDownload;
