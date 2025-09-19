import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Button, Form, Input, Checkbox, Divider, Space } from "antd";
import { imgUrl } from "@/app/(website)/layout";

export default function SocialLogin() {
  return (
    <div>
      {/* Social Login Buttons */}
      <div className="w-full flex flex-col md:flex-row gap-4 mb-6 ">
        <Button
          onClick={() =>
            globalThis.open(`${imgUrl}/api/v1/auth/google`, "_self")
          }
          size="large"
          style={{
            backgroundColor: "#E8EFF6",
            color: "#3D3D3D",
            fontWeight: 500,
            width: "100%",
            borderColor: "#E8EFF6",
          }}
          icon={
            <FcGoogle
              className="text-2xl inline-flex mt-1"
              style={{ color: "#4285f4" }}
            />
          }
        >
          Log in with Google
        </Button>
        {/* <Button
          style={{
            backgroundColor: "#E8EFF6",
            color: "#3D3D3D",
            fontWeight: 500,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderColor: "#E8EFF6",
          }}
          size="large"
          icon={
            <FaFacebook
              className="text-2xl inline-flex mt-1"
              style={{ color: "#1877f2" }}
            />
          }
        >
          Log in with Facebook
        </Button> */}
      </div>

      {/* Divider */}
      <Divider className="my-8">
        <span className="text-gray-400 text-sm">OR</span>
      </Divider>
    </div>
  );
}
