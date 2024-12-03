"use client";
import Sidebar from "@/Components/Sidebar/Sidebar";

export default function RootLayout({ children }) {
  return (
    <div>
      <Sidebar role="admin"/>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md sm:ml-[300px]">
        {children}
      </div>
    </div>
  );
}
