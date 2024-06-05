import { useState, useEffect } from 'react';
import { Accommodation } from '../../../models/Accommodation';
import { getOwnerAccommodations } from '../utils/OwnerApi';

export const useOwnerAccommodations = (userId: number) => {
  const [accommodations, setAccommodations] = useState<Accommodation[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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
  }, [userId]);

  return { accommodations, loading, error };
};
