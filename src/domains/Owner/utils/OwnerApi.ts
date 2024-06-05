import axios from 'axios';
import { Accommodation } from '../../../models/Accommodation';
import { USER_PROFILE_URL } from '../../../config/ApiUrls';

export const getOwnerAccommodations = async (userId: number): Promise<Accommodation[]> => {
  try {
    const response = await axios.get(USER_PROFILE_URL(userId));
    return response.data.accommodations; // Assurez-vous que l'API retourne un champ "accommodations"
  } catch (error) {
    console.error('Error fetching owner accommodations:', error);
    throw error;
  }
};
