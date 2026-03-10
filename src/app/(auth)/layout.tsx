import Logo from "@/components/logo";
import { BookOpenCheck, Brain, RectangleEllipsis } from "lucide-react";
import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <>
      {/* Split screen layout */}
      <aside className="grid grid-cols-2 min-h-screen">
        {/* Overlay */}
        <div className="bg-blue-50 flex py-16">
          {/* Panel */}
          <div className="w-3/5 mx-auto flex flex-col ">
            {/* Exam App logo */}
            <Logo />

            {/* Details */}
            <div className="flex flex-col gap-8">
              <h3 className="font-inter font-bold text-3xl text-gray-800">
                Empower your learning journey with our smart exam platform.
              </h3>

              {/* List */}
              <ul className="font-mono flex flex-col gap-5">
                {/* Item 1 */}
                <li className="flex gap-5">
                  <Brain
                    size={36}
                    className="text-blue-600 outline-1 outline-blue-600 px-2.5 box-content"
                  />
                  <div className="flex flex-col">
                    <h4 className="text-blue-600 font-semibold text-xl">
                      Tailored Diplomas
                    </h4>
                    <p className="text-gray-700">
                      Choose from specialized tracks like Frontend, Backend, and
                      Mobile Development.
                    </p>
                  </div>
                </li>

                {/* Item 2 */}
                <li className="flex gap-5">
                  <BookOpenCheck
                    size={36}
                    className="text-blue-600 outline-1 outline-blue-600 px-2.5 box-content"
                  />
                  <div className="flex flex-col">
                    <h4 className="text-blue-600 font-semibold text-xl">
                      Focused Exams
                    </h4>
                    <p className="text-gray-700">
                      Access topic-specific tests including HTML, CSS,
                      JavaScript, and more.
                    </p>
                  </div>
                </li>

                {/* Item 3 */}
                <li className="flex gap-5">
                  <RectangleEllipsis
                    size={36}
                    className="text-blue-600 outline-1 outline-blue-600 px-2.5 box-content"
                  />
                  <div className="flex flex-col">
                    <h4 className="text-blue-600 font-semibold text-xl">
                      Smart Multi-Step Forms
                    </h4>
                    <p className="text-gray-700">
                      Choose from specialized tracks like Frontend, Backend, and
                      Mobile Development.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {children}
      </aside>
    </>
  );
}
