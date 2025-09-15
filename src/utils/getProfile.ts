"use server";

import { IUser } from "@/types/types";
import { cookies } from "next/headers";


const getProfile = async ():Promise<IUser|null> => {
  const token = (await cookies()).get("accessToken")?.value;

  const res = await fetch(`${process.env.BASE_URL}/user/profile`, {
    next: {
      tags: ["user-profile"],
    },
    cache:"force-cache",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  const { data } = await res?.json();

  return data;
};

export default getProfile;
