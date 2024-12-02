import Profile from "@/Components/ProfileCard/ProfileCard";
import React from "react";
Profile

const Earnings = () => {
  return (

    <div className="relative h-screen overflow-auto sm:p-0 px-1 md:px-8 lg:px-6 xl:px-8 2xl:px-12 py-4 md:py-5 lg:py-7 xl:py-10 2xl:py-12"
    style={{
      backgroundImage:
        "url('https://png.pngtree.com/thumb_back/fh260/background/20241115/pngtree-happy-vietnamese-farmers-planting-rice-paddy-in-lush-green-field-image_16603887.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/50"></div>

    {/* Content */}
    <div className="relative z-10">
      <Profile />
    
      <div>
        <div className="py-8 px-4 bg-white rounded-3xl my-4 ">

        <h2 className="text-2xl font-semibold m-4 text-green-800">Earnings</h2>
        <p className="text-gray-600 font-bold">Track your earnings and payouts here.</p>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
          <div className="bg-green-200 px-6 py-8 rounded-3xl transition-transform duration-500 hover:scale-105 shadow-xl bg-gradient-to-t from-green-900 via-emerald-700 to-green-600 rounded-[32px]">
            <h4 className="text-2xl font-semibold text-white">
              Monthly Earnings
            </h4>
            <p className="text-xl mt-3 font-bold text-white">$3,000</p>
          </div>
          <div className="bg-green-200 px-6 py-8 rounded-3xl transition-transform duration-500 hover:scale-105 shadow-xl bg-gradient-to-t from-green-900 via-emerald-700 to-green-600 rounded-[32px]">
            <h4 className="text-2xl font-semibold text-white">Yearly Earnings
            </h4>
            <p className="text-xl mt-3 font-bold text-white">$36,000</p>
          </div>
        </div>
        </div>
        </div>
      </div>

  );
};

export default Earnings;
