import PolicyLayout from "@/components/shared/PolicyLayout";
import { privacyContent } from "@/data/policyData";
import React from "react";

export default function page() {
  const content = privacyContent;
  return (
    <div>
      <PolicyLayout title="Privacy Policy" content={content} />
    </div>
  );
}
