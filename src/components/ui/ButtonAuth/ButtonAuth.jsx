// ButtonAuth.jsx
import React from 'react';
import './ButtonAuth.scss'; // Assurez-vous que le chemin est correct

function ButtonAuth({ text, position, onClick }) {
    const borderRadiusStyle = position === "left"
        ? { borderRadius: "0px 20px 20px 0px" }
        : { borderRadius: "20px 0px 0px 20px" };
    const containerClass = `button-auth-container ${position}`;

    return (
        <div className={containerClass} style={borderRadiusStyle}>
            <button className="button-auth" onClick={onClick}>{text}</button>
        </div>
    );
}

export default ButtonAuth;
