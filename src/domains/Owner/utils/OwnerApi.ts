import axiosInstance from '../../../config/AxiosConfig';
import { Accommodation } from '../../../models/Accommodation';
import { USER_PROFILE_URL } from '../../../config/ApiUrls';

export const getOwnerAccommodations = async (userId: number): Promise<Accommodation[]> => {
  try {
    const response = await axiosInstance.get(USER_PROFILE_URL(userId));
    return response.data.accommodations;
  } catch (error) {
    console.error('Error fetching owner accommodations:', error);
    throw error;
  }
};
