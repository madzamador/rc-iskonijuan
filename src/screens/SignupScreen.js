import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Text } from "react-native-paper";

let Encounter1Array = [
  { name: "goblin1", init: 5 },
  { name: "goblin2", init: 8 },
  { name: "goblin3", init: 15 },
  { name: "goblin4", init: 3 },
  { name: "goblin5", init: 9 },
];

export default function SignupScreen() {
  return (
    <View style={styles.container}>
      <Text variant='bodyLarge'>SignUp Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F55A5A",
    alignItems: "center",
    justifyContent: "center",
  },
});
