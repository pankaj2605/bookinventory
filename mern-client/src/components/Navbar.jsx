import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";
import { AuthContext } from '../contexts/AuthProvider';

export default function Navbar() {
    const [isMenuOpen,setIsMenuOpen]=useState(false);
    const [isSticky,setIsSticky]=useState(false);

    const {user}=useContext(AuthContext);
    console.log(user);
    // toggle menu
    const toggleMenu=()=>{
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(()=>{
        const handleScroll=()=>{
            if(window.scrollY >100){
                setIsSticky(true);
            }else{
                setIsSticky(false);
            }
        }

        window.addEventListener("scroll",handleScroll)

        return ()=>{
            window.addEventListener("scroll",handleScroll);
        }
    },[]);


    const navItems =[
        {link:"Home",path:"/"},
        {link:"About",path:"/about"},
        {link:"Shop",path:"/shop"},
        {link:"Sell Your Book",path:"/admin/dashboard"},
        {link:"Blog",path:"/blog"},
    ]
  return (
    <header className='w-full bg-transparent fixed top-0 left-0 right-0 trasition-all ease-in duration-300'>
        <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top=0 left=0 right=0 bg-slate-300" :"" }`}>
            <div className='flex justify-between items-center text-base gap-8'>
            {/*logo*/}
            <Link to="/" className='text-2xl font-bold text-slate-700 flex items-center gap-2'><FaBlog className='inline-block'/>JGS Books</Link>
            {/* nav items for large devices */}
            <ul className='md:flex space-x-12 hidden'>
                {
                    navItems.map(({link,path})=><Link key={path} to={path} className='block text-base text-black uppercase cursor-pointer hover:underline'>{link}</Link>)
                }

            </ul>
            {/* btn for lg devices  */}
            <div className='space-x-12 hidden lg:flex items-center'>
                <button><FaBarsStaggered className='w-5 hover:underline'/></button>
            </div>
                {/* menu btn for the mobile devices  */}
                <div className='md:hidden '>
                    <button onClick={toggleMenu} className='text-black focus:outline-none'>
                        {
                            isMenuOpen ? <FaXmark className='h-5 w-5 text-black'/>:<FaBarsStaggered className='h-5 w-5 text-black' />
                        }
                    </button>
                </div>
            </div>
            {/* Nav item for sm devices */}
            <div className={`space-y-4 mt-12 px-4 py-7 bg-slate-300  ${isMenuOpen?"block fixed top-0 right-0 left-0":"hidden"}`}>
                {navItems.map(({link,path})=><Link key={path} to={path} className='block text-base text-black uppercase cursor-pointer'>{link}</Link>)}
            </div>
        </nav>
    </header>
  )
}
