import React from 'react';
import BannerCard from '../home/BannerCard';

export default function Banner() {
  return (
    <div className='px-4 lg:px-24 bg-slate-200 flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
            {/* left side */}
            <div className=' md:w-1/2 space-y-7 h-full'>
                <h2 className='text-5xl font-bold leading-snug text-black'>Buy and Sell Your Books <span className='text-slate-500'>for the Best Prices</span></h2>
                <p  className='md:w-4/5 '>JGS Books intends to serve  books at cheap and affordable rates. If you are a resident of Jharkhand, 
                you must be tired of travelling in the traffic to buy books. Infact, the money spent on travel equals the 
                savings made on purchase of a  book. We at JGS Books re-organize them by partnering with book sellers across 
                India viz Blossoms book house, bookworms and other bookstores in and around Jharkhand. We collect  books, pack  
                and deliver to your doorstep,anywhere across Jharkhand. We majorly deal with Engineering, Medical, Competitive 
                Exam, Novels, and Self help books. We are looking to spread our wings over various regions. Our site suggests 
                recommended books from toppers and professors as well.</p>
                <div className='py-4'>
                    <input type="search" name="search" id="search" placeholder='Search a Book'  className='py-2 px-2 rounded-sm outline-none'/>
                    <button className='bg-slate-500 px-6 py-2 text-white font-medium hover:bg-slate-900 transition-all ease-in duration-200 rounded-sm'>Search</button>
                </div>
            </div>
            {/* right side */}
            <div>
                <BannerCard></BannerCard>
            </div>
        </div>
    </div>
  )
}
