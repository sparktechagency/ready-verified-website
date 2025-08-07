import PolicyLayout from "@/components/shared/PolicyLayout";
import { termsContent } from "@/data/policyData";
import React from "react";

export default function page() {
  const content = termsContent;
  return (
    <div>
      <PolicyLayout title="Terms & Conditions" content={content} />
    </div>
  );
}
