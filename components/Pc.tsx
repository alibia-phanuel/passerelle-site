"use client";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";
import Image from "next/image";
import { CgArrowLongRight } from "react-icons/cg";
import Link from "next/link";

const Pc = () => {
  return (
    <div
      id="projets"
      className="min-h-screen flex justify-center items-center overflow-hidden"
    >
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
            Vendez et achetez en ligne <br />
            en toute simplicité
          </motion.h1>

          <motion.p
            className="mt-[24px] mb-[36px] text-[#90A3B4]"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Grâce à notre e-shop, développez votre activité <br />
            commerciale ou trouvez les produits qu’il vous faut en quelques
            clics. <br />
            La Passerelle met à votre disposition une plateforme moderne, <br />
            sécurisée et facile à utiliser, conçue pour booster vos ventes{" "}
            <br />
            et simplifier vos achats.
          </motion.p>

          <motion.div
            className="flex max-md:justify-center my-[32px]"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <ul className="max-md:flex max-md:flex-col max-md:justify-center">
              {[
                "Accès rapide à tous les services",
                "Suivi en temps réel des demandes",
                "Interface simple et intuitive",
                "Notifications personnalisées",
              ].map((text, index) => (
                <li key={index} className="flex items-center gap-3 mb-2">
                  <IoMdCheckmarkCircleOutline className="text-[#fad41a]" />
                  <span className="text-[#90A3B4]">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <Link
            target="_blank"
            href="https://www.facebook.com/people/Passerelle-Shop/100069916585020/?mibextid=wwXIfr&rdid=U8QisznSG5jEq6SN&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19em7u5wgk%2F%3Fmibextid%3DwwXIfr"
          >
            <motion.p
              className="flex items-center text-[#fad41a] py-2 gap-2 cursor-pointer max-md:w-full max-md:justify-center"
              variants={{
                hidden: { opacity: 0, x: -20 },
                show: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <span>🛍️ Explorer l’e-shop</span>
              <CgArrowLongRight className="relative top-0.5" />
            </motion.p>
          </Link>
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
