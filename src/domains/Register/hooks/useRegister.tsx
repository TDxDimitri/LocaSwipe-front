import { useState } from 'react';

const useRegister = () => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser((prevUser) => ({
            ...prevUser,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Ajoutez ici votre logique pour créer l'utilisateur
        console.log('Création de l\'utilisateur :', user);
    };

    return {
        user,
        handleChange,
        handleSubmit,
    };
};

export default useRegister;