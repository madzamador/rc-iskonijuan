import { StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "react-native-paper";

export default function SigninScreen() {
  return (
    <View style={styles.container}>
      <Text variant='bodyLarge'>HomeScreen</Text>
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
