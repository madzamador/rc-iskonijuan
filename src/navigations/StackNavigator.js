import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import SigninScreen from "../screens/SigninScreen";
import SignupScreen from "../screens/SignupScreen";

const AuthStack = createNativeStackNavigator();

export default function StackNavigator() {
  const user = false;
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureDirection: "vertical",
      }}
    >
      {user ? (
        <AuthStack.Screen
          headerShown='false'
          name='Home'
          component={HomeScreen}
        />
      ) : (
        <>
          <AuthStack.Screen
            headerShown='false'
            name='Welcome'
            component={WelcomeScreen}
          />
          <AuthStack.Screen
            headerShown='false'
            name='SignIn'
            component={SigninScreen}
          />
          <AuthStack.Screen
            headerShown='false'
            name='SignUp'
            component={SignupScreen}
          />
        </>
      )}
    </AuthStack.Navigator>
  );
}
