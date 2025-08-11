"use client";

import { Row, Col, Typography, Input, Button, Space } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import SocialIcons from "./SocialIcons";
import Link from "next/link";

const { Title, Paragraph, Text } = Typography;

export default function Footer() {
  const handleSubscribe = () => {
    // console.log("Subscribe clicked");
    // Handle subscription logic here
  };

  const usefulLinks = [
    { title: "About Us", href: "/about-us" },
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms & Condition", href: "/terms" },
  ];

  const learningLinks = [
    { title: "Web Development", href: "/courses/web-development" },
    { title: "Game development 3D", href: "/courses/game-development" },
    { title: "Microsoft Excel", href: "/courses/excel" },
    { title: "iOS & Swift", href: "/courses/ios-swift" },
    { title: "UI UX Design", href: "/courses/ui-ux" },
  ];

  return (
    <footer className="bg-[#021325] ">
      <div className="container mx-auto px-4 md:px-4 pt-[100px] pb-[12px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Left Section - Logo and Newsletter */}
          <div className="col-span-2 md:col-span-1">
            <div style={{ marginBottom: "24px" }}>
              {/* Logo */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <Image
                  src={"/images/logo.png"}
                  alt="logo"
                  width={122}
                  height={100}
                />
              </div>

              {/* Description */}
              <Paragraph
                style={{
                  color: "rgba(255, 255, 255, 0.8)",
                  fontSize: "14px",
                  lineHeight: "1.6",
                  marginBottom: "24px",
                  width: "90%",
                }}
              >
                Empowering individuals through programs that unlock new career
                growth opportunities, enhancing skills and advancing
                professional success.
              </Paragraph>
            </div>

            {/* icons */}
            <SocialIcons />
          </div>

          {/* Middle Section - Useful Links */}
          <div>
            <Title
              level={4}
              style={{ color: "white", fontSize: "18px", marginBottom: "20px" }}
            >
              Useful links
            </Title>
            <Space direction="vertical" size="small" style={{ width: "100%" }}>
              {usefulLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  style={{
                    color: "rgba(255, 255, 255, 0.8)",
                    fontSize: "14px",
                    display: "block",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#52c41a";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(255, 255, 255, 0.8)";
                  }}
                >
                  {link.title}
                </Link>
              ))}
            </Space>
          </div>

          {/* Middle Section - Learning */}
          <div>
            <Title
              level={4}
              style={{ color: "white", fontSize: "18px", marginBottom: "20px" }}
            >
              Learning
            </Title>
            <Space direction="vertical" size="small" style={{ width: "100%" }}>
              {learningLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  style={{
                    color: "rgba(255, 255, 255, 0.8)",
                    fontSize: "14px",
                    display: "block",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#52c41a";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(255, 255, 255, 0.8)";
                  }}
                >
                  {link.title}
                </Link>
              ))}
            </Space>
          </div>

          {/* Right Section - Contact Us */}
          <div>
            <Title
              level={4}
              style={{ color: "white", fontSize: "18px", marginBottom: "20px" }}
            >
              Contact Us
            </Title>
            <Space direction="vertical" size="middle" style={{ width: "100%" }}>
              {/* Address */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <EnvironmentOutlined
                  style={{
                    color: "#ff4d4f",
                    fontSize: "16px",
                    marginTop: "2px",
                  }}
                />
                <Text
                  style={{
                    color: "rgba(255, 255, 255, 0.8)",
                    fontSize: "14px",
                    lineHeight: "1.5",
                  }}
                >
                  2972 Westheimer Rd. Santa Ana, USA
                </Text>
              </div>

              {/* Phone */}
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <PhoneOutlined
                  style={{
                    color: "#ff4d4f",
                    fontSize: "16px",
                  }}
                />
                <Link
                  href="tel:09-018784562000"
                  style={{
                    color: "rgba(255, 255, 255, 0.8)",
                    fontSize: "14px",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#52c41a";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(255, 255, 255, 0.8)";
                  }}
                >
                  09-018784562000
                </Link>
              </div>

              {/* Email */}
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <MailOutlined
                  style={{
                    color: "#ff4d4f",
                    fontSize: "16px",
                  }}
                />
                <Link
                  href="mailto:ready.verified.usa@gmail.com"
                  style={{
                    color: "rgba(255, 255, 255, 0.8)",
                    fontSize: "14px",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#52c41a";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(255, 255, 255, 0.8)";
                  }}
                >
                  ready.verified.usa@gmail.com
                </Link>
              </div>
            </Space>
          </div>
        </div>

        {/* Bottom Border */}
        <div
          className="flex flex-col md:flex-row justify-between items-center mb-5 gap-5"
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            marginTop: "40px",
            padding: "20px 0",
          }}
        >
          <Text style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "14px" }}>
            Stay updated with our latest features and assessment templates
          </Text>
          {/* Newsletter Subscription */}
          <div className="flex items-center gap-2 ">
            <Input
              placeholder="Your Email"
              style={{
                backgroundColor: "#1F2937",
                borderColor: "#F1F1F1",
                color: "white",
              }}
              styles={{
                input: {
                  backgroundColor: "#1F2937",
                  color: "white",
                },
              }}
            />
            <Button
              type="primary"
              onClick={handleSubscribe}
              style={{
                backgroundColor: "#1A5FA4",
                borderColor: "#1A5FA4",
                fontWeight: "500",
                color: "white",
              }}
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
