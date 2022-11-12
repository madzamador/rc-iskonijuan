import React, { useCallback, useEffect } from "react";
import { useFonts } from "expo-font";
import StackNavigator from "./src/navigations/StackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { DefaultTheme as NavigationDefaultTheme } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";

//import Themes
import {
  adaptNavigationTheme,
  MD3LightTheme,
  Provider as PaperProvider,
} from "react-native-paper";

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

const { LightTheme } = adaptNavigationTheme({
  light: NavigationDefaultTheme,
});

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

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <PaperProvider theme={combinedDefaultTheme}>
      <NavigationContainer
        onReady={onLayoutRootView}
        theme={combinedDefaultTheme}
      >
        <StackNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}
