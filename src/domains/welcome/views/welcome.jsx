// Welcome.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome.scss';
import WelcomeCard from '../../../components/ui/Card/WelcomeCard/WelcomeCard';
import ButtonAuth from '../../../components/ui/ButtonAuth/ButtonAuth';

function WelcomeDomain() {
    const navigate = useNavigate();

    const handleInscriptionClick = () => navigate('/choice');
    const handleConnexionClick = () => navigate('/login');

    return (
        <div className="welcome-container">
            <h1 className="welcome-title">ABOUT OUR APP</h1>
            <p className="welcome-text">
                Nous sommes ravis de vous voir explorer notre application. Profitez de votre visite.
            </p>
            {[1, 2, 3].map((arg) => (
                <WelcomeCard key={arg} title={`ARGUMENT ${arg}`} text="Ceci est un texte d'exemple à l'intérieur de la card." />
            ))}
            <div className="buttons-container">
                <ButtonAuth text="Inscription" position="left" onClick={handleInscriptionClick} />
                <ButtonAuth text="Connexion" position="right" onClick={handleConnexionClick} />
            </div>
        </div>
    );
}

export default WelcomeDomain;
