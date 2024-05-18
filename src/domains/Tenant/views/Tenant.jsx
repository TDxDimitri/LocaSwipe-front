import React, { useContext } from 'react';
import { useAccommodations } from '../hooks/useAccomodations';
import SwipeableAccommodationCard from '../../../components/SwipeableAccommodationCard/SwipeableAccommodation';
import { AuthContext } from '../../AuthenticatedRoute/contexts/AuthContext';

export const TenantDomain = () => {
    const { accommodations, likeAccommodation } = useAccommodations();
    const { token } = useContext(AuthContext);

    return (
        <div className='app'>
            <SwipeableAccommodationCard
                accommodations={accommodations}
                onLike={likeAccommodation}
                token={token}
            />
        </div>
    );
};
