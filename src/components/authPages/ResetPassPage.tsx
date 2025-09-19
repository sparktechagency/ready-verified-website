"use client";
import React from "react";
import { Button, ConfigProvider, Form, Input, Modal, Space } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { myFetch } from "@/utils/myFetch";
import Cookies from "js-cookie";

export default function ResetPassPage() {
  const [form] = Form.useForm();
  const router = useRouter();
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const onFinish = (values: any) => {
    console.log(values);
   
    toast.promise(
      myFetch("/auth/reset-password", {
        method: "POST",
        body: values,
        headers: {
          Authorization: `${Cookies.get("resetToken")}`,
        },
      }),
      {
        loading: "Resetting password...",
        success: (res) => {
          if (res?.success) {
            setIsModalVisible(true);
            Cookies.remove("resetEmail");
            Cookies.remove("resetToken");
            return <b>{res.message}</b>;
          }
          throw new Error(res?.message || "Something went wrong");
        },
        error: (res) => `Error: ${res.data?.message || "Something went wrong"}`,
      }
    );
  };

  const handleModalOk = () => {
    setIsModalVisible(false);
    router.push("/auth/login");
  };

  return (
    <div className="flex min-h-screen justify-center items-center ">
      <div className="grid grid-cols-1 md:grid-cols-12  gap-4 md:gap-10 lg:gap-16">
        {/* left column */}
        <div className="md:col-span-6 py-8">
          {/* Login Form */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Set a New Password
            </h1>
            <p className="text-[#ABABAB] text-sm w-full max-w-[350px] mx-auto">
              Create a new password. Ensure it differs from previous ones for
              security
            </p>
          </div>

          <Form
            style={{ width: "100%" }}
            form={form}
            name="login"
            onFinish={onFinish}
            layout="vertical"
            size="large"
          >
            <Form.Item
              label={
                <span className="text-gray-700 font-medium">New Password</span>
              }
              name="newPassword"
              rules={[
                {
                  required: true,
                  message: "Please input your new Password!",
                },
              ]}
              style={{
                width: "100%",
                margin: "auto",
                marginTop: 24,
                marginBottom: 0,
              }}
            >
              <Input.Password
                type="password"
                placeholder="Enter New password"
                style={{
                  border: "1px solid #E0E4EC",
                  height: "52px",
                  background: "#F1F4F9",
                  borderRadius: "8px",
                  outline: "none",
                }}
                className="mb-6"
              />
            </Form.Item>

            <Form.Item
              label={
                <span className="text-gray-700 font-medium">
                  Confirm Password
                </span>
              }
              style={{ marginBottom: 0 }}
              name="confirmPassword"
              dependencies={["newPassword"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("newPassword") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The new password that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                type="password"
                placeholder="Enter Confirm password"
                style={{
                  border: "1px solid #E0E4EC",
                  height: "52px",
                  background: "#F1F4F9",
                  borderRadius: "8px",
                  outline: "none",
                }}
                className="mb-6"
              />
            </Form.Item>

            <Form.Item
              style={{
                marginTop: "",
              }}
            >
              <Button
                style={{
                  borderColor: "#1A5FA4",
                  backgroundColor: "#1A5FA4",
                  height: 56,
                }}
                type="primary"
                htmlType="submit"
                className="w-full h-12 rounded-lg text-base font-medium "
              >
                Update Password
              </Button>
            </Form.Item>
          </Form>
        </div>
        {/* right column */}
        <div className="md:col-span-6 bg-[#E8EFF6] h-full rounded-xl hidden md:block">
          <div className="relative w-full max-w-lg  p-4">
            <Image
              src={"/images/resetImg.png"}
              alt="Login illustration"
              width={600}
              height={400}
              className="w-full h-auto object-contain rounded-none"
              priority
            />
          </div>
        </div>
      </div>
      <ConfigProvider
        theme={{
          components: {
            Modal: {
              contentBg: "rgb(248, 250, 255)",
              headerBg: "rgb(248, 250, 255)",
            },
          },
        }}
      >
        <Modal
          title={null}
          visible={isModalVisible}
          onOk={handleModalOk}
          onCancel={handleModalOk}
          footer={null}
          centered
        >
          <h1 className="text-3xl font-semibold text-center mb-4">
            Successfully
          </h1>
          <p className="w-full max-w-[580px] text-center mx-auto mb-8 text-[#ABABAB]">
            Your password has been updated, please change your password
            regularly to avoid this happening
          </p>
          <div className="flex justify-center my-4">
            <Button
              style={{
                width: "100%",
                height: "48px",
                backgroundColor: "#1A5FA4",
              }}
              key="continue"
              type="primary"
              onClick={handleModalOk}
            >
              Continue
            </Button>
          </div>
        </Modal>
      </ConfigProvider>
    </div>
  );
}
