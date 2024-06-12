import React from 'react';
import { Accommodation } from '../../../../models/Accommodation';
import './OwnerCard.scss';
import editIcon from '../../../../icons/edit-icon.svg';

interface OwnerCardProps {
    accommodation: Accommodation;
    onViewLikes: (accommodationId: number) => void;
}

const OwnerCard: React.FC<OwnerCardProps> = ({ accommodation, onViewLikes }) => {
    return (
        <div className="owner-card">
            <img src={accommodation.image} alt={accommodation.description} className="owner-card__image" />
            <div className="owner-card__body">
                <div className="owner-card__header">
                    <h5 className="owner-card__title">{accommodation.address}</h5>
                    <img src={editIcon} alt="Edit" className="owner-card__edit-icon" />
                </div>
                <p className="owner-card__location">{accommodation.city} - {accommodation.surface_area} m²</p>
                <p className="owner-card__price">{accommodation.rent} € / mois</p>
                <div className="owner-card__separator"></div>
                <div className="owner-card__likes-container">
                    <p className="owner-card__likes">{accommodation.likes_count} ont aimé votre propriété</p>
                    <button onClick={() => onViewLikes(accommodation.id)} className="owner-card__view-likes-button">
                        Voir la liste
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OwnerCard;
