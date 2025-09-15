"use client";

import { ISubscription } from "@/types/types";
import { myFetch } from "@/utils/myFetch";
import {
  Card,
  Button,
  Typography,
  Row,
  Col,
  List,
  Tag,
  Space,
  Divider,
} from "antd";
import React, { useEffect } from "react";

const { Title, Text, Paragraph } = Typography;
interface subscriptionDetailsProps {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  buttonText: string;
  buttonType: "primary" | "default";
  highlighted?: boolean;
}
export default function MySubscriptionPage() {
  const [subscription, setSubscription] = React.useState<ISubscription>();

  useEffect(() => {
    myFetch('/subscription',{
      cache:"no-store"
    })
      .then((res) => {
        setSubscription(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[])

  
  
  const paymentHistory = [
    {
      type: "Last Payment",
      date: "28 September 2024",
      amount: "$9.99",
      card: "**** **** **** 4789",
    },
    {
      type: "Next Payment",
      date: "28 September 2025",
      amount: "$19.99",
      card: "**** **** **** 4789",
    },
  ];

  const subscriptionDetails: subscriptionDetailsProps = {
    id: "free",
    name: subscription?.package?.name||"Free Plan",
    price: `${subscription?.price||0}`,
    period: "/"+subscription?.package?.recurring||"/month",
    features: subscription?.package?.features||[],
    buttonText: "Get Started",
    buttonType: "primary",
    highlighted: false,
  };

  return (
    <div>
      <h1
        className=" text-lg md:text-2xl"
        style={{
          marginBottom: "32px",
          color: "#1A5FA4",
          fontWeight: 500,
        }}
      >
        My Subscription Plan
      </h1>

      <div className="grid col-span-1 lg:grid-cols-9 gap-5 items-start">
        {/* Free Plan Card */}
        <div className="lg:col-span-3">
          <Card
            style={{
              height: "100%",
              backgroundColor: "#E8EFF6",
              padding: "40px 32px",
              display: "flex",
              flexDirection: "column",
            }}
            className={`h-full pricing-card `}
          >
            <div className="text-center mb-8">
              {/* Price */}
              <div className="mb-4">
                <span className="text-5xl font-bold text-[#3D3D3D]">
                  {subscriptionDetails.price}
                </span>
                <span className="text-lg text-[#3D3D3D]">
                  {subscriptionDetails.period}
                </span>
              </div>

              {/* subscriptionDetails Name */}
              <Text
                style={{
                  color: "#858585",
                  fontWeight: 500,
                }}
              >
                {subscriptionDetails.name}
              </Text>
            </div>

            {/* Features */}
            <div className="flex-1 mb-8">
              <ul className="flex flex-col space-y-2">
                {subscriptionDetails.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-[#858585]">
                    <span className="text-gray-400 mr-3 mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Button */}
            <Button
              type={subscriptionDetails.buttonType}
              size="large"
              block
              style={{
                width: "100%",
                backgroundColor: "#1A5FA4",
                borderColor: "#1A5FA4",
                fontWeight: 400,
              }}
            >
              {subscriptionDetails.buttonText}
            </Button>
          </Card>
        </div>

        {/* Yearly Subscription Card */}
        <div className="lg:col-span-6">
          <div
            style={{
              height: "100%",
              borderRadius: "12px",
              padding: "12px 24px",
              backgroundColor: "#E8EFF6",
              marginBottom: "24px",
            }}
          >
            <Title level={3} style={{ marginBottom: "8px", color: "#3D3D3D" }}>
              {subscription?.package?.name||"Free Plan"}
            </Title>
            <Text style={{ color: "#858585" }}>
              Renew Date: {new Date(subscription?.endDate!).toLocaleDateString()}
            </Text>

            <div
              style={{
                padding: "16px",
                borderRadius: "8px",
                margin: "20px 0",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#B8CDE347",
              }}
            >
              <Text>{subscription?.package?.features?.toString()||[].toString()}</Text>
              <Text strong style={{ fontSize: "16px" }}>
                ${subscription?.price||0}/{subscription?.package?.recurring||"month"}
              </Text>
            </div>
          </div>
          <div
            style={{
              height: "100%",
              borderRadius: "12px",
              padding: "12px 24px",
              backgroundColor: "#E8EFF6",
              marginBottom: "24px",
            }}
          >
            <div>
              {paymentHistory?.map((payment, index) => (
                <div key={index} style={{ marginBottom: "16px" }}>
                  <Row justify="space-between" align="middle">
                    <Col>
                      <div>
                        <Text strong>{payment.type}</Text>
                        <br />
                        <Text style={{ color: "#8c8c8c", fontSize: "12px" }}>
                          {payment.date}
                        </Text>
                      </div>
                    </Col>
                    <Col>
                      <div
                        style={{
                          textAlign: "right",
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                          backgroundColor: "#F1F1F1",
                          padding: "4px 12px",
                        }}
                      >
                        <Text style={{ color: "#8c8c8c" }}>{payment.card}</Text>

                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          <img
                            src="/images/visa.png?height=20&width=32"
                            alt="Visa"
                            style={{ height: "20px" }}
                          />
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <Space>
                        <Tag
                          color="green"
                          style={{ fontSize: "14px", padding: "4px 8px" }}
                        >
                          {payment.amount}
                        </Tag>
                      </Space>
                    </Col>
                  </Row>
                  {index < paymentHistory.length - 1 && (
                    <Divider style={{ margin: "16px 0" }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
