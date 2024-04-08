import React from 'react';

export const PrimaryButton = ({ text, onClick, buttonStyle }) => {
  
  const styles = {
    primary: {
      backgroundColor: '#00263F',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    secondary: {
      backgroundColor: 'white',
      color: '#00263F',
      padding: '10px 20px',
      border: '1px solid #00263F',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    warning: {
      backgroundColor: '#FFAE42',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    danger: {
      backgroundColor: '#E93535',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    success: {
      backgroundColor: '#3cb371',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    }
  };

  // Sélectionne le style approprié en fonction de la prop buttonStyle
  const selectedStyle = styles[buttonStyle] || styles.primary;

  return (
    <button style={selectedStyle} onClick={onClick}>
       {text}   
    </button>
  );
};
