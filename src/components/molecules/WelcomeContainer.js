import React from "react";

import { StyleSheet, View } from "react-native";
import LoginButton from "../atoms/LoginButton";
import { Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeContainer() {
  const navigation = useNavigation();
  return (
    <View style={styles.welcomeContainer}>
      <Text style={styles.welcomeText}>Welcome</Text>
      <Text variant='bodyLarge'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit
        vel quam vitae ultrices. Morbi tincidunt risus libero, eu feugiat nisi
        dictum eget.{" "}
      </Text>
      <View style={styles.buttonRow}>
        <LoginButton
          title='Sign In'
          color='#2B283A'
          onPress={() => {
            navigation.navigate("SignIn");
            console.log("Sign In");
          }}
        />
        <LoginButton
          title='Sign Up'
          color='#F55A5A'
          onPress={() => {
            navigation.navigate("SignUp");
            console.log("Sign Up");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeContainer: {
    marginTop: "auto",
    borderBottomStartRadius: 0,
    borderBottomEndRadius: 0,
    width: "100%",
    height: 390,
    borderRadius: 30,
    backgroundColor: "#FDFCFB",
    bottom: 0,
    padding: 40,
    paddingLeft: 40,
  },

  welcomeText: {
    fontWeight: "700",
    fontSize: 52,
    letterSpacing: 0.01,
    paddingBottom: 20,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 45,
  },
});
