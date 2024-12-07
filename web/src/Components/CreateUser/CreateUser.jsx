'use client'
import { FaTimes } from "react-icons/fa";

const CreateUser = ({ showAddUser, setShowAddUser }) => {
  const handleAddUser = () => {
    setShowAddUser(false);
  };

  return (
    <div className={`fixed w-full h-[900px] -top-8 right-0 bg-[rgb(0,0,0,0.5)] flex items-center justify-center ${showAddUser ? 'block' : 'hidden'} z-50`}>

      <form className="relative max-w-4xl w-[600px] items-center h-[630px] overflow-scroll mx-auto bg-green-900 p-8 rounded-3xl shadow-lg space-y-3">
        <div className="absolute top-6 right-6" onClick={handleAddUser}>
          <FaTimes style={{ color: "red", fontSize: "24px" }} />
        </div>
        <h2 className="text-2xl font-semibold text-white">Add User</h2>

        <div>
          <label className="block text-sm font-medium text-white">First Name</label>
          <input
            type="text"
            placeholder="Enter first name"
            className="w-full mt-1 p-2 border bg-transparent text-white placeholder:text-white rounded-md outline-none focus:ring focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white">Last Name</label>
          <input
            type="text"
            placeholder="Enter last name"
            className="w-full mt-1 p-2 border bg-transparent text-white placeholder:text-white rounded-md outline-none focus:ring focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white">Email</label>
          <input
            type="email"
            placeholder="Enter email"
            className="w-full mt-1 p-2 border bg-transparent text-white placeholder:text-white rounded-md outline-none focus:ring focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full mt-1 p-2 border bg-transparent text-white placeholder:text-white rounded-md outline-none focus:ring focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white">Role</label>
          <select className="w-full mt-1 p-2 border bg-green-800  text-white placeholder:text-white rounded-md outline-none focus:ring focus:ring-green-400">
            <option value="">Select role</option>
            <option value="seller">Seller</option>
            <option value="buyer">Buyer</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-white">User Image</label>
          <input
            type="file"
            accept="image/*"
            className="mt-1 p-2 rounded-md border"
          />
        </div>

        <div className="text-right">
          <button
            type="submit"
            className="px-6 py-2 bg-green-700 text-white rounded-md hover:bg-green-800"
          >
            Add User
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
