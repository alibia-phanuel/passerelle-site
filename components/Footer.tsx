"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { IoMdHeart } from "react-icons/io";
import { FaApple, FaGooglePlay, FaFacebook } from "react-icons/fa";

const Footer = () => {
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

  const year = new Date().getFullYear();

  const links = [
    {
      icon: <FaFacebook className="text-white text-[20px]" />,
      url: "https://www.facebook.com/LaPasserelleProd?mibextid=wwXIfr&rdid=voaLvTRPBrFMFI89&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17Dc3fBrnW%2F%3Fmibextid%3DwwXIfr",
    },
    {
      icon: <FaFacebook className="text-white text-[20px]" />,
      url: "https://www.facebook.com/people/Passerelle-Shop/100069916585020/?mibextid=wwXIfr&rdid=U8QisznSG5jEq6SN&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19em7u5wgk%2F%3Fmibextid%3DwwXIfr",
    },

    {
      icon: <FaApple className="text-white text-[20px]" />,
      url: "https://apps.apple.com/us/app/la-passerelle/id6742491347",
    },
    {
      icon: <FaGooglePlay className="text-white text-[20px]" />,
      url: "https://play.google.com/store/apps/details?id=com.ikoumalabs.ikouma_labs",
    },

    {
      icon: <FaFacebook className="text-white text-[20px]" />,
      url: "https://www.facebook.com/people/La-Passerelle-corp/61566527031895/?mibextid=wwXIfr&rdid=VIePexYFD5QNGA2Q&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Dnadsxjbm%2F%3Fmibextid%3DwwXIfr",
    },
    {
      icon: <FaFacebook className="text-white text-[20px]" />,
      url: "https://www.facebook.com/people/kiri-Drive/61566175618760/?mibextid=wwXIfr&rdid=TjWdNhRGr97lwsMZ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19a7NHgKM8%2F%3Fmibextid%3DwwXIfr",
    },
  ];

  return (
    <div
      id="contact"
      className="bg-[#081315] flex justify-center items-center mt-[136px] flex-col px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full flex flex-col items-center gap-6 my-[80px]"
      >
        {/* Icône cœur */}
        <div className="w-[56px] h-[56px] bg-[#cfc31d] rounded-full flex justify-center items-center">
          <IoMdHeart className="text-[#FFFFFF] text-[24px]" />
        </div>

        {/* Liens ajoutés */}
        <div className="flex gap-4 flex-wrap justify-center">
          {links.map((item, i) => (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[40px] h-[40px] rounded-full bg-[#d5e2e45a] flex justify-center items-center hover:bg-[#cfc31d] transition-colors"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-[#FFFFFF] text-[16px] font-bold text-center">
          Copyright © {year}. ikouma labs. All rights reserved |{" "}
          <a href="#" className="text-[#e1b75e] underline">
            By ikouma labs
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
