import { Col, Row, Space, Tag, Typography } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import React from "react";

export default function Banner() {
  const categoryTags = [
    "International",
    "Creative",
    "Academic",
    "Minimalist",
    "Europass",
    "Technical",
    "Medical",
  ];

  const secondRowTags = [
    "Targeted",
    "Combination",
    "Education CV",
    "Freelancer",
    "Marketing",
    "Journalism",
  ];
  return (
    <div className="bg-[#F2F6FF] text-center min-h-[calc(100vh-88px)] flex flex-col justify-center items-center py-12 lg:py-0 md:mb-12">
      <Row style={{ padding: 8 }} justify="center">
        <Col>
          <h1
            className=" text-[44px] md:text-5xl lg:text-[64px]"
            style={{
              fontWeight: "bold",
              color: "#333",
              marginBottom: "16px",
              lineHeight: "1.2",
              width: "100%",
              maxWidth: "900px",
            }}
          >
           Empower Your Career with{" "}
            <span style={{ color: "#52c41a" }}>26,000+</span> Template
          </h1>

          <Paragraph
            style={{
              fontSize: "16px",
              color: "#666",
              marginBottom: "48px",
              lineHeight: "1.6",
              width: "100%",
              maxWidth: "900px",
            }}
          >
            Get inspired and discover something new today. Grow your skill with
            the most reliable online courses and certifications in marketing,
            information technology, programming, and data science.
          </Paragraph>
          <Space
            wrap
            size={[12, 12]}
            style={{ marginBottom: "20px", justifyContent: "center" }}
          >
            {categoryTags.map((tag) => (
              <Tag
                key={tag}
                style={{
                  padding: "8px 16px",
                  fontSize: "14px",
                  borderRadius: "8px",
                  border: "1px solid #E5EDFF",
                  backgroundColor: "#E5EDFF",
                  color: "#1A5FA4",
                  cursor: "pointer",
                  transition: "all 0.3s",
                  fontWeight: 400,
                }}
                className="category-tag"
              >
                {tag}
              </Tag>
            ))}
          </Space>
          <br />
          <Space wrap size={[12, 12]} style={{ justifyContent: "center" }}>
            {secondRowTags.map((tag) => (
              <Tag
                key={tag}
                style={{
                  padding: "8px 16px",
                  fontSize: "14px",
                  borderRadius: "8px",
                  border: "1px solid #E5EDFF",
                  backgroundColor: "#E5EDFF",
                  color: "#1A5FA4",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
                className="category-tag"
              >
                {tag}
              </Tag>
            ))}
          </Space>
        </Col>
      </Row>
    </div>
  );
}
