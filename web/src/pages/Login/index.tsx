import React, { useState, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';

import {AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/images/logo.svg';
import backgroundImage from '../../assets/images/Background.svg';
import heartIcon from '../../assets/images/icons/purple-heart.svg';

import api from '../../services/api';

import './styles.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [eyeStatus, setEyeStatus] = useState(false);

  const history = useHistory();

  async function handleLoginUser(e: FormEvent) {
    e.preventDefault();

    try {
      await api.post('users/login', {
        email,
        password,
      });

      history.push('/');
    } catch(err) {
      console.log(err);
    }
  };

  function handleEyeHideOrVisible() {
    setEyeStatus(!eyeStatus);
  };

  return (
    <>
      <section id="page-login-form" className="container">
        <div className="image-login" style={{backgroundImage: `url(${backgroundImage})` }}>
          <div>
            <img src={logoImg} alt="Logo Proffy"/>
            <h2>Sua plataforma de<br/>estudos online.</h2>
          </div>
        </div>

        <main>
          
          <form onSubmit={handleLoginUser} >
            <h1>Fazer login</h1>
            
            <Input 
              className="input-form"
              id="one"
              name="email" 
              label="E-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="email" 
            />
            
            <div id="input-eye-container">
              <Input 
                id="two"
                className="input-form"
                label="Senha"
                name="password" 
                value={password}
                onChange={e => setPassword(e.target.value)}
                type={eyeStatus ? 'text':'password'}
              />

              <div className="eye-input">
                <button type="button" id="eye-input-button" onClick={handleEyeHideOrVisible}>
                  { eyeStatus === false ? <AiOutlineEye size={25} />: <AiOutlineEyeInvisible size={25} /> }
                </button>
              </div>
            </div>

            

            <div className="container-input">
              <div className="input-remember">
                <input type="checkbox" name="remember" />
                <label htmlFor="remember">Lembrar-me</label>
              </div>
              
              <Link to="/forget-password">Esqueci minha senha</Link>
            </div>

            <Button 
              type="submit"
              style={{ 
                backgroundColor: email === '' || password === '' 
                ? '#DCDCE5' : '#04D361', 
                color: email === '' || password === '' 
                ? '#9C98A6' : '#FFF'
              }}
            >
              Entrar
            </Button>
          </form>

          <div className="footer-login-form">
            <p>Não tem conta? <br/> <Link to="/register">Cadastre-se</Link></p>
            <span>É de graça <img src={heartIcon} alt="Coração"/></span>
          </div>
        </main>

      </section>
    </>
  );
};

export default Login;