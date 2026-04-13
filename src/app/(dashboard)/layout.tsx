import Logo from "@/shared/layouts/logo";
import Image from "next/image";
import React from "react";
import { DropdownMenuDemo } from "../../shared/layouts/dashboard/dropdown";
import SideLinks from "../../shared/layouts/dashboard/side-links";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/features/auth/lib/auth";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const session = await getServerSession(authOptions);

  return (
    <>
      {/* Sidebar */}
      <aside className="grid grid-cols-[1fr_3fr] min-h-screen">
        <div className="bg-blue-50 p-10">
          <div className="h-full relative">
            {/* Elevate logo */}
            <Link href="/">
              <Image
                src="/assets/images/elevate-logo.svg"
                alt="Elevate"
                width={192}
                height={37}
                className="mb-2.5 ms-1"
                loading="eager"
              />
            </Link>

            {/* Exam App logo */}
            <Link href="/">
              <Logo />
            </Link>

            {/* Navigation */}
            <nav>
              {/* Links */}
              <SideLinks />

              {/* User */}
              <div className="flex gap-2.5 absolute bottom-0 items-center">
                <Link href={"/account"}>
                  <Image
                    src={
                      session?.user.profilePhoto ??
                      "/assets/images/default-photo.jpg"
                    }
                    height={54}
                    width={54}
                    alt="Profile picture"
                    className="outline-1 outline-blue-500"
                  />
                </Link>
                <div className="flex flex-col justify-center">
                  <p className="text-blue-600 font-medium">
                    {session?.user.firstName}
                  </p>
                  <p className="text-gray-500 font-medium break-all">
                    {session?.user.email}
                  </p>
                </div>
                <DropdownMenuDemo />
              </div>
            </nav>
          </div>
        </div>

        {/* Dashboard pages */}
        {children}
      </aside>
    </>
  );
}
