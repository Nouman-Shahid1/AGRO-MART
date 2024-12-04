'use client';
import { FaTimes } from "react-icons/fa";

const CreateMachine = ({ showAddMachine, setShowAddMachine }) => {
  const handleAddMachine = () => {
    setShowAddMachine(false);
  };

  return (
    <div
      className={`fixed w-full h-[900px] -top-8 right-0 bg-[rgb(0,0,0,0.5)] flex items-center justify-center ${
        showAddMachine ? "block" : "hidden"
      }`}
    >
      <form className="relative max-w-4xl w-[600px] items-center h-[620px] overflow-scroll mx-auto bg-white p-8 rounded-lg shadow-lg space-y-3">
        
        <div className="absolute top-6 right-6" onClick={handleAddMachine}>
          <FaTimes style={{ color: "red", fontSize: "24px" }} />
        </div>

        <h2 className="text-2xl font-semibold text-gray-700">Add Machine</h2>

        <div>
          <label className="block text-sm font-medium text-gray-600">Machine Name</label>
          <input
            type="text"
            placeholder="Enter machine name"
            className="w-full mt-1 p-2 border rounded-md outline-none focus:ring focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">Description</label>
          <textarea
            placeholder="Enter machine description"
            rows="4"
            className="w-full mt-1 p-2 border rounded-md outline-none focus:ring focus:ring-green-400"
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">Type</label>
          <select className="w-full mt-1 p-2 border rounded-md outline-none focus:ring focus:ring-green-400">
            <option value="">Select type</option>
            <option value="industrial">Industrial</option>
            <option value="construction">Construction</option>
            <option value="agriculture">Agriculture</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">Manufacturer</label>
          <input
            type="text"
            placeholder="Enter manufacturer name"
            className="w-full mt-1 p-2 border rounded-md outline-none focus:ring focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">Machine Image</label>
          <input type="file" accept="image/*" className="mt-1" />
        </div>
        <div className="text-right">
          <button
            type="submit"
            className="px-6 py-2 bg-green-700 text-white rounded-md hover:bg-green-800"
          >
            Add Machine
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateMachine;
