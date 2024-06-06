import React from 'react';
import './Tuile.scss';

interface TuileProps {
    firstname: string;
    lastname: string;
    email: string;
    avatar?: string | null;
}

const Tuile: React.FC<TuileProps> = ({ firstname, lastname, avatar }) => {
    return (
        <div className="tuile">
            {avatar && <img src={avatar} alt={`${firstname} ${lastname}`} className="tuile__avatar" />}
            <div className="tuile__info">
                <p className="tuile__name">{firstname} {lastname}</p>
            </div>
        </div>
    );
};

export default Tuile;
