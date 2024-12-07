"use client";
import React, { useState } from "react";
import Profile from "@/Components/ProfileCard/ProfileCard";
import Chat from "@/Components/Chat/Chat";
import LiveChat from "@/Components/LiveChat/LiveChat";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";


export default function Support() {
  const [submitted, setSubmitted] = useState(false);

  const [faqOpen, setFaqOpen] = useState({
    order: false,
    payment: false,
    account: false,
    delivery: false,
    product: false,
  });

  const toggleFaq = (key) => {
    setFaqOpen((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="bg-gradient-to-r from-green-400 via-yellow-200 to-green-500 min-h-screen p-6">
      <Profile />
      <br />
      <h1 className="text-green-800 text-5xl font-bold text-center mb-6">Support</h1>

     
      <section className="mb-8">
        <div className="bg-green-700 shadow-md rounded-lg p-6">
          <h2 className="text-white text-3xl font-semibold mb-4">Contact Information</h2>
          <p className="text-gray-800">
            <strong>Customer Support Email:</strong> support@argomart.com
          </p>
          <p className="text-gray-800">
            <strong>Phone Number:</strong> +1 (555) 123-4567
          </p>
          <p className="text-gray-800">
            <strong>Live Chat:</strong>{" "}
            <a
              href="#"
              className="text-white hover:underline"
              onClick={() => alert("Live chat is coming soon!")}
            >
              Chat with us
            </a>
          </p>
          <div className="text-gray-800 flex items-center">
  <strong className="mr-2">Follow us on Social Media:</strong>
  <a href="#" className="text-white hover:underline flex items-center ml-2">
    <FaFacebook className="text-blue-600 text-lg" />
  </a>
  <a href="#" className="text-white hover:underline flex items-center ml-2">
    <FaTwitter className="text-blue-400 text-lg" />
  </a>
  <a href="#" className="text-white hover:underline flex items-center ml-2">
    <FaInstagram className="text-pink-500 text-lg" />
  </a>
</div>


        </div>
      </section>

    
      <section className="mb-8">
        <div className="bg-green-700 shadow-md rounded-lg p-6">
          <h2 className="text-white text-3xl font-semibold mb-4">Frequently Asked Questions (FAQs)</h2>

          {[
            { key: "order", question: "Order-related FAQs", answer: "Help with tracking, cancellations, and returns." },
            { key: "payment", question: "Payment Issues", answer: "Troubleshooting payment methods and failed transactions." },
            { key: "account", question: "Account Issues", answer: "Login problems, password resets, and profile updates." },
            { key: "delivery", question: "Delivery and Shipping", answer: "Shipping policies, delays, and tracking details." },
            { key: "product", question: "Product Information", answer: "Questions about availability, quality assurance, and specifications." },
          ].map((faq) => (
            <div key={faq.key} className="mb-4">
              <div
                className="flex justify-between items-center bg-green-600 text-gray-800 font-bold p-3 rounded cursor-pointer"
                onClick={() => toggleFaq(faq.key)}
              >
                <h3>{faq.question}</h3>
                <span className="text-white">{faqOpen[faq.key] ? "-" : "+"}</span>
              </div>
              {faqOpen[faq.key] && <p className="text-gray-700 mt-2 p-3 bg-white rounded">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </section>

     
      <section className="mb-8">
        <div className="bg-green-700 shadow-md rounded-lg p-6">
          <h2 className="text-white text-3xl font-semibold mb-4">Returns and Refund Policy</h2>
          <p className="text-gray-800">
            Buyers can return items within 30 days of delivery. Refunds are processed within 7-10 business days. For more
            details, visit our{" "}
            <a href="#" className="text-white hover:underline">
              Returns Policy page
            </a>
            .
          </p>
        </div>
      </section>

    
      <section className="mb-8">
        <div className="text-center mb-6">
          <div className="bg-green-700 shadow-md rounded-lg p-6">
            <h2 className="text-white text-3xl font-semibold mb-4">GET IN TOUCH</h2>
            <h3 className="text-gray-800">
              Have any questions? Feel free to reach out to us – we're here to help!
            </h3>
            <Link href="/contact-us">
              <button className="bg-green-600 text-white px-6 py-3 rounded-full text-xl hover:bg-green-900 transition">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>

    
      <Chat />
    </div>
  );
}
