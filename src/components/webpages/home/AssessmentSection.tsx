"use client";

import { Button, Typography, Row, Col } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";

const { Title, Paragraph } = Typography;

export default function AssessmentSection() {
  const statistics = [
    { value: "234+", label: "Resumes Built" },
    { value: "4031+", label: "Cover Letter Built" },
    { value: "995+", label: "Website Built" },
    { value: "234", label: "Assessment completed via our website" },
  ];

  return (
    <div className="container mx-auto my-12 p-4 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 justify-center items-center">
        {/* Left Content */}

        <div className="w-full max-w-[600px]">
          <h1 className="text-4xl md:text-5xl font-bold text-left mb-4 leading-16">
            Have your Assessment done by{" "}
            <span style={{ color: "#52c41a" }}>Professionals!</span>
          </h1>

          <Paragraph
            style={{
              fontSize: "16px",
              color: "#666",
              lineHeight: "1.6",
              marginBottom: "40px",
              width: "100%",
              // maxWidth: "600px",
            }}
          >
            Get your assessment expertly designed and certified by industry
            professionals. Boost credibility, enhance evaluation, and stand out
            with a trusted certification.
          </Paragraph>

          {/* Statistics Grid */}
          <div
            className="grid grid-cols-2 gap-5 "
            style={{ marginBottom: "40px" }}
          >
            {statistics.map((stat, index) => (
              <div className="" key={index}>
                <div>
                  <div
                    style={{
                      fontSize: "40px",
                      fontWeight: "bold",
                      color: "#333",
                      lineHeight: "1.2",
                      marginBottom: "4px",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      color: "#999",
                      lineHeight: "1.4",
                      width: "100%",
                      maxWidth: 220,
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link href={"/assessments"}>
            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              iconPosition="end"
              style={{
                backgroundColor: "#1A5FA4",
                borderColor: "#1A5FA4",
                height: "48px",
                paddingLeft: "24px",
                paddingRight: "24px",
                fontSize: "16px",
                fontWeight: "500",
                borderRadius: "6px",
              }}
            >
              Assessments
            </Button>
          </Link>
        </div>

        {/* Right Content - Placeholder for your image */}

        <div
          style={{
            height: "auto",
            backgroundColor: "#e8f4fd",
            borderRadius: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "none",
          }}
        >
          <div
            style={{
              textAlign: "center",
              color: "#666",
              backgroundImage: "url('/home-images/assesmentBg.jpg')",
            }}
          >
            <div
              style={{
                fontSize: "14px",
                padding: 30,
              }}
            >
              <Image
                src={"/home-images/assesmentImg.png"}
                alt="Assessment image"
                height={733}
                width={837}
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
