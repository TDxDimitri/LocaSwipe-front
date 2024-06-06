import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useLikedUsers } from '../../hooks/useLikedUsers';
import Tuile from '../../../../components/ui/Tuile/Tuile';
import NavBar from '../../../../components/ui/NavBar/NavBar';
import { AuthContext, AuthContextProps } from '../../../AuthenticatedRoute/contexts/AuthContext';
import './LikedUsers.scss';

const LikedUsers: React.FC = () => {
    const { accommodationId } = useParams<{ accommodationId: string }>();
    const authContext = useContext(AuthContext) as AuthContextProps;

    if (!accommodationId) {
        return <p>Accommodation ID is not defined</p>;
    }

    const { users, loading, error } = useLikedUsers(parseInt(accommodationId, 10));

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="full-page-bg">
            <NavBar userRole={authContext.userRole} />
            <div className="liked-users">
                <h1>Utilisateurs ayant aimé cette propriété</h1>
                <div className="liked-users__list">
                    {users.map(user => (
                        <Tuile
                            key={user.id}
                            firstname={user.firstname}
                            lastname={user.lastname}
                            email={user.email}
                            avatar={user.avatar}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LikedUsers;
