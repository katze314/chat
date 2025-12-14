import './App.css';
//import { ColorModeProvider, ThemeProvider } from "@chakra-ui/react"
//import { Button as ChakraButton } from "@chakra-ui/react"
//import { Button, HStack } from "@chakra-ui/react"
//import { ChakraProvider } from "@/chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import ChatPage from './pages/chatpage';
//import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
      <div class ="App">
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/chats" element={<ChatPage />}/>
      </Routes>
    </div>
  );
}

export default App


