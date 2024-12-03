import Profile from '@/Components/ProfileCard/ProfileCard'
import React from 'react'

const Machines = () => {
  return (
    <div
    className="relative h-screen overflow-auto sm:p-0 px-1 md:px-8 lg:px-6 xl:px-8 2xl:px-12 py-4 md:py-5 lg:py-7 xl:py-10 2xl:py-12"
    style={{
        backgroundImage:
          "url('https://wallpapers.com/images/featured/agriculture-pictures-ppsj59vfqlop02h9.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}    >
        <div className="absolute inset-0 bg-black/50"></div>
        <Profile/>
    </div>
  )
}

export default Machines