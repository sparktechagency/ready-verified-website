"use client";

import { Modal, Form, Input, Select, Radio, Button, Row, Col } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const { Option } = Select;

interface EditProfileModalProps {
  visible: boolean;
  onClose: () => void;
  initialValues: any;
}

export default function EditProfileModal({
  visible,
  onClose,
  initialValues,
}: EditProfileModalProps) {
  const [form] = Form.useForm();

  const handleSave = () => {
    form.validateFields().then((values) => {
      console.log("Form values:", values);
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
          <span>Edit Profile</span>
          <Button type="text" icon={<CloseOutlined />} onClick={onClose} />
        </div>
      }
      open={visible}
      onCancel={onClose}
      footer={null}
      width={800}
      closable={false}
      centered
    >
      <Form form={form} layout="vertical" style={{ marginTop: "24px" }}>
        <Row gutter={[16, 16]}>
          <Col  xs={24} sm={12} md={8}>
            <Form.Item label="Full Name*" name="fullName">
              <Input placeholder="Dennis" />
            </Form.Item>
          </Col>
          <Col  xs={24} sm={12} md={8}>
            <Form.Item label="Middle Initial" name="middleInitial">
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Form.Item label="Last Name*" name="lastName">
              <Input placeholder="Willie" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col xs={24} sm={12} md={8}>
            <Form.Item label="Suffix" name="suffix">
              <Input placeholder="Suffix" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Form.Item label="Email*" name="email">
              <Input placeholder="dennis.willie@example.com" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Form.Item label="Cell Number*" name="cellNumber">
              <Input placeholder="+1 (555) 123-4567" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Street Number and Name*" name="streetAddress">
              <Input placeholder="123 Main Street" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Additional Address Info" name="additionalAddress">
              <Input placeholder="Apt, Suite, etc." />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col xs={24} sm={12} md={8}>
            <Form.Item label="City*" name="city">
              <Input placeholder="New York" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Form.Item label="State*" name="state">
              <Input placeholder="NY" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Form.Item label="Zip*" name="zip">
              <Input placeholder="10001" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col xs={24} sm={12} md={8}>
            <Form.Item label="Country*" name="country">
              <Select placeholder="Select Country">
                <Option value="us">United States</Option>
                <Option value="ca">Canada</Option>
                <Option value="uk">United Kingdom</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Form.Item label="Date of Birth*" name="dateOfBirth">
              <Input placeholder="MM/DD/YYYY" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Form.Item label="Gender" name="gender">
              <Radio.Group>
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
                <Radio value="other">Other</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Race or Ethnic Group" name="ethnicity">
              <Input placeholder="Optional/Prefer not to answer" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Education" name="education">
              <Select placeholder="Select Education Level">
                <Option value="high-school">High School</Option>
                <Option value="bachelors">Bachelor's Degree</Option>
                <Option value="masters">Master's Degree</Option>
                <Option value="phd">PhD</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="High School Name" name="highSchoolName">
              <Input placeholder="Central High School" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="High School Graduation Year(YYYY)"
              name="graduationYear"
            >
              <Input placeholder="2008" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item label="Additional Languages" name="additionalLanguages">
          <Input placeholder="Language 1" />
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
