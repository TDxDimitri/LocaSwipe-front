import { useState, useEffect, useContext } from 'react';
import { getMessages } from '../utils/messagingApi';
import { AuthContext, AuthContextProps } from '../../AuthenticatedRoute/contexts/AuthContext';
import { Message } from '../../../models/Message';

export const useMessages = (conversationId: number) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const authContext = useContext(AuthContext) as AuthContextProps;

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (authContext && authContext.token) {
                    const data = await getMessages(conversationId);
                    setMessages(data);
                } else {
                    console.error('Token is missing or invalid');
                }
            } catch (error) {
                console.error('Error fetching messages:', error);
            }
        };

        fetchData();
    }, [conversationId, authContext]);

    return {
        messages,
    };
};
