import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/bottomScreens/HomeScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import SigninScreen from "../screens/SigninScreen";
import SignupScreen from "../screens/SignupScreen";

import BottomNavigator from "./BottomNavigator";

const AuthStack = createNativeStackNavigator();

export default function StackNavigator() {
  const user = true;
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {user ? (
        <AuthStack.Screen name='BottomNavigator' component={BottomNavigator} />
      ) : (
        <>
          <AuthStack.Screen name='Welcome' component={WelcomeScreen} />
          <AuthStack.Screen name='SignIn' component={SigninScreen} />
          <AuthStack.Screen name='SignUp' component={SignupScreen} />
        </>
      )}
    </AuthStack.Navigator>
  );
}
