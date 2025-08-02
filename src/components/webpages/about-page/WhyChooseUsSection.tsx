"use client";

import type React from "react";
import { Grid } from "antd";
import { Row, Col, Typography, Card } from "antd";
import {
  CheckCircleOutlined,
  CrownOutlined,
  TrophyOutlined,
  FileTextOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

interface FeatureCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  background: "blue" | "white";
  _id: number;
}

export default function WhyChooseUsSection() {
  const features: FeatureCard[] = [
    {
      title: "High Quality Assessments",
      description:
        "Learn from industry experts with real-world experience, ensuring you gain practical and valuable skills.",
      icon: <CheckCircleOutlined style={{ fontSize: "32px" }} />,
      background: "white",
      _id: 1,
    },
    {
      title: "User-Friendly Platform",
      description:
        "We prioritize your data privacy and provide an easy-to-navigate platform for a smooth and secure learning experience.",
      icon: <CrownOutlined style={{ fontSize: "32px" }} />,
      background: "blue",
      _id: 2,
    },
    {
      title: "Skill Development",
      description:
        "We offer a wide range of programs designed to help you advance in your current career or explore new opportunities.",
      icon: <TrophyOutlined style={{ fontSize: "32px" }} />,
      background: "blue",
      _id: 3,
    },
    {
      title: "Job Opportunities",
      description:
        "Stay ahead with regularly updated Assessments and new programs that keep up with industry trends and demands.",
      icon: <FileTextOutlined style={{ fontSize: "32px" }} />,
      background: "white",
      _id: 4,
    },
  ];

  const FeatureCard = ({ feature }: { feature: FeatureCard }) => {
    const { lg } = Grid.useBreakpoint();
    const isBlue = feature.background === "blue";
    const _id = feature._id;

    return (
      <Card
        style={{
          height: "200px",
          backgroundColor: isBlue ? "#1A5FA4" : "#ffffff",
          border: isBlue ? "none" : "1px solid #e8e8e8",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          marginTop: lg && (_id === 2 || _id === 4) ? "-24px" : "",
          position: lg && (_id === 2 || _id === 4) ? "relative" : undefined,
        }}
        bodyStyle={{
          padding: "24px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Icon */}
        <div
          style={{
            color: isBlue ? "#ffffff" : "#1A5FA4",
            marginBottom: "16px",
          }}
        >
          {feature.icon}
        </div>

        {/* Title */}
        <Title
          level={4}
          style={{
            color: isBlue ? "#ffffff" : "#333",
            fontSize: "16px",
            fontWeight: "600",
            marginBottom: "12px",
            margin: "0 0 12px 0",
            lineHeight: "1.3",
          }}
        >
          {feature.title}
        </Title>

        {/* Description */}
        <Paragraph
          style={{
            color: isBlue ? "rgba(255, 255, 255, 0.9)" : "#666",
            fontSize: "13px",
            lineHeight: "1.5",
            margin: 0,
            textAlign: "center",
          }}
        >
          {feature.description}
        </Paragraph>
      </Card>
    );
  };

  return (
    <div className=" bg-[#E8EFF6] py-[60px] my-12">
      <div className="container px-4 md:px-8 mx-auto py-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Left Content */}
          <Col xs={24} lg={10}>
            <div>
              <Title
                level={2}
                style={{
                  fontSize: "40px",
                  fontWeight: "600",
                  color: "#3D3D3D",
                  marginBottom: "24px",
                  lineHeight: "1.3",
                }}
              >
                Why Choose Us?
              </Title>

              <Paragraph
                style={{
                  fontSize: "16px",
                  color: "#656565",
                  lineHeight: "1.7",
                  margin: 0,
                }}
              >
                We offer top-rated Assessments taught by industry experts and
                provide access to exclusive job opportunities. Our platform
                ensures a smooth learning and job-seeking experience with secure
                data privacy and dedicated support. Join thousands of graduates
                who trust us to grow their skills and careers. We also connect
                employers with the best talented people, making hiring smarter
                and faster.
              </Paragraph>
            </div>
          </Col>

          {/* Right Content - Feature Cards Grid */}
          <Col xs={24} lg={14}>
            <Row gutter={[16, 16]}>
              {features.map((feature) => (
                <Col xs={24} sm={12} key={feature?._id}>
                  <FeatureCard feature={feature} />
                </Col>
              ))}
            </Row>
          </Col>
        </div>
      </div>
    </div>
  );
}
