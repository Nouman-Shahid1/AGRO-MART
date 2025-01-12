"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CiSearch, CiEdit } from "react-icons/ci";
import { FaTrash, FaPlusCircle } from "react-icons/fa";
import { fetchCategories } from "@/reducers/Category/categorySlice";
import CreateCategory from "../CreateCategory/CreateCategory";

const ProductTable = () => {
  const dispatch = useDispatch();
  const { categories, status } = useSelector((state) => state.category);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddCategory, setShowAddCategory] = useState(false);

  // Fetch categories on component load
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  // Filter categories based on search term
  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="mb-6 flex flex-col lg:flex-row items-center justify-between px-6 py-8 bg-gradient-to-r from-green-500 via-lime-400 to-emerald-600 text-white rounded-3xl shadow-lg">
        <div>
          <h3 className="text-3xl font-bold">Categories List</h3>
          <p className="text-sm">Manage all your categories here.</p>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
          <button
            className="py-2 px-4 bg-white text-green-600 rounded-lg shadow-md hover:bg-green-100 transition duration-150 flex items-center space-x-2"
            onClick={() => setShowAddCategory(true)}
          >
            <FaPlusCircle />
            <span>Add New Category</span>
          </button>

          {/* Search Input */}
          <div className="flex items-center mt-3 md:mt-0">
            <input
              type="text"
              placeholder="Search categories"
              className="w-[200px] md:w-[250px] px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-r-lg">
              <CiSearch size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-lg rounded-3xl overflow-hidden">
        <table className="min-w-full text-sm">
          {/* Header */}
          <thead className="bg-gradient-to-r from-green-500 to-emerald-700 text-white">
            <tr>
              <th className="py-4 px-6 text-left font-semibold">Icon</th>
              <th className="py-4 px-6 text-left font-semibold">Name</th>
              <th className="py-4 px-6 text-left font-semibold">Description</th>
              <th className="py-4 px-6 text-center font-semibold">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {status === "loading" ? (
              <tr>
                <td colSpan="4" className="text-center py-6">
                  Loading...
                </td>
              </tr>
            ) : filteredCategories.length > 0 ? (
              filteredCategories.map((category) => (
                <tr
                  key={category.id}
                  className="border-b bg-white hover:bg-green-50 transition duration-300"
                >
                  <td className="py-4 px-6">
                  <img
  src={
    category.imagepath
  }
  alt={category.name}
  className="w-10 h-10 rounded-full shadow-md"
/>
                  </td>
                  <td className="py-4 px-6">{category.name}</td>
                  <td className="py-4 px-6">{category.description}</td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex justify-center items-center gap-4">
                      {/* Edit Button */}
                      <button className="bg-green-500 text-white p-2 rounded-full shadow-lg hover:bg-green-600 hover:shadow-xl transition duration-300">
                        <CiEdit size={18} />
                      </button>

                      {/* Delete Button */}
                      <button className="bg-red-500 text-white p-2 rounded-full shadow-lg hover:bg-red-600 hover:shadow-xl transition duration-300">
                        <FaTrash size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-6">
                  No categories found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add Category Modal */}
      <CreateCategory
        showAddCategory={showAddCategory}
        setShowAddCategory={setShowAddCategory}
      />
    </div>
  );
};

export default ProductTable;
