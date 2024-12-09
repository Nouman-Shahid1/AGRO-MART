"use client";

const CreateUser = ({ showAddUser, setShowAddUser }) => {
  const handleAddUser = () => {
    setShowAddUser(false);
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-all duration-300 ${
        showAddUser ? "opacity-100 visible" : "opacity-0 invisible"
      } z-50`}
    >
      <form className="relative max-w-4xl w-[600px] bg-gradient-to-br from-green-900 via-emerald-700 to-lime-500 text-white rounded-3xl shadow-2xl p-8 space-y-6 animate-fade-in">
        {/* Close Button */}
        <button
          type="button"
          className="absolute top-4 right-4 text-gray-300 hover:text-white transition-colors"
          onClick={handleAddUser}
        >
          X
        </button>

        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-green-300">
          Add User
        </h2>

        {/* First Name */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold">First Name</label>
          <input
            type="text"
            placeholder="Enter first name"
            className="w-full p-3 bg-white bg-opacity-20 text-white placeholder-white rounded-lg border border-gray-400 outline-none focus:ring-2 focus:ring-green-400 focus:bg-opacity-30 transition-all"
          />
        </div>

        {/* Last Name */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold">Last Name</label>
          <input
            type="text"
            placeholder="Enter last name"
            className="w-full p-3 bg-white bg-opacity-20 text-white placeholder-white rounded-lg border border-gray-400 outline-none focus:ring-2 focus:ring-green-400 focus:bg-opacity-30 transition-all"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold">Email</label>
          <input
            type="email"
            placeholder="Enter email"
            className="w-full p-3 bg-white bg-opacity-20 text-white placeholder-white rounded-lg border border-gray-400 outline-none focus:ring-2 focus:ring-blue-400 focus:bg-opacity-30 transition-all"
          />
        </div>

        {/* Password */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full p-3 bg-white bg-opacity-20 text-white placeholder-white rounded-lg border border-gray-400 outline-none focus:ring-2 focus:ring-blue-400 focus:bg-opacity-30 transition-all"
          />
        </div>

        {/* Role */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold">Role</label>
          <select className="w-full p-3 bg-white bg-opacity-20 text-white rounded-lg border border-gray-400 outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-opacity-30 transition-all">
            <option value="">Select role</option>
            <option value="seller">Seller</option>
            <option value="buyer">Buyer</option>
            <option value="admin">Admin</option>
            <option value="manager">Manager</option>
            <option value="staff">Staff</option>
          </select>
        </div>

        {/* User Image */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold">User Image</label>
          <input
            type="file"
            accept="image/*"
            className="w-full p-3 bg-white bg-opacity-20 text-white rounded-lg border border-gray-400 outline-none focus:ring-2 focus:ring-pink-400 focus:bg-opacity-30 transition-all"
          />
        </div>

        {/* Submit Button */}
        <div className="text-right">
          <button
            type="submit"
            className="px-8 py-3 text-lg font-bold text-white rounded-lg bg-gradient-to-r from-green-500 to-green-700 shadow-lg hover:shadow-xl hover:from-green-600 hover:to-green-800 focus:ring-4 focus:ring-green-500 transition-all"
          >
            Add User
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
