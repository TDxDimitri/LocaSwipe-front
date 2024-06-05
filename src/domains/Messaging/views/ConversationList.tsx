interface Conversation {
    id: number;
    user1_id: number;
    user2_id: number;
    user1_name: string;
    user2_name: string;
    last_message: string;
}

interface ConversationListProps {
    conversations: Conversation[];
    userId: number;
    onConversationSelect: (conversationId: number) => void;
}

const ConversationList = ({ conversations, userId, onConversationSelect }: ConversationListProps) => {
    console.log('Rendering ConversationList:', conversations); // Journal de débogage
    return (
        <div>
            <h2>Conversations</h2>
            <ul>
                {conversations.map((conversation) => (
                    <li key={conversation.id}>
                        <div onClick={() => onConversationSelect(conversation.id)} style={{ cursor: 'pointer' }}>
                            <div>
                                <strong>Conversation with: </strong>
                                {conversation.user1_id === userId ? conversation.user2_name : conversation.user1_name}
                            </div>
                            <div>
                                <strong>Last message: </strong>{conversation.last_message}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ConversationList;