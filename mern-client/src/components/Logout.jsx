import React, { useState,useContext } from 'react';
import {  useLocation, useNavigate } from 'react-router-dom';
import {AuthContext} from "../contexts/AuthProvider";



export default function Logout() {


    const navigate =useNavigate();
    const location =useLocation();

    const from=location.state?.from?.pathname || "/";

    const {signout}=useContext(AuthContext);
    const handleLogout= async()=>{
        try{
            await signout();
            alert("Signout Successfully");
            navigate(from,{replace:true});
        }catch(error){
            console.log(error)
        }
    }
  return (
    <div className='h-screen bg-teal-100 flex items-center justify-center'>
        <button onClick={handleLogout} className='bg-slate-700 px-4 py-2 text-white rounded '>Logout</button>
    </div>
  )
}
