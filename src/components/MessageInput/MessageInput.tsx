import React, { useState, useRef, useEffect } from 'react';
import { useSocket } from '../../config/context/SocketContext';
import './MessageInput.scss';

interface MessageInputProps {
    conversationId: number;
    userId: number;
}

const MessageInput: React.FC<MessageInputProps> = ({ conversationId, userId }) => {
    const [content, setContent] = useState('');
    const socket = useSocket(); // Utiliser la connexion Socket.IO du contexte
    const textareaRef = useRef<HTMLTextAreaElement>(null);

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

    const adjustTextareaHeight = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    };

    useEffect(() => {
        adjustTextareaHeight();
    }, [content]);

    return (
        <div className="message-input-container">
            <textarea
                ref={textareaRef}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Type your message..."
                className="message-input"
                rows={1}
            />
            <button onClick={sendMessage} className="send-button">Send</button>
        </div>
    );
};

export default MessageInput;
