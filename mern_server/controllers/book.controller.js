import Book from "../models/book.model.js";
import { errorhandler } from "../utils/error.js";

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



export const getAllBook= async (req,res)=>{
    try{

        const books_Data= await Book.find({ });
    
        if(!books_Data){
            return 
        }
        res.status(200).json(books_Data);
    }
    catch(error){
        console.log(error)
    }
        
};

export const updateBook= async (req,res,next)=>{
    try{
        const book_Data= await Book.findById(req.params.id);

        if(!book_Data){
            return next(errorhandler(404,'Book not found!'))
        }

        const updatedBook= await Book.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).json(updatedBook);
    }
    catch(error){
        console.log(error);
    }
    
};