import React from "react";
import { Card, Button, Row, Col, Space, Tag } from "antd";
import { CheckOutlined, UserOutlined, StarOutlined } from "@ant-design/icons";
import { MdWork } from "react-icons/md";

const surveyOptions = [
  {
    id: 1,
    icon: <StarOutlined style={{ fontSize: "24px" }} />,
    tagIcon: <CheckOutlined />,
    tagColor: "#1890ff",
    tagText: "Under Development",
    title: "Quick Feedback for a Better Experience",
    description:
      "Help us improve our platform by sharing your experience. Your feedback is invaluable in making ReadyVerified better for everyone.",
    points: [
      "5-minute quick survey",
      "User experience feedback",
      "Platform improvement suggestions",
    ],
    buttonText: "Coming Soon",
    buttonColor: "#3b82f6",
    background: "#f0f6ff",
  },
  {
    id: 2,
    icon: <MdWork className="text-[24px]" />,
    tagIcon: <CheckOutlined />,
    tagColor: "#10b981",
    tagText: "Under Development",
    title: "Revolutionize Hiring With Us",
    description:
      "Share your hiring challenges and discover how ReadyVerified can transform your recruitment process with verified talent.",
    points: [
      "Hiring needs assessment",
      "Custom solution recommendations",
      "Partnership opportunities",
    ],
    buttonText: "Coming Soon",
    buttonColor: "#10b981",
    background: "#e8fdf4",
  },
];

const SurveyOptionsSection = () => {
  return (
    <div className="container mx-auto p-4 mb-12">
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1f2937]">
          Survey <span style={{ color: "#2FB236" }}>Options</span>
        </h2>
        <p style={{ color: "#ABABAB", fontSize: "16px" }}>
          Help us improve and explore partnership opportunities
        </p>
      </div>

      {/* Cards */}
      <Row gutter={[32, 32]} justify="center">
        {surveyOptions.map((option) => (
          <Col key={option.id} xs={24} lg={11}>
            <Card
              style={{
                background: option.background,
                borderRadius: "16px",
                border: "none",
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
                position: "relative",
                overflow: "hidden",
                height: "100%",
                padding: 4,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div className="flex justify-between items-center">
                <Tag
                  icon={option.icon}
                  color={option.tagColor}
                  style={{
                    borderRadius: "6px",
                    fontWeight: "500",
                    fontSize: "11px",
                    padding: "6px 8px",
                  }}
                />
                <Tag
                  icon={option.tagIcon}
                  color={option.tagColor}
                  style={{
                    borderRadius: "6px",
                    fontWeight: "500",
                    fontSize: "11px",
                    backgroundColor:"#FEF9C3",
                    color:"black"
                  }}
                >
                  {option.tagText}
                </Tag>
              </div>

              <div style={{ marginTop: "24px" }}>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    marginBottom: "12px",
                    color: "#1f2937",
                  }}
                >
                  {option.title}
                </h3>
                <p
                  style={{
                    color: "#6b7280",
                    fontSize: "14px",
                    lineHeight: "1.6",
                    marginBottom: "24px",
                  }}
                >
                  {option.description}
                </p>

                <Space
                  direction="vertical"
                  size="small"
                  style={{ width: "100%", flexGrow: 1 }}
                >
                  {option.points.map((point, idx) => (
                    <div
                      key={idx}
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <CheckOutlined
                        style={{
                          color: "#10b981",
                          marginRight: "8px",
                          fontSize: "12px",
                        }}
                      />
                      <span style={{ fontSize: "13px", color: "#4b5563" }}>
                        {point}
                      </span>
                    </div>
                  ))}
                </Space>

                <Button
                  type="primary"
                  size="large"
                  block
                  style={{
                    marginTop: "32px",
                    height: "48px",
                    borderRadius: "8px",
                    fontSize: "15px",
                    fontWeight: "500",
                    backgroundColor: option.buttonColor,
                    borderColor: option.buttonColor,
                  }}
                >
                  {option.buttonText}
                </Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SurveyOptionsSection;
