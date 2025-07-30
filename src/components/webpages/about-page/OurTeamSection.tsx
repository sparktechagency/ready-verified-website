import Image from "next/image";
import React from "react";

export default function OurTeamSection() {
  const teamMembers = [
    {
      name: "Jane Cooper",
      position: "Senior Executive",
      image: "/about/team/person1.jpg",
      _id: 1,
    },
    {
      name: "Robert Fox",
      position: "Executive",
      image: "/about/team/person2.jpg",
      _id: 2,
    },
    {
      name: "Brooklyn Simmons",
      position: "Jr. Executive",
      image: "/about/team/person3.jpg",
      _id: 3,
    },
    {
      name: "Cameron Williamson",
      position: "Executive",
      image: "/about/team/person4.jpg",
      _id: 4,
    },
  ];
  return (
    <div className="container px-4 md:px-4 my-12 mx-auto">
      <h1 className="text-[40px] font-semibold text-center ">
        Our <span className="text-[#2FB236]">Team</span>
      </h1>
      {/* team members */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
        {teamMembers?.map((member) => (
          <div key={member?._id}>
            <div className=" p-4 lg:pb-1 lg:pt-5 border-2 border-[#1A5FA4] rounded-full lg:rounded-[400px] lg:h-[520px]">
              <Image
                src={member?.image}
                alt={member.name}
                className="w-full lg:h-[488px] object-cover  rounded-[400px]"
                height={488}
                width={360}
              />
            </div>
            <h1 className="text-xl md:text-2xl lg:text-3xl text-[#3D3D3D] font-semibold text-center mt-4">
              {member.name}
            </h1>
            <p className="text-[#ABABAB] text-[14px] md:text-[16px] text-center">
              {member?.position}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
