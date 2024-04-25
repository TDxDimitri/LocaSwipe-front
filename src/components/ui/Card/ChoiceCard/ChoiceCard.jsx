import React from 'react';
import './ChoiceCard.scss';

const ChoiceCard = ({ text }) => {
    return (
        <div className="choice-card">
            {text}
        </div>
    );
};

export default ChoiceCard;
