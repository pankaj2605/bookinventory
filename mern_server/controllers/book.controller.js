import Book from "../models/book.model.js";

export const test = (req,res)=>{

    res.json({message:"hello world",
            });
    };


export const uploadBook= async (req,res)=>{
    try{
        const book = await Book.create(req.body);
        return res.status(201).json(book);
    }catch(error){
        console.log(error);
    }
    
    };