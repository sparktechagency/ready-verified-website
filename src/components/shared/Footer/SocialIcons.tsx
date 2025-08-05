import React from "react";
import { Space } from "antd";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const iconStyle = {
  fontSize: "20px",
  color: "#ffffff",
};

const boxStyle: React.CSSProperties = {
  width: "48px",
  height: "48px",
  backgroundColor: "#1F2937", 
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transition: "all 0.3s ease",
};

const SocialIcons = () => {
  return (
    <Space size="large">
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        style={boxStyle}
      >
        <FaFacebookF style={iconStyle} />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        style={boxStyle}
      >
        <FaLinkedinIn style={iconStyle} />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        style={boxStyle}
      >
        <FaInstagram style={iconStyle} />
      </a>
    </Space>
  );
};

export default SocialIcons;
