import { StyleSheet, Text, View, Animated, Easing, PanResponder } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationProp, useNavigation } from "@react-navigation/native";

const InfoScreen = () => {
  const headingOpacity = new Animated.Value(0);
  const bodyOpacity = new Animated.Value(0);
  const slideAnimation = new Animated.Value(0);

  useEffect(() => {
    const animationConfig = {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    };

    Animated.timing(headingOpacity, animationConfig).start();

    setTimeout(() => {
      Animated.timing(bodyOpacity, animationConfig).start();
    }, 500);

  }, []);

  const navigation : NavigationProp<any>= useNavigation();

  const panResponder = React.useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestureState) => {
        slideAnimation.setValue(gestureState.dx);
      },
      onPanResponderRelease: (event, gestureState) => {
        if (gestureState.dx < 50) {
          navigation.navigate('Login');
        } else {
          Animated.timing(slideAnimation, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.innerContainer, { transform: [{ translateX: slideAnimation }] }]}>
        <Animated.Text style={[styles.heading_text, { opacity: headingOpacity }]}>
          BlendBridge
        </Animated.Text>
        <Animated.Text style={[styles.body_text, { opacity: bodyOpacity }]}>
          BlendBridge is a social connectivity platform that connects service providers with service consumers. Whether you're looking for a plumber, electrician, doctor, or lawyer, BlendBridge has you covered.
        </Animated.Text>
      </Animated.View>
      <Animated.View
        style={[styles.slidePrompt, { transform: [{ translateX: slideAnimation }] }]}
        {...panResponder.panHandlers}
      >
        <Text style={styles.promptText}>Slide to login</Text>
      </Animated.View>
    </SafeAreaView>
  );
};

export default InfoScreen;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  innerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  heading_text: {
    color: "white",
    fontSize: 55,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "800",
  },
  body_text: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },
  slidePrompt: {
    position: "absolute",
    bottom: 200,
    left: 0,
    right: 0,
    backgroundColor: "silver",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  promptText: {
    color: "white",
    fontSize: 18,
  },
});
