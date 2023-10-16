import React, { useEffect, useState } from 'react'
import { Card } from 'flowbite-react';

export default function Shop() {
  const [books,setBooks]=useState([]);

  useEffect(()=>{
    const fetchbooks = async()=>{
        try{
            const res =await fetch('/api/book/all-books');
            const data=await res.json();
            setBooks(data);
        }catch(error){
            console.log(error);
      
        }
        }

    fetchbooks();
},[])
  return (
    <div className='mt-28 px-4 lg:px:24 '>
      <h2 className='text-4xl font-bold text-center '>All Books are here</h2>
      <div className='grid gap-8 my-12 mx-24 justify-between lg:grid-col-4 sm:grid-cols-2 md:grid-cols-3  grid-cols-1'>
        {
          books.map(book=>
            <Card key={book._id}
                  imgAlt="cover page of book"
                  imgSrc={book.imageURL}
                  className='w-80 h-70' 
                >
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <p>
                      {book.bookTitle} <span className='text-xl font-semibold text-gray-400 tracking-tight' >by</span> <span className='text-xl font-semibold text-gray-600 tracking-tight'>{book.authorName}</span>
                    </p>
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
                    <p>
                      {book.bookDescription}
                    </p>
                  </p>
                  <button className='bg-slate-500  py-2 text-white font-semibold rounded-sm hover:bg-slate-900 transition-all  duration-300 '>Buy Now</button>
            </Card>
          )
        }
      </div>
    </div>
  )
}

