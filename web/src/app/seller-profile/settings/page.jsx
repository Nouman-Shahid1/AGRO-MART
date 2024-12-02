import Profile from "@/Components/ProfileCard/ProfileCard";
import React from "react";

const Settings = () => {
  return (
    <div
      className="relative h-screen overflow-auto sm:p-0 px-1 md:px-8 lg:px-6 xl:px-8 2xl:px-12 py-4 md:py-5 lg:py-7 xl:py-10 2xl:py-12"
      style={{
        backgroundImage:
          "url('https://png.pngtree.com/thumb_back/fh260/background/20241115/pngtree-happy-vietnamese-farmers-planting-rice-paddy-in-lush-green-field-image_16603887.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10">
        <Profile />

        <div className="my-4 px-4 py-8 rounded-3xl bg-green-50 shadow-md border border-green-200">
          <h2 className="text-3xl font-semibold text-green-800">
            Update Your Settings
          </h2>
          <p className="mt-2 text-lg text-gray-700">
            Manage your profile, update your password, and set preferences here.
          </p>
        </div>

        <form className="bg-white shadow-lg rounded-lg p-8 space-y-6 border border-green-200">
        
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-green-800"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="p-3 w-full border rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="Enter your full name"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-green-800"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="p-3 w-full border rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-green-800"
            >
              New Password
            </label>
            <input
              type="password"
              id="password"
              className="p-3 w-full border rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="Enter your new password"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-green-800"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="p-3 w-full border rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="Confirm your new password"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="profilePicture"
              className="block text-sm font-medium text-green-800"
            >
              Profile Picture
            </label>
            <input
              type="file"
              id="profilePicture"
              className="p-3 w-full border rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-green-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-700 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;
