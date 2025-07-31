"use client";

import { Layout, Menu, Avatar, Typography, Button } from "antd";
import {
  UserOutlined,
  BellOutlined,
  MailOutlined,
  LogoutOutlined,
  SafetyCertificateOutlined,
  SettingOutlined,
  DollarOutlined,
  CreditCardOutlined,
  ContainerOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import { useRouter, usePathname } from "next/navigation";
import { GemIcon, Settings } from "lucide-react";
import { toast } from "sonner";

const { Sider } = Layout;
const { Text } = Typography;

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    {
      key: "/profile",
      icon: <UserOutlined />,
      label: "Profile Details",
    },
    {
      key: "/profile/settings",
      icon: <SettingOutlined />,
      label: "Settings",
    },
    {
      key: "/profile/my-subscription-plan",
      icon: <DollarOutlined />,
      label: "My Subscription Plan",
    },
    {
      key: "/profile/my-collection",
      icon: <ContainerOutlined />,
      label: "My Collection",
    },
    {
      key: "/profile/my-transactions",
      icon: <CreditCardOutlined />,
      label: "My Transactions",
    },
    {
      key: "/profile/my-certificate",
      icon: <FileTextOutlined />,
      label: "My Certificate",
    },
  ];

  const handleMenuClick = ({ key }: { key: string }) => {
    router.push(key);
  };
  const handleLogOut = () => {
    toast.warning("Are you sure you want to log out?", {
      duration: 5000,
      description: "You will be logged out and redirected to the login page.",
      action: {
        label: "Logout",
        onClick: async () => {
          //   Cookies.remove("accessToken");
          //   Cookies.remove("refreshToken");
          toast.success("Logged out successfully");
          router.push("/auth/login");
        },
      },
    });
  };

  return (
    <Sider
      width={280}
      style={{
        backgroundColor: "#F1F4F9",
        height: "calc(100vh - 192px )",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.12)",
        borderRadius: "8px",
      }}
    >
      <div
        style={{
          padding: "24px",
          textAlign: "center",
          borderBottom: "1px solid #f0f0f0",
        }}
      >
        <Avatar size={80} src="/user/user1.jpg" />
        <div style={{ marginTop: "12px" }}>
          <Text
            strong
            style={{ fontSize: "16px", display: "block", color: "#3D3D3D" }}
          >
            Asadur R. Yead
          </Text>
          <p className="text-[12px] text-[#858585]">yead191@gmail.com</p>
        </div>
      </div>

      <Menu
        mode="inline"
        selectedKeys={[pathname]}
        style={{ border: "none", paddingTop: "16px" }}
        items={menuItems.map((item) => ({
          ...item,
          style: {
            gap: "5px",
            borderRadius: "6px",
            height: "48px",
            lineHeight: "48px",
          },
        }))}
        onClick={handleMenuClick}
      />

      <div
        style={{
          position: "absolute",
          bottom: "24px",
          left: "16px",
          right: "16px",
        }}
      >
        <Button
          type="text"
          icon={<LogoutOutlined />}
          onClick={handleLogOut}
          style={{ width: "100%", textAlign: "left", height: "48px" }}
        >
          Log Out
        </Button>
      </div>
    </Sider>
  );
}
