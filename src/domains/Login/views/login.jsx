import React, { useContext, useState } from 'react';
import './login.scss';
import { PrimaryButton } from '../../../components/ui/Button/Button';
import { useLogin } from '../hooks/useLogin';

const LoginDomain = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div style={{ backgroundColor: '#f0f0f0' }}>
      <div className='customModal p-5'>
        <h1 className='white'>Connexion</h1>
        {error && <p>{error}</p>}
        <form className='d-flex white flex-column p-1' onSubmit={handleSubmit}>
          <label className='white' htmlFor="email">Adresse e-mail</label>
          <input className='pb-1 white cstmInput'
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <label className='white' htmlFor="password">Mot de passe</label>
          <input
            className='mb-5 pb-1 white cstmInput'
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <div class>
            <PrimaryButton text='Connexion' buttonStyle={'connect'} onClick={handleSubmit} />
          </div>

          <div>
            <PrimaryButton text='inscription' buttonStyle={'secondary'} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginDomain;
