import React from 'react';

import { useAuth } from '../../contexts/auth';

import logoutIcon from '../../assets/images/icons/logout.svg';
import avatarImage from '../../assets/images/avatarImage.jpeg';

import './styles.css';

function Dashboard() {
  const { signOut } = useAuth();

  function handleLogout() {
    signOut();
  };

  return (
    <>
    <div id="page-dashboard">

      <div id="page-dashboard-content" className="container">

        <div className="content-top">
          <div className="header">
            <div className="avatar-name">
              <img src={avatarImage} alt="Caio Rodrigues"/>
              <span>Caio Rodrigues</span>
            </div>

            <button onClick={handleLogout}>
              <img src={logoutIcon} alt="Sair"/>
            </button>
          </div>
        </div>
        
      </div>
    
    </div>
    </>
  );
};

export default Dashboard;