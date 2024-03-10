import React from 'react';
import AuthScreen from './AuthScreen';

const SignupScreen = () => {
  return (
    <AuthScreen
      title="Signup"
      buttonText="Sign Up"
      navigateActionText="Already have an account? Sign in"
      navigateScreen="Login"
    />
  );
};

export default SignupScreen;
