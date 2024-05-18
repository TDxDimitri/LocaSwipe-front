import React from 'react';
import NavBar from '../../components/ui/NavBar/navBar';
import { TenantDomain } from '../../domains/Tenant/views/Tenant';

export const TenantHomePage = () => {
    return (
        <>
            <div>
                < NavBar />
                <h1>Bienvenue locataire</h1>
            </div>
            <TenantDomain />
        </>
    );
};

