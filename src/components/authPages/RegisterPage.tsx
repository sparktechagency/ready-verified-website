"use client";
import React from "react";
import { Button, Form, Input, Checkbox, Divider, Space } from "antd";
import {
  GoogleOutlined,
  FacebookOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import LoginImg from "/images/login.png";
import SocialLogin from "./SocialLogin";
import Cookies from "js-cookie";
export default function RegisterPage() {
  const [form] = Form.useForm();
  const router = useRouter();
  const onFinish = (values: any) => {
    const newUser = {
      name: values.name,
      email: values.email,
      password: values.password,
      contact: values.contact,
      role: Cookies.get("role"),
    };
    // console.log("signup values:", newUser);

    toast.success("Sign Up Successful");
    router.push("/auth/login");
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
                { required: true, message: "Please input your password!" },
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
