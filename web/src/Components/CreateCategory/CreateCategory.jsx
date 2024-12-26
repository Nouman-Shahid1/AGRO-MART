"use client";

import { createCategory } from "@/reducers/Category/categorySlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const CreateCategory = ({ showAddCategory, setShowAddCategory }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    categoryName: "",
    type: "",
    categoryImage: null,
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle file change
  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, categoryImage: e.target.files[0] }));
  };

  const handleAddCategory = (e) => {
    e.preventDefault(); 


    const categoryData = {
      name: formData.categoryName,
      type: formData.type,
      image: formData.categoryImage,
    };
    dispatch(createCategory(categoryData));

    setFormData({ categoryName: "", type: "", categoryImage: null });
    setShowAddCategory(false);
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-all duration-300 ${
        showAddCategory ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <form
        onSubmit={handleAddCategory}
        className="relative max-w-4xl w-[600px] bg-gradient-to-br from-green-900 via-emerald-700 to-lime-500 text-white rounded-xl shadow-2xl p-8 space-y-6 animate-fade-in"
      >
        <button
          type="button"
          className="absolute top-4 right-4 text-gray-300 hover:text-white transition-colors"
          onClick={() => setShowAddCategory(false)}
        >
          X
        </button>

        <h2 className="text-3xl font-bold text-center text-green-300">
          Add Category
        </h2>

        <div className="space-y-2">
          <label htmlFor="categoryName" className="block text-sm font-semibold">
            Category Name
          </label>
          <input
            id="categoryName"
            name="categoryName"
            type="text"
            value={formData.categoryName}
            onChange={handleInputChange}
            placeholder="Enter category name"
            className="w-full p-3 bg-white bg-opacity-20 text-white placeholder-white rounded-lg border border-gray-400 outline-none focus:ring-2 focus:ring-green-400 focus:bg-opacity-30 transition-all"
            required
          />
        </div>

        {/* Type */}
        <div className="space-y-2">
          <label htmlFor="type" className="block text-sm font-semibold">
            Type
          </label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
            className="w-full p-3 bg-white bg-opacity-20 text-white rounded-lg border border-gray-400 outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-opacity-30 transition-all"
            required
          >
            <option className="bg-green-800" value="">Select type</option>
            <option className="bg-green-800" value="machines">Machines</option>
            <option className="bg-green-800" value="crops">Crops</option>
            <option className="bg-green-800" value="seeds">Seeds</option>
            <option className="bg-green-800" value="pesticides">Pesticides</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="categoryImage" className="block text-sm font-semibold">
            Category Image
          </label>
          <input
            id="categoryImage"
            name="categoryImage"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full p-3 bg-white bg-opacity-20 text-white rounded-lg border border-gray-400 outline-none focus:ring-2 focus:ring-pink-400 focus:bg-opacity-30 transition-all"
            required
          />
        </div>

        <div className="text-end">
          <button
            type="submit"
            className="px-8 py-3 text-lg font-bold text-white rounded-lg bg-green-500 shadow-lg hover:shadow-xl hover:bg-green-600 focus:ring-4 focus:ring-green-500 transition-all"
          >
            Add Category
          </button>
        </div>
      </form>
    </div>
  );
};
export default CreateCategory;
