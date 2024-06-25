// src/pages/Login.tsx
import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Container, Button } from './Login';

const Login: React.FC = () => {
  const { loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    await loginWithGoogle();
    navigate('/Home');
  };

  return (
    <Container>
      <Button onClick={handleLogin}>Login with Google</Button>
    </Container>
  );
};

export default Login;
