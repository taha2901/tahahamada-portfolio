"use client";

import dynamic from "next/dynamic";
import LoadingScreen from "@/components/ui/LoadingScreen";
import Navbar from "@/components/ui/Navbar";
import BackToTop from "@/components/ui/BackToTop";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
