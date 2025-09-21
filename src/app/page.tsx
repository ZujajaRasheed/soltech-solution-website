'use client'
import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Services from "./components/Services";
import ChooseUs from "./components/ChooseUs";
import Pricing from "./components/Pricing";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import { useState } from "react";
import Animation from "./components/Animation";

export default function Home() {
  const [selectedPlan ,setSelectedPlan]=useState<string>("Standard")
  return (
  <div>
    <Navbar/>
    <HeroSection/>
    <Animation>
    <About/>
    </Animation>
    <Services/>
  <ChooseUs/>
  <Pricing selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan}/>
  <ContactUs selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan}/>
  <Footer/>

  </div>
  );
}
