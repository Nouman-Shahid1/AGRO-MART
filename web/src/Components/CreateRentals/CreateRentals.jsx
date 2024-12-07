"use client";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

const CreateRental = ({ showAddRental, setShowAddRental }) => {
  const handleClose = () => {
    setShowAddRental(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
  };

  return (
    <div
      className={`fixed w-full h-[900px] -top-8 right-0 bg-[rgb(0,0,0,0.7)] flex items-center justify-center ${
        showAddRental ? "block" : "hidden"
      }`}
    >
      <form
        className="relative max-w-4xl w-[600px] h-[620px] overflow-scroll mx-auto bg-green-900 p-8 rounded-lg shadow-lg space-y-3"
        onSubmit={handleSubmit}
      >
        <div className="absolute top-6 right-6" onClick={handleClose}>
          <FaTimes style={{ color: "red", fontSize: "24px" }} />
        </div>

        <h2 className="text-4xl font-extrabold text-center text-white">
          Add Rental
        </h2>

        <div className="flex justify-between flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-md font-semibold text-white">
              Machine Name
            </label>
            <input
              type="text"
              name="machineName"
              placeholder="Enter machine name"
              className="w-full mt-1 p-2 bg-transparent text-white placeholder:text-white border rounded-md outline-none focus:ring focus:ring-green-400"
            />
          </div>

          <div className="flex-1">
            <label className="block text-md font-semibold text-white">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full mt-1 p-2 bg-transparent text-white placeholder:text-white border rounded-md outline-none focus:ring focus:ring-green-400"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-white">
            Phone Number
          </label>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Enter phone number"
            className="w-full mt-1 p-2 border bg-transparent text-white placeholder:text-white rounded-md outline-none focus:ring focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white">
            Address
          </label>
          <textarea
            name="address"
            placeholder="Enter address"
            rows="2"
            className="w-full mt-1 p-2 border bg-transparent text-white placeholder:text-white rounded-md outline-none focus:ring focus:ring-green-400"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-white">
            Available at which location
          </label>
          <input
            type="text"
            name="location"
            placeholder="Enter location"
            className="w-full mt-1 p-2 border bg-transparent text-white placeholder:text-white rounded-md outline-none focus:ring focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white">
            Timing
          </label>
          <input
            type="text"
            name="timing"
            placeholder="Enter timing"
            className="w-full mt-1 p-2 border bg-transparent text-white placeholder:text-white rounded-md outline-none focus:ring focus:ring-green-400"
          />
        </div>

        <div className="flex justify-between gap-4 flex-col sm:flex-row">
          <div className="flex-1">
            <label className="block text-md font-semibold text-white">
              Date
            </label>
            <input
              type="date"
              name="timing"
              className="w-full mt-1 p-3 bg-transparent text-white placeholder:text-white border rounded-md outline-none focus:ring focus:ring-green-400"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-white">
            Image
          </label>
          <input
            type="file"
            name="image"
            accept="image/*"
            className="mt-1 w-full border text-white rounded-md bg-transparent p-2"
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
