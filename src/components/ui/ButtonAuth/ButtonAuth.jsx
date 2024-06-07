// ButtonAuth.jsx
import React from 'react';
import './ButtonAuth.scss'; // Assurez-vous que le chemin est correct

function ButtonAuth({ text, position, onClick }) {
    const borderRadiusStyle = position === "left"
        ? { borderRadius: "4px" }
        : { borderRadius: "4px" };
    const containerClass = `button-auth-container ${position}`;

    return (
        <div className={containerClass} style={borderRadiusStyle}>
            <button className="button-auth" onClick={onClick}>{text}</button>
        </div>
    );
}

export default ButtonAuth;
