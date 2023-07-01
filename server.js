const express=require('express');
const app=express();
const dotenv=require('dotenv');
dotenv.config();
const port=process.env.PORT;

app.use(express.json());

app.use('/stream',require('./Routes/stream'))

app.listen(port,()=>{
    console.log(`server listening on port ${port}`);
})