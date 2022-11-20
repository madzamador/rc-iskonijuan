import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Dimensions } from "react-native";
import Chats from "../screens/topScreens/Chats";
import Calls from "../screens/topScreens/Calls";

const topTab = createMaterialTopTabNavigator();

const { width } = Dimensions.get("window");

export default function TopNavigator() {
  return (
    <topTab.Navigator
      initialRouteName='Chats'
      initialLayout={width}
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 16,
          fontFamily: "Inter-Medium",
          textTransform: "none",
        },
        tabBarActiveTintColor: "#F55A5A",
        tabBarInactiveTintColor: "#2B283A",
        tabBarIndicatorStyle: {
          backgroundColor: "#F55A5A",
          height: 4,
        },
        tabBarStyle: {
          backgroundColor: "#fff",
        },
      }}
    >
      <topTab.Screen name='Chats' component={Chats} />
      <topTab.Screen name='Calls' component={Calls} />
    </topTab.Navigator>
  );
}
