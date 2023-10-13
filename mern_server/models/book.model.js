import mongoose from "mongoose";


const bookSchema =new mongoose.Schema({
    bookTitle:{
        type:String,
        require:true,
    },
   authorName:{
        type:String,
        require:true,
    },
    imageURL:{
        type:Array,
        require:true,
    },
    category:{
        type:String,
        require:true,
    },
    bookDescription:{
        type:String,
        require:true,
    },
    bookPDFURL:{
        type:String,
        require:true,
    },

},{timestamps:true});

const Book=mongoose.model('Book',bookSchema);

export default Book;