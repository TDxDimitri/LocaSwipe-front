import { useState, useEffect } from 'react';
import { GET_CONVERSATIONS_URL } from '../../../config/ApiUrls';
import axios from 'axios';
import { Conversation } from '../../../models/Conversation';

const useConversations = (userId: number) => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const response = await axios.get(GET_CONVERSATIONS_URL(userId));
        setConversations(response.data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchConversations();
  }, [userId]);

  return { conversations, loading, error };
};

export default useConversations;
