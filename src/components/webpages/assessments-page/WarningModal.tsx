"use client";
import { Button, Modal } from "antd";
import React from "react";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import { usePathname, useRouter } from "next/navigation";

interface WarningModalProps {
  isModalVisible: boolean;
  setIsModalVisible: (visible: boolean) => void;
}
export default function WarningModal({
  isModalVisible,
  setIsModalVisible,
}: WarningModalProps) {
  const router = useRouter();
  const pathname = usePathname();
  const handleOk = () => {
    router.replace(`/auth/login?redirect=${pathname}`);
    setIsModalVisible(false);
  };
  return (
    <Modal
      centered
      title="Please Log In"
      open={isModalVisible}
      onOk={handleOk}
      onCancel={() => setIsModalVisible(false)}
      footer={null}
      style={{
        borderRadius: "12px",
        padding: "20px",
      }}
      width={600}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <ExclamationCircleOutlined
          style={{
            fontSize: "48px",
            color: "#ff4d4f",
          }}
        />
        <div>
          <Title level={4} style={{ color: "#3D3D3D" }}>
            You must be logged in to continue.
          </Title>
          <Paragraph style={{ color: "#ABABAB" }}>
            Please log in to proceed with the process. If you don't have an
            account, please sign up.
          </Paragraph>
        </div>
      </div>
      <div className="flex justify-end mt-6 gap-4">
        {/* Cancel Button */}
        <Button
          key="cancel"
          onClick={() => setIsModalVisible(false)}
          style={{
            backgroundColor: "#f0f0f0",
            borderColor: "#dcdcdc",
            fontWeight: 600,
            height: "40px",
          }}
        >
          Cancel
        </Button>
        {/* Login Button */}
        <Button
          key="ok"
          type="primary"
          onClick={handleOk}
          style={{
            backgroundColor: "#1A5FA4",
            borderColor: "#1A5FA4",
            fontWeight: 600,
            width: "200px",

            height: "40px",
          }}
        >
          Login
        </Button>
      </div>
    </Modal>
  );
}
