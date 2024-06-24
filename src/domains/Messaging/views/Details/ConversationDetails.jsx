import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../../../components/ui/NavBar/NavBar';
import { AuthContext } from '../../../../domains/AuthenticatedRoute/contexts/AuthContext';
import Conversation from '../../../../components/Conversation/Conversation';
import './ConversationDetail.scss';

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
        <div className='conversationDetail-page'>
            <NavBar userRole={userRole} className="navbar" />
            <div className="conversation-container">
                <Conversation userId={userId} conversationId={parseInt(conversationId, 10)} />
            </div>
        </div>
    );
};

export default ConversationDetail;
