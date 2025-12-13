const express = require("express");
const dotenv = require("dotenv");
const { chats }=require("./data/data");


const app = express();

app.get('/', (req,res)=>{
    res.send("API is Running");
})

app.get('/api/chat', (req,res) => {
    res.send(chats);
})

app.get('/api/chat/:id', (req,res) =>{
    //console.log(req.params.id);
    const singleChat = chats.find((c)=>c._id === req.params.id);
    res.send(singleChat);
    
})

const PORT = process.env.PORT || 7000

app.listen(7000, console.log(`Server startet on PORT ${PORT}`));

