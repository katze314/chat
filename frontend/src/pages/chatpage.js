import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';


const ChatPage = () => {
    const [chats, setChats] = useState([]);

    const fetchChats = async () => {
        const { data }= await axios.get('/api/chat')
        setChats(data);

};

    useEffect(() => {
        fetchChats();
    }, [])

    return <div>
        <h1 class="box">Verfügbare Chats</h1>
        <div class="box">
        {chats.map((chat) => (
            <div key={chat._id} >
                {chat.chatName}: {chat.users[0].name}, {chat.users[1].name}
                

            </div>
        ))}
        </div>

    </div>;
};

export default ChatPage;
