import ProfileDetailsPage from "@/components/profile-pages/profile-details/ProfileDetails";
import getProfile from "@/utils/getProfile";
import React from "react";

export default async function page() {
  const user = await getProfile();

  return (
    <div>
      <ProfileDetailsPage user={user} />
    </div>
  );
}
