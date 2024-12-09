"use client";
import React, { useState } from "react";
import Profile from "@/Components/ProfileCard/ProfileCard";

export default function PurchaseHistory() {
  const purchases = [
    {
      id: 101,
      title: "Purchase Item 1",
      date: "2024-12-01",
      price: 4500,
      quantity: 2,
      status: "Delivered",
      email: "user1@argomart.com",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/7/324680057/RH/KW/SQ/132393264/organic-chemical-fertilizer-500x500.jpg",
    },
    {
      id: 102,
      title: "Purchase Item 2",
      date: "2024-11-28",
      price: 3200,
      quantity: 1,
      status: "Delivered",
      email: "user2@argomart.com",
      image:
        "https://www.floristika.com.my/cdn/shop/products/plantfood-leaf_1.jpg?v=1681381465",
    },
  ];

  const [selectedPurchase, setSelectedPurchase] = useState(null);
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleViewDetails = (purchase) => {
    setSelectedPurchase(purchase);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setSelectedPurchase(null);
    setPopupVisible(false);
  };

  return (
    <div className="bg-gradient-to-br from-green-900 via-emerald-700 to-lime-500 min-h-screen p-6 text-white">
      <Profile />

      <h2 className="text-3xl font-bold text-lime-100 mt-6 mb-8">
        My Purchases
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {purchases.map((purchase) => (
          <div
            key={purchase.id}
            className="bg-gradient-to-br from-green-700 via-green-600 to-lime-600 p-6 rounded-xl shadow-xl border border-green-400/30 hover:shadow-2xl transform hover:scale-105 transition duration-300"
          >
            <img
              src={purchase.image}
              alt={purchase.title}
              className="w-full h-40 rounded-lg object-cover mb-4"
            />
            <h3 className="text-lg font-semibold text-lime-50">
              {purchase.id} - {purchase.title}
            </h3>
            <p className="text-lime-200 text-sm">
              <span className="font-medium">Date:</span> {purchase.date}
            </p>
            <p className="text-lime-200 text-sm">
              <span className="font-medium">Quantity:</span> {purchase.quantity}
            </p>
            <p className="text-lime-200 text-sm">
              <span className="font-medium">Total Price:</span> $
              {purchase.price}
            </p>
            <p className="text-lime-200 text-sm">
              <span className="font-medium">Status:</span>{" "}
              <span className="text-lime-300">{purchase.status}</span>
            </p>
            <button
              className="mt-4 w-full bg-emerald-600 text-white py-2 rounded-md hover:bg-emerald-700 transition shadow-lg"
              onClick={() => handleViewDetails(purchase)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {isPopupVisible && selectedPurchase && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-gradient-to-br from-lime-500 via-green-600 to-emerald-700 rounded-lg shadow-2xl p-6 max-w-md w-full relative text-white">
            <button
              className="absolute top-3 right-3 text-lime-200 hover:text-white"
              onClick={closePopup}
            >
              Close
            </button>
            <h2 className="text-2xl font-bold mb-6">Purchase Details</h2>
            <p className="text-sm mb-2">
              <span className="font-medium">Purchase ID:</span>{" "}
              {selectedPurchase.id}
            </p>
            <p className="text-sm mb-2">
              <span className="font-medium">User Email:</span>{" "}
              {selectedPurchase.email}
            </p>
            <p className="text-sm mb-2">
              <span className="font-medium">Date:</span> {selectedPurchase.date}
            </p>
            <p className="text-sm mb-2">
              <span className="font-medium">Quantity:</span>{" "}
              {selectedPurchase.quantity}
            </p>
            <p className="text-sm mb-2">
              <span className="font-medium">Total Price:</span> $
              {selectedPurchase.price}
            </p>
            <p className="text-sm mb-6">
              <span className="font-medium">Status:</span>{" "}
              {selectedPurchase.status}
            </p>
            <div className="w-full h-40 mb-6">
              <img
                src={selectedPurchase.image}
                alt={selectedPurchase.title}
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
            <button
              className="w-full bg-emerald-600 text-white py-2 rounded-md hover:bg-emerald-700 transition shadow-lg"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
