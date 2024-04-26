import { useState } from 'react';
import { ApiRegister } from '../utils/ApiRegister';

function RegisterDomain() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    roleType: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const data = await ApiRegister(formData); // Call ApiRegister function with formData
      // Inscription réussie, rediriger ou afficher un message de confirmation
    } catch (error) {
      // Gérer les erreurs de l'API
      console.error('Erreur lors de l\'inscription:', error.message);
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
      <select name="roleType" value={formData.roleType} onChange={handleChange} required>
        <option value="">Sélectionner un rôle</option>
        <option value="admin">Administrateur</option>
        <option value="user">Utilisateur</option>
      </select>
      <button type="submit">S'inscrire</button> {/* Remove quotes around S'inscrire */}
    </form>
  );
}

export default RegisterDomain;
