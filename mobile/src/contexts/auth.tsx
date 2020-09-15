import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-community/async-storage";

import api from "../services/api";

interface AuthProviderData {
  signIn(data: object): Promise<void>;
}

const authContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider: React.FC = () => {
  const [user, setUser] = useState<object | null>(null);

  useEffect(() => {
    async function loadStorageData() {
      const storageUser = AsyncStorage.getItem("Proffy:user");
      const storageToken = AsyncStorage.getItem("Proffy:token");

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
  }
};
