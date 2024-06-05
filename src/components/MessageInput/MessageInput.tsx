import React, { useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000'); // Assurez-vous que l'URL est correcte

interface MessageInputProps {
    conversationId: number;
    userId: number;
}

const MessageInput: React.FC<MessageInputProps> = ({ conversationId, userId }) => {
    const [content, setContent] = useState('');

    const sendMessage = () => {
        if (content.trim() === '') return;

        const message = {
            conversation_id: conversationId,
            sender_id: userId,
            content,
        };

        socket.emit('sendMessage', message);
        setContent('');
    };

    return (
        <div>
            <input
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Type your message..."
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default MessageInput;
