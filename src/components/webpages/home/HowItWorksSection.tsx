"use client";

import React, { useState } from "react";
import {
  UserOutlined,
  FileTextOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { Briefcase } from "lucide-react";
import {
  employerToJobSeekerSteps,
  jobSeekerToEmployerSteps,
  schoolToEmployer,
  Step,
} from "@/data/StepData";
import { FaUserGraduate } from "react-icons/fa";

const tabs = [
  {
    key: "1",
    label: "Job Seeker to Employer",
    steps: jobSeekerToEmployerSteps,
    icon: <UserOutlined className="text-[18px]" />,
  },
  {
    key: "2",
    label: "Employer to Job Seeker",
    steps: employerToJobSeekerSteps,
    icon: <Briefcase className="text-[12px]" />,
  },
  {
    key: "3",
    label: "School to Employer",
    steps: schoolToEmployer,
    icon: <FaUserGraduate className="text-[18px]" />,
  },
];

const StepCard = ({ step }: { step: Step }) => (
  <div className="bg-[#F1F4F9] rounded-xl border border-[#F1F4F9] p-6 text-center transition-all hover:shadow-md h-[250px] flex flex-col items-center justify-center">
    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-white/70 shadow-lg text-[#1A5FA4] text-2xl font-semibold">
      {step.number}
    </div>
    <div className="text-lg font-semibold text-gray-800">{step.title}</div>
    <div className="text-sm text-gray-500 mt-1">{step.description}</div>
  </div>
);

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState("1");

  const currentSteps = tabs.find((tab) => tab.key === activeTab)?.steps || [];

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-900">
          How It <span className="text-[#2FB236]">Works</span>
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto mt-4">
          Discover how ReadyVerified connects different stakeholders in the
          professional ecosystem.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center flex-wrap gap-3 mb-10 ">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-2 md:px-8 py-2 rounded-lg border transition-all text-sm md:h-[56px] font-medium cursor-pointer inline-flex items-center gap-2  ${
              activeTab === tab.key
                ? "bg-[#1A5FA4] text-white border-[#1A5FA4]"
                : "bg-transparent text-gray-700 border-[#1A5FA4] hover:border-blue-500"
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Step Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
        {currentSteps.map((step, idx) => (
          <StepCard key={idx} step={step} />
        ))}
      </div>
    </div>
  );
}
