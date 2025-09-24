"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import DropdownContent from "./dropdownContent";
import { Avatar, Dropdown, Typography } from "antd";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/contexts/AuthContext";
import getProfile from "@/utils/getProfile";
import { imgUrl } from "@/helpers/constants";
import Cookies from "js-cookie";
const navigationItems = [
  { key: "home", label: "Home", href: "/" },
  { key: "about", label: "About Us", href: "/about" },
  { key: "assessments", label: "Assessments", href: "/assessments" },
  { key: "pricing", label: "Pricing", href: "/pricing" },
  { key: "contact", label: "Contact Us", href: "/contact" },
];

export default function Navbar({ user }: any) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isActive = (href: string) => pathname === href;
  const { logout } = useAuthContext();
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const cookeUser = Cookies.get("user");
  if (!cookeUser && user) {
    Cookies.set("user", JSON.stringify(user));
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  // const user = await getProfile()
  // console.log(user, imgUrl + user?.image);

  const handleMenuClick = ({ key }: { key: string }) => {
    if (key === "profile") {
      router.push("/profile");
      return;
    } else if (key === "logout") {
      toast.warning("Are you sure you want to log out?", {
        duration: 4000,
        description: "You will be logged out and redirected to the login page.",
        action: {
          label: "Logout",
          onClick: async () => {
            toast.promise(logout(), {
              loading: "Logging out...",
              success: "Logged out successfully",
              error: "Error logging out",
            });
          },
        },
      });
    }
  };
  const dropdownContent = (
    <DropdownContent user={user} handleMenuClick={handleMenuClick} />
  );
  return (
    <nav className=" bg-[#F1F4F9] ">
      <div className="px-4 md:px-4  container mx-auto lg:py-2">
        <div className="flex justify-between items-center ">
          {/* Logo */}
          <Link href={"/"}>
            <div className="flex items-center  flex-shrink-0 p-2">
              <Image
                src={"/images/logo.png"}
                alt="Logo"
                width={100}
                height={70}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`px-4 py-2 text-sm lg:text-md font-medium rounded-md transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-[#1a5fa4] font-fold scale-105 transition duration-300"
                    : "text-gray-700 hover:text-[#1a5fa4] "
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Join Now Button */}
          <div className="hidden lg:block flex-shrink-0">
            {user ? (
              <Dropdown
                overlay={dropdownContent}
                trigger={["click"]}
                placement="bottomRight"
                arrow
              >
                <Avatar
                  src={imgUrl + user.image}
                  size="large"
                  className="cursor-pointer border border-gray-300"
                />
              </Dropdown>
            ) : (
              <Link
                href={"/auth/login"}
                className="cursor-pointer bg-[#1A5FA4] hover:bg-[#164a8a] text-white font-medium px-6 py-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#1a5fa4] focus:ring-offset-2"
              >
                Join Now
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden ">
            {user && (
              <Dropdown
                overlay={dropdownContent}
                trigger={["click"]}
                placement="bottomRight"
                arrow
              >
                <Avatar
                  src={imgUrl + user?.image}
                  size="large"
                  className="cursor-pointer border border-gray-300"
                />
              </Dropdown>
            )}
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-700 hover:text-[#1a5fa4] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#1a5fa4] focus:ring-offset-2"
              aria-expanded="false"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`fixed inset-0 z-50 flex lg:hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "visible" : "invisible"
          }`}
        >
          {/* Backdrop */}
          <div
            className={`fixed inset-0 bg-black/30 bg-opacity-50 transition-opacity duration-300 ${
              mobileMenuOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={closeMobileMenu}
          ></div>

          {/* Drawer */}
          <div
            className={`ml-auto w-72 max-w-full h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
              mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="p-4 flex justify-between items-center border-b border-gray-200">
              <span className="text-lg font-semibold text-gray-900">Menu</span>
              <button
                onClick={closeMobileMenu}
                className="text-gray-700 hover:text-[#1a5fa4] focus:outline-none"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="px-4 py-4 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-[#1a5fa4] bg-blue-50"
                      : "text-gray-700 hover:text-[#1a5fa4] hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              {!user ? (
                <Link href={"/auth/login"}>
                  <button
                    onClick={closeMobileMenu}
                    className="w-full mt-4 bg-[#1a5fa4] hover:bg-[#164a8a] text-white font-medium px-4 py-2 rounded-md transition duration-200"
                  >
                    Join Now
                  </button>
                </Link>
              ) : (
                <button
                  onClick={() => {
                    closeMobileMenu();
                    handleMenuClick({ key: "logout" });
                  }}
                  className="w-full mt-4 bg-[#e03551] hover:bg-[#e27e8e] text-white font-medium px-4 py-2 rounded-md transition duration-200"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
