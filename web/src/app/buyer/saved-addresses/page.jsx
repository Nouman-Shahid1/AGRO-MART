"use client";
import React, { useState } from "react";
import Profile from "@/Components/ProfileCard/ProfileCard";

export default function SavedAddresses() {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "Address 1",
      addressLine: "123 Main Street",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      phone: "123-456-7890",
    },
    {
      id: 2,
      name: "Address 2",
      addressLine: "456 Business Rd",
      city: "Los Angeles",
      state: "CA",
      zipCode: "90001",
      phone: "987-654-3210",
    },
  ]);

  const [selectedAddress, setSelectedAddress] = useState(null);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [newAddress, setNewAddress] = useState({
    id: null,
    name: "",
    addressLine: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
  });

  const handleViewDetails = (address) => {
    setSelectedAddress(address);
    setNewAddress(address); 
    setPopupVisible(true);
  };

  const closePopup = () => {
    setSelectedAddress(null);
    setPopupVisible(false);
    setNewAddress({
      id: null,
      name: "",
      addressLine: "",
      city: "",
      state: "",
      zipCode: "",
      phone: "",
    });
  };

  const handleDelete = (id) => {
    setAddresses(addresses.filter((address) => address.id !== id));
  };

  const handleSave = () => {
    if (selectedAddress) {
     
      setAddresses((prev) =>
        prev.map((address) =>
          address.id === selectedAddress.id ? { ...newAddress } : address
        )
      );
    } else {
      
      setAddresses((prev) => [
        ...prev,
        { ...newAddress, id: prev.length + 1 },
      ]);
    }
    closePopup();
  };

  const handleEdit = (address) => {
    setSelectedAddress(address);
    setNewAddress(address); 
    setPopupVisible(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAddress((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-gradient-to-r from-green-400 via-yellow-200 to-green-500 min-h-screen p-6">
     
      <Profile />

      
      <h2 className="text-green-600 text-xl font-semibold mb-4 mt-6">Saved Addresses</h2>

     
      <div className="flex flex-wrap gap-6 items-start">
        {addresses.map((address) => (
          <div
            key={address.id}
            className="bg-white shadow-md rounded-lg p-4 w-[300px] flex-shrink-0"
          >
            <h3 className="text-green-600 text-lg font-semibold mb-2">
              {address.name}
            </h3>
            <p className="text-sm">
              {address.addressLine}, {address.city}, {address.state} - {address.zipCode}
            </p>
            <p className="text-sm">
              <span className="font-medium">Phone:</span> {address.phone}
            </p>
            <div className="flex gap-2 mt-4">
              <button
                className="bg-green-600 text-white py-1 px-3 rounded hover:bg-green-700 transition"
                onClick={() => handleViewDetails(address)}
              >
                View
              </button>
              <button
                className="bg-green-600 text-white py-1 px-3 rounded hover:bg-green-700 transition"
                onClick={() => handleEdit(address)}
              >
                Edit
              </button>
              <button
                className="bg-red-600 text-white py-1 px-3 rounded hover:bg-red-700 transition"
                onClick={() => handleDelete(address.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}

       
        <button
          className="flex items-center gap-2  text-white py-2 px-4 rounded hover:bg-green-700 transition-transform duration-200 self-start"
          onClick={() => {
            setNewAddress({
              id: null,
              name: "",
              addressLine: "",
              city: "",
              state: "",
              zipCode: "",
              phone: "",
            });
            setSelectedAddress(null);
            setPopupVisible(true);
          }}
          style={{
            padding: "12px 16px",
            marginTop: "auto", 
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          Add New Address
        </button>
      </div>

      
      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative">
            <h2 className="text-green-600 text-xl font-bold mb-4">
              {selectedAddress ? "Edit Address" : "Add New Address"}
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={newAddress.name}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                name="addressLine"
                placeholder="Address Line"
                value={newAddress.addressLine}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={newAddress.city}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                value={newAddress.state}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                name="zipCode"
                placeholder="Zip Code"
                value={newAddress.zipCode}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={newAddress.phone}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="flex gap-4 mt-6">
              <button
                className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
                onClick={handleSave}
              >
                Save
              </button>
              <button
                className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500 transition"
                onClick={closePopup}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
