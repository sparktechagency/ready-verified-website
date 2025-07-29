"use client";
import React, { useState } from "react";
import { Button, ConfigProvider, Form, Input, Typography } from "antd";
import Image from "next/image";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
const { Text } = Typography;

export default function VerifyOtpPage() {
  const [email, setEmail] = useState(Cookies.get("resetEmail") || "");
  console.log(email);
  const [form] = Form.useForm();
  const router = useRouter();
  const onFinish = (values: any) => {
    console.log("verify otp values:", parseInt(values.otp));
    toast.success("OTP verified successfully");
    router.push("/auth/reset-password");
  };

  // resend otp
  const handleResendOtp = () => {
    // toast.promise(
    //   forgotPassword({ email: Cookies.get("resetEmail") || "" }).unwrap(),
    //   {
    //     loading: "Resending OTP...",
    //     success: (res) => {
    //       return <b>{res.message}</b>;
    //     },
    //     error: (res) => `Error: ${res.data?.message || "Something went wrong"}`,
    //   }
    // );
  };
  return (
    <div className="flex min-h-screen justify-center items-center ">
      <div className="grid grid-cols-1 md:grid-cols-12 justify-center items-center  gap-4 md:gap-10 lg:gap-16">
        <div className="md:col-span-6 py-8">
          {/* Login Form */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Check Your Email
            </h1>
            <p className="text-[#ABABAB] text-sm w-full max-w-[580px]">
              We sent a reset link to{" "}
              <span className="text-[#1A5FA4] font-bold">{email}</span> <br />{" "}
              enter 4 digit code that mentioned in the email
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
            <ConfigProvider
              theme={{
                components: {
                  Input: {
                    // lineHeight: 3,
                    controlHeight: 65,
                    hoverBorderColor: "#286a25",
                    activeBorderColor: "#286a25",
                    borderRadius: 10,
                  },
                },
                token: {
                  colorPrimary: "#286a25",
                  colorBorder: "#286a25",
                },
              }}
            >
              <Form.Item
                className="flex items-center justify-center mx-auto w-full gap-7"
                name="otp"
                rules={[
                  {
                    required: true,
                    message: "Please input otp code here!",
                  },
                ]}
              >
                <Input.OTP
                  inputMode="numeric"
                  type="tel"
                  style={{
                    width: "100%",
                    height: 55,
                  }}
                  className=""
                  variant="filled"
                  length={4}
                />
              </Form.Item>
            </ConfigProvider>
            <Form.Item
              style={{
                marginTop: "40px",
                height: "56px",
              }}
            >
              <Button
                style={{
                  borderColor: "#1A5FA4",
                  backgroundColor: "#1A5FA4",
                  height: "56px",
                }}
                type="primary"
                htmlType="submit"
                className="w-full rounded-lg text-base font-medium "
              >
                Verify Code
              </Button>
            </Form.Item>
          </Form>
          <div className="flex items-center justify-center gap-3 mb-6 ">
            <Text>You have not received the email?</Text>

            <p
              onClick={handleResendOtp}
              className="login-form-forgot underline font-medium"
              style={{ color: "#2FB236", cursor: "pointer" }}
            >
              Resend
            </p>
          </div>
        </div>
        <div className="md:col-span-6 bg-[#E8EFF6] h-full rounded-xl hidden md:block">
          <div className="relative w-full max-w-lg p-4">
            <Image
              src="/images/otpImg.png"
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
