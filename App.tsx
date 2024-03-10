import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context'; // Import SafeAreaProvider
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import InfoScreen from './screens/InfoScreen';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash"
         screenOptions={{
          headerShown: false,
          animationTypeForReplace: 'push', 
        }}
        >
        <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="Home"
            component={InfoScreen}
            options={{
              headerShown: false
            }}
          />
             <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: false
            }}
          />
            <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
