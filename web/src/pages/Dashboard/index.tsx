import React from 'react';

import { useAuth } from '../../contexts/auth';

import logoutIcon from '../../assets/images/icons/logout.svg';
import avatarImage from '../../assets/images/avatarImage.jpeg';
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

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

          <div className="logo-image">
            <div className="logo">
              <img src={logoImg} alt="Proffy"/>
              <h2>Sua plataforma de estudos online.</h2>
            </div>

              <img 
                src={landingImg} 
                alt="Imagem de background" 
                className="hero-image"  
              />
          </div>
        
        </div>
        
      </div>
    
    </div>
    </>
  );
};

export default Dashboard;