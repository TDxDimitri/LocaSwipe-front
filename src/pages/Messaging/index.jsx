import React, { useContext } from 'react';
import NavBar from '../../components/ui/NavBar/NavBar';
import { AuthContext } from '../../domains/AuthenticatedRoute/contexts/AuthContext';
import useConversations from '../../domains/Messaging/hooks/useConversations';
import ConversationList from '../../domains/Messaging/views/ConversationList';

const MessagingPage = () => {
    const authContext = useContext(AuthContext);

    if (!authContext) {
        return <div>Error: Authentication context is not available.</div>;
    }

    const { userRole, userId } = authContext;

    if (userId === null) {
        return <div>Error: User ID is not available.</div>;
    }

    const { conversations, loading, error } = useConversations(userId);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <NavBar userRole={userRole} />
            <h1>Messages</h1>
            <ConversationList conversations={conversations} userId={userId} />
        </div>
    );
};

export default MessagingPage;
