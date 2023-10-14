import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaBlog } from "react-icons/fa6";

export default function Navbar() {
    const [isMenuOpen,setIsMenuOpen]=useState(false);
    const [isSticky,setIsSticky]=useState(false);


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
    },[])


    const navItems =[
        {link:"Home",path:"/"},
        {link:"About",path:"/about"},
        {link:"Shop",path:"/shop"},
        {link:"Sell Your Book",path:"/admin/dashboard"},
        {link:"Blog",path:"/blog"},
    ]
  return (
    <header>
        <nav>
            <div>{/*logo*/}
            <Link to="/"><FaBlog/>Books</Link>
            </div>
        </nav>
    </header>
  )
}
