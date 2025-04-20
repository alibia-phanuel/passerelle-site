const Hero = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="h-[80vh] bg-[#00B8D9] relative max-md:h-auto pb-8 ">
      {children}
    </div>
  );
};

export default Hero;
