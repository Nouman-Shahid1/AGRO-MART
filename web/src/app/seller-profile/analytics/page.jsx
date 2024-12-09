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
import { FaDownload, FaTractor, FaSeedling, FaChartLine } from "react-icons/fa";

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

  const downloadReport = () => {
    const csvContent = "Example Report Content";
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8" });
    saveAs(blob, "agromart_sales_report.csv");
  };

  return (
    <div
      className="relative h-screen overflow-auto p-6"
      style={{
        backgroundImage:
          "url('https://png.pngtree.com/thumb_back/fh260/background/20241115/pngtree-happy-vietnamese-farmers-planting-rice-paddy-in-lush-green-field-image_16603887.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-green-600/80 to-green-900/80"></div>

      <div className="relative z-10 text-white">
        <Profile />

        <header className="bg-gradient-to-r from-green-500 to-green-700 shadow-lg mt-8 rounded-3xl p-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold flex items-center space-x-4">
            <FaTractor className="text-4xl" />
            <span>AgroMart Analytics Dashboard</span>
          </h1>
          <button
            onClick={downloadReport}
            className="bg-green-800 text-white px-6 py-3 rounded-full hover:bg-green-900 flex items-center space-x-2"
          >
            <FaDownload />
            <span>Download Report</span>
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {[
            {
              title: "Total Farmers",
              value: totalFarmers,
              colorFrom: "green-600",
              colorTo: "green-700",
              icon: <FaSeedling />,
              change: "+3% from last month",
            },
            {
              title: "Harvest Revenue",
              value: `$${totalRevenue.toLocaleString()}`,
              colorFrom: "yellow-600",
              colorTo: "yellow-700",
              icon: <FaTractor />,
              change: "-1% from last month",
            },
            {
              title: "Active Fields",
              value: activeFields,
              colorFrom: "blue-600",
              colorTo: "blue-700",
              icon: <FaSeedling />,
              change: "+7% from last week",
            },
            {
              title: "Total Sales",
              value: `$${totalSales.toLocaleString()}`,
              colorFrom: "purple-600",
              colorTo: "purple-700",
              icon: <FaChartLine />,
              change: "+5% from last quarter",
            },
          ].map((card, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-${card.colorFrom} to-${card.colorTo} px-6 py-8 rounded-3xl shadow-xl hover:scale-105 transform transition duration-300`}
            >
              <div className="flex items-center space-x-3">
                <div className="text-3xl text-white">{card.icon}</div>
                <h2 className="text-xl font-semibold text-white">
                  {card.title}
                </h2>
              </div>
              <p className="text-4xl font-extrabold mt-3 text-white">
                {card.value}
              </p>
              <p className="text-sm text-white mt-1">{card.change}</p>
            </div>
          ))}
        </div>

        <div className="bg-white shadow-md rounded-3xl p-6 mt-10">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            Revenue Growth
          </h2>
          <div className="h-80">
            <Line data={revenueData} options={{ responsive: true }} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
          <div className="bg-white shadow-md rounded-3xl p-6">
            <h2 className="text-2xl font-bold text-green-800 mb-4">
              Active Fields by Region
            </h2>
            <div className="h-64">
              <Pie data={activeFieldsData} options={{ responsive: true }} />
            </div>
          </div>
          <div className="bg-white shadow-md rounded-3xl p-6">
            <h2 className="text-2xl font-bold text-green-800 mb-4">
              Monthly Sales Trends
            </h2>
            <div className="h-64">
              <Line data={monthlySalesTrend} options={{ responsive: true}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
