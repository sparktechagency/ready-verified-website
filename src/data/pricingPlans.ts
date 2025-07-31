export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  buttonText: string;
  buttonType: "primary" | "default";
  highlighted?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    period: "/month",
    features: [
      "Limited features",
      "Basic search filters",
      "Up to 5 job postings",
    ],
    buttonText: "Get Started",
    buttonType: "primary",
    highlighted: true,
  },
  {
    id: "premium",
    name: "Premium",
    price: "$24.99",
    period: "/month",
    features: [
      "All Basic features",
      "Advanced search filters",
      "Unlimited job postings",
      "Priority support",
    ],
    buttonText: "Get Started",
    buttonType: "default",
  },
  {
    id: "premium-plan",
    name: "Premium Plan",
    price: "$49.99",
    period: "/month",
    features: [
      "Custom features",
      "Dedicated account manager",
      "Tailored solutions",
    ],
    buttonText: "Get Started",
    buttonType: "default",
  },
];
