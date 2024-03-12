import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthScreen from "./AuthScreen";
import { ILoginUser } from "../types/ILoginUser";
import { useLoginUserMutation } from "../redux/api/api";
import { IInputChangeArgs } from "../types/IInputChangeArgs";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { ILoginResponse } from "../types/ILoginResponse";

const LoginScreen = () => {
  const navigation: NavigationProp<string | any> = useNavigation();
  const [loginUser] = useLoginUserMutation();

  const initialState: ILoginUser = {
    email: "",
    password: "",
  };
  const [details, setDetails] = useState(initialState);

  const handleInputChange = ({ type, value }: IInputChangeArgs) => {
    setDetails((prevDetails) => ({
      ...prevDetails,
      [type]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      const response = await loginUser(details);
      if ("data" in response && response.data && response.data.token) {
        const data: ILoginResponse = response.data;
        await AsyncStorage.setItem('user',JSON.stringify(data));
        if (response.data.permission) {
          navigation.navigate("Home", { permission: response.data.permission });
        }
      } else if ("error" in response && response.error) {
        console.error("Error logging in:", response.error);
      } else {
        console.error("Unexpected response format:", response);
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <AuthScreen
      title="Login"
      buttonText="Login"
      navigateActionText="Don't have an account? Sign up"
      navigateScreen="Signup"
      handleAuthAction={handleLogin}
      handleInputChange={handleInputChange}
    />
  );
};

export default LoginScreen;
