import AdminProfile from '@/Components/AdminProfile/AdminProfile';
import ProductTable from '@/Components/ProductTable/ProductTable';
import React from 'react'

const Machines = () => {
  return (
    <div
    className="p-2 md:p-8 min-h-screen">
    <AdminProfile/>
    <div className='z-20'>
    <ProductTable name="Machine" machine={true}/>      

    </div>
    </div>
  )
}

export default Machines;