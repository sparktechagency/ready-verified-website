import PricingPage from "@/components/webpages/pricing-page/PricingPage";
import getProfile from "@/utils/getProfile";
import { myFetch } from "@/utils/myFetch";
import React from "react";

export default async function page() {
  const { data: pricingData } = await myFetch("/package");
  // const user = await getProfile();
  // console.log(pricingData, user);
  const { data: subscribedPackage } = await myFetch("/subscription", {
    cache: "no-store",
  });
  // console.log(subscribedPackage);
  const user = await getProfile();

  return (
    <div>
      <PricingPage
        pricingData={pricingData}
        subscribedPackage={subscribedPackage}
        user={user}
      />
    </div>
  );
}
