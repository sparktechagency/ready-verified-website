import { Button } from "antd";
import React from "react";

export default function JourneySection() {
  return (
    <div className="bg-[#E8EFF6] py-12 mb-12">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-[40px] font-semibold text-[#3D3D3D] leading-[100%]">
          Ready to start your journey?
        </h1>
        <p className="text-[#757575] text-sm mt-3">
          Join thousands of successful graduates and transform your career
          today.
        </p>
      </div>

      <div className="mt-16 flex justify-center items-center gap-6">
        <Button
          style={{
            backgroundColor: "#1A5FA4",
            color: "white",
            height: 42,
          }}
        >
          Browse Assessments
        </Button>
        <Button
          variant="outlined"
          style={{
            backgroundColor: "transparent",
            height: 42,
            border: "1px solid #1A5FA4",
          }}
        >
          Learn More
        </Button>
      </div>
    </div>
  );
}
