import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLikedUsers } from '../../hooks/useLikedUsers';
import Tuile from '../../../../components/ui/Tuile/Tuile';
import NavBar from '../../../../components/ui/NavBar/NavBar';
import { AuthContext, AuthContextProps } from '../../../AuthenticatedRoute/contexts/AuthContext';
import { acceptTenant, skipTenant } from '../../utils/LikedUsers';

const LikedUsers: React.FC = () => {
    const { accommodationId } = useParams<{ accommodationId: string }>();
    const authContext = useContext(AuthContext) as AuthContextProps;
    const [isRequesting, setIsRequesting] = useState<number | null>(null);
    const { users, loading, error, setUsers } = useLikedUsers(parseInt(accommodationId!, 10));

    useEffect(() => {
        if (users) {
            setUsers(users);
        }
    }, [users, setUsers]);

    const handleLikeClick = async (tenantId: number) => {
        if (authContext.userId !== null && isRequesting !== tenantId) {
            setIsRequesting(tenantId);
            try {
                setUsers((prevUsers) => prevUsers.filter((user) => user.id !== tenantId));
                await acceptTenant(authContext.userId, tenantId, parseInt(accommodationId!, 10));
            } catch (err) {
                console.error('Error accepting tenant:', err);
                alert('Failed to accept tenant.');
            } finally {
                setIsRequesting(null);
            }
        } else if (authContext.userId === null) {
            console.error('User ID is null');
            alert('Failed to accept tenant: User ID is null');
        }
    };

    const handleSkipClick = async (tenantId: number) => {
        if (authContext.userId !== null && isRequesting !== tenantId) {
            setIsRequesting(tenantId);
            try {
                setUsers((prevUsers) => prevUsers.filter((user) => user.id !== tenantId));
                await skipTenant(authContext.userId, tenantId, parseInt(accommodationId!, 10));
            } catch (err) {
                console.error('Error skipping tenant:', err);
                alert('Failed to skip tenant.');
            } finally {
                setIsRequesting(null);
            }
        } else if (authContext.userId === null) {
            console.error('User ID is null');
            alert('Failed to skip tenant: User ID is null');
        }
    };

    if (!accommodationId) {
        return <p>Accommodation ID is not defined</p>;
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="full-page-bg">
            <NavBar userRole={authContext.userRole} />
            <div className="liked-users">
                <h1>Liste des Swipes</h1>
                <div className="liked-users__list">
                    {users.map(user => (
                        <Tuile
                            key={user.id}
                            id={user.id}
                            firstname={user.firstname}
                            lastname={user.lastname}
                            email={user.email}
                            avatar={user.avatar}
                            onLikeClick={handleLikeClick}
                            onSkipClick={handleSkipClick}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LikedUsers;
