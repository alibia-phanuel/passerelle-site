"use client";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";
import Image from "next/image";
import { CgArrowLongRight } from "react-icons/cg";
const Pc = () => {
  return (
    <div className="min-h-screen flex justify-center items-center overflow-hidden">
      <div className="h-full gap-2 w-full max-md:flex-wrap flex justify-between items-center container p-4">
        {/* Right part: Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative max-md:w-full max-md:text-center max-md:my-4"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-[#034D82] font-bold text-[36px]"
          >
            Schedule Your Post <br />
            Whenever You Want
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-[24px] mb-[36px] text-[#90A3B4]"
          >
            Publish your content automatically to ensure that your content
            <br />
            reaches the right people. Built-in features such as
          </motion.p>

          {/* Feature List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex  max-md:justify-center my-[32px]"
          >
            <ul className=" max-md:flex max-md:flex-col max-md:justify-center">
              {[
                "Best Time to Post",
                "Geolocation",
                "User Tag",
                "Others benefit",
              ].map((text, index) => (
                <li key={index} className="flex items-center gap-3 mb-2">
                  <IoMdCheckmarkCircleOutline className="text-[#18B7E7]" />
                  <span className="text-[#90A3B4]">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CTA */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex items-center text-[#04AADD] py-2 gap-2 cursor-pointer max-md:w-full max-md:justify-center"
          >
            <span>Learn about scheduled post</span>
            <CgArrowLongRight className="relative top-0.5" />
          </motion.p>
        </motion.div>

        {/* Left part: Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="relative z-10"
        >
          <Image
            src="/images/PC.png"
            width={700}
            height={700}
            alt="AndroidIos"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Pc;
