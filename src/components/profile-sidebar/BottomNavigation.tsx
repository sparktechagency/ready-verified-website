"use client";

import type React from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  UserOutlined,
  HomeOutlined,
  ShopOutlined,
  MessageOutlined,
  SettingOutlined,
  DollarOutlined,
  ContainerOutlined,
  CreditCardOutlined,
  FileTextOutlined,
} from "@ant-design/icons";

interface NavItem {
  key: string;
  icon: React.ReactNode;
  label: string;
}

export default function BottomNavigation() {
  const router = useRouter();
  const pathname = usePathname();

  // Main navigation items for bottom nav
  const navItems: NavItem[] = [
    {
      key: "/profile",
      icon: <UserOutlined />,
      label: "Profile",
    },
    {
      key: "/profile/settings",
      icon: <SettingOutlined />,
      label: "Settings",
    },
    {
      key: "/profile/my-subscription-plan",
      icon: <DollarOutlined />,
      label: "Subscription",
    },
    {
      key: "/profile/my-collection",
      icon: <ContainerOutlined />,
      label: "Collection",
    },
    {
      key: "/profile/my-transactions",
      icon: <CreditCardOutlined />,
      label: "Transactions",
    },
    {
      key: "/profile/my-certificate",
      icon: <FileTextOutlined />,
      label: "Certificate",
    },
  ];

  const handleNavClick = (key: string) => {
    router.push(key);
  };

  const isActive = (key: string) => {
    // if (key === "/profile") {
    //   return pathname.startsWith("/profile");
    // }
    return pathname === key;
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#F1F4F9",
        borderTop: "1px solid #e8e8e8",
        padding: "8px 0",
        zIndex: 1000,
        boxShadow: "0 -2px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          maxWidth: "500px",
          margin: "0 auto",
          padding: "0 16px",
          gap:2
        }}
      >
        {navItems.map((item) => (
          <div
            key={item.key}
            onClick={() => handleNavClick(item.key)}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "8px 16px",
              borderRadius: "20px",
              backgroundColor: isActive(item.key) ? "#185695" : "transparent",
              color: isActive(item.key) ? "white" : "#666",
              cursor: "pointer",
              transition: "all 0.3s ease",
              minWidth: "60px",
            }}
          >
            <div style={{ fontSize: "20px", marginBottom: "2px" }}>
              {item.icon}
            </div>
            <span
              style={{
                fontSize: "8px",
                fontWeight: isActive(item.key) ? "600" : "400",
              }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
