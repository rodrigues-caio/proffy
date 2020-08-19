import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Register from '../pages/Register';
import Success from '../pages/Success';
import Login from '../pages/Login';

import Landing from '../pages/Landing';
import TeacherList from '../pages/TeacherList';
import TeacherForm from '../pages/TeacherForm';
import ForgetPassword from '../pages/ForgetPassword';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => {
  return (
    <Switch>
        <Route path="/register" component={Register} />
        <Route path="/success" component={Success} />
        <Route path="/login" component={Login} />
        <Route path="/forget-password" component={ForgetPassword} />

        <Route path="/" exact component={Landing} isPrivate />
        <Route path="/study" component={TeacherList} isPrivate />
        <Route path="/give-classes" component={TeacherForm} isPrivate />
      
        <Route path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
  );
};

export default Routes;