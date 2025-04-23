"use client";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";
import Image from "next/image";
import { CgArrowLongRight } from "react-icons/cg";

const Pc = () => {
  return (
    <div className="min-h-screen flex justify-center items-center overflow-hidden">
      <motion.div
        className="h-full gap-2 w-full max-md:flex-wrap flex justify-between items-center container p-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {/* Right part: Text */}
        <motion.div
          className="relative max-md:w-full max-md:text-center max-md:my-4"
          variants={{
            hidden: { opacity: 0, x: -60 },
            show: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-[#fad41a] font-bold text-[36px]"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Schedule Your Post <br />
            Whenever You Want
          </motion.h1>

          <motion.p
            className="mt-[24px] mb-[36px] text-[#90A3B4]"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Publish your content automatically to ensure that your content
            <br />
            reaches the right people. Built-in features such as
          </motion.p>

          <motion.div
            className="flex  max-md:justify-center my-[32px]"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <ul className=" max-md:flex max-md:flex-col max-md:justify-center">
              {[
                "Best Time to Post",
                "Geolocation",
                "User Tag",
                "Others benefit",
              ].map((text, index) => (
                <li key={index} className="flex items-center gap-3 mb-2">
                  <IoMdCheckmarkCircleOutline className="text-[#fad41a]" />
                  <span className="text-[#90A3B4]">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.p
            className="flex items-center text-[#fad41a] py-2 gap-2 cursor-pointer max-md:w-full max-md:justify-center"
            variants={{
              hidden: { opacity: 0, x: -20 },
              show: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <span>Learn about scheduled post</span>
            <CgArrowLongRight className="relative top-0.5" />
          </motion.p>
        </motion.div>

        {/* Left part: Image */}
        <motion.div
          className="relative z-10"
          variants={{
            hidden: { opacity: 0, x: 80 },
            show: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 1.2, delay: 1 }}
        >
          <Image
            src="/images/PC.png"
            width={700}
            height={700}
            alt="AndroidIos"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Pc;
