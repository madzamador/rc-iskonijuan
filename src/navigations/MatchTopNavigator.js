import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Dimensions } from "react-native";

import Campaign from "../screens/matchTopScreen/LikedCampaign";
import Stories from "../screens/matchTopScreen/SuccessStories";

const topTab = createMaterialTopTabNavigator();

const { width } = Dimensions.get("window");

export default function MatchTopNavigator() {
  return (
    <topTab.Navigator
      initialRouteName='Campaign'
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
          backgroundColor: "#FDFCFB",
        },
      }}
    >
      <topTab.Screen name='Liked Campaign' component={Campaign} />
      <topTab.Screen name='Success Stories' component={Stories} />
    </topTab.Navigator>
  );
}
