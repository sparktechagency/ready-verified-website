import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#F8FAFF]">
      <div className="w-11/12 lg:w-10/12  mx-auto ">{children}</div>
    </div>
  );
}
