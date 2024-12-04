'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const AdminDashboardCard = ({ details }) => {
  const { name, icon: Icon, url } = details;

  return (
    <Link href={url}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="group relative rounded-2xl overflow-hidden shadow-lg bg-gradient-to-r from-white via-green-50 to-white transform transition-all"
      >
        {/* Background Image */}
        <div
          className="w-full h-40 md:h-56 bg-cover bg-center group-hover:brightness-90 transition-all"
          style={{ backgroundImage: `url('/some-placeholder.png')` }} // Placeholder if needed
        ></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

        {/* Icon */}
        <div className="absolute top-8 left-4 bg-green-600 p-3 rounded-full shadow-md">
          <Icon className="text-white w-8 h-8" /> {/* Add `className` here */}
        </div>

        {/* Content */}
        <div className="absolute inset-x-0 bottom-0 p-6 bg-white/90 backdrop-blur-md rounded-t-xl transition-all group-hover:bg-green-100">
        <div className='flex items-end'>
            <div>
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-700 transition-colors">
            {name}
          </h3>
          <p className="mt-2 text-sm text-gray-600 group-hover:text-gray-900">
            Manage and explore {name.toLowerCase()} resources effortlessly.
          </p>
          </div>
          <div className="mt-4">
            <Link href={url}>
              <button className="text-md font-medium text-green-800 border-2 border-green-800 w-[80px] py-2 rounded-lg hover:bg-green-800 hover:text-white transition-colors">
                View All
              </button>
            </Link>
          </div>
        </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default AdminDashboardCard;
