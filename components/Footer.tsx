"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  IoLogoGoogle,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoMdHeart,
} from "react-icons/io";

const socialLinks = [
  { icon: <IoLogoGoogle />, url: "https://www.google.com" },
  { icon: <IoLogoTwitter />, url: "https://x.com/" },
  { icon: <IoLogoInstagram />, url: "https://www.instagram.com/" },
  { icon: <IoLogoLinkedin />, url: "https://ng.linkedin.com/" },
];

const footerLinks = [
  {
    title: "Product",
    links: [
      "Landingpage",
      "Features",
      "Documentation",
      "Referral Program",
      "Pricing",
    ],
  },
  {
    title: "Services",
    links: ["Documentation", "Design", "Themes", "Illustrations", "UI Kit"],
  },
  {
    title: "Company",
    links: ["About", "Terms", "Privacy Policy", "Careers"],
  },
  {
    title: "More",
    links: ["Documentation", "License", "Changelog"],
  },
];

const FooterLinkGroup = ({
  title,
  links,
}: {
  title: string;
  links: string[];
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="p-4 flex flex-col gap-2"
  >
    <h1 className="font-bold text-[18px] text-white">{title}</h1>
    {links.map((link: string, index: number) => (
      <Link key={index} href="/" className="text-[16px] text-[#D3D6D8]">
        {link}
      </Link>
    ))}
  </motion.div>
);

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="bg-[#081315] flex justify-center items-center mt-[136px] flex-col px-4">
      <div className="container w-full flex flex-wrap gap-6 justify-between mt-[128px] mb-[96px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="min-w-[250px]"
        >
          <Image src="/images/logo.png" width={100} height={100} alt="Logo" />
          <p className="text-[#D3D6D8] text-[16px] mt-[28px] mb-[32px]">
            Build a modern and creative <br /> website with crealand
          </p>
          <div className="flex gap-4 flex-wrap">
            {socialLinks.map((social, i) => (
              <Link
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[40px] h-[40px] rounded-full bg-[#d5e2e45a] flex justify-center items-center text-white"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </motion.div>

        {footerLinks.map((group, idx) => (
          <FooterLinkGroup key={idx} title={group.title} links={group.links} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full flex flex-col items-center gap-4 my-[80px]"
      >
        <div className="w-[56px] h-[56px] bg-[#005490] rounded-full flex justify-center items-center">
          <IoMdHeart className="text-[#FFFFFF] text-[24px]" />
        </div>
        <div className="text-[#FFFFFF] text-[16px] font-bold text-center">
          Copyright © {year}. Crafted with love.
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
