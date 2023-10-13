import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const port = process.env.PORT||5000




// middleeware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})


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