import { useState, useEffect } from 'react';
import { getUsersWhoLikedAccommodation } from '../utils/LikedUsers';

interface User {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    avatar: string | null;
}

export const useLikedUsers = (accommodationId: number) => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const data = await getUsersWhoLikedAccommodation(accommodationId);
                setUsers(data);
            } catch (err) {
                setError('Erreur lors de la récupération des utilisateurs.');
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, [accommodationId]);

    return { users, loading, error, setUsers };
};
