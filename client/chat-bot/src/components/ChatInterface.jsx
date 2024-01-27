// ChatInterface.js
import React, { useState } from 'react';
import { FaMicrophone, FaPaperPlane } from 'react-icons/fa';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput } from '@chatscope/chat-ui-kit-react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';

const ChatInterface = () => {
    const [messages, setMessages] = useState([{
        message: "Hello I am ChatGpt!",
        sender: "ChatGpt",
    }]);
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
        if (newMessage.trim() !== '') {
            setMessages([...messages, { id: messages.length + 1, text: newMessage, isUser: true }]);
            setNewMessage('');
        }
    };

    return (
        <div style={{ position: "relative", height: "90vh" }} className='bg-gray-800'>
            <MainContainer>
                <ChatContainer>
                    {/* Chat history at the top */}
                    <MessageList>
                        {messages.map((message) => (
                            <Message
                                key={message.id}
                                model={{
                                    message: message.text,
                                    sentTime: "just now",
                                    sender: message.isUser ? "You" : "Joe"
                                }}
                                type={message.isUser ? 'text' : 'system'}
                            />
                        ))}
                    </MessageList>

                    {/* Input for new message */}
                    <MessageInput
                        placeholder="Type your message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onSend={() => handleSendMessage()}
                    />


                    <div className="flex items-center justify-center space-x-5">
                        <FaMicrophone size={24} color="white" />
                        <FaPaperPlane size={24} color="green" onClick={handleSendMessage} />
                    </div>
                </ChatContainer>
            </MainContainer>
        </div>
    );
};

export default ChatInterface;


