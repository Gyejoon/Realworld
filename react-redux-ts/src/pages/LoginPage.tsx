import React, { useEffect } from 'react';
import Login from '../components/auth/Login';
import { login } from '../lib/api/auth';

const LoginPage = () => {
  useEffect(() => {
    login('abc', '123');
  });
  return <Login />;
};

export default LoginPage;
