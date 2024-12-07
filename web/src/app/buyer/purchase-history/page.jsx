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
      image: "https://5.imimg.com/data5/SELLER/Default/2023/7/324680057/RH/KW/SQ/132393264/organic-chemical-fertilizer-500x500.jpg",
    },
    {
      id: 102,
      title: "Purchase Item 2",
      date: "2024-11-28",
      price: 3200,
      quantity: 1,
      status: "Delivered",
      email: "user2@argomart.com",
      image: "https://www.floristika.com.my/cdn/shop/products/plantfood-leaf_1.jpg?v=1681381465",
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
    <div className="bg-gradient-to-r from-green-400 via-yellow-200 to-green-500 min-h-screen p-6">
    
      <Profile />

     
      <h2 className="text-green-600 text-xl font-semibold mb-4 mt-6">
        My Purchases
      </h2>
      <div className="flex flex-wrap gap-6">
        {purchases.map((purchase) => (
          <div
            key={purchase.id}
            className="bg-white shadow-md rounded-lg p-4 w-[300px] flex-shrink-0"
          >
            <img
              src={purchase.image}
              alt={purchase.title}
              className="w-16 h-16 rounded-lg mb-4 object-cover"
            />
            <h3 className="text-green-600 text-lg font-semibold mb-2">
              {purchase.id} - {purchase.title}
            </h3>
            <p className="text-sm">
              <span className="font-medium">Date:</span> {purchase.date}
            </p>
            <p className="text-sm">
              <span className="font-medium">Quantity:</span>{" "}
              {purchase.quantity}
            </p>
            <p className="text-sm">
              <span className="font-medium">Total Price:</span> $
              {purchase.price}
            </p>
            <p className="text-sm">
              <span className="font-medium">Status:</span>{" "}
              <span className="text-green-500">{purchase.status}</span>
            </p>
            <button
              className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
              onClick={() => handleViewDetails(purchase)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>

     
      {isPopupVisible && selectedPurchase && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative">
            <h2 className="text-green-600 text-xl font-bold mb-4">
              Purchase Details
            </h2>
            <p className="text-sm">
              <span className="font-medium">Purchase ID:</span>{" "}
              {selectedPurchase.id}
            </p>
            <p className="text-sm">
              <span className="font-medium">User Email:</span>{" "}
              {selectedPurchase.email}
            </p>
            <p className="text-sm">
              <span className="font-medium">Date:</span>{" "}
              {selectedPurchase.date}
            </p>
            <p className="text-sm">
              <span className="font-medium">Quantity:</span>{" "}
              {selectedPurchase.quantity}
            </p>
            <p className="text-sm">
              <span className="font-medium">Total Price:</span> $
              {selectedPurchase.price}
            </p>
            <p className="text-sm">
              <span className="font-medium">Status:</span>{" "}
              {selectedPurchase.status}
            </p>
            <div className="mt-4">
              <h3 className="text-green-600 text-lg font-semibold mb-2">
                Product Image
              </h3>
              <img
                src={selectedPurchase.image}
                alt={selectedPurchase.title}
                className="w-full h-40 rounded-lg object-contain"
              />
            </div>
            <button
              className="mt-6 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
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
