
import { imgUrl } from "@/app/(website)/layout";
import { myFetch } from "@/utils/myFetch";
import Image from "next/image";
import React from "react";
import CollectionCard from "./CollectionCard";

export default async function MyCollectionPage() {
  const res = await myFetch("/template");
  const data = res.data;
  console.log(data);
  return (
    <div>
      <div className="flex gap-4 min-h-[70vh] items-start">
        {data?.map((cv: any) => (
          <CollectionCard key={cv._id} cv={cv} />
        ))}
      </div>
      {/* <Pagination defaultCurrent={1} total={50} /> */}
    </div>
  );
}
