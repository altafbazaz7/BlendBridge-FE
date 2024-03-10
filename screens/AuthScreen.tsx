import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { IAuthProps } from "../types/IAuthProps";

const AuthScreen = ({
  title,
  buttonText,
  buttonActionText,
  navigateActionText,
  navigateScreen,
}: IAuthProps) => {
  const navigation  : NavigationProp<string | any> = useNavigation();

  const handleAuthAction = () => {
    console.log(`${buttonText} pressed`);
    if (navigateScreen) {
      navigation.navigate(navigateScreen);
    }
  };

  return (
    <View style={customStyles.container}>
      <Image
        source={require("../assets/splash.png")}
        style={customStyles.image}
        resizeMode="contain"
      />
      <Text style={customStyles.title}>{title}</Text>
      <TextInput
        style={customStyles.input}
        placeholder="Username"
        placeholderTextColor="rgba(255, 255, 255, 0.5)"
      />
      <TextInput
        style={customStyles.input}
        placeholder="Password"
        placeholderTextColor="rgba(255, 255, 255, 0.5)"
        secureTextEntry={true}
      />

      <TouchableOpacity
        onPress={handleAuthAction}
        style={customStyles.buttonContainer}
      >
        <Text style={customStyles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleAuthAction}>
        <Text style={customStyles.signupText}>{navigateActionText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const customStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
    padding: 20,
  },
  title: {
    color: "white",
    textAlign: "center",
    fontSize: 55,
    fontWeight: "800",
  },
  input: {
    borderWidth: 1,
    borderColor: "white",
    marginVertical: 10,
    paddingHorizontal: 10,
    height: 50,
    color: "white",
    width: "80%",
  },
  buttonContainer: {
    marginTop: 20,
    borderRadius: 5,
    overflow: "hidden",
    elevation: 5,
    backgroundColor: "white",
    width: "40%",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
  },
  buttonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "600",
  },
  image: {
    height: 300,
    width: "100%",
  },
  signupText: {
    color: "white",
    textDecorationLine: "underline",
    marginTop: 10,
    fontSize: 12,
    textDecorationStyle: "solid",
    textDecorationColor: "white",
    paddingBottom: 10,
  },
});

export default AuthScreen;
