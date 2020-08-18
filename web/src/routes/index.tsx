import React, { useContext } from 'react';

import AuthContext from '../contexts/auth';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

const Routes: React.FC = () => {
  const { signed } = useContext(AuthContext);

  return (<> <AppRoutes />  <AuthRoutes /> </>);
};

export default Routes;