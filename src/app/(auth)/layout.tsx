import {
  BookOpenCheck,
  Brain,
  FolderCode,
  RectangleEllipsis,
} from "lucide-react";
import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <>
      <aside className="grid grid-cols-2 min-h-screen">
        {/* Overlay */}
        <div className="bg-sky-100 flex py-24">
          {/* Panel */}
          <div className="w-[65%] mx-auto flex flex-col ">
            {/* Logo */}
            <div className="flex gap-2.5 items-center text-blue-600 mb-16">
              <FolderCode />
              <h2 className="font-mono font-semibold text-lg">Exam App</h2>
            </div>
            {/* Details */}
            <div className="flex flex-col gap-8">
              <h3 className="font-inter font-bold text-2xl">
                Empower your learning journey with our smart exam platform.
              </h3>
              {/* List */}
              <ul className="font-mono flex flex-col gap-5">
                {/* Item 1 */}
                <li className="flex gap-4">
                  <Brain
                    size={36}
                    className="text-blue-600 border-2 border-blue-600 px-2.5 box-content"
                  />
                  <div className="flex flex-col">
                    <h4 className="text-blue-600 font-semibold text-lg">
                      Tailored Diplomas
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Choose from specialized tracks like Frontend, Backend, and
                      Mobile Development.
                    </p>
                  </div>
                </li>
                {/* Item 2 */}
                <li className="flex gap-4">
                  <BookOpenCheck
                    size={36}
                    className="text-blue-600 border-2 border-blue-600 px-2.5 box-content"
                  />
                  <div className="flex flex-col">
                    <h4 className="text-blue-600 font-semibold text-lg">
                      Focused Exams
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Access topic-specific tests including HTML, CSS,
                      JavaScript, and more.
                    </p>
                  </div>
                </li>
                {/* Item 3 */}
                <li className="flex gap-4">
                  <RectangleEllipsis
                    size={36}
                    className="text-blue-600 border-2 border-blue-600 px-2.5 box-content"
                  />
                  <div className="flex flex-col">
                    <h4 className="text-blue-600 font-semibold text-lg">
                      Smart Multi-Step Forms
                    </h4>
                    <p className="text-gray-700 text-sm">
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
