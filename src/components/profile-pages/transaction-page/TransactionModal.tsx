"use client";
import React from "react";

import Image from "next/image";
import {
  Card,
  Modal,
  Tag,
  Button,
  Divider,
  Row,
  Col,
  Typography,
  Space,
  Descriptions,
} from "antd";
import {
  CreditCardOutlined,
  FileTextOutlined,
  MoreOutlined,
  DownloadOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { IOrder } from "@/types/types";
const { Title, Text } = Typography;

interface transactionModalProps {
  isModalOpen: boolean;
  setIsModalOpen: any;
  selectedTransaction: IOrder | null;
  formatDate: any;
  getStatusColor: any;
}

export default function TransactionModal({
  isModalOpen,
  setIsModalOpen,
  selectedTransaction,
  formatDate,
  getStatusColor,
}: transactionModalProps) {
  return (
    <Modal
      title={<Title level={3}>Transaction Details</Title>}
      open={isModalOpen}
      onCancel={() => setIsModalOpen(false)}
      width={800}
      footer={[
        <Button key="close" onClick={() => setIsModalOpen(false)}>
          Close
        </Button>,
        selectedTransaction?.status === "completed" && (
          <Button key="download" type="primary" icon={<DownloadOutlined />}>
            Download Receipt
          </Button>
        ),
        selectedTransaction?.status === "failed" && (
          <Button key="retry" type="primary" icon={<ReloadOutlined />}>
            Retry Payment
          </Button>
        ),
      ].filter(Boolean)}
    >
      {selectedTransaction && (
        <div>
          <Row gutter={24} style={{ marginBottom: "24px" }}>
            <Col xs={24} md={8}>
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: "128px",
                    height: "160px",
                    backgroundColor: "#f5f5f5",
                    borderRadius: "8px",
                    overflow: "hidden",
                    margin: "0 auto",
                    position: "relative",
                  }}
                >
                  <Image
                    src={selectedTransaction?.template?.thumbnail || "/placeholder.svg"}
                    alt={`CV Template`}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </Col>

            <Col xs={24} md={16}>
              <Space direction="vertical" style={{ width: "100%" }}>
                <div>
                  <Title level={4} style={{ marginBottom: "8px" }}>
                    {selectedTransaction.template?.title}
                  </Title>
                  <Tag color={getStatusColor(selectedTransaction.status)}>
                    {selectedTransaction.status.charAt(0).toUpperCase() +
                      selectedTransaction.status.slice(1)}
                  </Tag>
                </div>

                <Row gutter={16}>
                  <Col span={12}>
                    <Text type="secondary">CV Format</Text>
                    <div>
                      {/* <Text>{selectedTransaction.cvFormat}</Text> */}
                    </div>
                  </Col>
                  <Col span={12}>
                    <Text type="secondary">Amount</Text>
                    <div>
                      <Text
                        strong
                        style={{ fontSize: "18px", color: "#1890ff" }}
                      >
                        ${selectedTransaction.price}
                      </Text>
                    </div>
                  </Col>
                </Row>
              </Space>
            </Col>
          </Row>

          <Divider />

          <Row gutter={24}>
            <Col xs={24} md={12}>
              <Title
                level={5}
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <CreditCardOutlined />
                Payment Information
              </Title>
              <Descriptions column={1} size="small">
                <Descriptions.Item label="Transaction ID">
                  <Text code>{selectedTransaction.trxId}</Text>
                </Descriptions.Item>
                <Descriptions.Item label="Payment Method">
                  {"Card"}
                </Descriptions.Item>
                <Descriptions.Item label="Transaction Date">
                  {formatDate(selectedTransaction.createdAt)}
                </Descriptions.Item>
              </Descriptions>
            </Col>

            <Col xs={24} md={12}>
              <Title
                level={5}
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <FileTextOutlined />
                Customer Information
              </Title>
              <Descriptions column={1} size="small">
                <Descriptions.Item label="Name">
                  {selectedTransaction?.user?.name}
                </Descriptions.Item>
                <Descriptions.Item label="Email">
                  {selectedTransaction?.user?.email}
                </Descriptions.Item>
                <Descriptions.Item label="Downloads">
                  {selectedTransaction?.user?.tier_resume_taken || 0}
                </Descriptions.Item>
              </Descriptions>
            </Col>
          </Row>
        </div>
      )}
    </Modal>
  );
}
