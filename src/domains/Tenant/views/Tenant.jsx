import React from 'react';
import { useAccommodations } from '../hooks/useAccomodations';
import SwipeableAccommodationCard from '../../../components/SwipeableAccommodationCard/SwipeableAccommodation';

export const TenantDomain = () => {
    const accommodations = useAccommodations();

    return (
        <div className='app'>
            <SwipeableAccommodationCard accommodations={accommodations} />
        </div>
    );
};
