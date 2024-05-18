import { useState, useEffect, useContext } from 'react';
import { getAccommodations, postLike } from '../utils/AccommodationsApi';
import { Accommodation } from '../../../models/Accommodation';
import { AuthContext, AuthContextProps } from '../../AuthenticatedRoute/contexts/AuthContext';

// Fonction pour décoder le JWT manuellement
const decodeToken = (token: string): { id: number } => {
    try {
        const payload = token.split('.')[1];
        const decoded = JSON.parse(atob(payload));
        return decoded;
    } catch (e) {
        throw new Error('Invalid token');
    }
};

export const useAccommodations = () => {
    const [accommodations, setAccommodations] = useState<Accommodation[]>([]);
    const authContext = useContext(AuthContext) as AuthContextProps;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAccommodations();
                setAccommodations(data);
            } catch (error) {
                console.error('Error fetching accommodations:', error);
            }
        };

        fetchData();
    }, []);

    const likeAccommodation = async (accommodationId: number) => {
        try {
            if (authContext && authContext.token) {
                const decodedToken = decodeToken(authContext.token);
                const userId = decodedToken.id;
                await postLike(accommodationId, userId);
            } else {
                console.error('Token is missing or invalid');
            }
        } catch (error) {
            console.error('Error liking accommodation:', error);
        }
    };

    return {
        accommodations,
        likeAccommodation,
    };
};
