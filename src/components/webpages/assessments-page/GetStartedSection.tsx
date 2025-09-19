"use client";
import { Button, Typography, Row, Col, Space, Grid } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import WarningModal from "./WarningModal";

const { Title, Text, Paragraph } = Typography;

const GetStartedSection = ({ user }: any) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const router = useRouter();
  const features = [
    {
      id: 1,
      title: "Trusted Background Verification for Career Success",
      description:
        "Fast, secure background checks to boost your career with trusted accurate verification services.",
      icon: "/assessment/icon1.png",
    },
    {
      id: 2,
      title: "Elevate Your Career with Ready Verified",
      description:
        "Expert-led credential verification helping professionals stand out with speed, reliability, and precision.",
      icon: "/assessment/icon2.png",
    },
    {
      id: 3,
      title: "The Future of Professional Verification Starts Here",
      description:
        "Trusted by individuals and employers for efficient, high-quality background screening and career growth.",
      icon: "/assessment/icon3.png",
    },
    {
      id: 4,
      title: "Our recruitment features one-way video interviews.",
      description:
        "One-way video interviews streamlining hiring process, offering flexibility for candidates and efficient screening for recruiters.",
      icon: "/assessment/icon4.png",
    },
  ];
  const { lg } = Grid.useBreakpoint();

  const handleGetStartedClick = () => {
    if (!user) {
      // If no user is found, show the modal
      setIsModalVisible(true);
    } else {
      router.push("/assessments/assessment-process");
    }
  };
  return (
    <div className=" min-h-[calc(100vh-86px)] 2xl:py-0 lg:py-12  container mx-auto px-4  flex justify-center items-center ">
      <div className="bg-[#F1F4F9] rounded-2xl  pt-16 pb-8 px-4 lg:px-40 ">
        <Row gutter={[48, 48]} align="middle">
          {/* Left Column - Main Content */}
          <Col xs={24} lg={10}>
            <div style={{ textAlign: "left" }}>
              <Title
                level={1}
                style={{
                  fontSize: lg ? "40px" : "32px",
                  fontWeight: 600,
                  lineHeight: "1.2",
                  marginBottom: "40px",
                  color: "#1f2937",
                }}
              >
                It's easy to get started <br />
                on <span style={{ color: "#10b981" }}>Ready Verified.</span>
              </Title>
            </div>
          </Col>

          {/* Right Column - Features */}
          <Col xs={24} lg={14}>
            <Space direction="vertical" size={32} style={{ width: "100%" }}>
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className={`flex items-center justify-between gap-2 md:gap-5 ${
                    index % 2 == 1 ? "flex-row-reverse " : ""
                  }`}
                >
                  <div className="flex items-start gap-4 md:gap-3">
                    <div
                      style={{
                        // width: "40px",
                        // height: "40px",
                        borderRadius: "80px",
                        backgroundColor:
                          index === 0
                            ? "#dbeafe"
                            : index === 1
                            ? "#fef3c7"
                            : index === 2
                            ? "#d1fae5"
                            : "#fce7f3",
                        // display: "flex",
                        // alignItems: "center",
                        // justifyContent: "center",
                        fontSize: "18px",
                        fontWeight: 600,
                        color:
                          index === 0
                            ? "#1d4ed8"
                            : index === 1
                            ? "#d97706"
                            : index === 2
                            ? "#059669"
                            : "#be185d",
                        padding: 8,
                      }}
                    >
                      {feature.id}
                    </div>

                    <Space direction="vertical" size={8}>
                      <Title
                        level={4}
                        style={{
                          margin: 0,
                          fontSize: lg ? "20px" : "16px",
                          fontWeight: 500,
                          color: "#3D3D3D",
                        }}
                      >
                        {feature.title}
                      </Title>
                      <Paragraph
                        style={{
                          margin: 0,
                          color: "#ABABAB",
                          fontSize: "14px",
                          lineHeight: "1.5",
                        }}
                      >
                        {feature.description}
                      </Paragraph>
                    </Space>
                  </div>
                  <div>
                    <Image
                      src={feature.icon || "/placeholder.svg"}
                      alt={`${feature.title} icon`}
                      width={144}
                      height={144}
                      style={{
                        borderRadius: "8px",
                        objectFit: "contain",
                        height: 120,
                        width: "100%",
                      }}
                    />
                  </div>
                </div>
              ))}
            </Space>
          </Col>
        </Row>

        {/* Get Started Button */}
        <Row justify="end" style={{ marginTop: "60px" }}>
          <Button
            type="primary"
            size="large"
            style={{
              backgroundColor: "#1A5FA4",
              borderColor: "#1A5FA4",
              borderRadius: "8px",
              height: "42px",
              padding: "0 32px",
              fontSize: "16px",
              fontWeight: 500,
            }}
            onClick={handleGetStartedClick}
          >
            Get Started
          </Button>
        </Row>
      </div>
      <WarningModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </div>
  );
};

export default GetStartedSection;
