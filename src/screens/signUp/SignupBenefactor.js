import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { Text, TextInput } from "react-native-paper";
import { scale, verticalScale } from "react-native-size-matters";
import LoginButton from "../../components/atoms/LoginButton";
import FooterAgreement from "../../components/molecules/FooterAgreement";

export default function SignupBenefactor() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../../assets/images/logo-nobg.png")}
              style={styles.imageIcon}
            />
          </View>
          <View style={styles.signinContainer}>
            <Text style={styles.signinText}>Sign Up</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",

                paddingBottom: 16,
              }}
            >
              <TextInput
                mode='outlined'
                label='First Name'
                style={styles.textInput}
              />
              <TextInput
                mode='outlined'
                label='Last Name'
                style={styles.textInput}
              />
            </View>
            <TextInput
              mode='outlined'
              label='Email address'
              style={styles.textCredential}
            />
            <TextInput
              mode='outlined'
              label='Password'
              value={password}
              secureTextEntry={!showPassword}
              right={
                <TextInput.Icon
                  icon={showPassword ? "eye" : "eye-off"}
                  onPress={() => setShowPassword(!showPassword)}
                />
              }
              onChangeText={(password) => setPassword(password)}
              forceTextInputFocus={false}
              style={[styles.textCredential, { marginTop: 15 }]}
            />
            <View style={styles.buttonContainer}>
              <LoginButton
                title='Next'
                style={styles.button}
                onPress={() => navigation.navigate("#")}
              />
            </View>

            <View
              style={{
                flexDirection: "row",

                justifyContent: "center",
                paddingTop: 20,
              }}
            >
              <Text variant='bodyLarge' style={styles.signUpText}>
                Don't have an account? {""}
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                <Text variant='bodyLarge' style={styles.signInLink}>
                  Sign In
                </Text>
              </TouchableOpacity>
            </View>
            <FooterAgreement />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
  imageIcon: {
    width: scale(281),
    height: verticalScale(96),
    resizeMode: "contain",
  },
  imageContainer: {
    marginTop: verticalScale(60),
    alignItems: "center",
  },
  signinContainer: {
    width: "100%",
    height: 200,
    marginTop: verticalScale(24),
  },
  signinText: {
    color: "#F55A5A",
    fontSize: scale(24),
    fontWeight: "700",
    paddingBottom: verticalScale(30),
  },
  textInput: {
    fontSize: scale(16),
    fontWeight: "600",
    width: scale(155),
  },
  textCredential: {
    fontSize: scale(16),
    fontWeight: "600",
  },
  buttonContainer: {
    paddingTop: verticalScale(31),
  },
  button: {
    borderRadius: 8,
  },
  signUpText: {
    color: "#2B283A",
    fontSize: scale(16),
    fontWeight: "600",
    bottom: 0,
  },
  signInLink: {
    color: "#F55A5A",
    fontSize: scale(16),
    fontWeight: "600",
  },
});
