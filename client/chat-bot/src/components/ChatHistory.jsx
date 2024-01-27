// ChatHistory.js
import React from 'react';
import { FaComment } from 'react-icons/fa';

const ChatHistory = () => {
    const previousMessages = [
        { id: 1, message: 'Hello, how can I help you?' },
        { id: 2, message: 'Tell me more about your request.' },
        // Add more messages as needed
    ];

    return (
        <div style={{ height: '90vh' }} className="flex-grow-0 bg-gray-800 p-4 rounded-l-lg overflow-y-auto w-full">

            {/* Display previous messages */}
            <div className="mb-2">
                {previousMessages.map((msg) => (
                    <div key={msg.id} className="flex items-center mb-2">
                        <FaComment className="text-white mr-2" />
                        <div className="text-white overflow-hidden whitespace-nowrap overflow-ellipsis max-w-md">
                            {msg.message}
                        </div>
                    </div>
                ))}
            </div>

            {/* New Chat button at the top */}
            <div className="mb-2">
                <button className=" text-white px-4 py-2 rounded border-green-500 w-full">
                    New Chat
                </button>
            </div>

            {/* Clear Conversation button at the bottom */}
            <div>
                <button className=" text-white px-4 py-2 rounded border-red-500 w-full">
                    Clear Conversation
                </button>
            </div>
        </div>
    );
};

export default ChatHistory;