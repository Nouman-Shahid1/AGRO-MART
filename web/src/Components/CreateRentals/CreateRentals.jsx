'use client';
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

const CreateRental = ({ showAddRental, setShowAddRental }) => {
  const handleClose = () => {
    setShowAddRental(false);
  };

  const [rentalData, setRentalData] = useState({
    image: null,
    machineName: "",
    name: "",
    phoneNumber: "",
    address: "",
    location: "",
    timing: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setRentalData({ ...rentalData, image: files[0] });
    } else {
      setRentalData({ ...rentalData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Rental data submitted:", rentalData);
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
        {/* Close Button */}
        <div className="absolute top-6 right-6" onClick={handleClose}>
          <FaTimes style={{ color: "red", fontSize: "24px" }} />
        </div>

        {/* Form Title */}
        <h2 className="text-2xl font-semibold text-gray-700">Add Rental</h2>

        {/* Machine Name */}
        <div>
          <label className="block text-sm font-medium text-gray-600">Machine Name</label>
          <input
            type="text"
            name="machineName"
            placeholder="Enter machine name"
            className="w-full mt-1 p-2 border rounded-md outline-none focus:ring focus:ring-green-400"
            onChange={handleChange}
          />
        </div>

        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-600">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full mt-1 p-2 border rounded-md outline-none focus:ring focus:ring-green-400"
            onChange={handleChange}
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium text-gray-600">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Enter phone number"
            className="w-full mt-1 p-2 border rounded-md outline-none focus:ring focus:ring-green-400"
            onChange={handleChange}
          />
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm font-medium text-gray-600">Address</label>
          <textarea
            name="address"
            placeholder="Enter address"
            rows="2"
            className="w-full mt-1 p-2 border rounded-md outline-none focus:ring focus:ring-green-400"
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Available at which location */}
        <div>
          <label className="block text-sm font-medium text-gray-600">Available at which location</label>
          <input
            type="text"
            name="location"
            placeholder="Enter location"
            className="w-full mt-1 p-2 border rounded-md outline-none focus:ring focus:ring-green-400"
            onChange={handleChange}
          />
        </div>

        {/* Timing */}
        <div>
          <label className="block text-sm font-medium text-gray-600">Timing</label>
          <input
            type="text"
            name="timing"
            placeholder="Enter timing"
            className="w-full mt-1 p-2 border rounded-md outline-none focus:ring focus:ring-green-400"
            onChange={handleChange}
          />
        </div>

        {/* Image */}
        <div>
          <label className="block text-sm font-medium text-gray-600">Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            className="mt-1"
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
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
