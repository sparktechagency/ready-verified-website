"use client";

import { useState } from "react";
import { Input, Button, Tag, Row, Col, Typography, Space, Grid } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import Image from "next/image";

const { Title, Text } = Typography;

export default function EmployerHome() {
  const { lg } = Grid.useBreakpoint();
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const tags = [
    "Talent Marketplace",
    "Skills Hub",
    "Employee Network",
    "Job",
    "Job Seeker",
    "Assessment",
    "Candidate Platform",
  ];

  const handleAdvanceSearch = () => {
    router.push(`/advance-search?search=${searchValue}`);
  };

  return (
    <div className="bg-transparent min-h-[calc(100vh-180px)] grid grid-cols-1 md:grid-cols-2 items-center justify-center container mx-auto p-4 my-12">
      <div className="max-w-[660px]">
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <div>
            <h1 className="text-3xl md:text-[48px] font-bold">
              To Refine Your Business{" "}
              <span className="text-[#1A5FA4]">For Growth</span>{" "}
            </h1>
            <Text
              style={{
                fontSize: lg ? "20px" : "16px",
                color: "#ABABAB",
                marginTop: "16px",
                display: "block",
              }}
            >
              Be the change that you wish to see in the world
            </Text>
          </div>

          <Input
            allowClear
            size="large"
            placeholder="Search here..."
            prefix={<SearchOutlined />}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            style={{
              borderRadius: "72px",
              padding: "12px 16px",
              fontSize: "16px",
              backgroundColor: "rgba(184, 205, 227, 0.2)",
              borderColor: "#B8CDE333 ",
            }}
          />

          <div className="flex gap-2 w-full">
            <p
              style={{
                display: "block",
                marginBottom: "12px",
                color: "#333",
                fontWeight: 500,
              }}
            >
              Discover:
            </p>
            <Space wrap>
              {tags.map((tag, index) => (
                <Tag
                  onClick={() => setSearchValue(tag)}
                  className="custom-hover-tag"
                  key={index}
                  style={{
                    padding: "4px 12px",
                    borderRadius: "8px",
                    border:
                      tag === searchValue
                        ? "1px solid #1A5FA4"
                        : "1px solid #B8CDE3",
                    backgroundColor: "#fff",
                    color: tag === searchValue ? "#1A5FA4" : "#ABABAB",
                    cursor: "pointer",
                    fontWeight: 500,
                  }}
                >
                  {tag}
                </Tag>
              ))}
            </Space>
          </div>

          <Button
            type="primary"
            size="large"
            onClick={handleAdvanceSearch}
            style={{
              backgroundColor: "#2FB236",
              borderColor: "#2FB236",
              borderRadius: "6px",
              padding: "8px 24px",
              height: "auto",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            Advance Search
          </Button>
        </Space>
      </div>

      <div>
        <div style={{ textAlign: "center" }}>
          <Image
            src="/images/employer-home.png"
            alt="Business Growth Illustration"
            width={500}
            height={400}
            style={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: "12px",
              width: "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
}
