"use client";

import { useState } from "react";
import { Card, Button, Typography, Row, Col } from "antd";
import { UserOutlined, BankOutlined } from "@ant-design/icons";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
const { Title } = Typography;

export default function RoleSelectionPage() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const router = useRouter();
  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
  };

  const handleContinue = () => {
    if (!selectedRole) {
      return toast.error("Please select a role");
    }
    if (selectedRole) {
      console.log("Selected role:", selectedRole);
      Cookies.set("role", selectedRole, { path: "/" });
      // Handle continue logic here
      router.push("/auth/register");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F8FAFF",
        padding: "20px",
      }}
    >
      <div style={{ textAlign: "center", width: "100%", maxWidth: 575 }}>
        <Title level={2} style={{ marginBottom: "40px", color: "#333" }}>
          Please Select Your Role
        </Title>

        <Row
          gutter={[24, 24]}
          justify="center"
          style={{ marginBottom: "40px" }}
        >
          <Col xs={24} sm={12} md={10}>
            <Card
              hoverable
              onClick={() => handleRoleSelect("jobseeker")}
              style={{
                height: "160px",
                cursor: "pointer",
                backgroundColor:
                  selectedRole === "jobseeker" ? "#1A5FA4" : "transparent",
                color: selectedRole === "jobseeker" ? "#fff" : "#333",
                border:
                  selectedRole === "jobseeker"
                    ? "2px solid #1A5FA4"
                    : "1px solid #1A5FA4",
                borderRadius: "8px",
              }}
              bodyStyle={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "24px",
              }}
            >
              <UserOutlined
                style={{
                  fontSize: "32px",
                  marginBottom: "12px",
                  color: selectedRole === "jobseeker" ? "#fff" : "#1A5FA4",
                }}
              />
              <Title
                level={4}
                style={{
                  margin: 0,
                  color: selectedRole === "jobseeker" ? "#fff" : "#333",
                }}
              >
                Job seeker
              </Title>
            </Card>
          </Col>

          <Col xs={24} sm={12} md={10}>
            <Card
              hoverable
              onClick={() => handleRoleSelect("employer")}
              style={{
                height: "160px",
                cursor: "pointer",
                backgroundColor:
                  selectedRole === "employer" ? "#1A5FA4" : "transparent",
                color: selectedRole === "employer" ? "#fff" : "#333",
                border:
                  selectedRole === "employer"
                    ? "2px solid #1A5FA4"
                    : "1px solid #1A5FA4",
                borderRadius: "8px",
              }}
              bodyStyle={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "24px",
              }}
            >
              <BankOutlined
                style={{
                  fontSize: "32px",
                  marginBottom: "12px",
                  color: selectedRole === "employer" ? "#fff" : "#1A5FA4",
                }}
              />
              <Title
                level={4}
                style={{
                  margin: 0,
                  color: selectedRole === "employer" ? "#fff" : "#333",
                }}
              >
                Employer/
                <br />
                School
              </Title>
            </Card>
          </Col>
        </Row>

        {selectedRole && (
          <Button
            type="primary"
            size="large"
            onClick={handleContinue}
            style={{
              backgroundColor: "#2FB236",
              borderColor: "#2FB236",
              height: "48px",
              paddingLeft: "32px",
              paddingRight: "32px",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            Continue
          </Button>
        )}
      </div>
    </div>
  );
}
