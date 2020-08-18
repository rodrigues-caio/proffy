import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import TeacherList from '../pages/TeacherList';
import TeacherForm from '../pages/TeacherForm';
import ForgetPassword from '../pages/ForgetPassword';
import Dashboard from '../pages/Dashboard';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />
     
      <Route path="/forget-password" component={ForgetPassword} />
      <Route path="/dashboard" component={Dashboard} />
    </BrowserRouter>
  );
};

export default AppRoutes;