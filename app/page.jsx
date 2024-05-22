import { FloatingNavDemo } from "./components/navbar/FloatingNavbar";
import { Hero } from "./components/hero/Hero";
import { Offering } from "./components/offering/Offering";
import { About } from "./components/about/About";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <>
      <FloatingNavDemo />
      <Hero />
      <Offering />
      <About />
      <Footer />
    </>
  );
}
