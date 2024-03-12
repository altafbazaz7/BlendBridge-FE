import { StyleSheet, SafeAreaView, Pressable, Text } from "react-native";
import React from "react";
import { IHomeScreenProps } from "../types/IHomeScreenProps";
import ProviderScreen from "./ProviderScreen";
import AdminScreen from "./AdminScreen";
import ConsumerScreen from "./ConsumerScreen";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { NavigationProp, useNavigation } from "@react-navigation/native";

const HomeScreen: React.FC<IHomeScreenProps> = ({ route }) => {
    const { permission } = route.params;
    const navigation: NavigationProp<string | any> = useNavigation();

    const { removeItem } = useAsyncStorage("@userDetails");

    const handleClearStorage = () => {
        removeItem()
            .then(() => {
                navigation.navigate("Login")
                console.log("Item '@userDetails' removed successfully")})
            .catch(error => console.error("Error removing item:", error));
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>{permission}</Text>
            {permission === "provider" && <ProviderScreen />}
            {permission === "*" && <AdminScreen />}
            {permission === "consumer" && <ConsumerScreen />}

            <Pressable onPress={handleClearStorage} style={styles.button}>
                <Text style={styles.buttonText}>Logout :)</Text>
            </Pressable>
        </SafeAreaView>
    );
};

export default HomeScreen;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        backgroundColor: "white",
        height: 50,
        width: 100,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "black",
    },
    text: {
        fontSize: 32,
        color:"white"
    }
});
