'use client';
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

const CreateRental = ({ showAddRental, setShowAddRental }) => {
  const handleClose = () => {
    setShowAddRental(false);
  };



  return (
    <div
      className={`fixed w-full h-[900px] -top-8 right-0 bg-[rgb(0,0,0,0.5)] flex items-center justify-center ${
        showAddRental ? "block" : "hidden"
      }`}
    >
      <form
        className="relative max-w-4xl w-[600px] h-[620px] overflow-scroll mx-auto bg-white p-8 rounded-lg shadow-lg space-y-3"
        onSubmit={handleSubmit}
      >
        <div className="absolute top-6 right-6" onClick={handleClose}>
          <FaTimes style={{ color: "red", fontSize: "24px" }} />
        </div>

        <h2 className="text-2xl font-semibold text-gray-700">Add Rental</h2>

        <div>
          <label className="block text-sm font-medium text-gray-600">Machine Name</label>
          <input
            type="text"
            name="machineName"
            placeholder="Enter machine name"
            className="w-full mt-1 p-2 border rounded-md outline-none focus:ring focus:ring-green-400"
    
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full mt-1 p-2 border rounded-md outline-none focus:ring focus:ring-green-400"
            
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Enter phone number"
            className="w-full mt-1 p-2 border rounded-md outline-none focus:ring focus:ring-green-400"
            
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">Address</label>
          <textarea
            name="address"
            placeholder="Enter address"
            rows="2"
            className="w-full mt-1 p-2 border rounded-md outline-none focus:ring focus:ring-green-400"

          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">Available at which location</label>
          <input
            type="text"
            name="location"
            placeholder="Enter location"
            className="w-full mt-1 p-2 border rounded-md outline-none focus:ring focus:ring-green-400"
        
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">Timing</label>
          <input
            type="text"
            name="timing"
            placeholder="Enter timing"
            className="w-full mt-1 p-2 border rounded-md outline-none focus:ring focus:ring-green-400"

          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            className="mt-1"

          />
        </div>

        <div className="text-right">
          <button
            type="submit"
            className="px-6 py-2 bg-green-700 text-white rounded-md hover:bg-green-800"
          >
            Add Rental
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateRental;
