
import { imgUrl } from "@/helpers/constants";
import { myFetch } from "@/utils/myFetch";
import Image from "next/image";
import React from "react";
import CollectionCard from "./CollectionCard";

export default async function MyCollectionPage() {
  const res = await myFetch("/order");
  const data = res.data;
  // console.log(data);
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 min-h-[70vh] items-start">
        {data?.map((cv: any) => (
          <CollectionCard key={cv._id} cv={cv} />
        ))}
      </div>
      {/* <Pagination defaultCurrent={1} total={50} /> */}
    </div>
  );
}
