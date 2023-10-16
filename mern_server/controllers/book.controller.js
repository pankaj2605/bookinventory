import Book from "../models/book.model.js";
import { errorhandler } from "../utils/error.js";
import mongoose from 'mongoose';

export const test = (req,res)=>{

    res.json({message:"hello world",
            });
    };


export const uploadBook= async (req,res,next)=>{
    try{
        const book = await Book.create(req.body);
        return res.status(201).json(book);
    }catch(error){
        next(error);
    }
    
};



export const getAllBook= async (req,res,next)=>{
    try{

        let category=req.query.category;
        if(category === undefined || category === 'all' ){
            category={$in:['Mystery','Triller',"Biography","Fiction",
            "Non-Fiction",
            "Programming",
            "Science Fiction",
            "Fantasy",
            "Horror",
            "Autobiography",
            "History",
            "Self-help",
            "Memoir",
            "Business",
            "Children Books",
            "Travel",
            "Religion",
            "Art and Design"]};
        }
        
        const books_Data =await Book.find({
            category,
        })
    
        if(books_Data.length === 0){
            return next(errorhandler(404,'Books not listed for sale!'));
        }
        res.status(200).json(books_Data);
    }
    catch(error){
        next(error)
    }
        
};

export const updateBook= async (req,res,next)=>{
    try{

        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return next(errorhandler(400,'Invalid object id!'));
        }


        const book_Data= await Book.findById(req.params.id);

        if(!book_Data){
            return next(errorhandler(404,'Book not found!'))
        }

        const updatedBook= await Book.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).json(updatedBook);
    }
    catch(error){
        next(error);
    }
    
};


export const deleteBook= async (req,res,next)=>{
    try{

        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return next(errorhandler(400,'Invalid object id!'));
        }


        const book_Data= await Book.findById(req.params.id);

        if(!book_Data){
            return next(errorhandler(404,'Book not found!'))
        }

        await Book.findByIdAndDelete(req.params.id,req.body,{new:true});
        res.status(200).json("Book is deleted");
    }
    catch(error){
        next(error);
    }
    
};

export const getBook= async (req,res,next)=>{
    try{

        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return next(errorhandler(400,'Invalid object id!'));
        }


        const book_Data= await Book.findById(req.params.id);

        if(!book_Data){
            return next(errorhandler(404,'Book not found!'))
        }

        res.status(200).json(book_Data);
    }
    catch(error){
        next(error);
    }
    
};