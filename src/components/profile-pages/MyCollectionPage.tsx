import { imgUrl } from "@/app/(website)/layout";
import { IOrder, ITemplate } from "@/types/types";
import { myFetch } from "@/utils/myFetch";
import { Pagination } from "antd";
import Image from "next/image";
import React from "react";

export default async function MyCollectionPage() {
  const res = await myFetch("/template");
  const data:IOrder[] = res.data
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
    <div>
          <div className="flex gap-4 min-h-[70vh] items-start">
      {data?.map((cv) => (
        <div key={cv._id} className=" w-full">
          <Image
            src={cv?.template?.thumbnail?imgUrl+cv?.template?.thumbnail:"/cv/cv1.png"}
            alt="cv"
            width={500}
            height={500}
            className="h-full w-full "
          />
        </div>
      ))}
    </div>
    <Pagination defaultCurrent={1} total={50} />
    </div>
  );
}
