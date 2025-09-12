"use client";

import { Collapse, ConfigProvider } from "antd";

export default function FAQSection({ faq }: { faq?: any }) {
  const items = faq?.map((item: any) => ({
    key: item._id,
    label: item.question,
    children: item.answer,
  }));

  return (
    <div className="container mx-auto px-4 md:px-4 my-12">
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h1 className="text-2xl md:text-[40px] font-[600] text-center mb-12 text-[#333]">
          Frequently Asked <span className="text-[#2FB236]">Questions</span>
        </h1>
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
            items={items}
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
          padding: 16px 24px !important;
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
