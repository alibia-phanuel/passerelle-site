import Hero from "@/components/Hero";
import Header from "@/components/Header";
import ContentHero from "@/components/ContentHero";
import Android from "@/components/Android";
import Pc from "@/components/Pc";
import Performance from "@/components/Performance";
import Brand from "@/components/Brand";
import Footer from "@/components/Footer";
import AppDownload from "@/components/AppDownload";
export default function Home() {
  return (
    <div>
      <Hero>
        <Header />
        <ContentHero />
      </Hero>
      <Android />
      <AppDownload />
      <Pc />
      <Performance />
      <Brand />
      <Footer />
    </div>
  );
}
