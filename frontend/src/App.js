import './App.css';
//import { ColorModeProvider, ThemeProvider } from "@chakra-ui/react"
//import { Button as ChakraButton } from "@chakra-ui/react"
//import { Button, HStack } from "@chakra-ui/react"
//import { ChakraProvider } from "@/chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" component={Homepage}/>
        <Route paht="/chats" />
      </Routes>

    </div>

  );
}

export default App;


