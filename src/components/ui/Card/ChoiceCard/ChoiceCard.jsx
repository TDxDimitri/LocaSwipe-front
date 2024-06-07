import React from 'react';
import './ChoiceCard.scss';

const ChoiceCard = ({ text, onClick, className, icon }) => {
    return (
        <div className={`choice-card ${className}`} onClick={onClick}>
            <img src={icon} alt="icon" className="choice-card-icon" />
            <span className="choice-card-text">{text}</span>
        </div>
    );
};

export default ChoiceCard;
