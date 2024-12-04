import AdminProfile from '@/Components/AdminProfile/AdminProfile';
import RentalTable from '@/Components/RentalsTable/RentalTable';

import React from 'react'

const Rentals = () => {
  return (
    <div
    className="p-8 min-h-screen">
    <AdminProfile/>
    <div className='z-20'>      
<RentalTable/>
    </div>
    </div>
  )
}

export default Rentals;