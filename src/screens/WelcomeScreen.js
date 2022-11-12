import { StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "react-native-paper";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text variant='bodyLarge'>WelcomeScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
