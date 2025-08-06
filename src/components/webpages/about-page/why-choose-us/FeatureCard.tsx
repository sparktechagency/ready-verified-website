"use client";

import type React from "react";
import { Grid } from "antd";
import { Typography, Card } from "antd";

const { Title, Paragraph } = Typography;

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  background: "blue" | "white";
  _id: number;
}

const FeatureCard = ({ feature }: { feature: FeatureCardProps }) => {
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

export default FeatureCard;
