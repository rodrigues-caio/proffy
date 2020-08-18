import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { AuthProvider } from '../contexts/auth';

import Register from '../pages/Register';
import Success from '../pages/Success';
import Login from '../pages/Login';

const AuthRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Route path="/register" component={Register} />
        <Route path="/success" component={Success} />
        <Route path="/login" component={Login} />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default AuthRoutes;