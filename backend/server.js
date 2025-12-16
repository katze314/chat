const express = require("express");
const dotenv = require("dotenv");
const { chats }=require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors");
const app = express();
const userRoutes = require("./routes/userRoutes");
dotenv.config();

connectDB();

app.use(express.json()); //to accept json data

app.get('/', (req,res)=>{
    res.send("API is Running");
})

app.use('/api/user', userRoutes)

/*
app.get('/api/chat', (req,res) => {
    res.send(chats);
})

app.get('/api/chat/:id', (req,res) =>{
    //console.log(req.params.id);
    const singleChat = chats.find((c)=>c._id === req.params.id);
    res.send(singleChat);
    
})*/

const PORT = process.env.PORT || 7000

app.listen(7000, console.log(`Server startet on PORT ${PORT}`.yellow.bold));

