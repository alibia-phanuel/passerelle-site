"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

type TeamMember = {
  name: string;
  role: string;
  image: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Blanche Ikouye Soundja",
    role: "Directrice Générale – CEO",
    image: "/images/a1.jpg",
  },
  {
    name: "Kevine Nkudji",
    role: "Assistante de Direction",
    image: "/images/a3.jpg",
  },
  {
    name: "Vivien Yontang",
    role: "Assistant Commercial",
    image: "/images/a2.jpg",
  },
];

/* ── Floating gold particle ── */
const Particle = ({ index }: { index: number }) => {
  const size = 2 + (index % 4);
  const x = (index * 37) % 100;
  const duration = 7 + (index % 6);
  const delay = (index * 0.4) % 5;

  return (
    <motion.div
      className="absolute rounded-full bg-[#fad41a]"
      style={{ width: size, height: size, left: `${x}%`, bottom: -10 }}
      animate={{
        y: [0, -(350 + (index % 3) * 100)],
        opacity: [0, 0.55, 0],
        x: [0, ((index % 2 === 0 ? 1 : -1) * index * 7) % 60],
      }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeOut" }}
    />
  );
};

/* ── Concentric pulsing rings (CEO) ── */
const PulsingRings = () => (
  <>
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="absolute inset-0 rounded-full border border-[#fad41a]/50"
        animate={{ scale: [1, 1.18 + i * 0.12], opacity: [0.5, 0] }}
        transition={{
          duration: 2.2,
          delay: i * 0.65,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />
    ))}
  </>
);

/* ── 3-D magnetic tilt wrapper ── */
const TiltCard = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), {
    stiffness: 180,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), {
    stiffness: 180,
    damping: 22,
  });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
    >
      {children}
    </motion.div>
  );
};

/* ══════════════════════════════
   Main Team Section
══════════════════════════════ */
const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const particles = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div
      id="equipe"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden py-24"
    >
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((i) => (
          <Particle key={i} index={i} />
        ))}
      </div>

      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#fad41a]/[0.035] blur-[130px] pointer-events-none" />

      <div ref={ref} className="container p-4 w-full relative z-10">

        {/* ── Header ── */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h1
            className="text-[#fad41a] font-bold text-[36px]"
            initial={{ opacity: 0, letterSpacing: "0.25em" }}
            animate={isInView ? { opacity: 1, letterSpacing: "0em" } : {}}
            transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
          >
            Notre Équipe
          </motion.h1>

          <motion.p
            className="mt-4 text-[#90A3B4] max-w-xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Des professionnels engagés au service de votre satisfaction.
            Découvrez les visages qui font de La Passerelle une référence.
          </motion.p>

          {/* Animated divider */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <motion.div
              className="h-px bg-[#fad41a] opacity-40"
              initial={{ width: 0 }}
              animate={isInView ? { width: 64 } : {}}
              transition={{ duration: 0.9, delay: 0.5 }}
            />
            <motion.div
              className="w-2 h-2 rounded-full bg-[#fad41a]"
              initial={{ scale: 0, rotate: 0 }}
              animate={isInView ? { scale: 1, rotate: 360 } : {}}
              transition={{ duration: 0.6, delay: 0.95, type: "spring" }}
            />
            <motion.div
              className="h-px bg-[#fad41a] opacity-40"
              initial={{ width: 0 }}
              animate={isInView ? { width: 64 } : {}}
              transition={{ duration: 0.9, delay: 0.5 }}
            />
          </div>
        </motion.div>

        {/* ── CEO – center stage ── */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, scale: 0.65, y: 70 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{
            duration: 1.1,
            delay: 0.4,
            type: "spring",
            stiffness: 75,
            damping: 14,
          }}
        >
          <TiltCard>
            <MemberCard member={teamMembers[0]} large />
          </TiltCard>
        </motion.div>

        {/* ── Staff row ── */}
        <div className="flex flex-wrap justify-center gap-14 mb-16">
          {teamMembers.slice(1).map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 55, rotateY: i === 0 ? -20 : 20 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{
                duration: 0.95,
                delay: 0.7 + i * 0.22,
                type: "spring",
                stiffness: 65,
              }}
            >
              <TiltCard>
                <MemberCard member={member} />
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* ── Commercial team photo ── */}
        <motion.div
          className="w-full max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 70, scale: 0.93 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{
            duration: 1.2,
            delay: 1.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{ scale: 1.025, transition: { duration: 0.35 } }}
        >
          <div className="relative rounded-2xl overflow-hidden border border-[#fad41a]/20 shadow-[0_0_70px_rgba(250,212,26,0.09)]">
            <Image
              src="/images/a4.jpg"
              width={900}
              height={500}
              alt="Équipe commerciale La Passerelle"
              className="w-full object-cover"
            />

            {/* Shimmer sweep on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/6 to-transparent -skew-x-12"
              initial={{ x: "-120%" }}
              whileHover={{ x: "160%" }}
              transition={{ duration: 0.65, ease: "easeInOut" }}
            />

            {/* Overlay label – slides in */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 to-transparent px-6 py-5"
              initial={{ y: 40, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.9, delay: 1.45 }}
            >
              <p className="text-[#fad41a] font-bold text-lg">
                Notre Équipe Commerciale
              </p>
              <p className="text-[#90A3B4] text-sm mt-1">
                Disponibles pour vous accompagner au quotidien
              </p>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

/* ══════════════════════════════
   MemberCard sub-component
══════════════════════════════ */
const MemberCard = ({
  member,
  large = false,
}: {
  member: TeamMember;
  large?: boolean;
}) => {
  const imgSize = large ? 190 : 145;
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex flex-col items-center cursor-pointer select-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Avatar + rings */}
      <div className="relative flex items-center justify-center">
        {large && (
          <div className="absolute inset-0 flex items-center justify-center">
            <PulsingRings />
          </div>
        )}

        {/* Gradient border ring */}
        <motion.div
          className="rounded-full p-[3px]"
          style={{
            background: large
              ? "linear-gradient(135deg, #fad41a, #fad41a70, transparent)"
              : "linear-gradient(135deg, #fad41a55, transparent)",
          }}
          animate={hovered ? { scale: 1.09 } : { scale: 1 }}
          transition={{ type: "spring", stiffness: 220, damping: 16 }}
        >
          <motion.div
            className="rounded-full overflow-hidden bg-[#081315]"
            animate={
              hovered
                ? { filter: "brightness(1.18) saturate(1.1)" }
                : { filter: "brightness(1) saturate(1)" }
            }
            transition={{ duration: 0.35 }}
          >
            <Image
              src={member.image}
              width={imgSize}
              height={imgSize}
              alt={member.name}
              className="rounded-full object-cover block"
              style={{ width: imgSize, height: imgSize }}
            />
          </motion.div>
        </motion.div>

        {/* Glow burst */}
        <motion.div
          className="absolute inset-0 rounded-full bg-[#fad41a]"
          style={{ filter: "blur(28px)" }}
          animate={
            hovered ? { opacity: 0.18, scale: 1.25 } : { opacity: 0, scale: 1 }
          }
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* Text – floats up on hover */}
      <motion.div
        className="text-center mt-5"
        animate={hovered ? { y: -4 } : { y: 0 }}
        transition={{ type: "spring", stiffness: 220, damping: 18 }}
      >
        <p
          className={`font-bold text-white ${
            large ? "text-[18px]" : "text-[15px]"
          }`}
        >
          {member.name}
        </p>
        <motion.p
          className={`text-[#fad41a] ${large ? "text-sm" : "text-xs"} mt-1`}
          animate={hovered ? { opacity: 1 } : { opacity: 0.7 }}
          transition={{ duration: 0.3 }}
        >
          {member.role}
        </motion.p>

        {/* Growing underline */}
        <motion.div
          className="h-[1.5px] bg-[#fad41a] mx-auto mt-2 rounded-full"
          animate={hovered ? { width: "75%" } : { width: "0%" }}
          transition={{ duration: 0.32, ease: "easeOut" }}
        />
      </motion.div>
    </div>
  );
};

export default Team;