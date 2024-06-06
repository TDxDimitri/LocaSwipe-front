import { useContext } from 'react';
import NavBar from '../../components/ui/NavBar/NavBar';
import { AuthContext } from '../../domains/AuthenticatedRoute/contexts/AuthContext';
import OwnerAccommodations from '../../domains/Owner/views/OwnerAccommodation/OwnerAccommodations';

const OwnerHomePage = () => {
    const authContext = useContext(AuthContext);

    if (!authContext) {
        return <p>Authentication context is not available</p>;
    }

    const { userRole, userId } = authContext;

    if (!userId) {
        return <p>User ID is not defined in the context</p>;
    }

    return (
        <>
            <div>
                <NavBar userRole={userRole} />
                <OwnerAccommodations userId={userId} />
            </div>
        </>
    );
};

export default OwnerHomePage;
