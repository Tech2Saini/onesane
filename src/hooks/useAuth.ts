import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export interface User {
  name: string;
  email: string;
  token: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('userToken');
    const name = localStorage.getItem('userName');
    const email = localStorage.getItem('userEmail');

    if (name && email) {
      setUser({ token, name, email });
    }
    setIsLoading(false);
  }, []);

  const login = (userData: User) => {
    localStorage.setItem('userToken', userData.token);
    localStorage.setItem('userName', userData.name);
    localStorage.setItem('userEmail', userData.email);
    setUser(userData);
  };

  const logout = () => {
    Cookies.remove('userToken');
    Cookies.remove('userName');
    Cookies.remove('userEmail');
    setUser(null);
    localStorage.removeItem('userToken');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
  };

  return { user, isLoading, login, logout };
};