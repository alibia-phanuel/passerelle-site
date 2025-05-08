const Hero = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
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
