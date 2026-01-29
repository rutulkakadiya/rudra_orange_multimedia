import React from "react";
import HeroSection from "../Components/HomeComponent/HeroSection";
import AutoScrollingText from "../Components/HomeComponent/AutoScrollingText";
import ServicesSection from "../Components/HomeComponent/ServicesSection";
import AboutUs from "../Components/HomeComponent/AboutUs";
import Project from "../Components/HomeComponent/Project";
import StatsCounter from "../Components/HomeComponent/StatsCounter";
import TestimonialSlider from "../Components/HomeComponent/TestimonialSlider";
import PartnerScroll from "../Components/HomeComponent/PartnerScroll";
import SocialMedia from "../Components/HomeComponent/SocialMedia";


function HomePage() {
  return (
    <div className="">
      <HeroSection />
      <SocialMedia/>
      <AutoScrollingText direction="right" />
      <AboutUs />
      <AutoScrollingText direction="left" />
      <ServicesSection />
      <Project/>
      <StatsCounter/>
      <PartnerScroll/>
      <TestimonialSlider/>
    </div>
  );
}

export default HomePage;
