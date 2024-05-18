import axios from 'axios';
import { Accommodation } from '../../../models/Accommodation';
import { ACCOMMODATIONS } from '../../../config/ApiUrls';

export const getAccommodations = async (): Promise<Accommodation[]> => {
  try {
    const response = await axios.get(ACCOMMODATIONS);
    return response.data;
  } catch (error) {
    console.error('Error fetching accommodations:', error);
    throw error;
  }
};
