import { StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "react-native-paper";

export default function NotificationScreen() {
  return (
    <View style={styles.container}>
      <Text variant='displaySmall'>NotificationScreen</Text>
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
