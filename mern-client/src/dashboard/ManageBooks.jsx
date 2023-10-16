import React, { useEffect, useState } from 'react';
import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function ManageBooks() {
    const [allBooks,setAllBooks]=useState([]);

    
    useEffect(()=>{
        const fetchbooks = async()=>{
            try{
                const res =await fetch('/api/book/all-books');
                const data=await res.json();
                setAllBooks(data);
            }catch(error){
                console.log(error);
          
            }
            }

        fetchbooks();
    },[])

    const handleDelete= async(id)=>{
        try{
            const res=await fetch(`/api/book/${id}`,{
              method:'DELETE',
              headers:{
                'Content-Type':'application/json',
              },
            });
            const data=await res.json();
            alert("Book is deleted");
            window.location.reload()
      
          }
          catch(error){
            alert(error)
          }
    }
  return (
    <div className='px-4 my-12'>
        <h2 className='mb-8 text-3xl font-bold'>ManageBooks</h2>
        <Table className='lg:w-[1180px]'>
            <Table.Head>
                <Table.HeadCell>
                No
                </Table.HeadCell>
                <Table.HeadCell>
                Book Title
                </Table.HeadCell>
                <Table.HeadCell>
                Author Name
                </Table.HeadCell>
                <Table.HeadCell>
                Category
                </Table.HeadCell>
                <Table.HeadCell>
                Prices
                </Table.HeadCell>
                <Table.HeadCell>
                <span >
                    Edit or Manage
                </span>
                </Table.HeadCell>
            </Table.Head>
            
                {
                    allBooks.map((book,index)=>
                        <Table.Body className="divide-y" key={book._id}>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={book._id}>
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {index +1}
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {book.bookTitle}
                        </Table.Cell>
                        <Table.Cell>
                            {book.authorName}
                        </Table.Cell>
                        <Table.Cell>
                            {book.category}
                        </Table.Cell>
                        <Table.Cell>
                            Rs 100
                        </Table.Cell>
                        <Table.Cell>
                            <Link to = {`/admin/dashBoard/edit-books/${book._id}`}
                            className="font-medium text-blue-600 hover:underline dark:text-cyan-500"
                            
                            >
                            <p>
                                Edit
                            </p>
                            </Link>
                            <button onClick={()=>handleDelete(book._id)} className="font-medium text-red-600 hover:underline dark:text-red-500">Delete</button>
                        </Table.Cell>
                        </Table.Row>
                        </Table.Body>
                    )
                }
            
    </Table>
    </div>
  )
}
