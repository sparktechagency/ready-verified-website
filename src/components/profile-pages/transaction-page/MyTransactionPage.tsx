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
import TransactionModal from "./TransactionModal";

const { Title, Text } = Typography;

export default function MyTransactionPage() {
  const [selectedTransaction, setSelectedTransaction] =
    useState<Transaction | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTransactionClick = (transaction: Transaction) => {
    setSelectedTransaction(transaction);
    setIsModalOpen(true);
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

  return (
    <div>
      <div style={{ marginBottom: "32px" }}>
        <h1 className="m-0 text-[#1A5FA4] font-semibold text-lg md:text-[24px]">
          Transaction History
        </h1>
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
              <div
                style={{
                  textAlign: "center",
                  marginBottom: "16px",
                  backgroundColor: "#F1F4F9",
                  padding: "8px",
                }}
              >
                <div
                  style={{
                    textAlign: "center",
                    // marginBottom: "16px",
                    // backgroundColor: "#F1F4F9",
                  }}
                >
                  <Tag
                    color={getStatusColor(transaction.status)}
                    style={{ marginBottom: "12px" }}
                  >
                    {transaction.status.charAt(0).toUpperCase() +
                      transaction.status.slice(1)}
                  </Tag>
                </div>
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
      {/* modal */}
      <TransactionModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        selectedTransaction={selectedTransaction}
        formatDate={formatDate}
        getStatusColor={getStatusColor}
      />
    </div>
  );
}
