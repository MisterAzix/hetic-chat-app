import React, { useState, ChangeEvent, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import BasicInput from '../forms/Input';
import { useRef } from 'react';
import MessageItem from './message';
import { BasicButton } from '../forms/Button';

interface ChatProps {
  chats: [{ text: string; user: string; timestamp: Date }];
  onMessageSent: (messageText: string) => void;
}

export default function ChatBox({ chats, onMessageSent }: ChatProps) {
  const dummyMessages = [
    {
      text: 'Bonjour, comment puis-je vous aider?',
      user: 'user1',
      timestamp: new Date(),
    },
    {
      text: 'Voici un exemple de message.',
      user: 'user2',
      timestamp: new Date(),
    },
    {
      text: 'Testons avec plusieurs messages.',
      user: 'user1',
      timestamp: new Date(),
    },
    {
      text: 'Testons avec plusieurs messages.',
      user: 'user1',
      timestamp: new Date(),
    },
    {
      text: 'Testons avec plusieurs messages.',
      user: 'user1',
      timestamp: new Date(),
    },
    {
      text: 'Testons avec plusieurs messages.',
      user: 'user1',
      timestamp: new Date(),
    },
    {
      text: 'Testons avec plusieurs messages.',
      user: 'user1',
      timestamp: new Date(),
    },
    {
      text: 'Testons avec plusieurs messages.',
      user: 'user1',
      timestamp: new Date(),
    },
  ];
  const [messages, setMessages] = useState([...dummyMessages, ...chats]);

  const [inputValue, setInputValue] = useState('');
  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };
  const inputRef = useRef<HTMLInputElement>(null);
  const sendMessage = () => {
    if (inputRef.current && inputRef.current.value.trim() !== '') {
      setMessages([
        ...messages,
        { text: inputRef.current.value, user: 'user2', timestamp: new Date() },
      ]);
      onMessageSent(inputRef.current.value);
      inputRef.current.value = '';
      setInputValue('');
    }
  };

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  return (
    <Box
      sx={{
        position: 'relative',
        height: '100%',
        width: '100%',
      }}
    >
      <Box
        sx={{
          height: 'calc(100% - 60px)',
          overflowY: 'auto',
          paddingX: '2%',
        }}
      >
        {messages.map((message, index) => (
          <MessageItem
            text={message.text}
            user={message.user}
            timestamp={message.timestamp}
            key={index}
          />
        ))}
        <div ref={messagesEndRef} />
      </Box>
      <Box
        sx={{
          backgroundColor: 'background.default',
          position: 'sticky',
          bottom: 0,
          display: 'flex',
          justifyContent: 'flex-end',
          marginTop: 2,
          zIndex: 999,
          width: '100%',
        }}
      >
        <BasicInput
          label=""
          variant="outlined"
          forwardedRef={inputRef}
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <BasicButton
          buttonVariant="contained"
          buttonColor="primary"
          onClick={sendMessage}
          chat="yes"
          disabled={inputValue.trim() === ''}
        />
      </Box>
    </Box>
  );
}
