import React from 'react';
import FavBookImg from "../assets/favoritebook.jpg";
import { Link } from 'react-router-dom';


export default function FavBook() {
  return (
    <div className='p-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center'>
        <div className='md:w-1/2'>
            <img src={FavBookImg} alt="favorite book image" className='rounded md:w-10/12'/>
        </div>
        <div className='md:w-1/2'>
            <h2 className='text-4xl font-bold my-5 md:w-3/4 leading-snug'>Find Your Favorite <span className='text-slate-500' >Book Here!</span></h2>
            <p className='mb-10 text-lg md:w-5/6 space-y-6'>JGS Books intends to serve books at cheap and affordable rates. If you are a resident of Jharkhand, you must be tired of travelling in the traffic to buy books. Infact, the money spent on travel equals the savings made on purchase of a book. We at JGS Books re-organize them by partnering with book sellers across India viz Blossoms book house, bookworms and other bookstores in and around Jharkhand. </p>
            {/* stats */}
            <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
                <div>
                    <h3 className='text-3xl font-bold'>800+</h3>
                    <p className='text-base'>Book listing</p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold'>550+</h3>
                    <p className='text-base'>Register User</p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold'>1200+</h3>
                    <p className='text-base'>PDF Download</p>
                </div>
            </div>
            <Link to='/Shop' className='mt-8 block' ><button className='bg-slate-500 px-6 py-2 text-white font-semibold rounded-sm hover:bg-slate-900 transition-all  duration-300 '>Explore More</button></Link>
        </div>
    </div>
  )
}
