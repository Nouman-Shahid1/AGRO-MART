"use client";

import { createCategory, updateCategory } from "@/reducers/Category/categorySlice";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

const CreateCategory = ({ showAddCategory, setShowAddCategory, initialCategory }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: null,
    user_id: 1, // Static user_id (replace with dynamic value if needed)
  });

  // Load initialCategory data into form when editing
  useEffect(() => {
    if (initialCategory) {
      setFormData({
        name: initialCategory.name,
        description: initialCategory.description,
        image: null, // Keep it empty, the backend retains the old image if no new one is provided
        user_id: initialCategory.user_id,
      });
    } else {
      setFormData({ name: "", description: "", image: null, user_id: 1 });
    }
  }, [initialCategory]);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle file change
  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  // Submit the form and dispatch the appropriate action
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const categoryData = {
      name: formData.name,
      description: formData.description,
      user_id: formData.user_id,
    };
  
    // Check if there's a new image to upload
    if (formData.image) {
      const reader = new FileReader();
      reader.onload = () => {
        categoryData.image = reader.result; // Base64-encoded image
        submitData(categoryData);
      };
      reader.readAsDataURL(formData.image);
    } else {
      submitData(categoryData);
    }
  };
  
  const submitData = (categoryData) => {
    if (initialCategory) {
      dispatch(updateCategory({ id: initialCategory.id, categoryData }))
        .unwrap()
        .then(() => {
          alert("Category updated successfully!");
          setFormData({ name: "", description: "", image: null, user_id: 1 });
          setShowAddCategory(false);
        })
        .catch((err) => {
          console.error("Failed to update category:", err);
        });
    } else {
      dispatch(createCategory(categoryData))
        .unwrap()
        .then(() => {
          alert("Category created successfully!");
          setFormData({ name: "", description: "", image: null, user_id: 1 });
          setShowAddCategory(false);
        })
        .catch((err) => {
          console.error("Failed to create category:", err);
        });
    }
  };
  

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-all duration-300 ${
        showAddCategory ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <form
        onSubmit={handleSubmit}
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
          {initialCategory ? "Edit Category" : "Add Category"}
        </h2>

        {/* Name */}
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-semibold">
            Category Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter category name"
            className="w-full p-3 bg-white bg-opacity-20 text-white placeholder-white rounded-lg border border-gray-400 outline-none focus:ring-2 focus:ring-green-400 focus:bg-opacity-30 transition-all"
            required
          />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <label htmlFor="description" className="block text-sm font-semibold">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Enter description"
            className="w-full p-3 bg-white bg-opacity-20 text-white placeholder-white rounded-lg border border-gray-400 outline-none focus:ring-2 focus:ring-blue-400 focus:bg-opacity-30 transition-all"
            required
          ></textarea>
        </div>

        {/* Image */}
        <div className="space-y-2">
          <label htmlFor="image" className="block text-sm font-semibold">
            Category Image
          </label>
          <input
            id="image"
            name="image"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full p-3 bg-white bg-opacity-20 text-white rounded-lg border border-gray-400 outline-none focus:ring-2 focus:ring-pink-400 focus:bg-opacity-30 transition-all"
          />
        </div>

        {/* Submit Button */}
        <div className="text-end">
          <button
            type="submit"
            className="px-8 py-3 text-lg font-bold text-white rounded-lg bg-green-500 shadow-lg hover:shadow-xl hover:bg-green-600 focus:ring-4 focus:ring-green-500 transition-all"
          >
            {initialCategory ? "Update Category" : "Add Category"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCategory;
