import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Register from '../pages/Register';
import Success from '../pages/Success';
import Login from '../pages/Login';

const AuthRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/register" exact component={Register} />
      <Route path="/success" exact component={Success} />
      <Route path="/login" exact component={Login} />
    </BrowserRouter>
  );
};

export default AuthRoutes;