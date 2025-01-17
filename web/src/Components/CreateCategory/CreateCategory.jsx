// CreateCategory Component
"use client";

import {
  createCategory,
  updateCategory,
  fetchCategories
} from "@/reducers/Category/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

const CreateCategory = ({
  showAddCategory,
  setShowAddCategory,
  initialCategory,
}) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth); // Get user from auth state
  const [preview, setPreview] = useState(null);
  const { loading, error } = useSelector((state) => state.category);
  useEffect(() => {
    if (user?.userId) {
      console.log("Setting userId from Redux:", user.userId);
      setFormData((prev) => ({ ...prev, userId: user.userId }));
    } else if (localStorage.getItem("userId")) {
      console.log(
        "Setting userId from localStorage:",
        localStorage.getItem("userId")
      );
      setFormData((prev) => ({
        ...prev,
        userId: localStorage.getItem("userId"),
      }));
    } else {
      console.error("User ID is missing in both Redux and localStorage!");
    }
  }, [user]);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: null,
    userId: user?.userId || localStorage.getItem("userId") || null, // Handle fallback
  });

  useEffect(() => {
    if (initialCategory) {
      setFormData({
        name: initialCategory.name,
        description: initialCategory.description,
        image: null,
        userId: user?.userId || initialCategory.userId || null,
      });
      setPreview(initialCategory.imagePath || null);
    } else {
      resetForm();
    }
  }, [initialCategory, user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && !file.type.startsWith("image/")) {
      alert("Please upload a valid image file.");
      return;
    }
    setFormData((prev) => ({ ...prev, image: file }));
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.userId) {
      const storedUserId = localStorage.getItem("userId");
      if (storedUserId) {
        console.log("Falling back to localStorage for userId:", storedUserId);
        setFormData((prev) => ({ ...prev, userId: storedUserId }));
      } else {
        alert("User ID is missing. Please log in again.");
        return;
      }
    }

    // Ensure `userId` is available
    console.log("Final formData before submission:", formData);

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("description", formData.description);

    const userId = formData.userId || localStorage.getItem("userId");
    formDataToSend.append("userId", userId);

    if (formData.image) {
      formDataToSend.append("image", formData.image);
    }

    try {
      const action = initialCategory
        ? updateCategory({
            id: initialCategory.id,
            categoryData: formDataToSend,
          })
        : createCategory(formDataToSend);

      await dispatch(action).unwrap();
      alert("Category submitted successfully!");
      await dispatch(fetchCategories()).unwrap();
      resetForm();
    } catch (err) {
      console.error("Error during category submission:", err);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      image: null,
      userId: user?.userId || null,
    });
    setPreview(null);
    setShowAddCategory(false);
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
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="w-full h-40 object-cover rounded-lg"
            />
          )}
        </div>

        <div className="text-end">
          <button
            type="submit"
            className="px-8 py-3 text-lg font-bold text-white rounded-lg bg-green-500 shadow-lg hover:shadow-xl hover:bg-green-600 focus:ring-4 focus:ring-green-500 transition-all"
            disabled={loading}
          >
            {loading
              ? "Processing..."
              : initialCategory
              ? "Update Category"
              : "Add Category"}
          </button>
        </div>

        {error && (
          <p className="text-red-500 text-center mt-4">
            {typeof error === "string"
              ? error
              : error?.message || "Something went wrong."}
          </p>
        )}
      </form>
    </div>
  );
};

export default CreateCategory;
