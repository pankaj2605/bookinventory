import express from 'express';
import { test, uploadBook,getAllBook,updateBook, deleteBook,getBook } from '../controllers/book.controller.js';
import { param } from 'express-validator';



const router=express.Router();


router.get('/test', test);
router.post('/update-book',uploadBook);
router.get('/all-books',getAllBook);
router.get('/:id',getBook);
router.patch('/:id',updateBook);
router.delete('/:id',deleteBook);


export default router;