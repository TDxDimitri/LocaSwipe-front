import React, { useEffect, useRef } from 'react';
import { useMessages } from '../../domains/Messaging/hooks/useMessages';
import MessageInput from '../MessageInput/MessageInput';
import { Message } from '../../models/Message';
import './Conversation.scss';

const Conversation: React.FC<{ userId: number, conversationId: number }> = ({ userId, conversationId }) => {
    const { messages, loading, error } = useMessages(conversationId);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const firstMessage = messages[0];

    return (
        <div className="conversation">
            {firstMessage && (
                <div className="conversation-header">
                    <img
                        src={firstMessage.sender_avatar || 'default-avatar.png'}
                        alt={`${firstMessage.sender_firstname} ${firstMessage.sender_lastname}`}
                        className="avatar"
                    />
                    <div className="sender-info">
                        <strong>{firstMessage.sender_firstname} {firstMessage.sender_lastname}</strong>
                    </div>
                </div>
            )}
            <ul className="message-list">
                {messages.map((message: Message) => (
                    <li
                        key={message.id}
                        className={`message-item ${message.sender_id === userId ? 'sent' : 'received'}`}
                    >
                        <div className="message-content">
                            {message.content}
                        </div>
                    </li>
                ))}
                <div ref={messagesEndRef} />
            </ul>
            <MessageInput conversationId={conversationId} userId={userId} />
        </div>
    );
};

export default Conversation;
