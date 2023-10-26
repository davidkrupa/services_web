import Hero from "@/containers/Hero";
import OurWork from "@/containers/OurWork";
import Faq from "@/containers/Faq";
import AboutMe from "@/containers/AboutMe";
import PersonalValues from "@/containers/PersonalValues";
import Contact from "@/containers/Contact";
import NumbersSection from "@/containers/NumbersSection";
import Quote from "@/containers/Quote";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center mx-auto max-w-5xl">
      <Hero />
      <PersonalValues />
      <AboutMe />
      <NumbersSection /> {/* to remove */}
      <OurWork />
      <Quote /> {/* to remove */}
      <Faq />
      <Contact />
    </main>
  );
}
