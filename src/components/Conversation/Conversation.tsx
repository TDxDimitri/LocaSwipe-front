import React from 'react';
import { useMessages } from '../../domains/Messaging/hooks/useMessages';
import MessageInput from '../MessageInput/MessageInput';
import { Message } from '../../models/Message';

const Conversation: React.FC<{ userId: number, conversationId: number }> = ({ userId, conversationId }) => {
    const { messages, loading, error } = useMessages(conversationId);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h2>Messages</h2>
            <ul>
                {messages.map((message: Message) => (
                    <li key={message.id}>
                        {message.sender_firstname} {message.sender_lastname}: {message.content}
                    </li>
                ))}
            </ul>
            <MessageInput conversationId={conversationId} userId={userId} />
        </div>
    );
};

export default Conversation;
