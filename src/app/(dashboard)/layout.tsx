import Logo from "@/components/logo";
import Image from "next/image";
import React from "react";
import { DropdownMenuDemo } from "./_components/dropdown";
import SideLinks from "./_components/side-links";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <>
      {/* Sidebar */}
      <aside className="grid grid-cols-[1fr_3fr] min-h-screen">
        <div className="bg-blue-50 p-10">
          <div className="h-full relative">
            {/* Elevate logo */}
            <Image
              src="/Final Logo 1.svg"
              alt="Elevate logo"
              width={192}
              height={37}
              className="mb-2.5 ms-1"
            />

            {/* Exam App logo */}
            <Logo />

            {/* Navigation */}
            <nav>
              {/* Links */}
              <SideLinks />

              {/* User */}
              <div className="flex gap-2.5 absolute bottom-0 items-center">
                <Image
                  src="/unknown-person-icon-4.jpg"
                  height={54}
                  width={54}
                  alt="Profile picture"
                  className="outline-1 outline-blue-500"
                />
                <div className="flex flex-col justify-center">
                  <p className="text-blue-600 font-medium">Firstname</p>
                  <p className="text-gray-500 font-medium">
                    user-email@example.com
                  </p>
                </div>
                <DropdownMenuDemo />
              </div>
            </nav>
          </div>
        </div>
        {children}
      </aside>
    </>
  );
}
