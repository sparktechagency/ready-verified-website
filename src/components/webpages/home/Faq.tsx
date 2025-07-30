"use client";

import { Collapse, ConfigProvider, Typography } from "antd";
import type { CollapseProps } from "antd";

const { Title, Paragraph } = Typography;

export default function FAQSection() {
  const faqData: CollapseProps["items"] = [
    {
      key: "1",
      label:
        "Will the Assessments be industry-specific (e.g., programming, marketing) or general?",
      children: (
        <Paragraph style={{ color: "#666", margin: 0, lineHeight: "1.6" }}>
          You can offer industry-specific Assessments or allow a variety of
          fields. Determine whether you're targeting professionals, students, or
          hobbyists, as it affects Assessments content and structure.
        </Paragraph>
      ),
    },
    {
      key: "2",
      label: "Will the Assessments be self-paced or instructor-led?",
      children: (
        <Paragraph style={{ color: "#666", margin: 0, lineHeight: "1.6" }}>
          You can have a mix of both. Self-paced Assessments are convenient for
          users, while instructor-led Assessments might include live sessions,
          providing more interaction.
        </Paragraph>
      ),
    },
    {
      key: "3",
      label: "Will Assessments have a time limit for completion?",
      children: (
        <Paragraph style={{ color: "#666", margin: 0, lineHeight: "1.6" }}>
          ou may provide an option for time-limited Assessments (e.g., 30 days
          to complete) or have no time limits for more flexibility
        </Paragraph>
      ),
    },
    {
      key: "4",
      label:
        "Can students access all materials at once, or is there a drip-feed model?",
      children: (
        <Paragraph style={{ color: "#666", margin: 0, lineHeight: "1.6" }}>
          Drip-feed allows the release of content on a schedule (e.g., weekly
          lessons), while offering all content at once gives students the
          freedom to choose when to complete the Assessments.
        </Paragraph>
      ),
    },
  ];

  return (
    <div className="container mx-auto px-4 md:px-4 my-12">
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <Title
          level={2}
          style={{
            textAlign: "center",
            marginBottom: "48px",
            color: "#333",
            fontSize: "40px",
            fontWeight: "600",
          }}
        >
          Frequently Asked Questions
        </Title>
        <ConfigProvider
          theme={{
            components: {
              Collapse: {
                colorPrimaryBorder: "rgb(232,239,246)",
                contentBg: "rgb(232,239,246)",
                borderlessContentBg: "rgb(232,239,246)",
                headerBg: "rgb(232,239,246)",
                colorBorder: "rgb(232,239,246)",
              },
            },
          }}
        >
          <Collapse
            items={faqData}
            defaultActiveKey={["2"]}
            ghost
            expandIconPosition="end"
            style={{
              backgroundColor: "transparent",
            }}
            size="large"
            className="custom-faq-collapse"
          />
        </ConfigProvider>
      </div>

      <style jsx global>{`
        .custom-faq-collapse .ant-collapse-item {
          margin-bottom: 16px !important;
          background-color: #e8eff6 !important;
          border: none !important;
          border-radius: 8px !important;
        }

        .custom-faq-collapse .ant-collapse-header {
          padding: 20px 24px !important;
          background-color: #e8eff6 !important;
          border-radius: 8px !important;
          font-weight: 500 !important;
          color: #333 !important;
          font-size: 16px !important;
        }

        .custom-faq-collapse .ant-collapse-content {
          background-color: #e8eff6 !important;
          border-top: none !important;
        }

        .custom-faq-collapse .ant-collapse-content-box {
          padding: 0 24px 20px 24px !important;
        }

        .custom-faq-collapse .ant-collapse-expand-icon {
          color: #666 !important;
          font-size: 14px !important;
        }

        .custom-faq-collapse .ant-collapse-item:hover {
          background-color: #d6ebfa !important;
        }

        .custom-faq-collapse .ant-collapse-item-active {
          background-color: #e8f4fd !important;
        }
        .ant-collapse-content-box {
          background-color: #e8eff6 !important;
        }
      `}</style>
    </div>
  );
}
