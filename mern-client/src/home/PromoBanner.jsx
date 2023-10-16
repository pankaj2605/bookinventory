import React from 'react';
import { Link } from 'react-router-dom';
import bookPic from '../assets/awardbooks.png'

export default function PromoBanner() {
  return (
    <div className='mt-16 py-12 bg-slate-200 px-4 lg:px-24'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
            <div className='md:w-1/2'>
                <h2 className='text-3xl font-bold mb-6 leading-snug'>2023 National Book Awards for Fiction ShortList</h2>
                <Link to='/Shop' className=' block' ><button className='bg-slate-500 px-6 py-2 text-white font-semibold rounded-sm hover:bg-slate-900 transition-all  duration-300 '>Get Promo Code</button></Link>
            </div>
            <div>
                <img className='w-96' src={bookPic} alt="award winning books pic"/>
            </div>
        </div>
    </div>
  )
}
