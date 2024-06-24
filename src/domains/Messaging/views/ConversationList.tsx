import './ConversationList.scss';

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
        <div className="conversation-list">
            <h2>Discussions</h2>
            <ul>
                {conversations.map((conversation) => (
                    <li key={conversation.id} className="conversation-item">
                        <div onClick={() => onConversationSelect(conversation.id)} style={{ cursor: 'pointer' }}>
                            <img src={`https://api.adorable.io/avatars/48/${conversation.id}.png`} alt="Profile" className="profile-pic" />
                            <div className="conversation-details">
                                <div className="conversation-name">
                                    {conversation.user1_id === userId ? conversation.user2_name : conversation.user1_name}
                                </div>
                                <div className="conversation-last-message">
                                    <strong>Last message: </strong>{conversation.last_message}
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ConversationList;
