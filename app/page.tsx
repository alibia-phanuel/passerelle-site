import Hero from "@/components/Hero";
import Header from "@/components/Header";
import ContentHero from "@/components/ContentHero";
import Marques from "@/components/Marques";
import Android from "@/components/Android";
import Pc from "@/components/Pc";
import Performance from "@/components/Performance";
export default function Home() {
  return (
    <div>
      <Hero>
        <Header />
        <ContentHero />
      </Hero>
      <Marques />
      <Android />
      <Pc />
      <Performance />
    </div>
  );
}
