import React from 'react';
import { FaTimes } from "react-icons/fa";

const CreatePesticide = ({ showAddPesticide, setShowAddPesticide }) => {
  const handleAddPesticide = () => {
    setShowAddPesticide(false);
  };

  return (
    <div className={`fixed w-full h-full top-0 left-0 bg-black bg-opacity-50 flex items-center justify-center ${showAddPesticide ? "block" : "hidden"}`}>
      <form className="relative max-w-4xl w-[600px] bg-green-900 p-8 rounded-lg shadow-lg space-y-3">
        <div className="absolute top-6 right-6" onClick={handleAddPesticide}>
          <FaTimes style={{ color: "red", fontSize: "24px" }} />
        </div>
        <h2 className="text-2xl font-semibold text-white">Add Pesticide</h2>
        <div>
          <label className="block text-sm font-medium text-white">Pesticide Name</label>
          <input
            type="text"
            placeholder="Enter pesticide name"
            className="w-full mt-1 p-2 border bg-transparent text-white placeholder:text-white rounded-md outline-none focus:ring focus:ring-green-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white">Description</label>
          <textarea
            placeholder="Enter pesticide description"
            rows="4"
            className="w-full mt-1 p-2 border bg-transparent text-white placeholder:text-white rounded-md outline-none focus:ring focus:ring-green-400"
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-white">Category</label>
          <select className="w-full mt-1 p-2 border bg-green-800 text-white placeholder:text-white rounded-md outline-none focus:ring focus:ring-green-400">
            <option value="">Select category</option>
            <option value="organic">Organic</option>
            <option value="chemical">Chemical</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-white"> Pesticide Image</label>
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
            Add Pesticide
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePesticide;
