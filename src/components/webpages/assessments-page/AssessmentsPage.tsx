import React from "react";
import GetStartedSection from "./GetStartedSection";
import getProfile from "@/utils/getProfile";

export default async function AssessmentsPage() {
  const user = await getProfile();
  return (
    <>
      <GetStartedSection user={user} />
    </>
  );
}
