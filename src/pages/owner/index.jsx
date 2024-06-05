import React, { useContext } from 'react';
import NavBar from '../../components/ui/NavBar/NavBar';
import { AuthContext } from '../../domains/AuthenticatedRoute/contexts/AuthContext';


const OwnerHomePage = () => {
    const { userRole } = useContext(AuthContext);

    return (
        <>
            <div>
                <NavBar userRole={userRole} />
                <h1>Bienvenue propriétaire</h1>
            </div>
        </>
    );
};

export default OwnerHomePage;
