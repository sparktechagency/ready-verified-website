import React from "react";
import AssessmentSection from "@/components/webpages/home/AssessmentSection";
import Banner from "@/components/webpages/home/Banner";
import CVTemplatesSection from "@/components/webpages/home/CVTemplatesSection";
import FAQ from "@/components/webpages/home/Faq";
import ResumeSection from "@/components/webpages/home/ResumeSection";
import TestimonialSection from "@/components/webpages/home/TestimonialSection";

export default function HomePage() {
  return (
    <>
      <Banner />
      <AssessmentSection />
      <CVTemplatesSection />
      <ResumeSection />
      <FAQ />
      <TestimonialSection />
    </>
  );
}
