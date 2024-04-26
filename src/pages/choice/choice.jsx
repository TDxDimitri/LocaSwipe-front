import React from 'react';
import { useNavigate } from 'react-router-dom';
import ChoiceCard from '../../components/ui/Card/ChoiceCard/ChoiceCard';
import './ChoicePage.scss';

const ChoicePage = () => {
    const navigate = useNavigate();

    const goToFormTenant = () => navigate('/tenant');
    const goToFormLandlord = () => navigate('/landlord');
    return (
        <div className="choice-page">
            <h1 className='choice-title'>Choisissez</h1>
            <ChoiceCard text="Locataire" onClick={goToFormTenant} />      
            <ChoiceCard text="Propriétaire" onClick={goToFormLandlord} className="choice-card" />
        </div>
    );
};

export default ChoicePage;
