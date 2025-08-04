import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Toaster } from "sonner";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const metadata: Metadata = {
  title: "Ready Verified",
  description:
    "Ready Verified is an intelligent CV assessment platform that generates detailed evaluations to help candidates refine their resumes and improve their chances of success.",
    icons:{
      icon:"/ready_fav.png"
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}  antialiased `}>
        <AntdRegistry>
          <Toaster position="top-center" duration={2000} />

          {children}
        </AntdRegistry>
      </body>
    </html>
  );
}
