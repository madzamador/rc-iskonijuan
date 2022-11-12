import React from "react";
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
  Text,
} from "react-native-paper";

import { useFonts } from "expo-font";
import { SafeAreaView } from "react-native";

// Custom font integration of React Native Expo and React Native Paper

const customThemeFonts = Object.fromEntries(
  Object.entries(DefaultTheme.fonts).map(([variantName, variantProperties]) => [
    variantName,
    { ...variantProperties, fontFamily: "Inter-Black" },
  ])
);

// Custom Theme Configuration for App

const theme = {
  ...DefaultTheme,
  version: 3,
  fonts: customThemeFonts,
  colors: {
    ...DefaultTheme.colors,
    primary: "#F55A5A",
    secondary: "#2B283A",
    tertiary: "#918E9B",
    background: "#FDFCFB",
  },
};

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("./assets/fonts/Inter-Black.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView>
        <Text variant='displayLarge'>Display Large</Text>
        <Text variant='displayMedium'>Display Medium</Text>
        <Text variant='displaySmall'>Display small</Text>

        <Text variant='headlineLarge'>Headline Large</Text>
        <Text variant='headlineMedium'>Headline Medium</Text>
        <Text variant='headlineSmall'>Headline Small</Text>

        <Text variant='titleLarge'>Title Large</Text>
        <Text variant='titleMedium'>Title Medium</Text>
        <Text variant='titleSmall'>Title Small</Text>

        <Text variant='bodyLarge'>Body Large</Text>
        <Text variant='bodyMedium'>Body Medium</Text>
        <Text variant='bodySmall'>Body Small</Text>

        <Text variant='labelLarge'>Label Large</Text>
        <Text variant='labelMedium'>Label Medium</Text>
        <Text variant='labelSmall'>Label Small</Text>
      </SafeAreaView>
    </PaperProvider>
  );
}
