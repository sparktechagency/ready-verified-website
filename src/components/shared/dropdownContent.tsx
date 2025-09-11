import { imgUrl } from "@/app/(website)/layout";
import { Avatar, Button, Divider, Typography } from "antd";
import { LogOut, User } from "lucide-react";
import React from "react";

interface Props {
  user: any;
  handleMenuClick: any;
}

export default function DropdownContent({ user, handleMenuClick }: Props) {
  const { Text } = Typography;
  return (
    <div className="w-72 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      {/* User Info Section */}
      <div className="px-6 py-5 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-100">
        <div className="flex items-center gap-4">
          <Avatar
            size={48}
            src={imgUrl + user?.image}
            className="bg-blue-600 text-white font-semibold"
          >
            {user.name.charAt(0).toUpperCase()}
          </Avatar>
          <div className="flex-1 min-w-0">
            <Text className="text-gray-900 font-semibold text-base block truncate">
              {user?.name}
            </Text>
            <Text className="text-gray-600 text-sm block truncate">
              {user?.email}
            </Text>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="py-2">
        {/* Profile Section */}
        <div>
          <Button
            type="text"
            size="middle"
            icon={<User size={14} />}
            onClick={() => handleMenuClick({ key: "profile" })}
            style={{
              width: "100%",
              justifyContent: "flex-start",
              height: "32px",
              color: "#4B5563",
              backgroundColor: "transparent",
              borderRadius: "6px",
              marginBottom: "4px",
              fontWeight: 500,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#F9FAFB";
              e.currentTarget.style.color = "#2563EB";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#4B5563";
            }}
          >
            <span style={{ marginLeft: "12px", fontWeight: "500" }}>
              View Profile
            </span>
          </Button>

          {/* Logout Section */}
          <div>
            <Button
              type="text"
              size="middle"
              icon={<LogOut size={14} />}
              onClick={() => handleMenuClick({ key: "logout" })}
              style={{
                width: "100%",
                justifyContent: "flex-start",
                height: "32px",
                color: "#DC2626",
                backgroundColor: "transparent",
                borderRadius: "6px",
                fontWeight: "500",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#FEF2F2"; // hover:bg-red-50
                e.currentTarget.style.color = "#B91C1C"; // hover:text-red-700
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#DC2626";
              }}
            >
              <span style={{ marginLeft: "12px" }}>Sign Out</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
