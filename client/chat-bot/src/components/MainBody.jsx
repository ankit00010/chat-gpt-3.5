// MainBody.js
import React from 'react';
import ChatHistory from './ChatHistory';
import ChatInterface from './ChatInterface';

const MainBody = () => {
    return (
        <div className="flex space-x-4 p-4">
            {/* Chat History */}
            <ChatHistory />

            {/* Chat Interface */}
            <ChatInterface />
        </div>
    );
};

export default MainBody;
