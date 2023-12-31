import React, { useState, ChangeEvent, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import BasicInput from '../forms/Input';
import { useRef } from 'react';
import MessageItem from './message';
import { BasicButton } from '../forms/Button';

export default function ChatBox() {
    const [messages, setMessages] = useState([
        { text: 'Bonjour, comment puis-je vous aider?', user: 'user1', timestamp: new Date() },
        { text: 'Voici un exemple de message.', user: 'user2', timestamp: new Date() },
        { text: 'Testons avec plusieurs messages.', user: 'user1', timestamp: new Date() },
        { text: 'Testons avec plusieurs messages.', user: 'user1', timestamp: new Date() },
        { text: 'Testons avec plusieurs messages.', user: 'user1', timestamp: new Date() },
        { text: 'Testons avec plusieurs messages.', user: 'user1', timestamp: new Date() },
        { text: 'Testons avec plusieurs messages.', user: 'user1', timestamp: new Date() },
        { text: 'Testons avec plusieurs messages.', user: 'user1', timestamp: new Date() },

    ]);
    const [inputValue, setInputValue] = useState(''); 
    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' && !event.shiftKey) { // Vérifier si la touche "Entrée" est pressée sans "Shift"
            event.preventDefault(); // Prévenir le comportement par défaut (saut de ligne)
            sendMessage();
        }
    };
    const inputRef = useRef<HTMLInputElement>(null);
    const sendMessage = () => {
        if (inputRef.current && inputRef.current.value.trim() !== '') { 
            setMessages([...messages, { text: inputRef.current.value, user: 'user2', timestamp: new Date() }]);
            inputRef.current.value = "";
            setInputValue(''); 
        }
    };

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => { 
        setInputValue(event.target.value);
    };
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);
    return (
        <Box sx={{ position: 'relative', height: '100%', width: '100%' }}>
      
        <Box sx={{ height: 'calc(100% - 60px)', overflowY: 'auto' }}>
            {messages.map((message, index) => (
            <MessageItem text={message.text} user={message.user} timestamp={message.timestamp} key={index} />
            ))}
            <div ref={messagesEndRef} />
        </Box>
            <Box sx={{ position: 'sticky', bottom: 0, display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>                
                <BasicInput
                        label=''
                        variant='outlined'
                        forwardedRef={inputRef}
                        value={inputValue}
                        onChange={handleInputChange} 
                />
                <BasicButton
                    buttonVariant='contained'
                    buttonColor='primary'
                    onClick={sendMessage}
                    chat='yes'
                    disabled={inputValue.trim() === ''} 
                />
            </Box>
        </Box>
    );
}
