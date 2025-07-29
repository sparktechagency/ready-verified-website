import React from "react";
import AboutBanner from "@/components/webpages/about-page/AboutBanner";
import OurStorySection from "@/components/webpages/about-page/OurStorySection";
import OurTeamSection from "@/components/webpages/about-page/OurTeamSection";
import WhyChooseUsSection from "./WhyChooseUsSection";
export default function AboutUsPage() {
  return (
    <>
      <AboutBanner />
      <OurStorySection />
      <OurTeamSection />
      <WhyChooseUsSection />
    </>
  );
}
