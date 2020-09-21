import React from "react";

import { AuthProvider } from "../contexts/auth";

const Routes: React.FC = () => {
  return (
    <AuthProvider>
      <h1>teste</h1>
    </AuthProvider>
  );
};

export default Routes;
