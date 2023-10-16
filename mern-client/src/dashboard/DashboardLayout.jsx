import React from 'react'
import Dashboard from './Dashboard'
import { Outlet } from 'react-router-dom'

export default function DashboardLayout() {
  return (
    <>  
        <Outlet/>
        {/* <Dashboard/> */}
    </>
  )
}
