'use client';
import React from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from '../config';
import ActionProvider from '../Actionprovider';
import MessageParser from './MessageParser';
import './ChatComponent.css'; 

const ChatComponent = () => {
    return (
        <div className="chatbot-container">
            <div className="chatbot-header">AgriBot</div>
            <Chatbot 
                config={config} 
                actionProvider={ActionProvider} 
                messageParser={MessageParser} 
            />
        </div>
    );
};

export default ChatComponent;
