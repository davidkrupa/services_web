import Hero from "@/containers/Hero";
import About from "@/containers/About";
import Faq from "@/containers/Faq";
import Navbar from "@/containers/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center mx-auto max-w-5xl bg-slate-200">
      <Hero />
      <About />
      <Faq />
    </main>
  );
}
