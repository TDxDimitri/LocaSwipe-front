import React from 'react';
import { useMessages } from '../../domains/Messaging/hooks/useMessages';
import MessageInput from '../MessageInput/MessageInput';
import { Message } from '../../models/Message';
import './Conversation.scss';

const Conversation: React.FC<{ userId: number, conversationId: number }> = ({ userId, conversationId }) => {
    const { messages, loading, error } = useMessages(conversationId);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="conversation">
            <h2>Messages</h2>
            <ul className="message-list">
                {messages.map((message: Message) => (
                    <li
                        key={message.id}
                        className={`message-item ${message.sender_id === userId ? 'sent' : 'received'
                            }`}
                    >
                        <div className="message-content">
                            <strong>{message.sender_firstname} {message.sender_lastname}:</strong> {message.content}
                        </div>
                    </li>
                ))}
            </ul>
            <MessageInput conversationId={conversationId} userId={userId} />
        </div>
    );
};

export default Conversation;
