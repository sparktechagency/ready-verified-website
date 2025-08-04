"use client";

import type React from "react";
import { Modal, Button } from "antd";
import { CheckCircleFilled, ArrowLeftOutlined } from "@ant-design/icons";
import Image from "next/image";

interface SuccessModalProps {
  visible: boolean;
  onClose: () => void;
  title?: string;
  description?: any;
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  visible,
  onClose,
  title = "Payment Successful",
  description = "Your payment has been processed successfully.",
}) => {
  return (
    <Modal
      open={visible}
      onCancel={onClose}
      footer={null}
      width={400}
      closable={false}
      className="success-modal"
      centered
    >
      <div className="text-center pb-8">
        <div className="flex  justify-start mb-4">
          <Button
            type="text"
            icon={<ArrowLeftOutlined />}
            onClick={onClose}
            className="absolute top-4 left-4 text-gray-500"
          />
        </div>

        <div
          style={{
            backgroundImage: `url('/assessment/dot.png'))`,
          }}
          className="my-4 flex justify-center items-center "
        >
          <Image
            src={"/assessment/check.png"}
            alt="success"
            width={105}
            height={105}
          />
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        {description && <p className="text-gray-600 text-sm">{description}</p>}
      </div>
    </Modal>
  );
};

export default SuccessModal;
