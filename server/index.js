import express from 'express';
// import cors from 'cors';
const app = express();
// const cors = require('cors');
const pool = require('./db');

// here is the midleware
// app.use(cors());
// app.use(express.json());


//routes
app.post("/signup", async(req,res)=>{
    try{
console.log(req.body);
    }catch(err){
        console.error(err.message);
    }
})

app.listen(8000, () => {
    console.log("Server listening on port");
})