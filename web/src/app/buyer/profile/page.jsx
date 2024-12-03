"use client";
import Profile from "@/Components/ProfileCard/ProfileCard";
import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaPhone,
  FaMapMarkerAlt,
  FaEdit,
  FaSave,
  FaTimes,
  FaGlobe,
  FaMoneyBill,
  FaCamera,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

export default function CombinedDashboard() {
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [buyerInfo, setBuyerInfo] = useState({
    profilePicture: "https://via.placeholder.com/100", // Placeholder Profile Picture
    name: "John Doe",
    username: "johndoe",
    email: "john.doe@example.com",
    phone: "+1 234 567 890",
    address: "123 Main St, Springfield, USA",
    password: "********", // Masked
    language: "English",
    currency: "USD",
    twoFactorAuth: "Enabled",
  });

  const [editableInfo, setEditableInfo] = useState({ ...buyerInfo });

  const handleEditToggle = () => {
    if (isEditing) {
      setBuyerInfo(editableInfo); // Save changes
    }
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableInfo({ ...editableInfo, [name]: value });
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setEditableInfo({ ...editableInfo, profilePicture: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePasswordChange = () => {
    setIsEditingPassword(!isEditingPassword);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-gradient-to-r from-green-400 via-yellow-200 to-green-500 text-white sm:p-0 px-1 md:px-8 lg:px-6 xl:px-8 2xl:px-12 py-4 md:py-5 lg:py-7 xl:py-10 2xl:py-12">
      <Profile />

      <div className="flex font-sans ">
        <main className="flex-1 p-6 h-full overflow-auto">
          <div className=" mx-auto p-8 bg-white/70 shadow-lg rounded-xl mt-10 text-gray-800">
            <div className="text-center mb-6 relative">
              <img
                src={editableInfo.profilePicture}
                alt="Profile"
                className="w-24 h-24 mx-auto rounded-full border-4 border-green-500"
              />
              {isEditing && (
                <div className="absolute top-0 right-0">
                  <label className="cursor-pointer">
                    <FaCamera className="text-green-500 text-2xl" />
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleProfilePictureChange}
                    />
                  </label>
                </div>
              )}
            </div>

            {/* Account Details */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-green-600">
                Account Information
              </h3>
              <div className="space-y-4">
                {isEditing ? (
                  <>
                    <div>
                      <label className="block text-gray-600 font-medium">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={editableInfo.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-600 font-medium">
                        Username
                      </label>
                      <input
                        type="text"
                        name="username"
                        value={editableInfo.username}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-600 font-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={editableInfo.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center space-x-4">
                      <FaUser className="text-green-500 text-xl" />
                      <div>
                        <p className="text-gray-600 font-medium">Name</p>
                        <p className="text-gray-800">{buyerInfo.name}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <FaEnvelope className="text-green-500 text-xl" />
                      <div>
                        <p className="text-gray-600 font-medium">Email</p>
                        <p className="text-gray-800">{buyerInfo.email}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Contact Details */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-green-600">
                Contact Information
              </h3>
              <div className="space-y-4">
                {isEditing ? (
                  <>
                    <div>
                      <label className="block text-gray-600 font-medium">
                        Phone
                      </label>
                      <input
                        type="text"
                        name="phone"
                        value={editableInfo.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-600 font-medium">
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={editableInfo.address}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center space-x-4">
                      <FaPhone className="text-green-500 text-xl" />
                      <div>
                        <p className="text-gray-600 font-medium">Phone</p>
                        <p className="text-gray-800">{buyerInfo.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <FaMapMarkerAlt className="text-green-500 text-xl" />
                      <div>
                        <p className="text-gray-600 font-medium">Address</p>
                        <p className="text-gray-800">{buyerInfo.address}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Preferences */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-green-600">
                Preferences
              </h3>
              <div className="space-y-4">
                {isEditing ? (
                  <>
                    <div>
                      <label className="block text-gray-600 font-medium">
                        Language
                      </label>
                      <input
                        type="text"
                        name="language"
                        value={editableInfo.language}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-600 font-medium">
                        Currency
                      </label>
                      <input
                        type="text"
                        name="currency"
                        value={editableInfo.currency}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center space-x-4">
                      <FaGlobe className="text-green-500 text-xl" />
                      <div>
                        <p className="text-gray-600 font-medium">Language</p>
                        <p className="text-gray-800">{buyerInfo.language}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <FaMoneyBill className="text-green-500 text-xl" />
                      <div>
                        <p className="text-gray-600 font-medium">Currency</p>
                        <p className="text-gray-800">{buyerInfo.currency}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Security Settings */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-green-600">
                Security
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <FaLock className="text-green-500 text-xl" />
                  <div className="flex items-center w-full">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={buyerInfo.password}
                      readOnly
                      className="w-full px-4 py-2 border rounded-lg bg-gray-100"
                    />
                    <button
                      onClick={togglePasswordVisibility}
                      className="ml-2 text-green-500"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>
                {isEditingPassword && (
                  <>
                    <div>
                      <label className="block text-gray-600 font-medium">
                        New Password
                      </label>
                      <input
                        type="password"
                        name="newPassword"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                        placeholder="Enter new password"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-600 font-medium">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        name="confirmPassword"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                        placeholder="Confirm new password"
                      />
                    </div>
                    <button
                      className="mt-4 px-4 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600"
                      onClick={handlePasswordChange}
                    >
                      Save Password
                    </button>
                  </>
                )}
              </div>
              {!isEditingPassword && (
                <button
                  className="mt-4 px-4 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600"
                  onClick={handlePasswordChange}
                >
                  Change Password
                </button>
              )}
            </div>

            {/* Edit/Save Button */}
            <div className="flex justify-end">
              <button
                className={`px-4 py-2 ${
                  isEditing
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-blue-500 hover:bg-blue-600"
                } text-white font-medium rounded-lg flex items-center space-x-2`}
                onClick={handleEditToggle}
              >
                {isEditing ? (
                  <>
                    <FaSave />
                    <span>Save</span>
                  </>
                ) : (
                  <>
                    <FaEdit />
                    <span>Edit</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
