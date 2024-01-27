import React, { useState } from 'react';
import Message from './Message'; // Import the Message component if it's in a separate file

const MessageList = () => {
    const [messages, setMessages] = useState([
        {
            message: "Hello I am ChatGpt",
            sender: "chatGpt"
        }
    ]);

    return (
        <div>
            {
                messages.map((message, i) => (
                    <Message key={i} model={message} />
                ))
            }
        </div>
    );
}

export default MessageList;
