"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CiSearch } from "react-icons/ci";
import { FaTrash, FaEye, FaEyeSlash } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import UserModal from "../CreateUser/CreateUser";
import DeleteModal from "../DeleteProduct/DeleteProduct";
import { fetchUsers, deleteUser } from "../../reducers/Auth/authSlice";

const UserTable = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.auth);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(""); // 'create' or 'update'
  const [selectedUser, setSelectedUser] = useState(null); // User for update
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    dispatch(fetchUsers())
      .unwrap() // Unwraps the result of the thunk to access the payload or error
      .then((data) => {
        console.log("Fetched users:", data); // Log the fetched users
      })
      .catch((error) => {
        console.error("Error fetching users:", error); // Log any error
      });
  }, [dispatch]);

  const handleAddUser = () => {
    setModalType("create");
    setSelectedUser(null);
    setShowModal(true);
  };

  const handleEditUser = (user) => {
    setModalType("update");
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleDeleteUser = (ID) => {
    setUserIdToDelete(ID);
    setShowDeleteModal(true);
  };

  const confirmDeleteUser = () => {
    dispatch(deleteUser(userIdToDelete));
    setShowDeleteModal(false);
  };

  return (
    <div className="p-6 z-50">
      <div className="mb-4 flex flex-col md:flex-row items-center rounded-3xl justify-between px-6 py-10 border-b bg-green-50">
        <div>
          <h3 className="text-2xl font-semibold text-green-800">User List</h3>
          <p className="text-sm text-gray-600">
            Below is a list of all the users in your system.
          </p>
        </div>
        <div className="flex flex-col justify-end items-center">
          <button
            className="py-2 px-3 bg-green-600 text-white mt-3 md:mt-0 mb-3 rounded-lg"
            onClick={handleAddUser}
          >
            Add New User
          </button>

          <div className="flex space-x-2">
            <div className="flex flex-wrap">
              <input
                type="text"
                placeholder="Search User"
                className="px-4 py-2 w-[200px] md:w-[250px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
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
              <th className="py-3 px-4 text-center">ID</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Username</th>
              <th className="py-3 px-4 text-left">Role</th>
              <th className="py-3 px-4 text-left">Password</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.ID || index} className="border-b hover:bg-green-50">
                <td className="py-4 px-4 text-center">{user.ID}</td>
                <td className="py-4 px-4 font-medium text-gray-700">
                  {user.Email}
                </td>
                <td className="py-4 px-4 font-medium text-gray-700">
                  {user.Username}
                </td>
                <td className="py-4 px-4 font-medium text-gray-700">
                  {user.Role}
                </td>
                <td className="py-4 px-4 font-medium text-gray-700">
                  <div className="flex items-center">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={user.Password}
                      className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-green-500"
                      readOnly
                    />
                    <button
                      onClick={() => setShowPassword((prevState) => !prevState)}
                      className="ml-2 text-gray-600 hover:text-gray-800"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </td>
                <td className="py-4 px-4 text-center">
                  <div className="flex justify-center gap-3">
                    <button
                      className="p-2 rounded-full bg-green-300 text-white hover:bg-blue-300 transition duration-150"
                      onClick={() => handleEditUser(user)}
                    >
                      <CiEdit size={20} />
                    </button>
                    <button
                      className="p-2 rounded-full bg-red-200 text-red-600 hover:bg-red-300 transition duration-150"
                      onClick={() => handleDeleteUser(user.ID)}
                    >
                      <FaTrash size={20} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <UserModal
          showModal={showModal}
          setShowModal={setShowModal}
          modalType={modalType}
          user={selectedUser}
        />
        <DeleteModal
          showDeleteModal={showDeleteModal}
          setShowDeleteModal={setShowDeleteModal}
          confirmDelete={confirmDeleteUser}
        />
      </div>
    </div>
  );
};

export default UserTable;
