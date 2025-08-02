import Image from "next/image";
import React from "react";

export default function OurStorySection() {
  const stats = [
    {
      id: 1,
      title: " Assessments",
      value: "24000+",
      image: "/about/stats/stats1.png",
    },
    {
      id: 2,
      title: "Active Candidates",
      value: "4000+",
      image: "/about/stats/stats2.png",
    },
    {
      id: 3,
      title: "Countries Served",
      value: "60+",
      image: "/about/stats/stats3.png",
    },
  ];
  return (
    <div
      style={{
        backgroundImage: `url('/about/storyBg.png')`,
        backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
      className="mt-12 "
    >
      {/* story part */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 container mx-auto px-4 md:px-4 justify-center items-center ">
        {/* left side story */}
        <div>
          <h1 className="text-[40px] font-semibold">
            Our <span className="text-[#2FB236] mb-5">Story</span>
          </h1>
          <p className="text-[#858585] text-[18px]">
            Based in Dennis W., Ready Verified was founded in 2008 as one of the
            first SaaS solutions to provide assessments to the market. We were
            founded with the mission to take powerfully predictive science and
            make it accessible to companies of all kinds, enabling them to make
            better talent decisions that drive results.
            <br />
            <br />
            Since those early days, Ready Verified has grown rapidly. We have
            been featured on the Inc. 6000 eight years in a row, we scaled our
            team from just a few people to over 250, and we have received
            recognition as a Best Place to Work by Inc. and Built In LA. We’ve
            also expanded internationally, having acquired Revelian, an UK-based
            leader in resume-based assessments, in 2010 and Alcami, one of the
            world’s leading video interviewing providers, in 2025.
            <br />
            <br />
            While a lot of growth means change, some things remain the same: our
            customer-centric approach that informs everything we do, and our
            employee-centric approach towards creating a positive environment
            that enables our team to be the best we can be.
          </p>
        </div>
        {/* right side img */}
        <div className="flex justify-end  w-full">
          <Image
            src={"/about/banner_about.png"}
            alt="Our Story"
            width={700}
            height={640}
            style={{
              height: "auto",
              width: "auto",
              objectPosition: "center",
            }}
          />
        </div>
      </div>
      {/* stats part */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 max-w-[1000px] mx-auto mt-12 pb-30">
        {stats?.map((stat) => (
          <div key={stat.id} className="h-[72px]">
            <div className="flex flex-col justify-center items-center h-[72px]">
              <Image
                src={stat.image}
                alt={stat.title}
                width={100}
                height={72}
                className="h-full object-cover"
              />
              <h1 className="text-5xl font-bold">{stat.value}</h1>
              <p className="text-[#ABABAB]  ">{stat.title} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
