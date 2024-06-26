import axiosInstance from '../../../config/AxiosConfig';
import { USER_LIKES_URL, ACCEPT_TENANT_URL, SKIP_TENANT_URL } from '../../../config/ApiUrls';

interface User {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    avatar: string | null;
}

export const getUsersWhoLikedAccommodation = async (accommodationId: number): Promise<User[]> => {
    try {
        const response = await axiosInstance.get(USER_LIKES_URL(accommodationId));
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs ayant aimé la propriété:', error);
        throw error;
    }
};

export const acceptTenant = async (ownerId: number, tenantId: number, accommodationId: number): Promise<void> => {
    try {
        const response = await axiosInstance.post(ACCEPT_TENANT_URL, {
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

export const skipTenant = async (ownerId: number, tenantId: number, accommodationId: number): Promise<void> => {
    try {
        const url = SKIP_TENANT_URL(ownerId, tenantId, accommodationId);
        const response = await axiosInstance.delete(url);
        return response.data;
    } catch (error) {
        console.error('Erreur lors du skip du locataire:', error);
        throw error;
    }
};
