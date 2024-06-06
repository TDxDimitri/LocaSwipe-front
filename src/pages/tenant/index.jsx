import React, { useContext } from 'react';
import NavBar from '../../components/ui/NavBar/NavBar';
import { TenantDomain } from '../../domains/Tenant/views/Tenant';
import { AuthContext } from '../../domains/AuthenticatedRoute/contexts/AuthContext';

export const TenantHomePage = () => {
    const { userRole } = useContext(AuthContext);

    return (
        <>
            <div>
                <NavBar userRole={userRole} />
                <h1>Bienvenue locataire</h1>
            </div>
            <TenantDomain />
        </>
    );
};
