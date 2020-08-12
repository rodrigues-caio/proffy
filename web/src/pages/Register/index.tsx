import React, { useState, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';
import Input from '../../components/Input';

import api from '../../services/api';

import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';
import backgroundImage from '../../assets/images/Background.svg';

function Register() {
  const history = useHistory();

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleOnSubmitForm(e: FormEvent) {
    e.preventDefault();

    try {
      await api.post('users/register', {
        name,
        surname,
        email,
        password
      });

      history.push('/success');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <section id="page-register-form" className="container">
        <main>
          
          <form onSubmit={handleOnSubmitForm}>
            <Link to="/">
              <img src={backIcon} alt="Voltar"/>
            </Link>
            <h1>Cadastro</h1>
            
            <p>Preencha os dados abaixo para começar.</p>

            <Input 
              id="input-form-borderTop" 
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Nome" 
              type="text" 
            />
            
            <Input 
              className="input-form" 
              name="surname" 
              value={surname}
              onChange={e => setSurname(e.target.value)}
              placeholder="Sobrenome" 
              type="text" 
            />
            
            <Input 
              className="input-form" 
              name="email" 
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="E-mail" 
              type="email" 
            />
            
            <Input 
              id="input-form-borderBottom" 
              name="password" 
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Senha" 
              type="password" 
            />

            <button type="submit">Concluir cadastro</button>
          </form>
        </main>

        <div className="image-register" style={{backgroundImage: `url(${backgroundImage})` }}>
          <div>
            <img src={logoImg} alt="Logo Proffy"/>
            <h2>Sua plataforma de<br/>estudos online.</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;