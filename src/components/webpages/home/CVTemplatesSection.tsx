"use client";

import { useState } from "react";
import { Button } from "antd";
import Image from "next/image";
import { imgUrl } from "@/app/(website)/layout";

const SectionHeader = ({
  title,
  onSeeAll,
  isExpanded,
}: {
  title: string;
  onSeeAll: () => void;
  isExpanded: boolean;
}) => (
  <div className="flex justify-between items-center mb-6">
    <h1 className="text-xl md:text-3xl font-semibold text-[#3D3D3D]">
      {title}
    </h1>
    <Button
      type="default"
      onClick={onSeeAll}
      style={{
        backgroundColor: "#e8f4fd",
        borderColor: "#e8f4fd",
        color: "#1A5FA4",
        fontWeight: 500,
      }}
    >
      {isExpanded ? "Show Less" : "See All"}
    </Button>
  </div>
);

const CVCard = ({ template }: { template: any }) => (
  <div className="relative w-full h-full bg-[#F1F4F9] p-5">
    <div className="transition duration-500 hover:scale-105 cursor-pointer">
      <Image
        src={imgUrl + template?.thumbnail}
        width={370}
        height={350}
        alt="CV Template Preview"
      />
    </div>
  </div>
);

export default function CVTemplatesSection({
  resumes,
  coverLetters,
}: {
  resumes: any[];
  coverLetters: any[];
}) {
  const [showAllResumes, setShowAllResumes] = useState(false);
  const [showAllLetters, setShowAllLetters] = useState(false);

  const displayedResumes = showAllResumes ? resumes : resumes?.slice(0, 4);
  const displayedLetters = showAllLetters
    ? coverLetters
    : coverLetters?.slice(0, 4);

  return (
    <div className="container mx-auto px-4 my-12">
      {/* Resume Section */}
      <div className="mb-16">
        <SectionHeader
          title="Branded Resume Templates"
          onSeeAll={() => setShowAllResumes(!showAllResumes)}
          isExpanded={showAllResumes}
        />
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {displayedResumes?.map((template) => (
            <CVCard key={template._id} template={template} />
          ))}
        </div>
      </div>

      {/* Cover Letter Section */}
      <div>
        <SectionHeader
          title="Branded Cover Letter Templates"
          onSeeAll={() => setShowAllLetters(!showAllLetters)}
          isExpanded={showAllLetters}
        />
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {displayedLetters?.map((template) => (
            <CVCard key={template._id} template={template} />
          ))}
        </div>
      </div>
    </div>
  );
}
