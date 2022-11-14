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
      }}
    >
      {user ? (
        <AuthStack.Screen name='Home' component={HomeScreen} />
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
