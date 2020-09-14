import React, { createContext } from "react";

import api from "../services/api";

interface DataUserSession {
  user: {
    email: string;
    password: string;
  };
  token: string;
}

const authContext = createContext<DataUserSession>({} as DataUserSession);

export const AuthProvider: React.FC = () => {};
