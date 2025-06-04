"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const Hero = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
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
  return (
    <div
      id="accueil"
      className="h-[80vh] bg-[#212121] relative max-md:h-auto pb-8 "
    >
      {children}
    </div>
  );
};

export default Hero;
