"use client";
import Sidebar from "@/Components/Sidebar/Sidebar";

export default function RootLayout({ children }) {
  return (
    <div>
      <Sidebar role="seller"/>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md md:ml-[300px]">
        {children}
      </div>
    </div>
  );
}
