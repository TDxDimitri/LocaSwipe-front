import axios from 'axios';
import { USER_LIKES_URL, ACCEPT_TENANT_URL } from '../../../config/ApiUrls';

interface User {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    avatar: string | null;
}

export const getUsersWhoLikedAccommodation = async (accommodationId: number): Promise<User[]> => {
    try {
        const response = await axios.get(USER_LIKES_URL(accommodationId));
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs ayant aimé la propriété:', error);
        throw error;
    }
};

export const acceptTenant = async (ownerId: number, tenantId: number, accommodationId: number): Promise<void> => {
    try {
        const response = await axios.post(ACCEPT_TENANT_URL, {
            ownerId,
            tenantId,
            accommodationId
        });
        return response.data;
    } catch (error) {
        console.error('Erreur lors de l\'acceptation du locataire:', error);
        throw error;
    }
};
