import React from 'react';
import { useAccommodations } from '../hooks/useAccomodations';
import { SwipeableAccommodation } from '../../../components/SwipeableAccommodationCard/SwipeableAccommodation';

export const TenantDomain = () => {
    const accommodations = useAccommodations();

    return (
        <div>
            <SwipeableAccommodation accommodations={accommodations} />
        </div>
    );
};
