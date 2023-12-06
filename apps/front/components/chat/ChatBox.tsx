import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import BasicInput from '../forms/Input';
import { useRef } from 'react';
import MessageItem from './message';
import { BasicButton } from '../forms/Button';

export default function ChatBox() {
    const [messages, setMessages] = useState([
        { text: 'Bonjour, comment puis-je vous aider?', user: 'user1', timestamp: new Date() },
        { text: 'Voici un exemple de message.', user: 'user2', timestamp: new Date() },
        { text: 'Testons avec plusieurs messages.', user: 'user1', timestamp: new Date() }
    ]);

    const inputRef = useRef<HTMLInputElement>(null);
    const sendMessage = () => {
        if (inputRef.current) {
            setMessages([...messages, { text: inputRef.current.value, user: 'user2', timestamp: new Date() }]);
            inputRef.current.value = "";
        }
    };

    return (
        <Box>
            <Box sx={{ overflow: 'auto' }}>
            {messages.map((message, index) => (
                    <MessageItem text={message.text} user={message.user} timestamp={message.timestamp} key={index} />
                ))}
            </Box>
            <BasicInput
                label=''
                variant='outlined'
                forwardedRef={inputRef}
            />
            <BasicButton buttonVariant='contained' buttonColor= 'primary' onClick={sendMessage} buttonText='Envoyer'/>
        </Box>
    );
}
