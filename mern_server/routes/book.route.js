import express from 'express';
import { test, uploadBook,getAllBook,updateBook } from '../controllers/book.controller.js';
import { param } from 'express-validator';



const router=express.Router();


router.get('/test', test);
router.post('/update-book',uploadBook);
router.get('/all-books',getAllBook);
router.patch('/:id',param('id').customSanitizer(value => ObjectId(value)),updateBook);


export default router;