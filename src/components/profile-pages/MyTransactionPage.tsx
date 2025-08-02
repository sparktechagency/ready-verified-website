"use client";

import { useState } from "react";
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
import { mockTransactions, Transaction } from "@/data/mockTransaction";

const { Title, Text } = Typography;

export default function MyTransactionPage() {
  const [selectedTransaction, setSelectedTransaction] =
    useState<Transaction | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTransactionClick = (transaction: Transaction) => {
    setSelectedTransaction(transaction);
    setIsModalOpen(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "success";
      case "pending":
        return "warning";
      case "failed":
        return "error";
      default:
        return "default";
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const cardStyle = {
    cursor: "pointer",
    transition: "all 0.3s ease",
    height: "100%",
    backgroundColor: "#E8EFF6",
    borderRadius: "12px",
  };

  const cardHoverStyle = {
    transform: "translateY(-2px)",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  };

  return (
    <div>
      <div style={{ marginBottom: "32px" }}>
        <Title level={2} style={{ marginBottom: "8px" }}>
          Transaction History
        </Title>
        <Text type="secondary">
          View and manage your CV creation transactions
        </Text>
      </div>

      <Row gutter={[16, 16]}>
        {mockTransactions?.map((transaction) => (
          <Col xs={24} sm={12} lg={8} key={transaction.id}>
            <Card
              style={cardStyle}
              hoverable
              onClick={() => handleTransactionClick(transaction)}
            >
              <div style={{ textAlign: "center", marginBottom: "16px" }}>
                <Tag
                  color={getStatusColor(transaction.status)}
                  style={{ marginBottom: "12px" }}
                >
                  {transaction.status.charAt(0).toUpperCase() +
                    transaction.status.slice(1)}
                </Tag>
              </div>

              <div style={{ textAlign: "center", marginBottom: "16px" }}>
                <div
                  style={{
                    width: "96px",
                    height: "128px",
                    backgroundColor: "#f5f5f5",
                    borderRadius: "8px",
                    overflow: "hidden",
                    margin: "0 auto",
                    position: "relative",
                  }}
                >
                  <Image
                    src={transaction.cvImage || "/placeholder.svg"}
                    alt={`${transaction.cvFormat} CV Template`}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>

              <Space direction="vertical" style={{ width: "100%" }}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Text strong>Format</Text>
                  <Text type="secondary">{transaction.cvFormat}</Text>
                </div>

                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Text strong>Date</Text>
                  <Text type="secondary">
                    {formatDate(transaction.transactionDate)}
                  </Text>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text strong>Amount</Text>
                  <Text strong style={{ fontSize: "18px", color: "#1890ff" }}>
                    ${transaction.amount}
                  </Text>
                </div>
              </Space>
            </Card>
          </Col>
        ))}
      </Row>

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
                      src={selectedTransaction.cvImage || "/placeholder.svg"}
                      alt={`${selectedTransaction.cvFormat} CV Template`}
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
                      {selectedTransaction.cvTitle}
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
                        <Text>{selectedTransaction.cvFormat}</Text>
                      </div>
                    </Col>
                    <Col span={12}>
                      <Text type="secondary">Amount</Text>
                      <div>
                        <Text
                          strong
                          style={{ fontSize: "18px", color: "#1890ff" }}
                        >
                          ${selectedTransaction.amount}
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
                    <Text code>{selectedTransaction.transactionId}</Text>
                  </Descriptions.Item>
                  <Descriptions.Item label="Payment Method">
                    {selectedTransaction.paymentMethod}
                  </Descriptions.Item>
                  <Descriptions.Item label="Transaction Date">
                    {formatDate(selectedTransaction.transactionDate)}
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
                    {selectedTransaction.customerName}
                  </Descriptions.Item>
                  <Descriptions.Item label="Email">
                    {selectedTransaction.customerEmail}
                  </Descriptions.Item>
                  <Descriptions.Item label="Downloads">
                    {selectedTransaction.downloadCount}
                  </Descriptions.Item>
                </Descriptions>
              </Col>
            </Row>
          </div>
        )}
      </Modal>
    </div>
  );
}
