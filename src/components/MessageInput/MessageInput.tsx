import React, { useState } from 'react';
import { useSocket } from '../../config/context/SocketContext';

interface MessageInputProps {
    conversationId: number;
    userId: number;
}

const MessageInput: React.FC<MessageInputProps> = ({ conversationId, userId }) => {
    const [content, setContent] = useState('');
    const socket = useSocket(); // Utiliser la connexion Socket.IO du contexte

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
