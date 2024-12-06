"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import { FaUser, FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
  const [bg, setBg] = useState(false);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBg(true);
      } else {
        setBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleNavbar = () => {
    setShowNav(!showNav);
  };

  return (
    <div
      className={`${
        bg ? "bg-white shadow-lg" : "bg-transparent"
      } w-full  transition-colors duration-300 fixed  z-50`}
    >
      <div className="mx-auto w-[80%] relative">
        <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-center py-4">
          <div>
            <img
              src="/logo.png"
              alt="Logo"
              width="170px"
              className={`transition-all duration-300 ease-in-out drop-shadow-md ${
                bg
                  ? "hover:drop-shadow-[0_4px_20px_rgba(76,175,80,1)] "
                  : "hover:drop-shadow-[0px_4px_20px_rgba(255,255,255,1)]"
              } rounded-lg"`}
            />
          </div>

          <div className="hidden md:flex flex-col md:flex-row gap-3 text-base pt-4 items-center">
            {[
              { label: "Become a Buyer", href: "/" },
              { label: "Become a Seller", href: "/" },
              { label: "Rent a Machine", href: "/" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative inline-block py-2.5 px-6 text-base font-medium text-white rounded-full bg-gradient-to-r from-green-500 to-green-700 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-br focus:ring-2 focus:ring-teal-300 focus:outline-none"
              >
                <span className="absolute inset-0 w-full h-full bg-white opacity-0 rounded-full transition-opacity duration-300 hover:opacity-10"></span>
                <span className="relative z-10">{item.label}</span>
              </Link>
            ))}
            <div className="flex items-center gap-4 md:gap-6">
              <div className="group relative">
                <FaUser
                  className={`text-2xl cursor-pointer ${
                    bg ? "text-black" : "text-white"
                  } hover:scale-110 transition-transform`}
                />
                {/* Dropdown Menu */}
                <div className="hidden group-hover:flex flex-col z-50 absolute right-0 mt-2 w-36 py-3 px-5 bg-slate-100 text-gray-700 rounded-md shadow-lg">
                  <p className="cursor-pointer hover:text-black">My Profile</p>
                  <p className="cursor-pointer hover:text-black">Orders</p>
                  <p className="cursor-pointer hover:text-black">Logout</p>
                </div>
              </div>

              <div>
                <Link href="/cart">
                  <FaShoppingCart
                    className={`text-2xl ${
                      bg ? "text-black" : "text-white"
                    } hover:scale-110 transition-transform`}
                  />
                </Link>
              </div>
            </div>
          </div>

          <div
            className="md:hidden absolute top-[50px] right-0  p-2"
            onClick={handleNavbar}
          >
            <span
              className={`block w-[30px] h-1 ${
                bg ? "bg-black" : "bg-white"
              } mb-1 rounded-full`}
            ></span>
            <span
              className={`block w-[30px] h-1 ${
                bg ? "bg-black" : "bg-white"
              } mb-1 rounded-full`}
            ></span>
            <span
              className={`block w-[30px] h-1 ${
                bg ? "bg-black" : "bg-white"
              } mb-1 rounded-full`}
            ></span>
          </div>
        </div>
        <div
          className={`${
            showNav
              ? "fixed z-50 left-0 top-0 bg-white w-full sm:w-[90%] h-screen py-8 px-3 "
              : "relative md:flex flex-col md:flex-row  py-1 "
          } ${bg ? "border-t md:border-black" : "border-t md:border-white"}`}
        >
          <div
            className={`${
              showNav ? "block absolute right-[30px] top-[30px]" : "hidden"
            }`}
            onClick={handleNavbar}
          >
            <ImCross style={{ color: "#017d29", fontSize: "20px" }} />
          </div>
          <div
            className={`${
              showNav ? "flex" : "hidden"
            }  flex-wrap flex-rows mb-6  gap-3 text-base pt-4 items-center justify-center`}
          >
            {[
              { label: "Become a Buyer", href: "/" },
              { label: "Become a Seller", href: "/" },
              { label: "Rent a Machine", href: "/" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative inline-block py-2.5 px-6 text-base font-medium text-white rounded-full bg-gradient-to-r from-green-500 to-green-700 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-br focus:ring-2 focus:ring-teal-300 focus:outline-none"
              >
                <span className="absolute inset-0 w-full h-full bg-white opacity-0 rounded-full transition-opacity duration-300 hover:opacity-10"></span>
                <span className="relative z-10">{item.label}</span>
              </Link>
            ))}
          </div>
          <ul
            className={`${
              showNav ? "block" : "hidden"
            } w-full md:flex  flex-col md:flex-row justify-around  mx-auto ${
              bg ? "text-black gap-10 " : "text-[#017d29] md:text-white "
            }`}
          >
            <Link href="/">
              <li className="hover:border-b-2 border-current p-2">
                <strong>HOME</strong>
              </li>
            </Link>
            <Link href="/products">
              <li className="hover:border-b-2 border-current p-2">
                <strong>PRODUCTS</strong>
              </li>
            </Link>
            <Link href="/seeds">
              <li className="hover:border-b-2 border-current p-2">
                <strong>SEEDS</strong>
              </li>
            </Link>
            <Link href="/fertilizers">
              <li className="hover:border-b-2 border-current p-2">
                <strong>FERTILIZERS</strong>
              </li>
            </Link>
            <Link href="/machines">
              <li className="hover:border-b-2 border-current p-2">
                <strong>MACHINES</strong>
              </li>
            </Link>
            <Link href="/rental-machines">
              <li className="hover:border-b-2 border-current p-2">
                <strong>RENTAL MACHINES</strong>
              </li>
            </Link>
            <Link href="/aboutUs">
              <li className="hover:border-b-2 border-current p-2">
                <strong>ABOUT US</strong>
              </li>
            </Link>
            <Link href="/contact-us">
              <li className="hover:border-b-2 border-current p-2">
                <strong>CONTACT US</strong>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
