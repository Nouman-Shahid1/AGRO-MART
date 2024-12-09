"use client";
import { useState } from "react";
import Image from "next/image";
import ProfileImage from "../../assets/images/blank.png";

const AdminProfile = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Toggle the dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative bg-gradient-to-br from-green-700 via-brown-700 to-green-800 shadow-xl px-6 py-8 rounded-[32px] flex flex-col md:flex-row items-center justify-between backdrop-blur-lg border border-green-600/40 ">
      {/* Glow Border */}
      <div className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-olive-500 via-green-400 to-brown-500 opacity-25 blur-lg pointer-events-none"></div>

      {/* Welcome Text */}
      <h1 className="relative z-10 text-3xl md:text-4xl font-bold text-white drop-shadow-lg mb-4 md:mb-0">
        Welcome, Nouman
      </h1>

      {/* Profile Section */}
      <div className="relative z-10 flex items-center gap-4">
        {/* Profile Image */}
        <Image
          src={ProfileImage}
          alt="Profile"
          height={60}
          width={60}
          className="rounded-full border-4 border-olive-300 shadow-xl group-hover:shadow-2xl transition-shadow duration-300"
        />

        <div>
          {/* Dropdown Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleDropdown}
              id="dropdownDefaultButton"
              type="button"
              className="flex items-center text-base font-medium text-white hover:text-emerald-400 transition"
            >
              Nouman
              <svg
                className={`w-4 h-4 ms-3 transform transition-transform ${
                  isDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            <div
              id="dropdown"
              className={`${
                isDropdownOpen ? "visible opacity-100" : "invisible opacity-0"
              } absolute top-14 right-0 z-20 bg-gray-800 text-white transition-opacity duration-300 divide-y divide-gray-700 rounded-lg shadow-lg w-32`}
            >
              <ul className="py-2 text-sm">
                <li>
                  <span className="block px-4 py-2 hover:bg-green-600 hover:text-white cursor-pointer transition">
                    Logout
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* User Role */}
          <p className="text-sm font-normal text-emerald-300 mt-1">Admin</p>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
