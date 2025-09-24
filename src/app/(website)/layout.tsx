import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar";
import getProfile from "@/utils/getProfile";
import React from "react";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  // console.log(children);
  const user = await getProfile();

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFF]">
      <nav className=" sticky top-0 z-50">
        <Navbar user={user} />
      </nav>
      {children}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
