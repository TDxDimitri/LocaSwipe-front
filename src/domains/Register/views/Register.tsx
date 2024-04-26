import React, { useState } from 'react';
import { useRegister } from '../hooks/useRegister';
import { RegisterResponse } from '../../../models/RegisterResponse';

function RegisterDomain() {
  const { register, error, success } = useRegister();
  const [formData, setFormData] = useState<RegisterResponse>({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    roleType: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await register(formData);
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
      <select
        name="roleType"
        value={formData.roleType}
        onChange={handleChange}
        required
      >
        <option value="">Sélectionner un rôle</option>
        <option value="admin">Administrateur</option>
        <option value="user">Utilisateur</option>
      </select>
      <button type="submit">S'inscrire</button>
      {error && <p className="error">Erreur : {error}</p>}
      {success && <p className="success">Inscription réussie !</p>}
    </form>
  );
}

export default RegisterDomain;
