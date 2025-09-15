"use client";
import { Form, Input, Row, Col, Typography } from "antd";

const { Title } = Typography;

interface PersonalInformationProps {
  form: any;
}

const PersonalInformation: React.FC<PersonalInformationProps> = ({ form }) => (
  <div className="w-full md:w-[90vw] lg:w-[80vw] xl:w-[70vw] 2xl:w-[60vw] mx-auto">
    <Title level={4} style={{ marginBottom: "30px", color: "#1f2937" }}>
      Personal Information:
    </Title>
    <Form form={form} layout="vertical">
      <Row gutter={[24, 0]}>
        <Col xs={24} md={12}>
          <Form.Item label="Full Name*" name="fullName">
            <Input
              placeholder="Samuel Jacob"
              style={{ backgroundColor: "#E8EFF6", height: "40px" }}
            />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item label="Headline*" name="headline">
            <Input
              placeholder="Enter headline"
              style={{ backgroundColor: "#E8EFF6", height: "40px" }}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[24, 0]}>
        <Col xs={24} md={12}>
          <Form.Item label="Email*" name="email">
            <Input
              placeholder="samuel@gmail.com"
              style={{ backgroundColor: "#E8EFF6", height: "40px" }}
            />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item label="Contact Number*" name="contactNumber">
            <Input
              placeholder="+8 0984752000"
              style={{ backgroundColor: "#E8EFF6", height: "40px" }}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col xs={24}>
          <Form.Item label="Address" name="address">
            <Input
              placeholder="2672 Westheimer Rd. Santa Ana, USA."
              style={{ backgroundColor: "#E8EFF6", height: "40px" }}
            />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  </div>
);

export default PersonalInformation;
