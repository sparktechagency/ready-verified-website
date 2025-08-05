"use client";

import { pricingPlans } from "@/data/pricingPlans";
import { Card, Button, Row, Col, Typography } from "antd";

const { Title, Text, Paragraph } = Typography;

export default function PricingPage() {
  const handleGetStarted = (planId: string) => {
    console.log(`Selected plan: ${planId}`);
    // Handle plan selection logic here
  };

  return (
    <div className="min-h-[calc(100vh-87px)] container mx-auto p-4">
      <div className="max-w-7xl mx-auto p-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <Title
            style={{
              fontSize: "40px",
              fontWeight: 600,
              color: "#3D3D3D",
            }}
            level={1}
          >
            Choose from Our Services
          </Title>

          <div className="max-w-4xl mx-auto">
            <Paragraph
              style={{
                fontSize: 14,
                color: "#ABABAB",
              }}
            >
              At MyCv-Creator, our expert CV/resume writers—experienced HR
              specialists and career coaches—deliver unmatched quality. We
              deeply understand your needs and craft tailored, professional CVs,
              resumes, and cover letters for diverse industries. Many of our
              team members hold advanced degrees (M.Sc, MBA) from top
              universities, ensuring your application stands out. Trust our
              expertise to elevate your career prospects with a compelling,
              job-winning document.
            </Paragraph>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12 mt-10">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.id}
              style={{
                height: "100%",
                backgroundColor: plan.highlighted ? "#E8EFF6" : "#F1F4F9",
                scale: plan.highlighted ? "1.05" : "1",
              }}
              className={`h-full pricing-card `}
              bodyStyle={{
                padding: "40px 32px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div className="text-center mb-8">
                {/* Price */}
                <div className="mb-4">
                  <span className="text-4xl lg:text-5xl font-bold text-[#3D3D3D]">
                    {plan.price}
                  </span>
                  <span className="text-lg text-[#3D3D3D]">{plan.period}</span>
                </div>

                {/* Plan Name */}
                <Text
                  style={{
                    color: "#858585",
                    fontWeight: 500,
                  }}
                >
                  {plan.name}
                </Text>
              </div>

              {/* Features */}
              <div className="flex-1 mb-8">
                <ul className="flex flex-col space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-[#858585]">
                      <span className="text-gray-400 mr-3 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <Button
                type={plan.buttonType}
                size="large"
                block
                style={{
                  width: "100%",
                  backgroundColor: plan.highlighted ? "#1A5FA4" : "#E8EFF6",
                  borderColor: plan.highlighted ? "#1A5FA4" : "#E8EFF6",
                  fontWeight: 400,
                }}
                onClick={() => handleGetStarted(plan.id)}
              >
                {plan.buttonText}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
