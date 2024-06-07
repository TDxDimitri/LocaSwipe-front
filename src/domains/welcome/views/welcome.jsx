import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome.scss';
import WelcomeCard from '../../../components/ui/Card/WelcomeCard/WelcomeCard';
import ButtonAuth from '../../../components/ui/ButtonAuth/ButtonAuth';

function WelcomeDomain() {
    const navigate = useNavigate();

    const handleInscriptionClick = () => navigate('/choice');
    const handleConnexionClick = () => navigate('/login');

    const cardContents = [
        { title: "PROFILS VÉRIFIÉS", text: "Pour une recherche plus sécurisée" },
        { title: "GESTION LOCATIVE", text: "Retrouver tous vos documents administratifs sur notre plateforme" },
        { title: "INTERFACE INTUITIVE", text: "Swipez pour trouvez le bien ou le locataire idéal" },
    ];

    return (
        <div className="welcome-container">
            <h1 className="welcome-title">À PROPOS DE L'APP</h1>
            <p className="welcome-text">
                Notre mission ? Mettre en relation des propriétaires et des locataires sur une plateforme sécurisée pour une location sans prise de tête et une gestion locative clé en main !
            </p>
            {cardContents.map((content, index) => (
                <WelcomeCard key={index} title={content.title} text={content.text} />
            ))}
            <div className="buttons-container">
                <ButtonAuth text="Inscription" position="left" onClick={handleInscriptionClick} />
                <ButtonAuth text="Connexion" position="right" onClick={handleConnexionClick} />
            </div>
        </div>
    );
}

export default WelcomeDomain;
