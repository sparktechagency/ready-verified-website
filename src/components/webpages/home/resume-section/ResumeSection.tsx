"use client";

import { useState } from "react";
import { Button, Modal, Input, Row, Col, Card, Typography, Space } from "antd";
import {
  UserOutlined,
  CheckCircleFilled,
  SaveOutlined,
  ExportOutlined,
  PrinterOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import ResumeModal from "./ResumeModal";

const { Title, Text } = Typography;

const ResumeSection = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    issueDate: "",
    idCode: "",
  });

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const BusinessCardPreview = () => {
    // Get today's date in MM/DD/YYYY format
    const today = new Date();
    const formattedToday = today.toLocaleDateString("en-US");

    // Function to generate a random ID code
    const generateRandomIdCode = () => {
      const prefix = "HT4AOTSR";
      const suffix = Math.floor(100 + Math.random() * 900);
      const randomChars = Math.random()
        .toString(36)
        .substring(2, 5)
        .toUpperCase(); // 3 random letters/numbers
      return `${prefix}${suffix}-${randomChars}`;
    };

    const displayName =
      formData.firstName || formData.lastName
        ? `${formData.lastName}, ${formData.firstName}`
        : "Last, First Name";

    const displayDate = formData.issueDate || formattedToday;
    const displayIdCode = formData.idCode || generateRandomIdCode();

    return (
      <div
        style={{
          background: "#f0f2f5",
          padding: "40px",
          borderRadius: "8px",
          textAlign: "center",
          minHeight: "300px",
          display: "flex",
          flexDirection: "column",
          // justifyContent: "center",
          // alignItems: "center",
        }}
      >
        <div className="flex flex-col  justify-end text-right">
          <Text
            style={{ fontSize: "12px", color: "#666", marginBottom: "8px" }}
          >
            {displayName}
          </Text>
          <Text
            style={{ fontSize: "10px", color: "#999", marginBottom: "8px" }}
          >
            {displayDate}
          </Text>
        </div>

        <Image src={"/images/logo.png"} alt="logo" width={372} height={300} />

        <Text
          style={{
            fontSize: "10px",
            fontWeight: "bold",
            color: "#333",
            marginBottom: "20px",
            display: "block",
          }}
        >
          PERFORMANCE READINESS CREDENTIAL
        </Text>

        <div
          style={{
            borderTop: "1px solid #d9d9d9",
            paddingTop: "15px",
            width: "100%",
          }}
        >
          <Text style={{ fontSize: "10px", color: "#666", display: "block" }}>
            Identification Code:
          </Text>
          <Text style={{ fontSize: "12px", fontWeight: "bold", color: "#333" }}>
            {displayIdCode}
          </Text>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="container mx-auto my-12 px-4 md:px-4 flex flex-col md:flex-row justify-center items-center gap-10">
        {/* Text Area */}
        <div style={{ flex: 1, width: "100%", maxWidth: "650px" }}>
          <p
            style={{
              color: "#2FB236",
              fontSize: "14px",
              textTransform: "uppercase",
            }}
          >
            WATCH OUR VIDEO
          </p>
          <h2
            className="text-3xl md:text-5xl "
            style={{ fontWeight: 500, lineHeight: "1.2" }}
          >
            Get Better Solution For Your Resume!
          </h2>
          <p style={{ color: "#ABABAB", fontSize: "14px", marginTop: "10px" }}>
            Stand out from the herd of job applicants with our
            professionally-designed resume templates. Get noticed, get hired
          </p>
          <Button
            type="primary"
            onClick={showModal}
            style={{
              background: "#124374",
              borderColor: "#124374",
              marginTop: "50px",
              height: 48,
              fontWeight: 600,
            }}
          >
            ORDER BUSINESS CARDS
          </Button>
        </div>
        {/* Video Area */}
        <div style={{ flex: 1 }}>
          <video
            style={{ width: "100%", borderRadius: "8px" }}
            controls
            autoPlay
            muted
          >
            <source src="/video/resumeVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <ResumeModal
        formData={formData}
        handleInputChange={handleInputChange}
        BusinessCardPreview={BusinessCardPreview}
        handleCancel={handleCancel}
        isModalVisible={isModalVisible}
      />
    </>
  );
};

export default ResumeSection;
