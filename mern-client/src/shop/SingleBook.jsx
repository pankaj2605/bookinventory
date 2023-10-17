import React from 'react'
import { Link, useLoaderData } from 'react-router-dom';
export default function SingleBook() {
    const {_id,bookTitle,imageURL,authorName,bookDescription,bookPDFURL} =useLoaderData();
  return (
    <div className='mt-28 px-4 lg:px-24  justify-between gap-6 md:w-3/4 my-14'>
        <img src={imageURL} alt="Book cover" className='h-96'/>
        <h2 className='text-sm font-mono mb-6 leading-snug mt-5'><span className='font-semibold '>Book Title:</span> {bookTitle}</h2>
        <h3 className='text-sm font-mono mb-6 leading-snug'><span className='font-semibold '>Author Name:</span> {authorName}</h3>
        <p className='text-sm font-mono mb-6 leading-snug'> <span className='font-semibold '>Book Description :</span>{bookDescription}</p>
        <Link to={bookPDFURL} className='text-blue-500 hover:underline'>Book PDF</Link>
    </div>
  )
}
