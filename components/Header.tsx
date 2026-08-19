"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full flex items-center justify-between px-4 sm:px-6 py-4 bg-transparent container">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          <Image
            src="/images/logo.png"
            width={100}
            height={100}
            alt="Logo"
            className="w-16 h-16 sm:w-[100px] sm:h-[100px] object-contain"
            priority
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center text-white font-medium">
          <a href="#accueil">Accueil</a>
          <a href="#services">Services</a>
          <a href="#projets">Projets</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={toggleMenu}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
          className="md:hidden text-2xl text-white p-2 -mr-2 flex items-center justify-center"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Animated Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute top-16 right-4 left-4 sm:left-auto sm:w-48 bg-white shadow-lg rounded-md p-4 flex flex-col gap-1 md:hidden z-50"
            >
              <Link
                href="#accueil"
                onClick={() => setIsOpen(false)}
                className="text-gray-800 px-2 py-2 rounded hover:bg-gray-100"
              >
                Accueil
              </Link>
              <Link
                href="#services"
                onClick={() => setIsOpen(false)}
                className="text-gray-800 px-2 py-2 rounded hover:bg-gray-100"
              >
                Services
              </Link>
              <Link
                href="#projets"
                onClick={() => setIsOpen(false)}
                className="text-gray-800 px-2 py-2 rounded hover:bg-gray-100"
              >
                Projets
              </Link>
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="text-gray-800 px-2 py-2 rounded hover:bg-gray-100"
              >
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
