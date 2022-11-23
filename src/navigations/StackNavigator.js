import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import SigninScreen from "../screens/SigninScreen";
import SignupScreen from "../screens/SignupScreen";

import BottomNavigator from "./BottomNavigator";

const AuthStack = createNativeStackNavigator();

export default function StackNavigator() {
  const isLoggedin = true;
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {isLoggedin ? (
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
