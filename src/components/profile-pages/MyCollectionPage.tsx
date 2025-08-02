import Image from "next/image";
import React from "react";

export default function MyCollectionPage() {
  const cvs = [
    {
      _id: 1,
      cv: "/cv/cv1.png",
    },
    {
      _id: 2,
      cv: "/cv/cv2.png",
    },
  ];

  return (
    <div className="flex items-center gap-4 ">
      {cvs?.map((cv) => (
        <div key={cv._id} className=" w-full">
          <Image
            src={cv.cv}
            alt="cv"
            width={500}
            height={500}
            className="h-full w-full "
          />
        </div>
      ))}
    </div>
  );
}
