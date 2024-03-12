// AuthScreen.tsx
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { IAuthProps } from '../types/IAuthProps';
import { ILoginUser } from '../types/ILoginUser';

const AuthScreen = ({
  title,
  buttonText,
  navigateActionText,
  navigateScreen,
  handleAuthAction,
  handleInputChange
}: IAuthProps<ILoginUser>) => {
  const navigation: NavigationProp<string | any> = useNavigation();

  const handleNavigation = () => {
    console.log(`${buttonText} pressed`);
    if (navigateScreen) {
      navigation.navigate(navigateScreen);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/splash.png')} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{title}</Text>
      <TextInput
  style={styles.input}
  placeholder="Username"
  placeholderTextColor="rgba(255, 255, 255, 0.5)"
  onChangeText={text => handleInputChange({ type: 'email', value: text })} 
/>
<TextInput
  style={styles.input}
  placeholder="Password"
  placeholderTextColor="rgba(255, 255, 255, 0.5)"
  secureTextEntry={true}
  onChangeText={text => handleInputChange({ type: 'password', value: text })}
/>

      <TouchableOpacity onPress={handleAuthAction} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleNavigation}>
        <Text style={styles.signupText}>{navigateActionText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 20
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 55,
    fontWeight: '800'
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    marginVertical: 10,
    paddingHorizontal: 10,
    height: 50,
    color: 'white',
    width: '80%'
  },
  buttonContainer: {
    marginTop: 20,
    borderRadius: 5,
    overflow: 'hidden',
    elevation: 5,
    backgroundColor: 'white',
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600'
  },
  image: {
    height: 300,
    width: '100%'
  },
  signupText: {
    color: 'white',
    textDecorationLine: 'underline',
    marginTop: 10,
    fontSize: 12,
    textDecorationStyle: 'solid',
    textDecorationColor: 'white',
    paddingBottom: 10
  }
});

export default AuthScreen;