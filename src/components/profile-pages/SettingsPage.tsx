"use client";
import React from "react";
import { Button, Form, Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { toast } from "sonner";
import { myFetch } from "@/utils/myFetch";
export default function SettingsPage() {
  const [form] = Form.useForm();

  // console.log(agentData);
  const onFinish = (values: any) => {
    const res =myFetch('/auth/change-password', {
      method:"POST",
      body: values,
    })

    toast.promise(res, {
      loading: "Changing password...",
      success: (res) => {
        if (res?.success) {
          form.resetFields();
          return res?.message || "Password changed successfully";
        }
        throw new Error(res?.message || "Failed to change password");
      },
      error: (err) => err.message || "Error changing password",
    });
    
  };

  return (
    <Form
      style={{
        width: "100%",
      }}
      form={form}
      onFinish={onFinish}
      layout="vertical"
    >
      <Form.Item
        label="Current Password"
        name="currentPassword"
        rules={[
          { required: true, message: "Please input your current password!"},{
            min: 8,
            message: "Password must be at least 8 characters long",
          }
        ]}
        
      >
        <Input.Password
          placeholder="Enter current password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
          style={{
            padding: "12px",
            borderRadius: "8px",
            backgroundColor: "#E8EFF6",
          }}
        />
      </Form.Item>

      <Form.Item
        label="New Password"
        name="newPassword"
        rules={[{ required: true, message: "Please input your new password!" },{
          min: 8,
          message: "Password must be at least 8 characters long",
        }]}
      >
        <Input.Password
          placeholder="Enter new password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
          style={{
            padding: "12px",
            borderRadius: "8px",
            backgroundColor: "#E8EFF6",
          }}
        />
      </Form.Item>

      <Form.Item
        label="Confirm new Password"
        name="confirmPassword"
        dependencies={["newPassword"]}
        rules={[
          { required: true, message: "Please confirm your password!" },{min: 8,
          message: "Password must be at least 8 characters long",},
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("newPassword") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The two passwords do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password
          placeholder="Confirm new password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
          style={{
            padding: "12px",
            borderRadius: "8px",
            backgroundColor: "#E8EFF6",
          }}
        />
      </Form.Item>
      <div className="flex justify-end">
        <Button
          type="primary"
          htmlType="submit"
          block
          style={{
            backgroundColor: "#1A5FA4",
            borderColor: "#1A5FA4",
            borderRadius: "8px",
            height: "40px",
            fontSize: "16px",
            width: 350,
          }}
        >
          Save & Change
        </Button>
      </div>
    </Form>
  );
}
