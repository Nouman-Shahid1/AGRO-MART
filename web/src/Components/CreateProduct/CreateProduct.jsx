"use client";

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { createProduct, updateProduct } from "@/reducers/product/productSlice";
import { fetchCategories } from "@/reducers/Category/categorySlice";

const CreateProduct = ({ showAddProduct, setShowAddProduct, initialData }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);

  const [formData, setFormData] = useState({
    name: initialData?.name || "",
    description: initialData?.description || "",
    category: initialData?.category || "",
    price: initialData?.price || "",
    image: null,
  });

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("category", formData.category);
    data.append("price", formData.price);
    if (formData.image) {
      data.append("image", formData.image);
    }

    if (initialData?.id) {
      // Update product
      dispatch(updateProduct({ id: initialData.id, formData: data }))
        .unwrap()
        .then(() => alert("Product updated successfully!"))
        .catch((err) => alert(`Error updating product: ${err}`));
    } else {
      // Create product
      dispatch(createProduct(data))
        .unwrap()
        .then(() => alert("Product created successfully!"))
        .catch((err) => alert(`Error creating product: ${err}`));
    }

    setShowAddProduct(false);
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-all duration-300 ${
        showAddProduct ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <form
        className="relative max-w-4xl w-[600px] bg-gradient-to-br from-green-900 via-emerald-700 to-lime-500 text-white rounded-3xl shadow-2xl p-8 space-y-6 animate-fade-in"
        onSubmit={handleSubmit}
      >
        {/* Close Button */}
        <button
          type="button"
          className="absolute top-4 right-4 text-gray-300 hover:text-white transition-colors"
          onClick={() => setShowAddProduct(false)}
        >
          X
        </button>

        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-green-300">
          {initialData ? "Edit Product" : "Add Product"}
        </h2>

        {/* Product Name */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold">Product Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter product name"
            className="w-full p-3 bg-white bg-opacity-20 text-white placeholder-white rounded-lg border border-gray-400 outline-none focus:ring-2 focus:ring-green-400 focus:bg-opacity-30 transition-all"
          />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Enter product description"
            rows="4"
            className="w-full p-3 bg-white bg-opacity-20 text-white placeholder-white rounded-lg border border-gray-400 outline-none focus:ring-2 focus:ring-blue-400 focus:bg-opacity-30 transition-all"
          ></textarea>
        </div>

        {/* Category */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="w-full p-3 bg-white bg-opacity-20 text-white rounded-lg border border-gray-400 outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-opacity-30 transition-all"
          >
            <option className="bg-green-800" value="">
              Select category
            </option>
            {categories.map((cat) => (
              <option
                key={cat.id}
                className="bg-green-800"
                value={cat.name}
              >
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        {/* Price */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            placeholder="Enter price"
            className="w-full p-3 bg-white bg-opacity-20 text-white placeholder-white rounded-lg border border-gray-400 outline-none focus:ring-2 focus:ring-green-400 focus:bg-opacity-30 transition-all"
          />
        </div>

        {/* Product Image */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold">Product Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full p-3 bg-white bg-opacity-20 text-white rounded-lg border border-gray-400 outline-none focus:ring-2 focus:ring-pink-400 focus:bg-opacity-30 transition-all"
          />
        </div>

        {/* Submit Button */}
        <div className="text-right">
          <button
            type="submit"
            className="px-8 py-3 text-lg font-bold text-white rounded-lg bg-gradient-to-r from-green-500 to-green-700 shadow-lg hover:shadow-xl hover:from-green-600 hover:to-green-800 focus:ring-4 focus:ring-green-500 transition-all"
          >
            {initialData ? "Update Product" : "Add Product"}
          </button>
        </div>
      </form>
    </div>
  );
};

CreateProduct.propTypes = {
  showAddProduct: PropTypes.bool.isRequired,
  setShowAddProduct: PropTypes.func.isRequired,
  initialData: PropTypes.object,
};

export default CreateProduct;