import React from 'react'
import Dashboard from './Dashboard'
import { Outlet } from 'react-router-dom'
import SideBar from './Sidebar';
import Navbar from '../components/Navbar';



export default function DashboardLayout() {
  return (
    <>
        {/* <Navbar/> */}
    <div className='flex gap-4 flex-col md:flex-row'>  
        <SideBar/>
        <Outlet/>
        {/* <Dashboard/> */}
    </div>
    </>
    
  )
}
