import React, { useEffect } from 'react';
import { StyleSheet, View, Animated, Image } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation : NavigationProp<any> = useNavigation();

  const translateY = new Animated.Value(500);
  const opacity = new Animated.Value(0);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();

    const timer = setTimeout(() => {
      navigation.navigate('Home');
    }, 1500);

    return () => clearTimeout(timer);
  }, [navigation, translateY, opacity]);

  return (
    <Animated.View style={[styles.container, { transform: [{ translateY }], opacity }]}>
      <Image
        source={require('../assets/splash.png')} 
        style={styles.image}
        resizeMode="contain" 
      />
    </Animated.View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'black'
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
