import PricingPage from "@/components/webpages/pricing-page/PricingPage";
import { myFetch } from "@/utils/myFetch";
import React from "react";

export default async function page() {
  const {data: pricingData} = await myFetch("/package");
  // console.log(pricingData);
  return (
    <div>
      <PricingPage pricingData={pricingData} />
    </div>
  );
}
