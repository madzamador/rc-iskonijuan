import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

const AuthStack = createNativeStackNavigator();

export default function StackNavigator() {
  const user = false;
  return (
    <AuthStack.Navigator>
      {user ? (
        <AuthStack.Screen name='Home' component={HomeScreen} />
      ) : (
        <AuthStack.Screen name='Welcome' component={WelcomeScreen} />
      )}
    </AuthStack.Navigator>
  );
}
