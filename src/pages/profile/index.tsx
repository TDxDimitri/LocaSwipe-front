import { useContext } from 'react';
import NavBar from '../../components/ui/NavBar/NavBar';
import { AuthContext } from '../../domains/AuthenticatedRoute/contexts/AuthContext';
import './ProfilePage.scss';

const ProfilePage = () => {
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
            <NavBar userRole={userRole} />
            <div className="profile-page">

                <div className="profile-content">
                    <h1>Profile Page</h1>
                    <p>Page profile en développement..</p>
                </div>
            </div>
        </>
    );
};

export default ProfilePage;
