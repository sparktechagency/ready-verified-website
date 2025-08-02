import React from "react";
import AboutBanner from "@/components/webpages/about-page/AboutBanner";
import OurStorySection from "@/components/webpages/about-page/OurStorySection";
import OurTeamSection from "@/components/webpages/about-page/OurTeamSection";
import WhyChooseUsSection from "./WhyChooseUsSection";
import AboutTestimonial from "./AboutTestimonial";
import JourneySection from "./JourneySection";
import ContactSection from "./AboutContactSection";
export default function AboutUsPage() {
  return (
    <>
      <OurStorySection />
      <AboutBanner />
      <OurTeamSection />
      <WhyChooseUsSection />
      <AboutTestimonial />
      <JourneySection />
      <ContactSection />
    </>
  );
}
