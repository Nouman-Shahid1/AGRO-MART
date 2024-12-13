"use client";
const CreateMachine = ({ showAddMachine, setShowAddMachine }) => {
  const handleAddMachine = () => {
    setShowAddMachine(false);
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-all duration-300 ${
        showAddMachine ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <form className="relative max-w-4xl w-[600px] bg-gradient-to-br from-green-900 via-emerald-700 to-lime-500 text-white rounded-xl shadow-2xl p-8 space-y-6 animate-fade-in">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-300 hover:text-white transition-colors"
          onClick={handleAddMachine}
        >
          X
        </button>

        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-green-300">
          Add Machine
        </h2>

        {/* Machine Name */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold">Machine Name</label>
          <input
            type="text"
            placeholder="Enter machine name"
            className="w-full p-3 bg-white bg-opacity-20 text-white placeholder-white rounded-lg border border-gray-400 outline-none focus:ring-2 focus:ring-green-400 focus:bg-opacity-30 transition-all"
          />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold">Description</label>
          <textarea
            placeholder="Enter machine description"
            rows="4"
            className="w-full p-3 bg-white bg-opacity-20 text-white placeholder-white rounded-lg border border-gray-400 outline-none focus:ring-2 focus:ring-blue-400 focus:bg-opacity-30 transition-all"
          ></textarea>
        </div>

        {/* Type */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold">Type</label>
          <select className="w-full p-3 bg-white bg-opacity-20 text-white rounded-lg border border-gray-400 outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-opacity-30 transition-all">
            <option className="bg-green-800" value="">Select type</option>
            <option className="bg-green-800" value="industrial">Industrial</option>
            <option className="bg-green-800" value="construction">Construction</option>
            <option className="bg-green-800" value="agriculture">Agriculture</option>
          </select>
        </div>

        {/* Manufacturer */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold">Manufacturer</label>
          <input
            type="text"
            placeholder="Enter manufacturer name"
            className="w-full p-3 bg-white bg-opacity-20 text-white placeholder-white rounded-lg border border-gray-400 outline-none focus:ring-2 focus:ring-purple-400 focus:bg-opacity-30 transition-all"
          />
        </div>

        {/* Machine Image */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold">Machine Image</label>
          <input
            type="file"
            accept="image/*"
            className="w-full p-3 bg-white bg-opacity-20 text-white rounded-lg border border-gray-400 outline-none focus:ring-2 focus:ring-pink-400 focus:bg-opacity-30 transition-all"
          />
        </div>

        {/* Submit Button */}
        <div className="text-end">
          <button
            type="submit"
            className="px-8 py-3 text-lg font-bold text-white rounded-lg bg-green-500 shadow-lg hover:shadow-xl hover:bg-green-600 focus:ring-4 focus:ring-green-500 transition-all"
          >
            Add Machine
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateMachine;
