"use client";

import { Modal, Form, Input, Select, Button, Upload, Row, Col } from "antd";
import { CloseOutlined, UploadOutlined } from "@ant-design/icons";

const { Option } = Select;

interface ProfessionalDetailsModalProps {
  visible: boolean;
  onClose: () => void;
  initialValues: any;
}

export default function ProfessionalDetailsModal({
  visible,
  onClose,
  initialValues,
}: ProfessionalDetailsModalProps) {
  const [form] = Form.useForm();

  const handleSave = () => {
    form.validateFields().then((values) => {
      // console.log("Professional details:", values);
      onClose();
    });
  };

  return (
    <Modal
      title={
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>Professional Details</span>
          <Button type="text" icon={<CloseOutlined />} onClick={onClose} />
        </div>
      }
      open={visible}
      onCancel={onClose}
      footer={null}
      width={600}
      closable={false}
    >
      <Form form={form} layout="vertical" style={{ marginTop: "24px" }}>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Job Title*" name="jobTitle">
              <Input placeholder="Enter job title" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Industry*" name="industry">
              <Input placeholder="Enter industry" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Experience*" name="experience">
              <Select placeholder="Select experience">
                <Option value="0-1">0-1 years</Option>
                <Option value="1-3">1-3 years</Option>
                <Option value="3-5">3-5 years</Option>
                <Option value="5+">5+ years</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="LinkedIn Profile website" name="linkedinProfile">
              <Input placeholder="Enter URL here" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Skills" name="skills">
              <Input placeholder="Enter skills" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Languages" name="languages">
              <Input placeholder="Enter languages" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item label="Resume*" name="resume">
          <Upload>
            <Button icon={<UploadOutlined />}>Upload Resume</Button>
          </Upload>
        </Form.Item>

        <div style={{ textAlign: "right", marginTop: "24px" }}>
          <Button
            type="primary"
            onClick={handleSave}
            style={{ width: "180px", backgroundColor: "#1A5FA4", height: 40 }}
          >
            Save
          </Button>
        </div>
      </Form>
    </Modal>
  );
}
