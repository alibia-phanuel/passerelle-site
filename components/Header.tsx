"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div className="w-full flex justify-center items-center ">
      <div className="w-full flex items-center justify-between px-6 py-4 bg-transparent container">
        {/* Logo */}
        <div className="text-2xl font-bold text-white ">MyLogo</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center text-white text-700 font-medium">
          <Link href="/">Accueil</Link>
          <Link href="/services">Services</Link>
          <Link href="/projets">Projets</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-2xl text-white " onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
        {/* Animated Mobile Menu */}
        <AnimatePresence>
          {/* Mobile Menu */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute top-16 right-4 bg-white shadow-lg rounded-md p-4 w-40 flex flex-col gap-3 md:hidden z-50"
            >
              <Link href="/" onClick={() => setIsOpen(false)}>
                Accueil
              </Link>
              <Link href="/services" onClick={() => setIsOpen(false)}>
                Services
              </Link>
              <Link href="/projets" onClick={() => setIsOpen(false)}>
                Projets
              </Link>
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Header;
