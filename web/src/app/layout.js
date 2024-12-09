"use client";

import React, { useEffect } from "react";
import { Provider } from "react-redux";
import localFont from "next/font/local";
import store from "../store/store";
import "./globals.css";
import Authentication from "../Components/Authentication"; // Import the Authentication component

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  useEffect(() => {
    const titles = [
      "Agro Mart - Revolutionizing Farming",
      "Agro Mart - Empowering Farmers",
      "Agro Mart - Sustainable Agriculture",
    ];

    const descriptions = [
      "Revolutionizing agriculture with cutting-edge AI and smart tools.",
      "Empowering farmers with innovative technology and logistics.",
      "Leading the way in sustainable and smart farming practices.",
    ];

    let index = 0;

    const interval = setInterval(() => {
      document.title = titles[index];
      const metaDescription = document.querySelector(
        "meta[name='description']"
      );
      if (metaDescription) {
        metaDescription.setAttribute("content", descriptions[index]);
      }
      index = (index + 1) % titles.length;
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <html lang="en">
      <head>
        <meta
          name="description"
          content="Discover Agro Mart: The ultimate AI-driven platform for sustainable farming, offering smart tools and logistics for modern agriculture."
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider store={store}>
          <Authentication>{children}</Authentication>
        </Provider>
      </body>
    </html>
  );
}
