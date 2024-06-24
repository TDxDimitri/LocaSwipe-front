import axiosInstance from '../../../config/AxiosConfig';
import { Accommodation } from '../../../models/Accommodation';
import { ACCOMMODATIONS, POST_LIKE } from '../../../config/ApiUrls';

export const getAccommodations = async (): Promise<Accommodation[]> => {
  try {
    const response = await axiosInstance.get(ACCOMMODATIONS);
    return response.data;
  } catch (error) {
    console.error('Error fetching accommodations:', error);
    throw error;
  }
};

export const postLike = async (accommodationId: number, userId: number): Promise<void> => {
  try {
    const response = await axiosInstance.post(POST_LIKE(accommodationId), {
      id_user: userId
    });
    console.log('Like posted successfully', response.data);
  } catch (error) {
    console.error('Error posting like:', error);
    throw error;
  }
};
