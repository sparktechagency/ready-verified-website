import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  // console.log(children);
  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFF]">
      <nav className=" sticky top-0 z-50">
        <Navbar />
      </nav>
      {children}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
