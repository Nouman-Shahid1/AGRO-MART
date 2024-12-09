"use client";
import React, { useState } from "react";
import Profile from "@/Components/ProfileCard/ProfileCard";

export default function Home() {
  const orders = [
    {
      id: 229206,
      title: "Product Name 1",
      status: "Pending",
      price: 11400,
      shippingFee: 10,
      email: "superadmin@argomart.com",
      image:
        "https://gvt.net/wp-content/uploads/2022/02/106-super-crop-20-20-10-lawn-fertilizer-50.jpg",
    },
    {
      id: 229207,
      title: "Product Name 2",
      status: "Shipped",
      price: 9800,
      shippingFee: 5,
      email: "user@argomart.com",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjG30wgvoluZSUrD0uBKd4Zfd-7TWUB37QY4mQmqjZusi3bzhSeUZckJHy6zAzFmGbbIo&usqp=CAU",
    },
  ];

  const [filterStatus, setFilterStatus] = useState("All");
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleFilter = (status) => {
    setFilterStatus(status);
  };

  const handleViewDetails = (order) => {
    setSelectedOrder(order);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setSelectedOrder(null);
    setPopupVisible(false);
  };

  const filteredOrders =
    filterStatus === "All"
      ? orders
      : orders.filter((order) =>
          filterStatus === "To Receive"
            ? order.status === "Shipped"
            : order.status === "Pending"
        );

  return (
    <div className="bg-gradient-to-br from-green-900 via-emerald-700 to-lime-500 min-h-screen p-6 text-white">
      <Profile />

      <div className="text-center mt-8">
        <h2 className="text-3xl font-bold text-lime-100 mb-6">My Orders</h2>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-6 mb-8">
        {["All", "To Ship", "To Receive"].map((status) => (
          <button
            key={status}
            className={`px-6 py-3 rounded-full font-semibold ${
              filterStatus === status
                ? "bg-lime-600 text-white shadow-lg"
                : "bg-green-500 text-lime-100 hover:bg-green-600"
            } transition`}
            onClick={() => handleFilter(status)}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Order Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredOrders.map((order) => (
          <div
            key={order.id}
            className="bg-gradient-to-br from-green-700 via-emerald-600 to-lime-600 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
          >
            <img
              src={order.image}
              alt={order.title}
              className="w-full h-40 rounded-lg object-cover mb-4"
            />
            <h3 className="text-lime-100 text-lg font-bold mb-2">
              {order.id} - {order.title}
            </h3>
            <p className="text-lime-200 text-sm mb-2">
              <span className="font-medium">Status:</span>{" "}
              <span
                className={
                  order.status === "Pending"
                    ? "text-yellow-400"
                    : "text-lime-300"
                }
              >
                {order.status}
              </span>
            </p>
            <p className="text-lime-200 text-sm mb-2">
              <span className="font-medium">Total Price:</span> ${order.price}
            </p>
            <button
              className="mt-4 w-full bg-lime-600 text-white py-2 rounded-lg hover:bg-lime-700 transition shadow-md"
              onClick={() => handleViewDetails(order)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Popup for Order Details */}
      {isPopupVisible && selectedOrder && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-gradient-to-br from-lime-500 via-green-600 to-emerald-700 rounded-lg shadow-2xl p-6 max-w-md w-full text-white relative">
            <button
              className="absolute top-3 right-3 text-lime-100 hover:text-white"
              onClick={closePopup}
            >
              Close
            </button>
            <h2 className="text-2xl font-bold mb-6">Order Details</h2>
            <p className="text-sm mb-2">
              <span className="font-medium">Order ID:</span> {selectedOrder.id}
            </p>
            <p className="text-sm mb-2">
              <span className="font-medium">User Email:</span>{" "}
              {selectedOrder.email}
            </p>
            <p className="text-sm mb-2">
              <span className="font-medium">Total Items:</span> 1
            </p>
            <p className="text-sm mb-2">
              <span className="font-medium">Total Price:</span> $
              {selectedOrder.price}
            </p>
            <p className="text-sm mb-2">
              <span className="font-medium">Shipping Fee:</span> $
              {selectedOrder.shippingFee}
            </p>
            <p className="text-sm mb-6">
              <span className="font-medium">Status:</span>{" "}
              <span
                className={
                  selectedOrder.status === "Pending"
                    ? "text-yellow-400"
                    : "text-lime-300"
                }
              >
                {selectedOrder.status}
              </span>
            </p>
            <div className="w-full h-40 mb-6">
              <img
                src={selectedOrder.image}
                alt={selectedOrder.title}
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
            <button
              className="w-full bg-lime-600 text-white py-2 rounded-lg hover:bg-lime-700 transition shadow-md"
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
