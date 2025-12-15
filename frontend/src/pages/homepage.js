import '../App.css';
import { div } from 'framer-motion/client';
import React, { useEffect, useState }  from 'react'
//import { Button, HStack } from "@chakra-ui/react"


const Homepage = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [cpassword, setCpassword] = useState();

    const submitSignup = () => {};

    const submitLogin = () => {};

    useEffect(() =>{
        document.getElementById("defaultOpen")?.click();
    }, []);
    
    const openTab = (evt, tabName) => {
        const tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) tabcontent[i].style.display = "none";

    const tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++)
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
    };



    
    return (
    <>
    <div class="container">
    <div class="box" >
        <h1>
            ChatPage
        </h1>
        

    </div>
    
    <div class="box">
        <div>
        <div class="tab">
            <button id="defaultOpen" class="tablinks" onClick={(e) => openTab(e, 'Login')}>Login</button>
            <button class="tablinks" onClick={(e) => openTab(e, 'SignUp')}>Sign Up</button>
        </div>

        <div id="Login" class="tabcontent">
        <form>
            <label for="username" >Username: </label><br></br>

            <input onChange={(e) => setName(e.target.value)} 
            type="text" name="username" placeholder="Enter Username"></input>    
            <br></br>
            <label for="password">Password:   </label><br></br>

            <input onChange={(e) => setPassword(e.target.value)} 
            type="text" name="password" placeholder="Enter Password"></input>    
            <br></br>
            <button type="submit" onClick={submitLogin}>Login</button>
        </form>
        </div>

        <div id="SignUp" class="tabcontent">
        <form>
            <label for="username">Username: </label><br></br>

            <input type="text" name="username" placeholder="Enter Username"
            onchange={(e) => setName(e.target.value)}           
            ></input>    
            <br></br>
            <label for="password">Password: </label><br></br>

            <input onchange={(e) => setPassword(e.target.value)}  
            type="text" name="password" placeholder="Enter Password"></input>    
            <br></br>
            <label for="cpassword">Confirm Password: </label><br></br>

            <input 
            onchange={(e) => setCpassword(e.target.value)}  
            type="text" name="cpassword" placeholder="Confirm Password"></input>    
            <br></br>
            <button type="submit" onClick={submitSignup}>Sign Up</button>

        </form>
        </div>

    </div>
        

    </div>
    </div>
    


</>
);

}


export default Homepage