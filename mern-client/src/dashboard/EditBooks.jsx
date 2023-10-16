import { useLoaderData, useParams } from 'react-router-dom';
import React, { useState } from 'react';
import { Label, TextInput,Textarea } from 'flowbite-react';

export default function EditBooks() {
    const bookCategories=[
        "Fiction",
        "Non-Fiction",
        "Mistery",
        "Programming",
        "Science Fiction",
        "Fantasy",
        "Horror",
        "Biblography",
        "Autobiography",
        "History",
        "Self-help",
        "Memoir",
        "Business",
        "Children Books",
        "Travel",
        "Religion",
        "Art and Design"
       ] 
    const {id} = useParams();
    const {bookTitle,authorName,imageURL,category,bookDescription,bookPDFURL}= useLoaderData();
    const[selectedBookCategory,setSelectedBookCategory]=useState(category);
  
    const handleBookSubmit= (event)=>{
        event.preventDefault();
        const form=event.target;

        const bookTitle =form.bookTitle.value;
        const authorName =form.authorName.value;
        const imageURL =form.imageURL.value;
        const category =selectedBookCategory;
        const bookDescription =form.bookDescription.value;
        const bookPDFURL =form.bookPDFURL.value;

        const bookObj={bookTitle,authorName,imageURL,category,bookDescription,bookPDFURL};


        // try{
 
        //     const res = await fetch('/api/book/update-book',{
        //         method:'POST',
        //         headers:{
        //             'Content-Type':'application/json',
        //         },
        //         body:JSON.stringify(
        //             bookObj
        //         ),
        //     });
        //     const data = await res.json(); 
        //     alert("Book Uploaded succsfully")
        //     form.reset();
        // }catch(error){
        //     alert(error)

        // }
    }

    const handleChangeSelectedValue=(event)=>{
        setSelectedBookCategory(event.target.value);
   }

    return (
        <div className='px-4 my-12'>
            <h2 className='mb-8 text-3xl font-bold'>Update the Book data</h2>
            <form   onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                        <Label
                            htmlFor="bookTitle"
                            value="Book Title"
                        />
                        </div>
                        <TextInput
                        id="bookTitle"
                        name="bookTitle"
                        placeholder="Enter book title"
                        required
                        type="text"
                        defaultValue={bookTitle}
                        />
                    </div>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                        <Label
                            htmlFor="authorName"
                            value="Author Name"
                        />
                        </div>
                        <TextInput
                        id="authorName"
                        name="authorName"
                        placeholder="Enter author name"
                        required
                        type="text"
                        defaultValue={authorName}
                        />
                    </div>
                </div>
                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                            <div className="mb-2 block">
                            <Label
                                htmlFor="imageURL"
                                value="Book Title"
                            />
                            </div>
                            <TextInput
                            id="imageURL"
                            name="imageURL"
                            placeholder="Enter imageURL"
                            required
                            type="text"
                            defaultValue={imageURL}
                            />
                        </div>
                        <div className='lg:w-1/2'>
                            <div className="mb-2 block">
                            <Label
                                htmlFor="inputState"
                                value="Book Category"
                            />
                            </div>
                                <select id='inputState' name='categoryName' className='w-full rounded' value={selectedBookCategory} defaultValue={category} onChange={handleChangeSelectedValue}>
                                    {
                                        bookCategories.map(option=><option key={option} value={option}>{option}</option>)
                                    }
                                </select>
                        </div>
                </div>
                
                <div >
                        <div className="mb-2 block">
                        <Label
                            htmlFor="bookDescription"
                            value="Book Description"
                        />
                        </div>
                        <Textarea
                        className='w-full'
                        id="bookDescription"
                        name="bookDescription"
                        placeholder="Enter Book Description"
                        required
                        rows={3}
                        defaultValue={bookDescription}
                        />
                </div>
    
                <div>
                    <div className="mb-2 block">
                    <Label
                        htmlFor="bookPDFURL"
                        value="Book PDF URL"
                    />
                    </div>
                    <TextInput
                    id="bookPDFURL"
                    name="bookPDFURL"
                    placeholder="Enter Book PDF URL"
                    required
                    type="text"
                    defaultValue={bookPDFURL}
                    />
                </div>
    
                <button type="submit" className='bg-slate-500 px-6 py-2 text-white font-medium hover:bg-slate-900 transition-all ease-in duration-200 rounded-lg mt-2'>Upload Book</button>
                
    
        </form>
        </div>
      )
    }
