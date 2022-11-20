import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Calls() {
  return (
    <View style={styles.container}>
      <Text>Calls</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
