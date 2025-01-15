"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaEye, FaEyeSlash, FaShoppingCart, FaStore } from "react-icons/fa";
import { motion } from "framer-motion";
import { registerUser } from "../../reducers/Auth/authSlice";

export default function SignupPage() {
  const [activeForm, setActiveForm] = useState("buyer");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username:"",
    email: "",
    password: "",
    confirmPassword: "",
    businessName: "",
    phoneNumber: "",
    address: "",
  });
  const dispatch = useDispatch();
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const role = activeForm === "buyer" ? "buyer" : "seller";

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
debugger
    const userData = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
      role,
      ...(role === "seller" && {
        businessName: formData.businessName,
        phoneNumber: formData.phoneNumber,
        address: formData.address,
      }),
    };

    try {
      await dispatch(registerUser(userData)).unwrap();
      router.push("/login");
    } catch (err) {
      alert(err.message || "Registration failed. Please try again.");
    }
  };

  const formVariants = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  };

  return (
    <div className="min-h-screen relative overflow-hidden font-sans bg-gray-900">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed filter brightness-50"
        style={{
          backgroundImage:
            "url('https://images6.alphacoders.com/134/thumb-1920-1347850.png')",
        }}
      ></div>
      <div className="absolute inset-0 z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-800/30 to-black opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-transparent opacity-40 animate-gradient-x"></div>
      </div>

      <div className="relative">
        <div className="relative z-20 pt-[30px] my-8 flex flex-col items-center justify-center min-h-[80vh]">
          {/* Form Switcher */}
          <div className="flex mb-4 bg-gradient-to-r from-white/10 to-transparent backdrop-blur-sm rounded-full p-1 shadow-md relative">
            {/* Buyer Button */}
            <button
              onClick={() => setActiveForm("buyer")}
              className={`relative flex-1 px-4 py-2 rounded-full text-center font-semibold text-sm transition-all duration-300 ease-in-out transform flex items-center justify-center gap-2 ${
                activeForm === "buyer"
                  ? "bg-green-700 text-white shadow-lg scale-105"
                  : "bg-transparent text-white hover:bg-white/20"
              }`}
            >
              <FaShoppingCart size={20} />
              <span>Buyer</span>
            </button>

            {/* Seller Button */}
            <button
              onClick={() => setActiveForm("seller")}
              className={`relative flex-1 px-4 py-2 rounded-full text-center text-sm transition-all font-bold duration-300 ease-in-out transform flex items-center justify-center gap-2 ${
                activeForm === "seller"
                  ? "bg-green-700 text-white shadow-lg scale-105"
                  : "bg-transparent text-white hover:bg-white/20"
              }`}
            >
              <FaStore size={20} />
              <span>Seller</span>
            </button>
          </div>

          {/* Animated Form */}
          <motion.div
            className="bg-gradient-to-r from-white/10 to-transparent backdrop-blur-sm border border-white/18 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] space-y-4 p-8 max-w-[500px] w-full text-center space-y-2 transform hover:shadow-xl transition-shadow"
            key={activeForm}
            variants={formVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <h2 className="text-4xl font-extrabold text-green-400">
              {activeForm === "buyer" ? "Join as a Buyer" : "Join as a Seller"}
            </h2>
            <form className="space-y-3" onSubmit={handleSubmit}>
              <div className="flex gap-2 justify-between">
                <div className="w-full">
                  <label className="block text-left text-white font-semibold mb-1">
                    User Name
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className="w-full text-gray-800 bg-transparent text-white border-b-2 border-white shadow-4xl focus:py-2 focus:outline-none"
                  />
                </div>
                {/* <div className="w-full">
                  <label className="block text-left text-white font-semibold mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full text-gray-800 bg-transparent text-white border-b-2 border-white shadow-4xl focus:py-2 focus:outline-none"
                  />
                </div> */}
              </div>
              <div>
                <label className="block text-left text-blue-100 font-semibold mb-1">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full text-gray-800 bg-transparent text-white border-b-2 border-white shadow-4xl focus:py-2 focus:outline-none"
                />
              </div>
              <div className="relative">
                <label className="block text-left text-white font-semibold mb-1">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full text-gray-800 bg-transparent text-white border-b-2 border-white shadow-4xl focus:py-2 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute top-4 right-3 text-white hover:text-green-700 focus:outline-none"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <FaEyeSlash size={24} />
                  ) : (
                    <FaEye size={24} />
                  )}
                </button>
              </div>
              <div>
                <label className="block text-left text-white font-semibold mb-1">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full text-gray-800 bg-transparent text-white border-b-2 border-white shadow-4xl focus:py-2 focus:outline-none"
                />
              </div>

              {/* Additional Seller Fields */}
              {activeForm === "seller" && (
                <>
                  <div>
                    <label className="block text-left text-white font-semibold mb-1">
                      Business Name
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      className="w-full text-gray-800 bg-transparent text-white border-b-2 border-white shadow-4xl focus:py-2 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-left text-white font-semibold mb-1">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full text-gray-800 bg-transparent text-white border-b-2 border-white shadow-4xl focus:py-2 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-left text-white font-semibold mb-1">
                      Address
                    </label>
                    <textarea
                      rows="3"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full text-gray-800 bg-transparent text-white border-b-2 border-white shadow-4xl focus:py-2 focus:outline-none"
                    ></textarea>
                  </div>
                </>
              )}

              <button
                type="submit"
                className="w-full mt-10 py-3 bg-green-500 text-white font-bold rounded-lg shadow-md hover:bg-green-700 transition-transform transform hover:scale-105"
              >
                {activeForm === "buyer"
                  ? "Sign Up as Buyer"
                  : "Sign Up as Seller"}
              </button>
            </form>
            <div className="flex justify-end items-center text-sm text-blue-200">
              <Link href="/login" className="hover:text-blue-100">
                Already have an account? Log in
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
