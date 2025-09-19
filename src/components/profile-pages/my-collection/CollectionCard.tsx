"use client";
import { imgUrl } from "@/app/(website)/layout";
import Image from "next/image";
import React from "react";

export default function CollectionCard({ cv }: any) {
  return (
    <div
      className="w-full"
      style={{ cursor: "pointer" }}
      onClick={() => {
        // Create a temporary link element
        const link = document.createElement("a");
        link.href = cv?.file ? imgUrl + cv?.file : "#";
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.download = cv?.file?.split("/").pop() || "file";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }}
    >
      <Image
        src={cv?.thumbnail ? imgUrl + cv?.thumbnail : "/cv/cv1.png"}
        alt="cv"
        width={500}
        height={500}
        className="h-full w-full"
      />
    </div>
  );
}
