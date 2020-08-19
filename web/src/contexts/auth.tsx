import React, { createContext, useState, useEffect, useContext } from 'react';
import api from '../services/api';

interface AuthProviderData {
  signed: boolean;
  user: object | null;
  signIn(data: object): Promise<void>;
  signOut(): void; 
};

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);

  useEffect(() => {
    async function loadStorageData() {
      const storageUser = localStorage.getItem('@proffy:user');
      const storageToken = localStorage.getItem('@proffy:token');

      if (storageUser && storageToken) {
        api.defaults.headers.Authorization = `Bearer ${storageToken}`;

        setUser(JSON.parse(storageUser));

        // setar loading como false para mobile
      }
    };

    loadStorageData();
  }, []);

  async function signIn(data: object) {
    const response = await api.post('users/login', data);

    setUser(response.data.user);

    api.defaults.headers['Authorization'] = `Bearer ${response.data.token}`;

    localStorage.setItem('@proffy:user', JSON.stringify(response.data.user));
    localStorage.setItem('@proffy:token', response.data.token);

  };

  function signOut() {
    localStorage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
};