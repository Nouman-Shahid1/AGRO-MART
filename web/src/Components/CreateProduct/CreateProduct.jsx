'use client'
import { FaTimes } from "react-icons/fa";
const CreateProduct = ({showAddProduct,setShowAddProduct}) => {
  const handleAddProduct =()=>{
    setShowAddProduct(false)
  }
  return (
    <div className={`fixed w-full h-[900px] -top-8 right-0  bg-[rgb(0,0,0,0.5)] flex items-center justify-center  ${showAddProduct?'block':'hidden'}`}>
    <form className="relative max-w-4xl  w-[600px] items-center h-[630px] overflow-scroll mx-auto bg-white  p-8 rounded-3xl shadow-lg space-y-3">
      <div className="absolute top-6 right-6" onClick={handleAddProduct}>
        <FaTimes style={{ color: "red", fontSize: "24px" }} />

      </div>
      <h2 className="text-2xl font-semibold text-gray-700">Add Product</h2>

      <div>
        <label className="block text-sm font-medium text-gray-600">Product Name</label>
        <input
          type="text"
          placeholder="Enter product name"
          className="w-full mt-1 p-2 border rounded-md outline-none focus:ring focus:ring-green-400"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-600">Description</label>
        <textarea
          placeholder="Enter product description"
          rows="4"
          className="w-full mt-1 p-2 border rounded-md outline-none focus:ring focus:ring-green-400"
        ></textarea>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-600">Category</label>
        <select className="w-full mt-1 p-2 border rounded-md outline-none focus:ring focus:ring-green-400">
          <option value="">Select category</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="home-appliances">Home Appliances</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-600">Price</label>
        <input
          type="number"
          placeholder="Enter price"
          className="w-full mt-1 p-2 border rounded-md outline-none focus:ring focus:ring-green-400"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-600">Product Image</label>
        <input
          type="file"
          accept="image/*"
          className="mt-1"
        />
      </div>
      {/* Submit Button */}
      <div className="text-right">
        <button
          type="submit"
          className="px-6 py-2 bg-green-700 text-white rounded-md hover:bg-green-800"
        >
          Add Product
        </button>
      </div>
    </form>
    </div>
  );
};

export default CreateProduct;
