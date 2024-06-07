import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { REGISTER_URL } from '../../config/ApiUrls';
import './SignUpForm.scss';
import gIcon from '../../assets/g-icon.svg';

function SignUpForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const roleFromState = location.state?.role || '';

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    roleType: roleFromState
  });

  useEffect(() => {
    document.body.classList.add('signup-page-body');
    return () => {
      document.body.classList.remove('signup-page-body');
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(REGISTER_URL, {
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

  const handleLoginRedirect = () => {
    navigate('/login'); // Rediriger vers la page de connexion
  };

  return (
    <div className="signup-page">
      <h1 className="signup-title">INSCRIPTION</h1>
      <div className="signup-title">
        <p>INSCRIPTION</p>
      </div>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label htmlFor="firstname" className="signup-label">Prénom</label>
        <input
          className="signup-input"
          type="text"
          id="firstname"
          name="firstname"
          placeholder="Prénom"
          value={formData.firstname}
          onChange={handleChange}
          required
        />

        <label htmlFor="lastname" className="signup-label">Nom</label>
        <input
          className="signup-input"
          type="text"
          id="lastname"
          name="lastname"
          placeholder="Nom"
          value={formData.lastname}
          onChange={handleChange}
          required
        />

        <label htmlFor="email" className="signup-label">E-mail</label>
        <input
          className="signup-input"
          type="email"
          id="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password" className="signup-label">Mot de passe</label>
        <input
          className="signup-input"
          type="password"
          id="password"
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

        <button className="signup-button" type="submit">S'inscrire</button>
      </form>

      <button className="google-signup-button" type="button">
        <img src={gIcon} alt="Google icon" className="google-icon" />
        S'inscrire avec Google
      </button>

      <div className="login-prompt">
        <p>Avez-vous déjà un compte ?</p>
        <p className="login-link" onClick={handleLoginRedirect}>Connectez-vous ici !</p>
      </div>
    </div>
  );
}

export default SignUpForm;
