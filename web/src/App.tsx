import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import { AuthProvider } from './contexts/auth';

import './assets/styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
