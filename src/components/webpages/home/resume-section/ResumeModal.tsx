"use client";

import { useState } from "react";
import {
  Button,
  Modal,
  Input,
  Row,
  Col,
  Card,
  Typography,
  Space,
  DatePicker,
  Grid,
} from "antd";
import {
  UserOutlined,
  CheckCircleFilled,
  SaveOutlined,
  ExportOutlined,
  PrinterOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import dayjs from "dayjs";

const { Title, Text } = Typography;
interface ResumeModalProps {
  formData: any;
  handleInputChange: any;
  BusinessCardPreview: any;
  handleCancel: any;
  isModalVisible: boolean;
}

export default function ResumeModal({
  formData,
  handleInputChange,
  BusinessCardPreview,
  handleCancel,
  isModalVisible,
}: ResumeModalProps) {
  const { lg } = Grid.useBreakpoint();
  return (
    <Modal
      title={
        <div style={{ display: "flex", alignItems: "start", gap: "8px" }}>
          <div
            style={{
              width: "32px",
              height: "32px",
              background: "#1890ff",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CheckCircleFilled style={{ color: "#fff", fontSize: "16px" }} />
          </div>
          <div>
            <Title level={4} style={{ margin: 0 }}>
              Ready <span style={{ color: "#52c41a" }}>Verified</span> Card
              Customizer
            </Title>
            <Text type="secondary" style={{ fontSize: "12px" }}>
              Create and customize your professional readiness credential
            </Text>
          </div>
        </div>
      }
      open={isModalVisible}
      onCancel={handleCancel}
      width={900}
      footer={null}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-0 ">
        {/* Live Preview - Left Side */}
        <div>
          <Card
            title="Live Preview"
            style={{ height: "100%" }}
            bodyStyle={{ padding: "16px" }}
          >
            <BusinessCardPreview />
          </Card>
        </div>

        {/* Form - Right Side */}
        <div>
          <Card
            title="Personal Information"
            style={{ height: "100%" }}
            bodyStyle={{ padding: "16px" }}
          >
            <Space direction="vertical" size="middle" style={{ width: "100%" }}>
              <Row gutter={16}>
                <Col span={12}>
                  <Text strong>First Name</Text>
                  <Input
                    placeholder="Enter First Name"
                    value={formData.firstName}
                    onChange={(e) =>
                      handleInputChange("firstName", e.target.value)
                    }
                    style={{ marginTop: "4px" }}
                  />
                </Col>
                <Col span={12}>
                  <Text strong>Last Name</Text>
                  <Input
                    placeholder="Enter Last Name"
                    value={formData.lastName}
                    onChange={(e) =>
                      handleInputChange("lastName", e.target.value)
                    }
                    style={{ marginTop: "4px" }}
                  />
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={12}>
                  <Text strong>Issue Date</Text>
                  <DatePicker
                    placeholder="Select Issue Date"
                    value={
                      formData.issueDate ? dayjs(formData.issueDate) : null
                    }
                    onChange={(date, dateString) =>
                      handleInputChange("issueDate", dateString)
                    }
                    style={{ marginTop: "4px", width: "100%" }}
                    format="MM/DD/YYYY"
                  />
                </Col>
                <Col span={12}>
                  <Text strong>ID Code</Text>
                  <Input
                    placeholder="HT4AOTSR111-D"
                    value={formData.idCode}
                    onChange={(e) =>
                      handleInputChange("idCode", e.target.value)
                    }
                    style={{ marginTop: "4px" }}
                  />
                </Col>
              </Row>

              <Button
                type="primary"
                size="large"
                style={{
                  width: "100%",
                  marginTop: "20px",
                  background: "#124374",
                  borderColor: "#124374",
                  height: "48px",
                  fontWeight: 600,
                }}
              >
                Generate
              </Button>
            </Space>
          </Card>
        </div>
      </div>

      {/* Actions Section */}
      <Card
        title="Actions"
        style={{ marginTop: "16px" }}
        bodyStyle={{ padding: "16px" }}
      >
        <Space size="middle">
          <Button
            size={lg ? "large" : "small"}
            type="primary"
            icon={<SaveOutlined />}
            style={{ background: "#2563EB", borderColor: "#2563EB" }}
          >
            Save Card
          </Button>
          <Button
            size={lg ? "large" : "small"}
            type="primary"
            icon={<ExportOutlined />}
            style={{ background: "#16A34A", borderColor: "#16A34A" }}
          >
            Export
          </Button>
          <Button
            size={lg ? "large" : "small"}
            type="primary"
            icon={<PrinterOutlined />}
            style={{ background: "#9333EA", borderColor: "#9333EA" }}
          >
            Print
          </Button>
        </Space>
      </Card>
    </Modal>
  );
}
