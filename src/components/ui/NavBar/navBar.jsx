import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import messageIcon from '../../../assets/messages.svg';
import profileIcon from '../../../assets/profil.svg';
import notifIcon from '../../../assets/notifs.svg';

const NavBar = ({ userRole }) => {
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
      <a className="nav-menu">
        <Link to="/" className="nav-links">
          <svg width="42" height="42" viewBox="0 0 97 114" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="20" r="20" fill="#B0CCDE" />
            <circle cx="81" cy="30" r="10" fill="#CCCBF8" />
            <path d="M45 54.8V65.6M81 44.7344V50.21C81 64.25 81 71.2736 76.7808 75.6368C72.5652 80 65.7756 80 52.2 80H37.8C24.2244 80 17.4348 80 13.2192 75.6368C9 71.2736 9 64.2536 9 50.21V44.7344C9 36.494 9 32.3756 10.872 28.9628C12.7368 25.5464 16.1532 23.4296 22.9824 19.1888L30.1824 14.7212C37.4004 10.2392 41.0112 8 45 8C48.9888 8 52.596 10.2392 59.8176 14.7212L67.0176 19.1888C73.8468 23.4296 77.2632 25.5464 79.1316 28.9628" stroke="#5956E9" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </Link>
      </a>
      <a className="nav-item">
        <Link to={getMessageRoute()} className="nav-links">
          <img src={messageIcon} alt="Chat" width="25" height="23" />
          <p className='linkTxt'>chat</p>
        </Link>
      </a>
      <a className="nav-item">
        <Link to={getHomeRoute()} className="nav-links">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.0927 17.4745V20.7396M22.9764 14.4314V16.0868C22.9764 20.3315 22.9764 22.4549 21.7009 23.774C20.4264 25.0931 18.3737 25.0931 14.2694 25.0931H9.91596C5.81171 25.0931 3.75904 25.0931 2.48456 23.774C1.20898 22.4549 1.20898 20.3326 1.20898 16.0868V14.4314C1.20898 11.9401 1.20898 10.6951 1.77494 9.66327C2.33871 8.63041 3.37158 7.99045 5.43622 6.70834L7.61297 5.35767C9.79515 4.00265 10.8868 3.32568 12.0927 3.32568C13.2986 3.32568 14.3892 4.00265 16.5724 5.35767L18.7492 6.70834C20.8138 7.99045 21.8467 8.63041 22.4116 9.66327" stroke="#FFFFFF" strokeLinecap="round" />
          </svg>
          <p className='linkTxt'>biens</p>
        </Link>
      </a>
      <a className="nav-item">
        <Link to="/contact" className="nav-links">
          <img src={profileIcon} alt="profil" />
          <p className='linkTxt'>profil</p>
        </Link>
      </a>
      <a className="nav-item">
        <Link to="/notifs" className="nav-links">
          <img src={notifIcon} alt="profil" />
        </Link>
      </a>
    </nav>
  );
};

export default NavBar;
