import React from 'react';
import './ChoiceCard.scss';

const ChoiceCard = ({ text, onClick, className }) => {
    return (
        <div className={`choice-card ${className}`} onClick={onClick}>
            {text}
        </div>
    );
};

export default ChoiceCard;
