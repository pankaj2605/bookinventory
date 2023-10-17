import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bookRouter from './routes/book.route.js'
import path from 'path';

dotenv.config();

const app = express();
const port = process.env.PORT||5000

app.use(express.static(path.join(__dirname,'/mern-client/dist')));


// middleeware
app.use(cors());
app.use(express.json());




//mongodb


mongoose.connect(process.env.MONGO,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'BookInventory',
}).then(()=>{
    console.log('connected to MongoDB!');
        }).catch((err)=>{
            console.log(err)
            });



app.listen(port, () => {
  console.log(`App listening on port ${port}`)
}) 



app.use("/api/book",bookRouter);

app.get('*',(res,req)=>{
  res.sendFile(path.join(__dirname,'mern-client','dist','index.html'));
})

app.use((err,req,res,next)=>{
  const statusCode = err.statusCode || 500;
  const message=err.message || 'Intenal Server Error';
  return res.status(statusCode).json({
      success:false,
      statusCode,
      message,
  });
});