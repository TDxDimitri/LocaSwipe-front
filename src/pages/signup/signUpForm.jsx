import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function SignUpForm() {
  const location = useLocation();
  const roleFromState = location.state?.role || '';

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    roleType: roleFromState
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Inscription réussie, rediriger ou afficher un message de confirmation
      } else {
        // Gérer les erreurs de l'API
        const data = await response.json();
        console.error('Erreur lors de l\'inscription:', data.message);
      }
    } catch (error) {
      console.error('Erreur lors de la requête:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstname"
        placeholder="Prénom"
        value={formData.firstname}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="lastname"
        placeholder="Nom"
        value={formData.lastname}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="E-mail"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Mot de passe"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <input
        type="hidden"
        name="roleType"
        value={formData.roleType}
      />

      <button type="submit">S'inscrire</button>
    </form>
  );
}

export default SignUpForm;
