import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Octicons from "react-native-vector-icons/Octicons";
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
    icon: "home",
  },
  {
    name: "Chat",
    component: ChatScreen,
    icon: "comment",
  },
  {
    name: "Match",
    component: MatchScreen,
    icon: "heart-fill",
  },
  {
    name: "Notification",
    component: NotificationScreen,
    icon: "bell",
  },
];

export default function BottomNavigator() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      compact={true}
      activeColor='#F55A5A'
      inactiveColor='#918E9B'
      labeled={false}
      barStyle={{
        backgroundColor: "#FFFFFF",
        position: "absolute",
        height: 52,
        bottom: 16,
      }}
    >
      {TabArray.map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.name}
          component={item.component}
          options={{
            tabBarIcon: ({ color }) => (
              <Octicons name={item.icon} color={color} size={23} />
            ),
            tabBarBadge: item.name === "Notification" ? 5 : null,
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
