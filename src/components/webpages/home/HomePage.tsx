import React from "react";
import AssessmentSection from "@/components/webpages/home/AssessmentSection";
import Banner from "@/components/webpages/home/Banner";
import CVTemplatesSection from "@/components/webpages/home/CVTemplatesSection";
import FAQ from "@/components/webpages/home/Faq";
import ResumeSection from "@/components/webpages/home/resume-section/ResumeSection";
import TestimonialSection from "@/components/webpages/home/TestimonialSection";
import HowItWorks from "./HowItWorksSection";
import EmployerHome from "@/components/Employer-school-pages/EmployerHome";

export default function HomePage() {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    role: "user",
  };
  return (
    <>
      {user?.role === "employee" ? (
        <>
          <EmployerHome />
        </>
      ) : (
        <>
          <Banner />
          <AssessmentSection />
          <HowItWorks />
          <CVTemplatesSection />
          <ResumeSection />
          <FAQ />
          <TestimonialSection />
        </>
      )}
    </>
  );
}
