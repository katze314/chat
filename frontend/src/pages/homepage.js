import '../App.css';
import { div } from 'framer-motion/client';
import React from 'react'
//import { Button, HStack } from "@chakra-ui/react"


const Homepage = () => {
    return (
    <>
    <div class="container">
    <div class="box">
        <h1>
            ChatPage
        </h1>
        

    </div>
    
    <div class="box">
        
        <form>
        <label for="username">username: </label>
        <input type="text" name="username"></input>    
        <label for="password">password: </label>
        <input type="text" name="password"></input>    
                
        </form>

    </div>
    </div>
    
</>
);

}


export default Homepage