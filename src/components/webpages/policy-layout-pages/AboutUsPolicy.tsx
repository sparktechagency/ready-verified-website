import PolicyLayout from "@/components/shared/PolicyLayout";
import { aboutUsContent } from "@/data/policyData";
import React from "react";

export default function AboutUsPage() {
  const aboutContent = aboutUsContent;
  return (
    <div>
      <PolicyLayout content={aboutContent} title="About Us" />
    </div>
  );
}
