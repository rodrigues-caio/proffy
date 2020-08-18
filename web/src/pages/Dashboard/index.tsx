import React, { useContext } from 'react';

import AuthContext from '../../contexts/auth';

function Dashboard() {
  const { signOut } = useContext(AuthContext);

  function handleLogout() {
    signOut();
  };

  return (
    <>
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Dashboard;