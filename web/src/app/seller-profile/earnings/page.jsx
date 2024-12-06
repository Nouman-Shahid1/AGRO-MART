"use client";
import React from "react";
import Profile from "@/Components/ProfileCard/ProfileCard";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const Earnings = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Earnings Over Time",
        data: [2500, 3000, 2700, 3300, 3200, 3500, 3700],
        borderColor: "rgba(72, 217, 157, 1)",
        backgroundColor: "rgba(72, 217, 157, 0.2)",
        tension: 0.4,
      },
    ],
  };

  return (
    <div
      className="relative h-screen overflow-auto p-4 md:px-8 lg:px-6 xl:px-8 2xl:px-12 py-4 md:py-5 lg:py-7 xl:py-10 2xl:py-12"
      style={{
        backgroundImage:
          "url('https://png.pngtree.com/thumb_back/fh260/background/20241115/pngtree-happy-vietnamese-farmers-planting-rice-paddy-in-lush-green-field-image_16603887.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10">
        <Profile />
        <div className="py-8 px-4 bg-white rounded-3xl my-4 shadow-lg">
          <h2 className="text-2xl font-semibold m-4 text-green-800">
            Earnings Overview
          </h2>
          <p className="text-gray-600 font-bold">
            Track your earnings and payouts here.
          </p>
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="bg-green-200 px-6 py-8 rounded-3xl transition-transform duration-500 hover:scale-105 shadow-xl bg-gradient-to-t from-green-900 via-emerald-700 to-green-600 rounded-[32px]">
            <h4 className="text-2xl font-semibold text-white">
              Monthly Earnings
            </h4>
            <p className="text-xl mt-3 font-bold text-white">$3,000</p>
            <div className="flex items-center mt-4 text-white">
              <FaArrowUp className="mr-2" />
              <span>5% increase</span>
            </div>
          </div>

          <div className="bg-green-200 px-6 py-8 rounded-3xl transition-transform duration-500 hover:scale-105 shadow-xl bg-gradient-to-t from-green-900 via-emerald-700 to-green-600 rounded-[32px]">
            <h4 className="text-2xl font-semibold text-white">
              Yearly Earnings
            </h4>
            <p className="text-xl mt-3 font-bold text-white">$36,000</p>
            <div className="flex items-center mt-4 text-white">
              <FaArrowDown className="mr-2" />
              <span>3% decrease</span>
            </div>
          </div>

          <div className="bg-green-200 px-6 py-8 rounded-3xl transition-transform duration-500 hover:scale-105 shadow-xl bg-gradient-to-t from-green-900 via-emerald-700 to-green-600 rounded-[32px]">
            <h4 className="text-2xl font-semibold text-white">
              Sales Breakdown
            </h4>
            <ul className="text-white mt-3">
              <li className="py-2">Fruits: $15,000</li>
              <li className="py-2">Vegetables: $12,000</li>
              <li className="py-2">Grains: $9,000</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-3xl shadow-lg">
          <h3 className="text-xl font-semibold text-green-800 mb-4">
            Earnings Over Time
          </h3>
          <Line data={data} />
        </div>

        <div className="mt-8 bg-white p-6 rounded-3xl shadow-lg">
          <h3 className="text-xl font-semibold text-green-800 mb-4">
            Recent Transactions
          </h3>
          <table className="w-full table-auto">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2">2023-11-15</td>
                <td className="px-4 py-2">$1,500</td>
                <td className="px-4 py-2 text-green-500">Completed</td>
              </tr>
              <tr>
                <td className="px-4 py-2">2023-11-10</td>
                <td className="px-4 py-2">$1,200</td>
                <td className="px-4 py-2 text-yellow-500">Pending</td>
              </tr>
              <tr>
                <td className="px-4 py-2">2023-11-05</td>
                <td className="px-4 py-2">$900</td>
                <td className="px-4 py-2 text-green-500">Completed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Earnings;
