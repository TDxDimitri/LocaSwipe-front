import React from 'react';
import './WelcomeCard.scss';
import CheckboxCircle from '../../../../icons/checkbox-circle.svg';

function WelcomeCard({ title, text }) {
    return (
        <div className="card">
            <div className="card-header">
                <img src={CheckboxCircle} alt="Checkbox icon" className="checkbox-icon" />
                <h2 className="card-title">{title}</h2>
            </div>
            <p className="card-text">{text}</p>
        </div>
    );
}

export default WelcomeCard;
