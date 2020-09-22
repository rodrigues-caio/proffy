import React from "react";

import { AuthProvider } from "../contexts/auth";
import RouteAppStack from "./AppStack";

const Routes: React.FC = () => {
  return (
    <AuthProvider>
      <RouteAppStack />
    </AuthProvider>
  );
};

export default Routes;
