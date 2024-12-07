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
      image: "https://gvt.net/wp-content/uploads/2022/02/106-super-crop-20-20-10-lawn-fertilizer-50.jpg",
    },
    {
      id: 229207,
      title: "Product Name 2",
      status: "Shipped",
      price: 9800,
      shippingFee: 5,
      email: "user@argomart.com",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjG30wgvoluZSUrD0uBKd4Zfd-7TWUB37QY4mQmqjZusi3bzhSeUZckJHy6zAzFmGbbIo&usqp=CAU",
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
    <div className="bg-gradient-to-r from-green-400 via-yellow-200 to-green-500 min-h-screen p-6">
     
      <Profile />

    
      <div className="flex justify-center gap-4 mt-6">
        <button
          className={`px-4 py-2 rounded ${
            filterStatus === "All"
              ? "bg-green-700 text-white"
              : "bg-green-600 text-white hover:bg-green-700"
          } transition`}
          onClick={() => handleFilter("All")}
        >
          All
        </button>
        <button
          className={`px-4 py-2 rounded ${
            filterStatus === "To Ship"
              ? "bg-green-700 text-white"
              : "bg-green-600 text-white hover:bg-green-700"
          } transition`}
          onClick={() => handleFilter("To Ship")}
        >
          To Ship
        </button>
        <button
          className={`px-4 py-2 rounded ${
            filterStatus === "To Receive"
              ? "bg-green-700 text-white"
              : "bg-green-600 text-white hover:bg-green-700"
          } transition`}
          onClick={() => handleFilter("To Receive")}
        >
          To Receive
        </button>
      </div>

    
      <h2 className="text-green-600 text-xl font-semibold mb-4 mt-6">My Orders</h2>
      <div className="flex flex-wrap gap-6">
        {filteredOrders.map((order) => (
          <div
            key={order.id}
            className="bg-white shadow-md rounded-lg p-4 w-[300px] flex-shrink-0"
          >
            <img
              src={order.image}
              alt={order.title}
              className="w-16 h-16 rounded-lg mb-4 object-cover"
            />
            <h3 className="text-green-600 text-lg font-semibold mb-2">
              {order.id} - {order.title}
            </h3>
            <p className="text-sm">
              <span className="font-medium">Status:</span>{" "}
              <span
                className={
                  order.status === "Pending"
                    ? "text-yellow-500"
                    : "text-green-500"
                }
              >
                {order.status}
              </span>
            </p>
            <p className="text-sm">
              <span className="font-medium">Total Price:</span> ${order.price}
            </p>
            <button
              className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
              onClick={() => handleViewDetails(order)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>

     
      {isPopupVisible && selectedOrder && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative">
            <h2 className="text-green-600 text-xl font-bold mb-4">
              Order Details
            </h2>
            <p className="text-sm">
              <span className="font-medium">Order ID:</span> {selectedOrder.id}
            </p>
            <p className="text-sm">
              <span className="font-medium">User Email:</span>{" "}
              {selectedOrder.email}
            </p>
            <p className="text-sm">
              <span className="font-medium">Total Items:</span> 1
            </p>
            <p className="text-sm">
              <span className="font-medium">Total Price:</span> $
              {selectedOrder.price}
            </p>
            <p className="text-sm">
              <span className="font-medium">Shipping Fee:</span> $
              {selectedOrder.shippingFee}
            </p>
            <p className="text-sm">
              <span className="font-medium">Status:</span>{" "}
              {selectedOrder.status}
            </p>
            <h3 className="text-green-600 text-lg font-semibold mt-4">
              Ordered Items
            </h3>
            <p className="text-sm">
              <span className="font-medium">Product:</span>{" "}
              {selectedOrder.title}
            </p>
            <p className="text-sm">
              <span className="font-medium">Quantity:</span> 1
            </p>
            <p className="text-sm">
              <span className="font-medium">Price:</span> ${selectedOrder.price}
            </p>

           
            <div className="mt-4">
              <h3 className="text-green-600 text-lg font-semibold mb-2">
                Product Image
              </h3>
              <img
                src={selectedOrder.image}
                alt={selectedOrder.title}
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
