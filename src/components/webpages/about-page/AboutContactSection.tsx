"use client";

import { Card, Grid } from "antd";
import {
  EnvironmentOutlined,
  MailOutlined,
  ShareAltOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

const contactData = [
  {
    icon: (
      <EnvironmentOutlined
        size={24}
        style={{
          backgroundColor: "#1A5FA4",
          color: "#F1F1F1",
          fontSize: "24px",
          borderRadius: "50%",
          border: "8px solid #F8FAFF",
          padding: "8px",
        }}
        className="text-2xl text-white"
      />
    ),
    title: "Location",
    details: "4539 N 22nd Street, STE R,\nPhoenix, AZ 85016",
    bgColor: "bg-[#1A5FA4]",
  },
  {
    icon: (
      <MailOutlined
        size={24}
        style={{
          color: "white",
          fontSize: 24,
          border: "8px solid #F8FAFF",
          padding: "8px",
          borderRadius: "50%",
        }}
      />
    ),
    title: "Email",
    details: "ready.verified.usa@gmail.com",
    bgColor: "bg-[#00809E]",
  },
  {
    icon: (
      <ShareAltOutlined
        style={{
          color: "white",
          fontSize: 24,
          border: "8px solid #F8FAFF",
          padding: "8px",
          borderRadius: "50%",
        }}
      />
    ),
    title: "Social",
    details: "linkedin.com/in/readyverified\nfacebook.com/readyverified",
    bgColor: "bg-[#FF9773]",
  },
  {
    icon: (
      <PhoneOutlined
        style={{
          color: "white",
          fontSize: 24,
          border: "8px solid #F8FAFF",
          padding: "8px",
          borderRadius: "50%",
        }}
      />
    ),
    title: "Get in touch",
    details: "+9 0125478412",
    bgColor: "bg-[#2FB236]",
  },
];

export default function ContactSection() {
  const { lg } = Grid.useBreakpoint();
  return (
    <div className=" mt-12 mb-20  text-center md:p-6 ">
      <h2 className="text-3xl md:text-[40px] font-semibold mb-10">
        We Are Here <span className="text-[#2FB236]">To Help You</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
        {contactData.map((item, index) => (
          <Card
            key={index}
            className="rounded-lg shadow-md "
            bodyStyle={{ padding: "24px", textAlign: "left" }}
            style={{
              height: 200,
              backgroundColor: "#E8EFF6",
              margin: lg ? 0 : "0 28px",
            }}
          >
            <div className="flex items-start gap-4 relative pl-4 pt-12">
              <div
                className={`-left-10 top-2 w-10 h-10 rounded-full flex items-center absolute justify-center ${item.bgColor}`}
              >
                {item.icon}
              </div>
              <div>
                <h4 className="font-medium text-[20px] text-[#858585]">
                  {item.title}
                </h4>
                <p className="text-sm text-[#858585] whitespace-pre-line mt-2 ">
                  {item.details}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
