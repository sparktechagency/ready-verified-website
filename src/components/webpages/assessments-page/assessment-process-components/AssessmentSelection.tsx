"use client";
import { imgUrl } from "@/app/(website)/layout";
import { ICategory } from "@/types/types";
import { myFetch } from "@/utils/myFetch";
import { Card, Row, Col, Typography, Checkbox } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";

const { Title, Text } = Typography;

interface AssessmentOption {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
}

interface AssessmentSelectionProps {
  selectedAssessment: string;
  handleAssessmentSelect: (assessmentId: string) => void;
}

const assessmentOptions: AssessmentOption[] = [
  {
    id: "coachability",
    title: "Certificate of Credibility:",
    subtitle: "Coachability",
    icon: "/assessment/icon5.png",
  },
  {
    id: "reliability",
    title: "Certificate of Credibility:",
    subtitle: "Reliability",
    icon: "/assessment/icon5.png",
  },
  {
    id: "growth-mindset",
    title: "Certificate of Credibility:",
    subtitle: "Growth Mindset",
    icon: "/assessment/icon5.png",
  },
  {
    id: "safety-conscious",
    title: "Certificate of Credibility:",
    subtitle: "Safety-Conscious",
    icon: "/assessment/icon5.png",
  },
  {
    id: "communication",
    title: "Certificate of Credibility:",
    subtitle: "Communication",
    icon: "/assessment/icon5.png",
  },
];

const AssessmentSelection: React.FC<AssessmentSelectionProps> = ({
  selectedAssessment,
  handleAssessmentSelect,
}) => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  const fetchCategories = async () => {
    try {
      const response = await myFetch("/category");
      const data = response
      setCategories(data.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  },[])
  return (
  <div>
    <div
      className={`${selectedAssessment ? "block" : "hidden"}`}
      style={{ marginBottom: "20px" }}
    >
      <Checkbox style={{ color: "#ff4d4f", fontSize: "14px" }}>
        Five tests: $40 each. One 30-min credibility assessment: $250.
        Non-refundable. Payment upfront.
      </Checkbox>
    </div>
    <Title level={4} style={{ marginBottom: "30px", color: "#1f2937" }}>
      Which of these best describes your Assessment?
    </Title>
    <Row gutter={[16, 16]}>
      {categories.map((option) => (
        <Col xs={24} sm={12} md={12} lg={8} key={option._id}>
          <Card
            hoverable
            onClick={() => handleAssessmentSelect(option._id)}
            style={{
              textAlign: "center",
              cursor: "pointer",
              border:
                selectedAssessment === option._id
                  ? "2px solid #1A5FA4"
                  : "1px solid #96B5D5",
              backgroundColor:
                selectedAssessment === option._id ? "#1A5FA4" : "#E8EFF6",
              borderRadius: "12px",
              minHeight: "180px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
            bodyStyle={{ padding: "20px" }}
          >
            <div
              style={{
                marginBottom: "16px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src={imgUrl+option.icon || "/placeholder.svg"}
                alt={option.title}
                width={60}
                height={60}
                style={{ borderRadius: "50%" }}
              />
            </div>
            <Text
              strong
              style={{
                fontSize: "16px",
                color: selectedAssessment === option._id ? "#FFFFFF" : "#1f2937",
                fontWeight: 500,
              }}
            >
              {"Certificate of Credibility:"}
            </Text>
            <br />
            <Text
              strong
              style={{
                fontSize: "16px",
                color: selectedAssessment === option._id ? "#FFFFFF" : "#1f2937",
              }}
            >
              {option.title}
            </Text>
          </Card>
        </Col>
      ))}
    </Row>
  </div>
);
}

export default AssessmentSelection;
