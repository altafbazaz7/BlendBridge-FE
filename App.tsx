import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SplashScreen from "./screens/SplashScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import InfoScreen from "./screens/InfoScreen";
import { Provider } from "react-redux";
import { Store } from "./redux/store";
import HomeScreen from "./screens/HomeScreen";
import AsyncStorage, { useAsyncStorage } from "@react-native-async-storage/async-storage";

export default function App() {
  const { getItem } = useAsyncStorage("@userDetails");
  const Stack = createStackNavigator();
  const [initialRoute, setInitialRoute] = React.useState("Splash");
  const [ userPermission, setuserPermission] = React.useState<string>("")

  const checkToken = async () => {
    try {
      const data: string | null = await AsyncStorage.getItem('data');
      let parsedData = data && JSON.parse(data);
      console.log(parsedData?.data?.token,'dataaaa')

      setuserPermission(parsedData?.data?.permission)
      if (parsedData?.data?.token !== undefined) {
        // move to home directly
        setInitialRoute("Home");
      }
    } catch (error) {
      console.error("Error checking token:", error);
    }
  };

  React.useEffect(() => {
    checkToken();
  }, []);

  return (
    <Provider store={Store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={initialRoute}
            screenOptions={{
              headerShown: false,
              animationTypeForReplace: "push",
            }}
          >
            <Stack.Screen
              name="Splash"
              component={SplashScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Info"
              component={InfoScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Signup"
              component={SignupScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Home"
              options={{
                headerShown: false,
              }}
            >
              {(props) => <HomeScreen {...props} permission={userPermission} />}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
