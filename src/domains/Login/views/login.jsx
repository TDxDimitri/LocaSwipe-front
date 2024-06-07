import React, { useState } from 'react';
import './login.scss';
import { useLogin } from '../hooks/useLogin';
import gBlueIcon from '../../../assets/g-blue-icon.svg';
import { useNavigate } from 'react-router-dom';

const LoginDomain = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loginApi, error } = useLogin();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginApi(email, password);
  };

  const handleSignupRedirect = () => {
    navigate('/choice');
  };

  return (
    <div className="login-page">
      <div className="customModal">
        <h1 className="title">Connexion</h1>
        {error && <p className="error">{error}</p>}
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email" className="login-label">E-MAIL*</label>
          <input
            className="login-input"
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password" className="login-label">MDP*</label>
          <input
            className="login-input"
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button className="login-button" type="submit">CONNEXION</button>
        </form>

        <button className="google-login-button" type="button">
          <img src={gBlueIcon} alt="Google icon" className="google-icon" />
          Connexion avec Google
        </button>

        <div className="signup-prompt">
          <p>Pas de compte?</p>
          <p className="signup-link" onClick={handleSignupRedirect}>Inscrivez-vous ici !</p>
        </div>
      </div>
    </div>
  );
};

export default LoginDomain;
