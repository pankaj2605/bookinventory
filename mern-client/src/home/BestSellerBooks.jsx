import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';

export default function BestsellerBooks() {
    const [books,setBooks]=useState([]);

    useEffect(()=>{
        const fetchbooks = async()=>{
            try{
                const res =await fetch('/api/book/all-books');
                const data=await res.json();
                setBooks(data.slice(0,8));
            }catch(error){
                console.log(error);
          
            }
            }

        fetchbooks();
    },[])
  return (
    <div>
        <BookCards books={books} headline="Best Seller Books"/>
    </div>
  )
}
