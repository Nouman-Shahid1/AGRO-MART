"use client";
const CreatePesticide = ({ showAddPesticide, setShowAddPesticide }) => {
  const handleAddPesticide = () => {
    setShowAddPesticide(false);
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-all duration-300 ${
        showAddPesticide ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <form className="relative max-w-4xl w-[600px] bg-gradient-to-br from-green-900 via-emerald-700 to-lime-500 text-white rounded-xl shadow-2xl p-8 space-y-6 animate-fade-in">
        {/* Close Button */}
        <button
          type="button"
          className="absolute top-4 right-4 text-gray-300 hover:text-white transition-colors"
          onClick={handleAddPesticide}
        >
          X
        </button>

        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-green-300">
          Add Pesticide
        </h2>

        {/* Pesticide Name */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold">Pesticide Name</label>
          <input
            type="text"
            placeholder="Enter pesticide name"
            className="w-full p-3 bg-white bg-opacity-20 text-white placeholder-white rounded-lg border border-gray-400 outline-none focus:ring-2 focus:ring-green-400 focus:bg-opacity-30 transition-all"
          />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold">Description</label>
          <textarea
            placeholder="Enter pesticide description"
            rows="4"
            className="w-full p-3 bg-white bg-opacity-20 text-white placeholder-white rounded-lg border border-gray-400 outline-none focus:ring-2 focus:ring-blue-400 focus:bg-opacity-30 transition-all"
          ></textarea>
        </div>

        {/* Category */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold">Category</label>
          <select className="w-full p-3 bg-white bg-opacity-20 text-white rounded-lg border border-gray-400 outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-opacity-30 transition-all">
            <option className="bg-green-800" value="">Select category</option>
            <option className="bg-green-800" value="organic">Organic</option>
            <option className="bg-green-800" value="chemical">Chemical</option>
          </select>
        </div>

        {/* Pesticide Image */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold">Pesticide Image</label>
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
            className="px-8 py-3 text-lg font-bold text-white rounded-lg bg-gradient-to-r from-green-500 to-green-700 shadow-lg hover:shadow-xl hover:from-green-600 hover:to-green-800 focus:ring-4 focus:ring-green-500 transition-all"
          >
            Add Pesticide
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePesticide;
