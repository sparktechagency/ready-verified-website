"use client";
import { Form, Input, Row, Col, Typography } from "antd";

const { Title } = Typography;
const { TextArea } = Input;

interface OthersInformationProps {
  form: any;
}

const OthersInformation: React.FC<OthersInformationProps> = ({ form }) => (
  <div className="w-full md:w-[90vw] lg:w-[80vw] xl:w-[70vw] 2xl:w-[60vw] mx-auto">
    <Title level={4} style={{ marginBottom: "30px", color: "#1f2937" }}>
      Others Information:
    </Title>
    <Form form={form} layout="vertical">
      <Row gutter={[24, 0]}>
        <Col xs={24} md={12}>
          <Form.Item label="Educational Background*" name="education">
            <Input
              placeholder="Enter Designation"
              style={{ backgroundColor: "#E8EFF6", height: "40px" }}
            />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item label="Language" name="language">
            <Input
              placeholder="Enter language"
              style={{ backgroundColor: "#E8EFF6", height: "40px" }}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[24, 0]}>
        <Col xs={24} md={12}>
          <Form.Item label="Volunteer Experience" name="volunteerExperience">
            <Input
              placeholder="Enter volunteer experience"
              style={{ backgroundColor: "#E8EFF6", height: "40px" }}
            />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item label="Publications (if any)" name="publications">
            <Input
              placeholder="Enter publication"
              style={{ backgroundColor: "#E8EFF6", height: "40px" }}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col xs={24}>
          <Form.Item label="References" name="references">
            <TextArea
              placeholder="Enter references"
              rows={4}
              style={{ backgroundColor: "#E8EFF6", height: "40px" }}
            />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  </div>
);

export default OthersInformation;
