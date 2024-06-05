import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useOwnerAccommodations } from '../../hooks/useOwnerAccommodations';
import OwnerCard from '../../../../components/ui/Card/OwnerCard/OwnerCard';
import './OwnerAccommodations.scss';

interface OwnerAccommodationsProps {
    userId: number;
}

const OwnerAccommodations: React.FC<OwnerAccommodationsProps> = ({ userId }) => {
    const { accommodations, loading, error } = useOwnerAccommodations(userId);
    const navigate = useNavigate();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    const handleViewLikes = (accommodationId: number) => {
        navigate(`/accommodations/${accommodationId}/likes`);
    };

    return (
        <div className="owner-accommodations">
            <div className="accommodations-container">
                {accommodations.map((accommodation) => (
                    <OwnerCard
                        key={accommodation.id}
                        accommodation={accommodation}
                        onViewLikes={handleViewLikes}
                    />
                ))}
            </div>
        </div>
    );
};

export default OwnerAccommodations;
