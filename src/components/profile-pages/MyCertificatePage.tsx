"use client";
import { imgUrl } from "@/app/(website)/layout";
import { myFetch } from "@/utils/myFetch";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default async function MyCertificatePage() {
  // const res = await fetch("https://your-backend.com/html-content");
  // const htmlContent = await res.text();

  const [cirtificates, setCirtificates] = useState([]);

  useEffect(() => {
    myFetch("/user/certificate").then((res) => setCirtificates(res.data));
  }, []);
  console.log(cirtificates);

  return (
    <div>
      <h1 className="text-lg md:text-2xl font-semibold text-[#1A5FA4]">
        My Certificate
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {cirtificates?.map((certificate) => (
          <div key={certificate} className="flex flex-col items-center">
            <iframe
              src={imgUrl + certificate}
              width={300}
              height={200}
              className="rounded-lg scrollbar-hide overflow-hidden"

              // quality={100}
              // priority
              // placeholder="blur"
              // blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
            />
          </div>
        ))}
      </div>
      {/* render html */}
      {/* <div dangerouslySetInnerHTML={{ __html: htmlContent }} /> */}
    </div>
  );
}
