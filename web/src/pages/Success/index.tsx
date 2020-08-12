import React from 'react';
import { Link } from 'react-router-dom';

import successBgImage from '../../assets/images/success-background.svg';
import successIcon from '../../assets/images/icons/success-check-icon.svg';

import './styles.css';

function Success() {
  return (
    <div id="page-container-success" style={{backgroundImage: `url(${successBgImage})`}}>
      <div className="success-content">
        <img src={successIcon} alt="Sucesso"/>

        <h1>Cadastro concluído</h1>

        <p>Agora você faz parte da plataforma da Proffy.</p>
        <p>Tenha uma ótima experiência.</p>

        <Link to="/login">Fazer login</Link>
      </div>
    </div>
  );
};

export default Success;