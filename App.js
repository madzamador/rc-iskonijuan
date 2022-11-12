import React from "react";
import { useFonts } from "expo-font";

//Navigators
import StackNavigator from "./src/navigations/StackNavigator";
import { NavigationContainer } from "@react-navigation/native";

//import Themes
import {
  adaptNavigationTheme,
  MD3LightTheme,
  Provider as PaperProvider,
} from "react-native-paper";

import { DefaultTheme as NavigationDefaultTheme } from "@react-navigation/native";

const { LightTheme } = adaptNavigationTheme({
  light: NavigationDefaultTheme,
});

// Custom font integration of React Native Expo and React Native Paper

const customThemeFonts = Object.fromEntries(
  Object.entries(MD3LightTheme.fonts).map(
    ([variantName, variantProperties]) => [
      variantName,
      { ...variantProperties, fontFamily: "Inter-Regular" },
    ]
  )
);

// Custom Theme Configuration for App

const theme = {
  ...MD3LightTheme,
  version: 3,
  fonts: customThemeFonts,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#F55A5A",
    secondary: "#2B283A",
    tertiary: "#918E9B",
    background: "#FDFCFB",
  },
};

const combinedDefaultTheme = {
  ...theme,
  ...LightTheme,
  colors: {
    ...theme.colors,
    ...LightTheme.colors,
  },
};

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <PaperProvider theme={combinedDefaultTheme}>
      <NavigationContainer theme={combinedDefaultTheme}>
        <StackNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}
