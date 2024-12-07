'use client'
import { FaTimes } from "react-icons/fa";

const CreateSeed = ({ showAddSeed, setShowAddSeed }) => {
  const handleAddSeed = () => {
    setShowAddSeed(false);
  };

  return (
    <div className={`fixed w-full h-[900px] -top-8 right-0 bg-[rgb(0,0,0,0.5)] flex items-center justify-center ${showAddSeed ? 'block' : 'hidden'}`}>
      <form className="relative max-w-4xl w-[530px] items-center h-[630px] overflow-scroll mx-auto bg-green-900 p-8 rounded-3xl shadow-lg space-y-3">
        <div className="absolute top-6 right-6" onClick={handleAddSeed}>
          <FaTimes style={{ color: "red", fontSize: "24px" }} />
        </div>
        <h2 className="text-2xl font-semibold text-white">Add Seed</h2>

        <div>
          <label className="block text-sm font-medium text-white">Seed Name</label>
          <input
            type="text"
            placeholder="Enter seed name"
            className="w-full mt-1 p-2 border bg-transparent text-white placeholder:text-white rounded-md outline-none focus:ring focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white">Description</label>
          <textarea
            placeholder="Enter seed description"
            rows="4"
            className="w-full mt-1 p-2 border bg-transparent text-white placeholder:text-white rounded-md outline-none focus:ring focus:ring-green-400"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-white">Category</label>
          <select className="w-full mt-1 p-2 border bg-green-800 text-white placeholder:text-white rounded-md outline-none focus:ring focus:ring-green-400">
            <option value="">Select category</option>
            <option value="vegetables">Vegetables</option>
            <option value="fruits">Fruits</option>
            <option value="flowers">Flowers</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-white">Price</label>
          <input
            type="number"
            placeholder="Enter price"
            className="w-full mt-1 p-2 border bg-transparent text-white placeholder:text-white rounded-md outline-none focus:ring focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white">Seed Image</label>
          <input
            type="file"
            accept="image/*"
            className="mt-1 border p-2 rounded-md text-white"
          />
        </div>
        <div className="text-right">
          <button
            type="submit"
            className="px-6 py-2 bg-green-700 text-white rounded-md hover:bg-green-800"
          >
            Add Seed
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateSeed;
