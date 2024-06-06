import { useState, useEffect, useContext } from 'react';
import { getMessages } from '../utils/messagingApi';
import { AuthContext, AuthContextProps } from '../../AuthenticatedRoute/contexts/AuthContext';
import { Message } from '../../../models/Message';
import io from 'socket.io-client';
import { BASE_URL } from '../../../config/ApiUrls';

const socket = io(BASE_URL);


export const useMessages = (conversationId: number) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
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
                setError(error as Error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        socket.on('newMessage', (message: Message) => {
            if (message.conversation_id === conversationId) {
                setMessages((prevMessages) => [...prevMessages, message]);
            }
        });

        return () => {
            socket.off('newMessage');
        };
    }, [conversationId, authContext]);

    return {
        messages,
        loading,
        error,
    };
};
