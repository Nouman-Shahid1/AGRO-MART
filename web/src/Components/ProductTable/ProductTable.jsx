"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaTrash, FaPlusCircle } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import CreateProduct from "../CreateProduct/CreateProduct";
import DeleteProduct from "../DeleteProduct/DeleteProduct";
import CreateMachine from "../CreateMachine/CreateMachine";
import CreateSeed from "../CreateSeed/CreateSeed";
import CreateCrop from "../CreateCrops/CreateCrops";
import CreatePesticide from "../CreatePesticides/CreatePesticides";

const ProductTable = ({ name, product, machine, seed, crop, pesticide }) => {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddMachine, setShowAddMachine] = useState(false);
  const [showAddSeed, setShowAddSeed] = useState(false);
  const [showAddCrop, setShowAddCrop] = useState(false);
  const [showAddPesticide, setShowAddPesticide] = useState(false);

  const handleAddProduct = () => setShowAddProduct(true);
  const handleDelete = () => setShowDeleteModal(true);
  const handleAddMachine = () => setShowAddMachine(true);
  const handleAddSeed = () => setShowAddSeed(true);
  const handleAddCrop = () => setShowAddCrop(true);
  const handleAddPesticide = () => setShowAddPesticide(true);

  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="mb-6 flex flex-col lg:flex-row items-center justify-between px-6 py-8 bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white rounded-3xl shadow-lg">
        <div>
          <h3 className="text-3xl font-bold">{name} List</h3>
          <p className="text-sm">Manage all your {name} here.</p>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
          <button
            className="py-2 px-4 bg-white text-green-600 rounded-lg shadow-md hover:bg-green-100 transition duration-150 flex items-center space-x-2"
            onClick={
              machine
                ? handleAddMachine
                : seed
                ? handleAddSeed
                : crop
                ? handleAddCrop
                : pesticide
                ? handleAddPesticide
                : handleAddProduct
            }
          >
            <FaPlusCircle />
            <span>
              {machine && "Add New Machine"}
              {seed && "Add New Seed"}
              {crop && "Add New Crop"}
              {pesticide && "Add New Pesticide"}
              {product && "Add New Product"}
            </span>
          </button>

          {/* Search Input */}
          <div className="flex items-center mt-3 md:mt-0">
            <input
              type="text"
              placeholder={`Search ${name}`}
              className="w-[200px] md:w-[250px] px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-r-md">
              <CiSearch size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white shadow-lg rounded-3xl overflow-hidden">
        <table className="min-w-full text-sm">
          {/* Header */}
          <thead className="bg-gradient-to-r from-green-500 to-green-700 text-white shadow-md">
            <tr>
              <th className="py-4 px-6 text-center font-semibold">Icon</th>
              <th className="py-4 px-6 text-left font-semibold">Title</th>
              <th className="py-4 px-6 text-left font-semibold">Description</th>
              <th className="py-4 px-6 text-left font-semibold">Category</th>
              <th className="py-4 px-6 text-center font-semibold">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {Array(10)
              .fill()
              .map((_, index) => (
                <tr
                  key={index}
                  className={`border-b ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-green-50 transition duration-300`}
                >
                  {/* Icon */}
                  <td className="py-4 px-6 text-center">
                    <img
                      src="/blank.png"
                      alt="icon"
                      className="w-8 h-8 mx-auto rounded-full shadow-md"
                    />
                  </td>

                  {/* Title */}
                  <td className="py-4 px-6 font-medium text-gray-800">
                    Sample Title
                  </td>

                  {/* Description */}
                  <td className="py-4 px-6 text-gray-600">
                    This is a brief description of the item.
                  </td>

                  {/* Category */}
                  <td className="py-4 px-6 text-gray-600">Sample Category</td>

                  {/* Actions */}
                  <td className="py-4 px-6 text-center">
                    <div className="flex justify-center items-center gap-4">
                      {/* Edit Button */}
                      <button
                        className="bg-green-500 text-white p-2 rounded-full shadow-lg hover:bg-green-600 hover:shadow-xl transition duration-300"
                        onClick={
                          machine
                            ? handleAddMachine
                            : seed
                            ? handleAddSeed
                            : crop
                            ? handleAddCrop
                            : pesticide
                            ? handleAddPesticide
                            : handleAddProduct
                        }
                      >
                        <CiEdit size={18} />
                      </button>

                      {/* Delete Button */}
                      <button
                        className="bg-red-500 text-white p-2 rounded-full shadow-lg hover:bg-red-600 hover:shadow-xl transition duration-300"
                        onClick={handleDelete}
                      >
                        <FaTrash size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Modals */}
      {machine && (
        <CreateMachine
          showAddMachine={showAddMachine}
          setShowAddMachine={setShowAddMachine}
        />
      )}
      {seed && (
        <CreateSeed showAddSeed={showAddSeed} setShowAddSeed={setShowAddSeed} />
      )}
      {crop && (
        <CreateCrop showAddCrop={showAddCrop} setShowAddCrop={setShowAddCrop} />
      )}
      {pesticide && (
        <CreatePesticide
          showAddPesticide={showAddPesticide}
          setShowAddPesticide={setShowAddPesticide}
        />
      )}
      {product && (
        <CreateProduct
          showAddProduct={showAddProduct}
          setShowAddProduct={setShowAddProduct}
        />
      )}
      <DeleteProduct
        showDeleteModal={showDeleteModal}
        setShowDeleteModal={setShowDeleteModal}
      />
    </div>
  );
};

export default ProductTable;
