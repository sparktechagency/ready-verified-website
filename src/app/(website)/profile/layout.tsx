import Sidebar from "@/components/profile-sidebar/Sidebar";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex  gap-6 my-14 container mx-auto p-4 min-h-screen">
      <div className=" hidden md:block">
        <Sidebar />
      </div>
      <div
        style={{
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.12)",
          borderRadius: "8px",
          height: "calc(100vh - 192px )",
        }}
        className="overflow-auto flex-1 bg-[#F1F4F9] p-4 lg:p-8 rounded-md"
      >
        {children}
      </div>
    </div>
  );
}
