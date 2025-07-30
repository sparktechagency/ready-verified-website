"use client";
import { Form, Input, Row, Col, Upload, Button, Typography } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Title } = Typography;

interface ProfessionalDetailsProps {
  form: any;
}

const ProfessionalDetails: React.FC<ProfessionalDetailsProps> = ({ form }) => (
  <div className="w-full md:w-[90vw] lg:w-[80vw] xl:w-[70vw] 2xl:w-[60vw] mx-auto">
    <Title level={4} style={{ marginBottom: "30px", color: "#1f2937" }}>
      Professional Details:
    </Title>
    <Form form={form} layout="vertical">
      <Row gutter={[24, 0]}>
        <Col xs={24} md={12}>
          <Form.Item label="Job Title*" name="jobTitle">
            <Input
              placeholder="Enter Designation"
              style={{ backgroundColor: "#E8EFF6", height: "40px" }}
            />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item label="Industry*" name="industry">
            <Input
              placeholder="Enter Your Sector"
              style={{ backgroundColor: "#E8EFF6", height: "40px" }}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[24, 0]}>
        <Col xs={24} md={12}>
          <Form.Item label="Experience*" name="experience">
            <Input
              placeholder="Years of Experience"
              style={{ backgroundColor: "#E8EFF6", height: "40px" }}
            />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item label="LinkedIn Profile website" name="linkedinProfile">
            <Input
              placeholder="Enter URL Link"
              style={{ backgroundColor: "#E8EFF6", height: "40px" }}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[24, 0]}>
        <Col xs={24} md={12}>
          <Form.Item label="Skills*" name="skills">
            <Input
              placeholder="Enter skills"
              style={{ backgroundColor: "#E8EFF6", height: "40px" }}
            />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item label="Previous work experience" name="previousExperience">
            <Input
              placeholder="Enter experience"
              style={{ backgroundColor: "#E8EFF6", height: "40px" }}
            />
          </Form.Item>
        </Col>
      </Row>
      <div>
        <div className="w-full ">
          <Form.Item style={{ width: "100%" }} label="Resume*" name="resume">
            <Upload
              style={{
                width: "100%",
              }}
            >
              <Button
                icon={
                  <UploadOutlined
                    style={{
                      fontSize: 24,
                      color: "#ABABAB",
                    }}
                  />
                }
                style={{
                  backgroundColor: "#E8EFF6",
                  height: "120px",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  color: "#ABABAB",
                }}
              >
                Upload Resume
              </Button>
            </Upload>
          </Form.Item>
        </div>
      </div>
    </Form>
  </div>
);

export default ProfessionalDetails;
