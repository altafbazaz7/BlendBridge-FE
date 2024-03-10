import React from 'react';
import AuthScreen from './AuthScreen';

const LoginScreen = () => {
  return (
    <AuthScreen
      title="Login"
      buttonText="Login"
      navigateActionText="Don't have an account? Sign up"
      navigateScreen="Signup"
    />
  );
};

export default LoginScreen;
