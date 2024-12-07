"use client";
import React from "react";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import Chat from "@/Components/Chat/Chat";

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="min-h-screen relative overflow-hidden font-sans">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed filter brightness-50"
          style={{
            backgroundImage:
              "url('https://landema.com/bootstrap-theme/images/contact-bg.e6a96d47.png')",
          }}
        ></div>

        <div className="absolute inset-0 z-10">
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-800/30 to-black opacity-80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-transparent opacity-40 animate-gradient-x"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-green-500 rounded-full blur-3xl opacity-20 animate-bounce-slow"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-400 rounded-full blur-3xl opacity-20 animate-bounce-slow-reverse"></div>
        </div>

        <div className="relative mt-80 z-20 flex flex-col items-center justify-center h-full text-center px-6 space-y-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-400 animate-fade-in">
            Let's Build Connections 🌱
          </h2>

          <h1 className="text-[45px] sm:text-7xl lg:text-8xl font-extrabold text-white leading-tight tracking-wide drop-shadow-2xl animate-slide-in">
            Get in Touch with{" "}
            <span className="text-green-400 underline decoration-wavy">
              AgroMart
            </span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-4xl leading-relaxed drop-shadow-md animate-fade-in-delayed">
            Have questions or ideas? Whether you're a farmer, buyer, or partner,
            we’re here to assist. Reach out to us and let's cultivate a
            prosperous agricultural future together.
          </p>

          <div className="flex items-center space-x-6">
            <div className="w-16 h-1 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-400 font-bold text-lg tracking-wider uppercase animate-bounce">
              We’d Love to Hear from You
            </span>
            <div className="w-16 h-1 bg-green-500 rounded-full animate-pulse"></div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-8 mt-6 pb-8">
            <a
              href="#contact-form"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-16 rounded-full shadow-2xl transition-transform transform hover:scale-110 hover:shadow-green-500/50 animate-fade-up"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="absolute top-0 w-full h-64 bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute bottom-0 w-full h-64 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      {/* Contact Section */}
      <div className="py-16 relative bg-white overflow-hidden">
        {/* Background Decorative Circles */}
        <div className="absolute top-[-50px] right-[-50px] w-72 h-72 bg-[#f3fdf5] rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-[-50px] left-[-50px] w-96 h-96 bg-[#e2f9e9] rounded-full blur-3xl opacity-40"></div>
        <div className="container mx-auto px-6 lg:px-20 relative z-10 text-center mb-12">
          <h1 className="text-5xl font-extrabold text-[#2c6e49] mb-4 drop-shadow-md">
            Contact Us
          </h1>
          <p className="text-xl text-[#4f8c69] mb-10 max-w-2xl mx-auto">
            Have questions, need support, or want to collaborate? Reach out to
            us! Use the form below to send us a message, or find our location on
            the map.
          </p>
        </div>
        <div className="container mx-auto px-6 lg:px-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div
              id="contact-form"
              className="bg-transparent shadow-lg rounded-xl p-8"
            >
              <h2 className="text-3xl font-bold mb-6 text-green-800">
                Drop Us a Message
              </h2>
              <form className="space-y-6">
                {/* Name Input */}
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-1"
                  >
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border-b-2 bg-transparent border-gray-300 focus:border-green-600 text-gray-800 placeholder-gray-400 py-3 px-1 focus:outline-none transition duration-300"
                    placeholder="Your Full Name"
                    required
                  />
                </div>

                {/* Email Input */}
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-1"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-transparent border-b-2 border-gray-300 focus:border-green-600 text-gray-800 placeholder-gray-400 py-3 px-1 focus:outline-none transition duration-300"
                    placeholder="Your Email Address"
                    required
                  />
                </div>

                {/* Subject Input */}
                <div className="relative">
                  <label
                    htmlFor="subject"
                    className="block text-gray-700 font-medium mb-1"
                  >
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full bg-transparent border-b-2 border-gray-300 focus:border-green-600 text-gray-800 placeholder-gray-400 py-3 px-1 focus:outline-none transition duration-300"
                    placeholder="Subject of Your Inquiry"
                    required
                  />
                </div>

                {/* Message Textarea */}
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-1"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full bg-transparent border-b-2 border-gray-300 focus:border-green-600 text-gray-800 placeholder-gray-400 py-3 px-1 focus:outline-none transition duration-300"
                    placeholder="Write your message here..."
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Map */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="AgroMart Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509586!2d-122.42189568468104!3d37.77492967975925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858103c8f9c7c5%3A0x59d7d8d5635a5ba9!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1698313779029!5m2!1sen!2sin"
                width="100%"
                height="100%"
                className="w-full h-full min-h-[450px]"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
