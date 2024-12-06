"use client";
import Profile from "@/Components/ProfileCard/ProfileCard";
import React, { useState } from "react";
import { Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { saveAs } from "file-saver";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  ArcElement
);

const AnalyticsPage = () => {
  const revenueData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Revenue Growth",
        data: [5000, 7000, 8000, 12000, 11000, 13000, 15000],
        borderColor: "#4caf50",
        backgroundColor: "rgba(76, 175, 80, 0.3)",
        tension: 0.4,
      },
    ],
  };

  const monthlySalesTrend = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Monthly Sales Trend",
        data: [4000, 5000, 6000, 10000, 9500, 11000, 12500],
        borderColor: "#ff9800",
        backgroundColor: "rgba(255, 152, 0, 0.3)",
        tension: 0.4,
      },
    ],
  };

  const activeFieldsData = {
    labels: ["Region 1", "Region 2", "Region 3", "Region 4", "Region 5"],
    datasets: [
      {
        label: "Active Fields",
        data: [120, 90, 150, 100, 80],
        backgroundColor: [
          "#4caf50",
          "#66bb6a",
          "#81c784",
          "#a5d6a7",
          "#c8e6c9",
        ],
      },
    ],
  };

  const [totalFarmers] = useState(4567);
  const [totalRevenue] = useState(78910);
  const [activeFields] = useState(789);
  const [totalSales] = useState(15340);
  const [productCategories] = useState({
    fruits: 15000,
    vegetables: 12000,
    grains: 9000,
  });

  const downloadReport = () => {
    const reportData = [
      ["Metric", "Value"],
      ["Total Farmers", totalFarmers],
      ["Total Revenue", `$${totalRevenue}`],
      ["Active Fields", activeFields],
      ["Total Sales", totalSales],
      ["Fruits Sales", productCategories.fruits],
      ["Vegetables Sales", productCategories.vegetables],
      ["Grains Sales", productCategories.grains],
    ];

    const csvContent = reportData.map((row) => row.join(",")).join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8" });
    saveAs(blob, "agromart_sales_report.csv");
  };

  return (
    <div
      className="relative h-screen overflow-auto p-6 md:px-8 lg:px-6 xl:px-8 2xl:px-12 py-4"
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
          <h1 className="text-xl font-semibold text-green-800">
            AgroMart Seller Analytics
          </h1>
          <button
            onClick={downloadReport}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
          >
            Download Report
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          <div className="bg-green-50 shadow-md rounded-md p-4 border border-green-200">
            <h2 className="text-lg font-medium text-green-700">
              Total Farmers
            </h2>
            <p className="text-3xl font-bold mt-2 text-green-800">
              {totalFarmers}
            </p>
            <p className="text-sm text-green-600 mt-1">+3% from last month</p>
          </div>
          <div className="bg-green-50 shadow-md rounded-md p-4 border border-green-200">
            <h2 className="text-lg font-medium text-green-700">
              Harvest Revenue
            </h2>
            <p className="text-3xl font-bold mt-2 text-green-800">
              ${totalRevenue}
            </p>
            <p className="text-sm text-red-600 mt-1">-1% from last month</p>
          </div>
          <div className="bg-green-50 shadow-md rounded-md p-4 border border-green-200">
            <h2 className="text-lg font-medium text-green-700">
              Active Fields
            </h2>
            <p className="text-3xl font-bold mt-2 text-green-800">
              {activeFields}
            </p>
            <p className="text-sm text-green-600 mt-1">+7% from last week</p>
          </div>
          <div className="bg-green-50 shadow-md rounded-md p-4 border border-green-200">
            <h2 className="text-lg font-medium text-green-700">Total Sales</h2>
            <p className="text-3xl font-bold mt-2 text-green-800">
              {totalSales}
            </p>
            <p className="text-sm text-green-600 mt-1">+5% from last quarter</p>
          </div>
        </div>

        <div className="bg-green-50 shadow-md rounded-md p-4 mt-6 border border-green-200">
          <h2 className="text-lg font-semibold text-green-700">
            Revenue Growth
          </h2>
          <div className="h-80 mt-4 w-full">
            <Line data={revenueData} options={{ responsive: true }} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
          <div className="bg-green-50 shadow-md rounded-md p-4 border border-green-200">
            <h2 className="text-lg font-semibold text-green-700">
              Active Fields by Region
            </h2>
            <div className="h-64 mt-4">
              <Pie data={activeFieldsData} options={{ responsive: true }} />
            </div>
          </div>

          <div className="bg-green-50 shadow-md rounded-md p-4 border border-green-200">
            <h2 className="text-lg font-semibold text-green-700">
              Monthly Sales Trends
            </h2>
            <div className="h-64 mt-4">
              <Line data={monthlySalesTrend} options={{ responsive: true }} />
            </div>
          </div>
        </div>

        <div className="bg-green-50 shadow-md rounded-md p-4 mt-6 border border-green-200">
          <h2 className="text-lg font-semibold text-green-700">
            Recent Updates
          </h2>
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
  );
};

export default AnalyticsPage;
