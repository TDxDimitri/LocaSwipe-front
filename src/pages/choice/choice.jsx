import React from 'react';
import { useNavigate } from 'react-router-dom';
import ChoiceCard from '../../components/ui/Card/ChoiceCard/ChoiceCard';
import tenantIcon from '../../assets/tenant-icon.svg';
import ownerIcon from '../../assets/owner-icon.svg';

import './ChoicePage.scss';

const ChoicePage = () => {
    const navigate = useNavigate();

    const goToForm = (role) => {
        navigate('/signup', { state: { role } });
    };

    return (
        <div className="choice-page">
            <h1 className="choice-title">Choisissez</h1>
            <ChoiceCard text="Locataire" icon={tenantIcon} onClick={() => goToForm('Tenant')} className="choice-card-tenant" />
            <ChoiceCard text="Propriétaire" icon={ownerIcon} onClick={() => goToForm('Owner')} className="choice-card-owner" />
        </div>
    );
};

export default ChoicePage;
