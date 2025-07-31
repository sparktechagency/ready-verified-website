"use client";

import type React from "react";
import { Card, Button } from "antd";
import { ThunderboltFilled } from "@ant-design/icons";

interface SubscriptionCardProps {
  title: string;
  description: string;
  features: string[];
  onChangeClick?: () => void;
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
  title,
  description,
  features,
  onChangeClick,
}) => {
  return (
    <Card
      style={{
        backgroundColor: "#124374",
      }}
      bodyStyle={{ padding: "20px" }}
    >
      <div
        className="flex flex-col md:flex-row items-center justify-between gap-4
      "
      >
        <div className="flex items-start md:items-center gap-4">
          <div className="bg-yellow-400 p-2 rounded">
            <ThunderboltFilled className="text-blue-800 text-lg" />
          </div>
          <div>
            <h4 className="text-[#F1F1F1] font-semibold mb-1">{title}</h4>
            <p className="text-blue-100 text-sm mb-2">{description}</p>
            <ul className="text-blue-100 text-xs space-y-1">
              {features.map((feature, index) => (
                <li key={index}>• {feature}</li>
              ))}
            </ul>
          </div>
        </div>
        {onChangeClick && (
          <Button
            type="link"
            style={{
              backgroundColor: "#0B2845",
              height: 40,
              color: "#F1F1F1",
              fontWeight: 500,
              padding: "12px 28px",
            }}
            className="text-white border-white hover:bg-white hover:text-blue-600 px-4 py-1 rounded"
            onClick={onChangeClick}
          >
            Change
          </Button>
        )}
      </div>
    </Card>
  );
};

export default SubscriptionCard;
