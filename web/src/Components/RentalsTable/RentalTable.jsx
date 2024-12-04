'use client';
import React, { useState } from 'react';
import { CiSearch, CiEdit } from "react-icons/ci";
import { FaTrash, FaEye, FaEyeSlash } from "react-icons/fa";
import CreateRentals from '../CreateRentals/CreateRentals'; // Modal for adding/editing rentals
import DeleteProduct from '../DeleteProduct/DeleteProduct'; // Modal for confirming deletion

const RentalTable = () => {
  const [showAddRental, setShowAddRental] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const rentals = Array(10).fill().map((_, index) => ({
    id: index,
    machineImage: "/placeholder-machine.png",
    machineName: `Machine${index + 1}`,
    renterName: `Renter${index + 1}`,
    contact: `123-456-789${index}`,
    location: `Location${index + 1}`,
    timing: "9:00 AM - 5:00 PM",
  }));

  const filteredRentals = rentals.filter(
    (rental) =>
      rental.machineName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rental.renterName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rental.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddRental = () => {
    setShowAddRental(true);
  };

  const handleDelete = () => {
    setShowDeleteModal(true);
  };

  return (
    <div className="p-6 z-50">
      <div className="mb-4 flex items-center rounded-3xl justify-between px-6 py-10 border-b bg-green-50">
        <div>
          <h3 className="text-2xl font-semibold text-green-800">Rental List</h3>
          <p className="text-sm text-gray-600">Below is a list of all the rentals in your system.</p>
        </div>
        <div className="flex flex-col justify-end items-center">
          <button
            className="py-2 px-3 bg-green-600 text-white mb-3 rounded-lg"
            onClick={handleAddRental}
          >
            Add New Rental
          </button>

          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Search Rental"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="bg-green-600 text-white rounded-lg p-2">
              <CiSearch className="text-white" size={22} />
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto bg-white shadow-md rounded-3xl">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-green-50 text-gray-600">
              <th className="py-3 px-4 text-center">Machine Image</th>
              <th className="py-3 px-4 text-left">Machine Name</th>
              <th className="py-3 px-4 text-left">Renter Name</th>
              <th className="py-3 px-4 text-left">Contact</th>
              <th className="py-3 px-4 text-left">Location</th>
              <th className="py-3 px-4 text-left">Timing</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredRentals.length > 0 ? (
              filteredRentals.map((rental) => (
                <tr key={rental.id} className="border-b hover:bg-green-50">
                  <td className="py-4 px-4 text-center">
                    <img src={rental.machineImage} width="50" alt="machine" className="mx-auto rounded" />
                  </td>
                  <td className="py-4 px-4 font-medium text-gray-700">{rental.machineName}</td>
                  <td className="py-4 px-4 font-medium text-gray-700">{rental.renterName}</td>
                  <td className="py-4 px-4 font-medium text-gray-700">{rental.contact}</td>
                  <td className="py-4 px-4 font-medium text-gray-700">{rental.location}</td>
                  <td className="py-4 px-4 font-medium text-gray-700">{rental.timing}</td>
                  <td className="py-4 px-4 text-center">
                    <div className="flex justify-center gap-3">
                      <button
                        className="p-2 rounded-full bg-green-300 text-white hover:bg-blue-300 transition duration-150"
                        onClick={handleAddRental}
                      >
                        <CiEdit size={20} />
                      </button>
                      <button
                        className="p-2 rounded-full bg-red-200 text-red-600 hover:bg-red-300 transition duration-150"
                        onClick={handleDelete}
                      >
                        <FaTrash size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="py-6 text-center text-gray-600">
                  No rentals found.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Modals */}
        <CreateRentals showAddRental={showAddRental} setShowAddRental={setShowAddRental} />
        <DeleteProduct showDeleteModal={showDeleteModal} setShowDeleteModal={setShowDeleteModal} />
      </div>
    </div>
  );
};

export default RentalTable;
