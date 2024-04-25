import React from 'react';
import ChoiceCard from '../../components/ui/Card/ChoiceCard/ChoiceCard';
import './ChoicePage.scss';

const ChoicePage = () => {
    return (
        <div className="choice-page">
            <h1 className='choice-title'>Choisissez</h1>
            <ChoiceCard text="Locataire" />
            <ChoiceCard text="Propriétaire" className="choice-card" />
        </div>
    );
};

export default ChoicePage;
