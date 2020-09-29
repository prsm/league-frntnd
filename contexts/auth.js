import api from '@utils/api';
import Cookies from 'js-cookie';
import JwtDecode from 'jwt-decode';
import { useRouter } from 'next/router';
import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function loadUserFromCookies() {
      const jwt = Cookies.get('jwt');
      if (jwt) {
        const payload = JwtDecode(jwt);
        console.log('loadUserFromCookies -> payload', payload);
        console.log('loadUserFromCookies -> jwt', jwt);
        console.log("Got a jwt. in the cookies, let's see if it is valid");
        api.defaults.headers.Authorization = `Bearer ${jwt}`;
        const { data: user } = await api.get(`/players/${payload.discordId}`);
        if (user) {
          setUser(user);
        }
      }
      setLoading(false);
    }
    loadUserFromCookies();
  }, []);

  const saveJwt = async () => {
    const jwt = router.query.jwt;

    if (jwt) {
      Cookies.set('jwt', jwt, { expires: 1 });
      api.defaults.headers.Authorization = `Bearer ${jwt}`;
      const payload = JwtDecode(jwt);
      const { data: user } = await api.get(`/players/${payload.discordId}`);
      if (user) {
        setUser(user);
      }
      router.push('/');
    }
  };

  const logout = () => {
    Cookies.remove('jwt');
    setUser(null);
    delete api.defaults.headers.Authorization;
    router.push('/');
  };

  return <AuthContext.Provider value={{ isAuthenticated: !!user, user, saveJwt, loading, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
