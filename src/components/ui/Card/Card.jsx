import React from 'react';
import './Card.scss';
import CheckboxCircle from '../../../icons/checkbox-circle.svg';

function Card({ title, text }) {
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

export default Card;
