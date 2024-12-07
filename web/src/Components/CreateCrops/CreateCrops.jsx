import React from 'react';
import { FaTimes } from "react-icons/fa";

const CreateCrop = ({ showAddCrop, setShowAddCrop }) => {
  const handleAddCrop = () => {
    setShowAddCrop(false);
  };

  return (
    <div className={`fixed w-full h-full top-0 left-0 bg-black bg-opacity-50 flex items-center justify-center ${showAddCrop ? "block" : "hidden"}`}>
      <form className="relative max-w-4xl w-[600px] bg-green-900 p-8 rounded-lg shadow-lg space-y-3">
        <div className="absolute top-6 right-6" onClick={handleAddCrop}>
          <FaTimes style={{ color: "red", fontSize: "24px" }} />
        </div>
        <h2 className="text-2xl font-semibold text-white">Add Crop</h2>
        <div>
          <label className="block text-sm font-medium text-white">Crop Name</label>
          <input
            type="text"
            placeholder="Enter crop name"
            className="w-full mt-1 p-2 border bg-transparent text-white placeholder:text-white rounded-md outline-none focus:ring focus:ring-green-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white">Description</label>
          <textarea
            placeholder="Enter crop description"
            rows="4"
            className="w-full mt-1 p-2 border bg-transparent text-white placeholder:text-white rounded-md outline-none focus:ring focus:ring-green-400"
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-white">Type</label>
          <select className="w-full mt-1 p-2 border bg-green-800 text-white placeholder:text-white rounded-md outline-none focus:ring focus:ring-green-400">
            <option value="">Select type</option>
            <option value="fruit">Fruit</option>
            <option value="vegetable">Vegetable</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-white">Crop Image</label>
          <input
            type="file"
            accept="image/*"
            className="mt-1 border p-2 rounded-md text-white"
          />
        </div>
       
        <div className="text-right">
          <button
            type="submit"
            className="px-6 py-2 bg-green-700 text-white rounded-md hover:bg-green-800"
          >
            Add Crop
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCrop;
