import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../../../components/ui/NavBar/NavBar';
import { AuthContext } from '../../../../domains/AuthenticatedRoute/contexts/AuthContext';
import Conversation from '../../../../components/Conversation/Conversation';

const ConversationDetail = () => {
    const { conversationId } = useParams();
    const authContext = useContext(AuthContext);

    if (!authContext) {
        return <div>Error: Authentication context is not available.</div>;
    }

    const { userRole, userId } = authContext;

    if (userId === null) {
        return <div>Error: User ID is not available.</div>;
    }

    return (
        <div>
            <NavBar userRole={userRole} />
            <Conversation userId={userId} conversationId={parseInt(conversationId, 10)} />
        </div>
    );
};

export default ConversationDetail;
