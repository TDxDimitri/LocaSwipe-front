import React from 'react';
import './Tuile.scss';
import likeIcon from '../../../icons/like-icon.svg';
import skipIcon from '../../../icons/skip-icon.svg';

interface TuileProps {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    avatar?: string | null;
    onLikeClick: (userId: number) => void;
    onSkipClick: (userId: number) => void;
}

const Tuile: React.FC<TuileProps> = ({ id, firstname, lastname, avatar, onLikeClick, onSkipClick }) => {
    return (
        <div className="tuile">
            <div className="tuile__actions-left">
                <img src={skipIcon} alt="Skip" onClick={() => onSkipClick(id)} className="icon skip-icon" />
            </div>
            {avatar ? (
                <img src={avatar} alt={`${firstname} ${lastname}`} className="tuile__avatar" />
            ) : (
                <div className="avatar-placeholder">{firstname.charAt(0)}{lastname.charAt(0)}</div>
            )}
            <div className="tuile__info">
                <p className="tuile__name">{firstname} {lastname}</p>
            </div>
            <div className="tuile__actions-right">
                <img src={likeIcon} alt="Like" onClick={() => onLikeClick(id)} className="icon like-icon" />
            </div>
        </div>
    );
};

export default Tuile;
