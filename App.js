import React from "react";
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
  Text,
} from "react-native-paper";

import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";

const theme = {
  ...DefaultTheme,
  version: 3,
  colors: {
    ...DefaultTheme.colors,
    primary: "#F55A5A",
    secondary: "#2B283A",
    tertiary: "#918E9B",
    background: "#FDFCFB",
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Text variant='bodyMedium'>
          Open up App.js to start working on your app!
        </Text>
        <StatusBar style='auto' />
      </View>
    </PaperProvider>
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
