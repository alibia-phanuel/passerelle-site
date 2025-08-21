"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CgArrowLongRight } from "react-icons/cg";
import { FaApple, FaGooglePlay } from "react-icons/fa";
const Android = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      id="services"
      className="min-h-screen flex justify-center items-center overflow-hidden"
    >
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
          <div className="relative">
            {/* Bouton déclencheur */}
            <p
              onClick={() => setOpen(true)}
              className="flex items-center text-[#fad41a] py-2 gap-2 cursor-pointer max-md:w-full max-md:justify-center hover:underline"
            >
              <span>📊 Découvrir l’application</span>
              <CgArrowLongRight className="relative top-0.5" />
            </p>

            {/* Modal */}
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0, y: 50 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.8, opacity: 0, y: 50 }}
                    transition={{ type: "spring", stiffness: 120 }}
                    className="bg-[#081315] p-8 rounded-2xl shadow-lg text-center w-[90%] max-w-sm"
                  >
                    <h2 className="text-white text-xl font-bold mb-4">
                      Choisissez votre plateforme
                    </h2>

                    <div className="flex flex-col gap-4">
                      <a
                        href="https://play.google.com/store/apps/details?id=com.ikoumalabs.ikouma_labs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-[#000] text-white px-6 py-3 rounded-lg hover:bg-[#333] transition justify-center"
                      >
                        <FaGooglePlay className="text-2xl" />
                        <span className="font-semibold">Android</span>
                      </a>

                      <a
                        href="https://apps.apple.com/us/app/la-passerelle/id6742491347"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-[#000] text-white px-6 py-3 rounded-lg hover:bg-[#333] transition justify-center"
                      >
                        <FaApple className="text-2xl" />
                        <span className="font-semibold">Apple</span>
                      </a>
                    </div>

                    {/* Bouton fermer */}
                    <button
                      onClick={() => setOpen(false)}
                      className="mt-6 text-[#fad41a] hover:underline"
                    >
                      Annuler
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Android;
