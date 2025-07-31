"use client";

import { Layout, Menu, Avatar, Typography, Button } from "antd";
import {
  UserOutlined,
  BellOutlined,
  MailOutlined,
  LogoutOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";
import { useRouter, usePathname } from "next/navigation";

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
      key: "/dashboard/my-profile",
      icon: <UserOutlined />,
      label: "My Profile",
    },
    {
      key: "/dashboard/my-notification",
      icon: <BellOutlined />,
      label: "My Notification",
    },
    {
      key: "/dashboard/my-invitations",
      icon: <MailOutlined />,
      label: "My Invitations",
    },
    {
      key: "/dashboard/my-certificate",
      icon: <SafetyCertificateOutlined />,
      label: "My Certificate",
    },
  ];

  const handleMenuClick = ({ key }: { key: string }) => {
    router.push(key);
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
          <Text strong style={{ fontSize: "16px", display: "block", color:"#3D3D3D" }}>
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
          style={{ width: "100%", textAlign: "left", height: "48px" }}
        >
          Log Out
        </Button>
      </div>
    </Sider>
  );
}
