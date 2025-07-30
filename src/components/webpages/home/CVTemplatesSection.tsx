"use client";

import { Button, Typography, Row, Col, Card } from "antd";
import Image from "next/image";
import { CVTemplate, popularCVs, successfulCVs } from "@/data/cvData";

const { Title } = Typography;

const CVCard = ({ template }: { template: CVTemplate }) => (
  <div
    style={{
      height: "100%",
      width: "100%",
      position: "relative",
      backgroundColor: "#F1F4F9",
      padding: 20,
    }}
  >
    <div className="transition duration-500 hover:scale-105 cursor-pointer">
      <Image
        src={template.image}
        width={370}
        height={350}
        alt="CV Template Preview"
      />
    </div>
    {/* <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#F1F4F9",

        opacity: 0.5,
      }}
    /> */}
  </div>
);
export default function CVTemplatesSection() {
  const SectionHeader = ({
    title,
    onSeeAll,
  }: {
    title: string;
    onSeeAll: () => void;
  }) => (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "24px",
      }}
    >
      <Title
        level={3}
        style={{
          margin: 0,
          color: "#3D3D3D",
          fontSize: "32px",
          fontWeight: "600",
        }}
      >
        {title}
      </Title>
      <Button
        type="default"
        onClick={onSeeAll}
        style={{
          backgroundColor: "#e8f4fd",
          borderColor: "#e8f4fd",
          color: "#1A5FA4",
          fontWeight: "500",
        }}
      >
        See All
      </Button>
    </div>
  );

  return (
    <div className="container mx-auto px-4 md:px-4 my-12">
      <div>
        {/* Successfully CV Section */}
        <div style={{ marginBottom: "60px" }}>
          <SectionHeader
            title="Successfully CV"
            onSeeAll={() => console.log("See all successful CVs")}
          />
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {successfulCVs.map((template) => (
              <div key={template.id}>
                <CVCard template={template} />
              </div>
            ))}
          </div>
        </div>

        {/* Popular CV Section */}
        <div>
          <SectionHeader
            title="Popular CV"
            onSeeAll={() => console.log("See all popular CVs")}
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {popularCVs.map((template) => (
              <div key={template.id}>
                <CVCard template={template} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .ant-card:hover .cv-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
}
