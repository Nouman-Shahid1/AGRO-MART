import ProductTable from '@/Components/ProductTable/ProductTable';
import Profile from '@/Components/ProfileCard/ProfileCard';
import React from 'react';

const Fertilizers = () => {
  return (
    <div className="p-2 md:p-8 min-h-screen">
      <Profile />
      <div className="z-20">
        {/* Passing the category as "fertilizers" for filtering */}
        <ProductTable name="Fertilizers" category="Fertilizer" />
      </div>
    </div>
  );
};

export default Fertilizers;
