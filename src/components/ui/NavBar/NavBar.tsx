import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import messageIcon from '../../../assets/messages.svg';
import profileIcon from '../../../assets/profil.svg';
import homeIcon from '../../../assets/home.svg';

interface NavBarProps {
  userRole: string | null;
}

const NavBar: React.FC<NavBarProps> = ({ userRole }) => {
  const getMessageRoute = () => {
    if (userRole === 'owner') {
      return '/owner/messages';
    }
    if (userRole === 'tenant') {
      return '/tenant/messages';
    }
    return '/';
  };

  const getHomeRoute = () => {
    if (userRole === 'owner') {
      return '/owner';
    }
    if (userRole === 'tenant') {
      return '/tenant';
    }
    return '/';
  };

  return (
    <nav className="navbar">
      <div className="nav-item">
        <Link to={getMessageRoute()} className="nav-links">
          <img src={messageIcon} alt="Chat" width="25" height="23" />
          <p className="linkTxt">chat</p>
        </Link>
      </div>
      <div className="nav-item">
        <Link to={getHomeRoute()} className="nav-links">
          <img src={homeIcon} alt="home" />

          <p className="linkTxt">biens</p>
        </Link>
      </div>
      <div className="nav-item">
        <Link to="/contact" className="nav-links">
          <img src={profileIcon} alt="profil" />
          <p className="linkTxt">profil</p>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
