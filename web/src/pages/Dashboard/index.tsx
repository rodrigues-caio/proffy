import React from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../contexts/auth';

import logoutIcon from '../../assets/images/icons/logout.svg';
import avatarImage from '../../assets/images/avatarImage.jpeg';
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

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

        <div className="content-all">
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
  <div>
    <img src={logoImg} alt="Proffy"/>
    <h2>Sua plataforma de estudos online.</h2>
  </div>
</div>

<img 
  src={landingImg} 
  alt="Imagem de background" 
  className="hero-image"  
/>

</div>

<div className="content-bottom">
  <h3>Seja bem-vindo. <strong>O que deseja fazer?</strong></h3>

  <div className="buttons">
    <Link to="/study" className="study">
      <img src={studyIcon} alt="Estudar"/>
      Estudar
    </Link>

    <Link to="/give-classes" className="give-classes">
      <img src={giveClassesIcon} alt="Dar aulas"/>
      Dar aulas
    </Link>  
  </div>

  <span className="total-connections">
    Total de 43 conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo"/>
  </span> 
</div>
        </div>
        
        
      </div>
    
    </div>
    </>
  );
};

export default Dashboard;