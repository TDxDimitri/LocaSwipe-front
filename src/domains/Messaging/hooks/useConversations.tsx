import { useState, useEffect } from 'react';
import axiosInstance from '../../../config/AxiosConfig';
import { GET_CONVERSATIONS_URL } from '../../../config/ApiUrls';
import { Conversation } from '../../../models/Conversation';
import { useSocket } from '../../../config/context/SocketContext';

const useConversations = (userId: number) => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const socket = useSocket(); // Utiliser la connexion Socket.IO du contexte

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const response = await axiosInstance.get(GET_CONVERSATIONS_URL(userId));
        setConversations(response.data);
        console.log('Conversations initiales:', response.data); // Journal de débogage
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchConversations();

    socket.on('newMessage', (message) => {
      console.log('Nouveau message reçu par le client:', message); // Journal de débogage
      setConversations((prevConversations) => {
        return prevConversations.map((conv) => {
          if (conv.id === message.conversation_id) {
            return {
              ...conv,
              last_message: message.content
            };
          }
          return conv;
        });
      });
    });

    return () => {
      socket.off('newMessage');
    };
  }, [userId, socket]);

  return { conversations, loading, error };
};

export default useConversations;
