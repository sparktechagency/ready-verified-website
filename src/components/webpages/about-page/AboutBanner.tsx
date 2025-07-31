import React from "react";
// import { Grid } from "antd";

export default function AboutBanner() {
  // const { lg } = Grid.useBreakpoint();

  return (
    <div
      className="h-[200px] md:h-[380px] "
      style={{
        backgroundImage: `url('/about/banner.jpg')`,
        // height: lg ? 380 : 180,
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <h2 className="text-xl md:text-3xl text-white text-center w-full max-w-[1200px] mx-auto p-4">
        Ready Verified mission is to help companies make better talent decisions
        through a full suite of assessments, interviewing, and talent management
        tools.
      </h2>
    </div>
  );
}
