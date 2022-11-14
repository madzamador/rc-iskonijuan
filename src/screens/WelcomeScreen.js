import React, { useEffect } from "react";
import { StyleSheet, View, Image, Animated, Easing } from "react-native";
import { Text } from "react-native-paper";
import LoginButton from "../components/atoms/LoginButton";
import { useNavigation } from "@react-navigation/native";
import WelcomeContainer from "../components/molecules/WelcomeContainer";

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/logo-bg.png")}
          style={styles.imageIcon}
        />
      </View>
      <View>
        <WelcomeContainer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F55A5A",
    alignItems: "center",
  },

  imageContainer: {
    flex: 1,
    margin: "auto",
    alignItems: "center",
    justifyContent: "center",
  },

  imageIcon: { width: 300, height: 125 },
});
