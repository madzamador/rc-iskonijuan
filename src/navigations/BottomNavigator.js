import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "../screens/tabScreens/HomeScreen";
import ChatScreen from "../screens/tabScreens/ChatScreen";
import MatchScreen from "../screens/tabScreens/MatchScreen";
import NotificationScreen from "../screens/tabScreens/NotificationScreen";

//Icons for the bottom navigator

const Tab = createMaterialBottomTabNavigator();

const TabArray = [
  {
    name: "Home",
    component: HomeScreen,
    focusedIcon: "home",
    unfocusedIcon: "home-outline",
  },
  {
    name: "Chat",
    component: ChatScreen,
    focusedIcon: "chatbox",
    unfocusedIcon: "chatbox-outline",
  },
  {
    name: "Match",
    component: MatchScreen,
    focusedIcon: "heart",
    unfocusedIcon: "heart-outline",
  },
  {
    name: "Notification",
    component: NotificationScreen,
    focusedIcon: "notifications",
    unfocusedIcon: "notifications-outline",
  },
];

export default function BottomNavigator() {
  return (
    <Tab.Navigator
      initialRouteName='Chat'
      compact={true}
      shifting={true}
      activeColor='#F55A5A'
      inactiveColor='#918E9B'
      barStyle={{
        position: "absolute",
        backgroundColor: "#FFFFFF",
        height: 52,
        bottom: 17,
      }}
    >
      {TabArray.map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.name}
          component={item.component}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? item.focusedIcon : item.unfocusedIcon}
                color={color}
                size={27}
              />
            ),
            tabBarBadge: item.name === "Notification" ? 5 : null,
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
