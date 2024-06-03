import React from 'react';

const MessageList = ({ messages }) => {
    return (
        <div>
            <h2>Messages</h2>
            <ul>
                {messages.map((message) => (
                    <li key={message.id}>
                        <p><strong>{message.sender_id}</strong>: {message.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MessageList;
