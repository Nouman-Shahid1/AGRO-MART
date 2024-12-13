"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ChatPage = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-green-900 via-emerald-700 to-lime-500 text-white flex flex-col justify-center items-center">
      <div className="w-full h-screen bg-green-800 rounded-lg shadow-2xl p-6 flex">
        {/* Members List */}
        <div className="w-1/4 bg-gradient-to-br from-green-900 to-emerald-700 rounded-lg overflow-y-scroll p-4 flex flex-col space-y-4 shadow-lg">
          <h2 className="text-2xl font-extrabold mb-4 text-lime-300">Members</h2>
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={i}
              className="bg-green-700 flex gap-3 items-center  p-3 rounded-md cursor-pointer hover:bg-emerald-600 shadow-md transition-transform transform hover:scale-105"
            >
              <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToiRnzzyrDtkmRzlAvPPbh77E-Mvsk3brlxQ&s"
              alt="name"
                width={40}
                height={40}
                className="rounded-full border-2 border-green-400"
              />
              <span className="font-semibold text-white">Seller {i + 1}</span>
            </div>
          ))}
        </div>

        {/* Chat Section */}
        <div className="w-3/4 flex flex-col ml-6">
          {/* Header */}  
          <div className="flex justify-between items-center mb-4 p-4 rounded-md bg-gradient-to-r from-lime-600 via-green-500 to-emerald-700 shadow-md">
            <h1 className="text-2xl font-bold text-white">Chat with Seller</h1>
            <Link
              href="/buyer"
              className="bg-red-500 px-4 py-2 text-lg rounded-lg hover:bg-red-600 shadow-md transition-transform transform hover:scale-105"
            >
              Back
            </Link>
          </div>


          {/* Chat Messages */}
          <div className="flex-grow h-96 bg-gradient-to-br from-green-700 to-emerald-600 rounded-md p-6 overflow-y-auto shadow-inner space-y-4">
            {/* Example messages */}<div className="space-y-4">
              {/* Sender Message */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToiRnzzyrDtkmRzlAvPPbh77E-Mvsk3brlxQ&s"
                    alt="Sender Avatar"
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-green-400"
                  />
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-br from-green-900 via-green-800 to-green-600 text-white shadow-xl max-w-sm">
                  Hello! How can I help you today?
                </div>
              </div>

              {/* Receiver Message */}
              <div className="flex items-end justify-end">
                <div className="p-4 rounded-lg bg-gradient-to-br from-lime-600 via-lime-500 to-lime-400 text-white shadow-xl max-w-sm">
                  I have a question about my order.
                </div>
                <div className="flex-shrink-0 ml-3">
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToiRnzzyrDtkmRzlAvPPbh77E-Mvsk3brlxQ&s"
                    alt="Receiver Avatar"
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-lime-400"
                  />
                </div>
              </div>

              {/* Sender Message */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToiRnzzyrDtkmRzlAvPPbh77E-Mvsk3brlxQ&s"
                    alt="Sender Avatar"
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-green-400"
                  />
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-br from-green-800 via-green-700 to-green-600 text-white shadow-xl max-w-sm">
                  Sure, please let me know your issue.
                </div>
              </div>
            </div>

          </div>
          {/* Input Box */}
          <div className="mt-4 flex items-center gap-4 px-4">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-grow p-4 rounded-full text-gray-800 bg-green-50 shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-500 transition duration-200 ease-in-out placeholder-gray-500"
            />
            <button className="bg-gradient-to-br from-lime-600 to-green-500 px-6 py-4 text-lg rounded-full text-white font-semibold hover:bg-gradient-to-br hover:from-lime-700 hover:to-green-600 shadow-xl transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500">
              Send
            </button>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
