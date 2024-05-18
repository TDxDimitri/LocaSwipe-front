import { useState, useEffect } from 'react';
import { Accommodation } from '../../../models/Accommodation';
import { getAccommodations } from '../utils/AccommodationsApi';

export const useAccommodations = () => {
    const [accommodations, setAccommodations] = useState<Accommodation[]>([]);

    useEffect(() => {
        const fetchAccommodations = async () => {
            const data = await getAccommodations();
            setAccommodations(data);
        };

        fetchAccommodations();
    }, []);

    return accommodations;
};
