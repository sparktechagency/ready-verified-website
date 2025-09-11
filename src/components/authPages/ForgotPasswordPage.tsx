"use client";
import React from "react";
import { Button, Form, Input } from "antd";
import Image from "next/image";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { myFetch } from "@/utils/myFetch";

export default function ForgotPasswordPage() {
  const [form] = Form.useForm();
  const router = useRouter();
  const onFinish = (values: any) => {
    // console.log("Login values:", values);
    toast.promise(
      myFetch("/auth/forget-password", {
        method: "POST",
        body: { email: values.email },
      }),
      {
        loading: "Sending OTP...",
        success: (res) => {
          if (res?.success) {
            Cookies.set("resetEmail", values.email || "", {
              expires: 1,
              path: "/",
            });
            router.push("/auth/verify-otp");
            return res?.message || "OTP sent successfully";
          }
          throw new Error(res?.message || "Failed to send OTP");
        },
        error: (err) => err.message || "Error sending OTP",
      }
    );
  };
  return (
    <div className="flex min-h-screen justify-center items-center ">
      <div className="grid grid-cols-1 md:grid-cols-12 justify-center items-center  gap-4 md:gap-10 lg:gap-16">
        <div className="md:col-span-6 py-8">
          {/* Login Form */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Forget Password
            </h1>
            <p className="text-[#ABABAB] text-sm w-full max-w-[580px]">
              Enter your email address to ger a verification code for resetting
              your password.
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
              label={<span className="text-gray-700 font-medium">Email</span>}
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input
                style={{
                  backgroundColor: "#F1F4F9",
                  borderColor: "#F1F4F9",
                }}
                placeholder="Enter Your Email"
                className="h-12 rounded-lg "
              />
            </Form.Item>
            <Form.Item
              style={{
                marginTop: "40px",
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
                Send a code
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="md:col-span-6 bg-[#E8EFF6] h-full rounded-xl hidden md:block">
          <div className="relative w-full max-w-lg p-4">
            <Image
              src="/images/forgotImg.png"
              alt="Login illustration"
              width={546}
              height={546}
              className="w-full h-[546px] object-contain "
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
