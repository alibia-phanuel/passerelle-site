import Hero from "@/components/Hero";
import Header from "@/components/Header";
import ContentHero from "@/components/ContentHero";
import Marques from "@/components/Marques";

export default function Home() {
  return (
    <div>
      <Hero>
        <Header />
        <ContentHero />
      </Hero>
      <Marques />
    </div>
  );
}
