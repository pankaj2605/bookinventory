import React, { useState,useEffect } from 'react'
import BookCards from '../components/BookCards';

export default function OtherBooks() {
    const [books,setBooks]=useState([]);

    useEffect(()=>{
        const fetchbooks = async()=>{
            try{
                const res =await fetch('/api/book/all-books');
                const data=await res.json();
                setBooks(data.slice(4,10));
            }catch(error){
                console.log(error);
          
            }
            }

        fetchbooks();
    },[])
  return (
    <div>
        <BookCards books={books} headline="Other Books"/>
    </div>
  )
}
