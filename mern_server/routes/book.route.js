import express from 'express';
import { test, uploadBook } from '../controllers/book.controller.js';



const router=express.Router();


router.get('/test', test);
router.post('/update-book',uploadBook);


export default router;