import AdminProfile from '@/Components/AdminProfile/AdminProfile';
import UserTable from '@/Components/UserTable/UserTable';
import React from 'react'

const Users = () => {
  return (
    <div
    className="p-2 md:p-8 min-h-screen">
    <AdminProfile/>
    <div className='z-50'>
    <UserTable />      

    </div>
    </div>
  )
}

export default Users;