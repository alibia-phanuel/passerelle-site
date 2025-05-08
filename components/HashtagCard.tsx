"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface HashtagCardProps {
  color: string;
  title: string;
  description: string;
  icone: IconType; // icone est un composant, pas un JSX.Element
  index: number;
}

export const HashtagCard = ({
  color,
  title,
  description,
  icone: Icon,
  index,
}: HashtagCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="w-[259px] h-[300px] bg-white p-[28px] rounded-lg shadow-md transition duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 hover:rotate-1 transform"
    >
      <div
        className={`w-[56px] h-[54px] text-white ${color} flex justify-center items-center rounded`}
      >
        <Icon size={28} />
      </div>
      <h1 className="font-bold text-[#fad41a] text-[20px] my-[32px]">
        {title}
      </h1>
      <p className="text-[15px] text-[#8EA9C1] whitespace-pre-line">
        {description}
      </p>
    </motion.div>
  );
};
