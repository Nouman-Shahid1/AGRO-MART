import Profile from "@/Components/ProfileCard/ProfileCard";
import React from "react";

const AnalyticsPage = () => {
    return (
        <div
            className="relative h-screen overflow-auto sm:p-0 px-1 md:px-8 lg:px-6 xl:px-8 2xl:px-12 py-4 md:py-5 lg:py-7 xl:py-10 2xl:py-12"
            style={{
                backgroundImage:
                    "url('https://png.pngtree.com/thumb_back/fh260/background/20241115/pngtree-happy-vietnamese-farmers-planting-rice-paddy-in-lush-green-field-image_16603887.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="fixed inset-0 bg-black/50"></div>

            <div className="relative z-10">
                <Profile />

                <header className="bg-green-100 shadow-md mt-8 rounded-md p-4 flex justify-between items-center border border-green-300">
                    <h1 className="text-xl font-semibold text-green-800">Agriculture Dashboard</h1>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                        Download Report
                    </button>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                    <div className="bg-green-50 shadow-md rounded-md p-4 border border-green-200">
                        <h2 className="text-lg font-medium text-green-700">Total Farmers</h2>
                        <p className="text-3xl font-bold mt-2 text-green-800">4,567</p>
                        <p className="text-sm text-green-600 mt-1">+3% from last month</p>
                    </div>
                    <div className="bg-green-50 shadow-md rounded-md p-4 border border-green-200">
                        <h2 className="text-lg font-medium text-green-700">Harvest Revenue</h2>
                        <p className="text-3xl font-bold mt-2 text-green-800">$78,910</p>
                        <p className="text-sm text-red-600 mt-1">-1% from last month</p>
                    </div>
                    <div className="bg-green-50 shadow-md rounded-md p-4 border border-green-200">
                        <h2 className="text-lg font-medium text-green-700">Active Fields</h2>
                        <p className="text-3xl font-bold mt-2 text-green-800">789</p>
                        <p className="text-sm text-green-600 mt-1">+7% from last week</p>
                    </div>
                </div>

                <div className="bg-green-50 shadow-md rounded-md p-4 mt-6 border border-green-200">
                    <h2 className="text-lg font-semibold text-green-700">Crop Growth Overview</h2>
                    <div className="h-64 mt-4 bg-green-100 rounded-md flex items-center justify-center">
                        <p className="text-green-600">[Insert Chart Here]</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
                    <div className="bg-green-50 shadow-md rounded-md p-4 border border-green-200">
                        <h2 className="text-lg font-semibold text-green-700">Top Regions</h2>
                        <div className="h-48 mt-4 bg-green-100 rounded-md flex items-center justify-center">
                            <p className="text-green-600">[Insert Map Here]</p>
                        </div>
                    </div>
                    <div className="bg-green-50 shadow-md rounded-md p-4 border border-green-200">
                        <h2 className="text-lg font-semibold text-green-700">Recent Updates</h2>
                        <ul className="mt-4 space-y-2">
                            <li className="flex justify-between text-sm">
                                <span>New farmer registered</span>
                                <span className="text-green-600">2h ago</span>
                            </li>
                            <li className="flex justify-between text-sm">
                                <span>Harvest in Region 3 completed</span>
                                <span className="text-green-600">4h ago</span>
                            </li>
                            <li className="flex justify-between text-sm">
                                <span>Pesticide used in Field 45</span>
                                <span className="text-green-600">6h ago</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnalyticsPage;
