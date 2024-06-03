import { Link } from 'react-router-dom';

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
}

const ConversationList = ({ conversations, userId }: ConversationListProps) => {
    return (
        <div>
            <h2>Conversations</h2>
            <ul>
                {conversations.map((conversation) => (
                    <li key={conversation.id}>
                        <Link to={`/messages/${conversation.id}`}>
                            <div>
                                <strong>Conversation with: </strong>
                                {conversation.user1_id === userId ? conversation.user2_name : conversation.user1_name}
                            </div>
                            <div>
                                <strong>Last message: </strong>{conversation.last_message}
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ConversationList;
