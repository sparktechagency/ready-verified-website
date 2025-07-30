"use client";
import { Card, Row, Col, Typography, Checkbox } from "antd";
import Image from "next/image";

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
}) => (
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
      {assessmentOptions.map((option) => (
        <Col xs={24} sm={12} md={8} key={option.id}>
          <Card
            hoverable
            onClick={() => handleAssessmentSelect(option.id)}
            style={{
              textAlign: "center",
              cursor: "pointer",
              border:
                selectedAssessment === option.id
                  ? "2px solid #96B5D5"
                  : "1px solid #96B5D5",
              backgroundColor:
                selectedAssessment === option.id ? "#1A5FA4" : "#E8EFF6",
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
                src={option.icon || "/placeholder.svg"}
                alt={option.subtitle}
                width={60}
                height={60}
                style={{ borderRadius: "50%" }}
              />
            </div>
            <Text
              strong
              style={{
                fontSize: "16px",
                color: selectedAssessment === option.id ? "#FFFFFF" : "#1f2937",
                fontWeight: 500,
              }}
            >
              {option.title}
            </Text>
            <br />
            <Text
              strong
              style={{
                fontSize: "16px",
                color: selectedAssessment === option.id ? "#FFFFFF" : "#1f2937",
              }}
            >
              {option.subtitle}
            </Text>
          </Card>
        </Col>
      ))}
    </Row>
  </div>
);

export default AssessmentSelection;
