import React from 'react';
import './Welcome.scss';
import Card from '../../components/ui/Card/Card';
import ButtonAuth from '../../components/ui/ButtonAuth/ButtonAuth';

function Welcome() {
    return (
        <div className="welcome-container">
            <h1 className="welcome-title">ABOUT OUR APP</h1>
            <p className="welcome-text">
                Nous sommes ravis de vous voir explorer notre application. Profitez de votre visite.
            </p>
            {[1, 2, 3].map((arg) => (
                <Card key={arg} title={`ARGUMENT ${arg}`} text="Ceci est un texte d'exemple à l'intérieur de la card." />
            ))}
            <div className="buttons-container">
                <ButtonAuth text="Inscription" position="left" />
                <ButtonAuth text="Connexion" position="right" />

            </div>
        </div>
    );
}

export default Welcome;
