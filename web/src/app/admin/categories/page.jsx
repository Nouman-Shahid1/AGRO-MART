import AdminProfile from '@/Components/AdminProfile/AdminProfile';
import ProductTable from '@/Components/ProductTable/ProductTable';
import React from 'react'

const Crops = () => {
  return (
    <div
    className="p-2 md:p-8 min-h-screen">
    <AdminProfile/>
    <div className='z-20'>
    <ProductTable name="Categories" category={true}/>      

    </div>
    </div>
  )
}

export default Crops;