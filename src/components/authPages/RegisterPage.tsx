"use client";
import React from "react";
import { Button, Form, Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";

import { toast } from "sonner";
import { useRouter } from "next/navigation";
import SocialLogin from "./SocialLogin";
import Cookies from "js-cookie";
import { myFetch } from "@/utils/myFetch";
export default function RegisterPage() {
  const [form] = Form.useForm();
  const router = useRouter();
  const onFinish = async (values: any) => {
    const newUser = {
      name: values.name,
      email: values.email,
      contact: values.contact,
      password: values.password,
      role: Cookies.get("role"),
    };
    // console.log("signup values:", newUser);
    try {
      toast.promise(myFetch("/user", { method: "POST", body: newUser }), {
        loading: "Signing Up...",
        success: (res) => {
          if (res?.success) {
            Cookies.set("resetEmail", values.email || "", {
              expires: 1,
              path: "/",
            });
            router.push(`/auth/verify-otp?register=true`);
            return res?.message || "Sign Up Successful!";
          }
          throw new Error(res?.message || "Sign Up Failed");
        },
        error: (err) => err.message || "Error Signing Up",
      });
    } catch (error: unknown) {
      toast.error(
        error instanceof Error ? error.message : "Error fetching data"
      );
    }

    // toast.success("Sign Up Successful");
    // router.push("/auth/login");
  };
  return (
    <div className="flex min-h-screen justify-center items-center  ">
      <div className="grid grid-cols-1 md:grid-cols-12  gap-4 md:gap-10 lg:gap-16">
        {/* left column */}
        <div className="md:col-span-6 py-8">
          {/* Social Login Buttons */}
          <SocialLogin />

          {/* Login Form */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Register a New Account
            </h1>
            <p className="text-[#ABABAB] text-sm">
              Please enter your information to create account
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
            {/* user name */}
            <Form.Item
              label={
                <span className="text-gray-700 font-medium">User Name</span>
              }
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input
                style={{
                  backgroundColor: "#F1F4F9",
                  borderColor: "#F1F4F9",
                }}
                placeholder="Enter Your Full Name"
                className="h-12 rounded-lg "
              />
            </Form.Item>
            {/* email */}
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

            {/* Contact Number */}
            <Form.Item
              label={
                <span className="text-gray-700 font-medium">
                  Contact Number
                </span>
              }
              name="contact"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input
                inputMode="numeric"
                type="tel"
                style={{
                  backgroundColor: "#F1F4F9",
                  borderColor: "#F1F4F9",
                }}
                placeholder="Enter Your Full Name"
                className="h-12 rounded-lg "
              />
            </Form.Item>
            <Form.Item
              label={
                <span className="text-gray-700 font-medium">Password</span>
              }
              name="password"
              rules={[
                { required: true, message: "Please enter your password" },
                {
                  validator: (_, value) =>
                    !value || value.length >= 8
                      ? Promise.resolve()
                      : Promise.reject(
                          new Error(
                            "Password must be at least 8 characters long"
                          )
                        ),
                },
              ]}
            >
              <Input.Password
                style={{
                  backgroundColor: "#F1F4F9",
                  borderColor: "#F1F4F9",
                }}
                placeholder="••••••••"
                className="h-12 rounded-lg "
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>

            <Form.Item
              style={{
                marginTop: "-12px",
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
                Sign Up
              </Button>
            </Form.Item>
          </Form>

          <div className="text-center text-sm text-gray-600">
            {"Already have an account? "}
            <Link
              href="/auth/login"
              className="text-[#2FB236] underline hover:text-green-600 font-medium"
            >
              Login
            </Link>
          </div>
        </div>
        {/* right column */}
        <div className="md:col-span-6 bg-[#E8EFF6] h-full rounded-none hidden md:block">
          <div className="relative w-full max-w-lg  rounded-none">
            <Image
              src={"/images/login.jpg"}
              alt="Login illustration"
              width={600}
              height={400}
              className="w-full h-auto object-contain rounded-none"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
