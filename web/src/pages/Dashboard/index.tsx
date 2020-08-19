import React from 'react';

import { useAuth } from '../../contexts/auth';

function Dashboard() {
  const { signOut } = useAuth();

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