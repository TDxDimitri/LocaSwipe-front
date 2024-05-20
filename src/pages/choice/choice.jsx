import React from 'react';
import { useNavigate } from 'react-router-dom';
import ChoiceCard from '../../components/ui/Card/ChoiceCard/ChoiceCard';
import './ChoicePage.scss';

const ChoicePage = () => {
    const navigate = useNavigate();

    const goToForm = (role) => {
        navigate('/signup', { state: { role } });
    };

    return (
        <div className="choice-page">
            <h1 className='choice-title'>Choisissez</h1>
            <ChoiceCard text="Locataire" onClick={() => goToForm('Tenant')} />      
            <ChoiceCard text="Propriétaire" onClick={() => goToForm('Owner')} className="choice-card" />
        </div>
    );
};

export default ChoicePage;
