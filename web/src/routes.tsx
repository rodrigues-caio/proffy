import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';
import Register from './pages/Register';
import Success from './pages/Success';
import Login from './pages/Login';
import ForgetPassword from './pages/ForgetPassword';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />
      <Route path="/register" component={Register} />
      <Route path="/success" component={Success} />
      <Route path="/login" component={Login} />
      <Route path="/forget-password" component={ForgetPassword} />
    </BrowserRouter>
  );
  
};

export default Routes;