import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-community/async-storage";

import api from "../services/api";

interface ResponseDataUser {
  user: {
    email: string;
    password: string;
  };
  token: string;
}

interface AuthProviderData {
  signed: boolean;
  user: object | null;
  signIn(data: object): Promise<ResponseDataUser>;
  signOut(): void;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);

  useEffect(() => {
    async function loadStorageData() {
      const storageUser = await AsyncStorage.getItem("Proffy:user");
      const storageToken = await AsyncStorage.getItem("Proffy:token");

      if (storageUser && storageToken) {
        api.defaults.headers.Authorization = `Bearer ${storageToken}`;

        setUser(JSON.parse(storageUser));
      }
    }

    loadStorageData();
  }, []);

  async function signIn(data: object) {
    const response = await api.post("users/login", data);

    setUser(response.data.user);

    api.defaults.headers["Authorization"] = `Bearer ${response.data.token}`;

    AsyncStorage.setItem("Proffy:user", JSON.stringify(response.data.user));
    AsyncStorage.setItem("Proffy:token", response.data.token);

    const { user, token } = response.data;

    return {
      user,
      token,
    };
  }

  async function signOut() {
    AsyncStorage.clear();
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
