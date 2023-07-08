import React, { useCallback, useContext, useMemo, useState, createContext, useEffect } from 'react';
import { AuthService } from '../api/auth/AuthServices';

interface IAuthContextData {
  isAuthenticated: boolean;
  logout: () => void;
  login: (email: string, password: string) => Promise<string | void>;
}
const AuthContext = createContext({} as IAuthContextData);
const LOCAL_STORAGE_KEY__ACCESS_TOKEN = 'APP_ACCESS_TOKEN';

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string>();

  useEffect(() => {
    const accessToken = localStorage.getItem(LOCAL_STORAGE_KEY__ACCESS_TOKEN);
    if(accessToken) {
      setAccessToken(JSON.parse(accessToken));
    } else {
      setAccessToken(undefined);
    }
  }, [])
  const handleLogin = useCallback(async (email: string, password: string) => {
    const result = await AuthService.auth(email, password);
    if(result instanceof Error) {
      return result.message;
    } else {
      localStorage.setItem(LOCAL_STORAGE_KEY__ACCESS_TOKEN, JSON.stringify(result.accessToken));
      setAccessToken(result.accessToken);
    }
  }, []);

  const handleLogout = useCallback(() => {
    localStorage.removeItem(LOCAL_STORAGE_KEY__ACCESS_TOKEN);
    setAccessToken(undefined);
  }, []);

  const isAuthenticated = useMemo(() => !!accessToken, [accessToken]);
  return (
    <AuthContext.Provider value={{ isAuthenticated, login: handleLogin, logout: handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);