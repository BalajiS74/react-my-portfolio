import React from 'react'
import Navbar from'../components//Navbar'
import { Outlet } from 'react-router-dom'


function RootLayout() {
  return (
    <div className='h-100'>
        <Navbar/>
        <div className=''>
            <Outlet/>
        </div>
    </div>
  )
}

export default RootLayout