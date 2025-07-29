import React from "react";

export default function AboutBanner() {
  return (
    <div
      style={{
        backgroundImage: `url('/about/banner.jpg')`,
        height: 380,
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <h2 className="text-3xl text-white text-center w-full max-w-[1200px] mx-auto">
        Ready Verified mission is to help companies make better talent decisions
        through a full suite of assessments, interviewing, and talent management
        tools.
      </h2>
    </div>
  );
}
