"use client";
import BottomNavigation from "@/components/profile-sidebar/BottomNavigation";
import Sidebar from "@/components/profile-sidebar/Sidebar";
import { Grid } from "antd";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  const { lg } = Grid.useBreakpoint();
  return (
    <div className="flex  md:gap-6 my-14 container mx-auto p-4 min-h-screen">
      <div className=" hidden md:block">
        <Sidebar />
      </div>

      <div
        style={{
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.12)",
          borderRadius: "8px",
          height: lg ? "calc(100vh - 192px )" : "",
        }}
        className="overflow-auto flex-1 bg-[#F1F4F9] p-4 lg:p-8 rounded-md w-full "
      >
        {children}
      </div>
      <div className="md:hidden">
        <BottomNavigation />
      </div>
    </div>
  );
}
