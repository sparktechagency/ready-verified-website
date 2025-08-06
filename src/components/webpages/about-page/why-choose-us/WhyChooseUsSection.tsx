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
import FeatureCard, { FeatureCardProps } from "./FeatureCard";

const { Title, Paragraph } = Typography;

export default function WhyChooseUsSection() {
  const features: FeatureCardProps[] = [
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

  return (
    <div className=" bg-[#E8EFF6] py-12 my-12 min-h-screen flex flex-col items-center justify-center">
      <div className="container px-4 md:px-8 mx-auto py-12">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
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
