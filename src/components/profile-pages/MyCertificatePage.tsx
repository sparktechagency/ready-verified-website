import Image from "next/image";
import React from "react";

export default function MyCertificatePage() {
  const certificates = [
    {
      _id: 1,
      name: "Certificate Name",
      date: "2022-01-01",
      issuer: "Issuer Name",
      image: "/images/certificate.png",
    },
    {
      _id: 2,
      name: "Certificate Name",
      date: "2022-01-01",
      issuer: "Issuer Name",
      image: "/images/certificate.png",
    },
  ];
  return (
    <div>
      <h1 className="text-xl font-semibold text-[#1A5FA4]">My Certificate</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {certificates?.map((certificate) => (
          <div key={certificate._id} className="flex flex-col items-center">
            <Image
              src={certificate.image}
              alt="certificate"
              width={300}
              height={200}
              className="object-cover rounded-lg"
              layout="responsive"
              objectFit="cover"
              objectPosition="center"
              // quality={100}
              // priority
              // placeholder="blur"
              // blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
            />
          </div>
        ))}
      </div>
    </div>
  );
}
