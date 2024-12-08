"use client";
import { FaTimes } from "react-icons/fa";

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
      className={`fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center transition-all duration-300 ${
        showAddRental ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <form
        className="relative max-w-4xl w-[600px] bg-gradient-to-br from-green-900 via-emerald-700 to-lime-500 text-white rounded-lg shadow-2xl p-6 space-y-4 animate-fade-in"
        onSubmit={handleSubmit}
      >
        {/* Close Button */}
        <button
          type="button"
          className="absolute top-4 right-4 text-gray-300 hover:text-white transition-colors"
          onClick={handleClose}
        >
          X
        </button>

        {/* Header */}
        <h2 className="text-2xl font-bold text-center text-green-300">
          Add Rental Machine
        </h2>

        {/* Compact Layout */}
        <div className="grid grid-cols-2 gap-4">
          {/* Machine Name */}
          <div className="space-y-1">
            <label className="block text-sm font-semibold">Machine Name</label>
            <input
              type="text"
              name="machineName"
              placeholder="Enter machine name"
              className="w-full p-2 bg-white bg-opacity-20 text-white placeholder-white rounded-md border border-gray-400 outline-none focus:ring-2 focus:ring-green-400 focus:bg-opacity-30 transition-all"
            />
          </div>

          {/* Rental Price */}
          <div className="space-y-1">
            <label className="block text-sm font-semibold">Rental Price</label>
            <input
              type="number"
              name="rentalPrice"
              placeholder="Enter price per hour/day"
              className="w-full p-2 bg-white bg-opacity-20 text-white placeholder-white rounded-md border border-gray-400 outline-none focus:ring-2 focus:ring-green-400 focus:bg-opacity-30 transition-all"
            />
          </div>

          {/* Availability */}
          <div className="space-y-1">
            <label className="block text-sm font-semibold">Availability</label>
            <input
              type="text"
              name="availability"
              placeholder="e.g., Mon-Fri, 9 AM - 5 PM"
              className="w-full p-2 bg-white bg-opacity-20 text-white placeholder-white rounded-md border border-gray-400 outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-opacity-30 transition-all"
            />
          </div>

          {/* Rental Location */}
          <div className="space-y-1">
            <label className="block text-sm font-semibold">Location</label>
            <input
              type="text"
              name="location"
              placeholder="Enter rental location"
              className="w-full p-2 bg-white bg-opacity-20 text-white placeholder-white rounded-md border border-gray-400 outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-opacity-30 transition-all"
            />
          </div>

          {/* Machine Category */}
          <div className="space-y-1">
            <label className="block text-sm font-semibold">Category</label>
            <select
              name="category"
              className="w-full p-2 bg-white bg-opacity-20 text-white rounded-md border border-gray-400 outline-none focus:ring-2 focus:ring-blue-400 focus:bg-opacity-30 transition-all"
            >
              <option value="">Select category</option>
              <option value="agriculture">Agriculture</option>
              <option value="construction">Construction</option>
              <option value="industrial">Industrial</option>
            </select>
          </div>

          {/* Image */}
          <div className="space-y-1">
            <label className="block text-sm font-semibold">Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              className="w-full p-2 bg-white bg-opacity-20 text-white rounded-md border border-gray-400 outline-none focus:ring-2 focus:ring-pink-400 focus:bg-opacity-30 transition-all"
            />
          </div>
        </div>

        {/* Description */}
        <div className="space-y-1">
          <label className="block text-sm font-semibold">Description</label>
          <textarea
            name="description"
            placeholder="Enter machine description"
            rows="3"
            className="w-full p-2 bg-white bg-opacity-20 text-white placeholder-white rounded-md border border-gray-400 outline-none focus:ring-2 focus:ring-blue-400 focus:bg-opacity-30 transition-all"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-right">
          <button
            type="submit"
            className="px-6 py-2 text-sm font-bold text-white rounded-md bg-gradient-to-r from-green-500 to-green-700 shadow-md hover:shadow-lg hover:from-green-600 hover:to-green-800 focus:ring-4 focus:ring-green-500 transition-all"
          >
            Add Machine
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateRental;
