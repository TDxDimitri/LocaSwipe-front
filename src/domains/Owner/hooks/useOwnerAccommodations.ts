import { useState, useEffect, useCallback } from 'react';
import { io } from 'socket.io-client';
import { Accommodation } from '../../../models/Accommodation';
import { getOwnerAccommodations } from '../utils/OwnerApi';

export const useOwnerAccommodations = (userId: number) => {
  const [accommodations, setAccommodations] = useState<Accommodation[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const socket = io('http://localhost:3000');

  useEffect(() => {
    const fetchAccommodations = async () => {
      try {
        const data = await getOwnerAccommodations(userId);
        setAccommodations(data);
      } catch (err) {
        setError('Error fetching accommodations');
      } finally {
        setLoading(false);
      }
    };

    fetchAccommodations();

    socket.on('likeAdded', ({ accommodationId }) => {
      setAccommodations(prevAccommodations =>
        prevAccommodations.map(acc =>
          acc.id === accommodationId ? { ...acc, likes_count: acc.likes_count + 1 } : acc
        )
      );
    });

    return () => {
      socket.off('likeAdded');
    };
  }, [userId, socket]);

  const updateLikeCount = useCallback((accommodationId: number) => {
    setAccommodations(prevAccommodations =>
      prevAccommodations.map(acc =>
        acc.id === accommodationId ? { ...acc, likes_count: acc.likes_count + 1 } : acc
      )
    );
  }, []);

  return { accommodations, loading, error, updateLikeCount };
};
