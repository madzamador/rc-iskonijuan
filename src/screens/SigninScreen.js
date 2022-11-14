import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Text, TextInput } from "react-native-paper";

export default function SigninScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/logo-nobg.png")}
          style={styles.imageIcon}
        />
      </View>
      <View style={styles.signinContainer}>
        <Text style={styles.signinText}>Sign In</Text>
        <TextInput
          mode='outlined'
          label='Email address'
          value={email}
          onChangeText={(email) => setEmail(email)}
          style={styles.textInput}
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
          style={[styles.textInput, { marginTop: 15 }]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFCFB",
    alignItems: "center",
    padding: 40,
  },
  imageIcon: {
    width: 263,
    height: 114,
    resizeMode: "contain",
  },
  imageContainer: {
    marginTop: 40,

    alignItems: "center",
  },
  signinContainer: {
    marginTop: 24,
    borderBottomStartRadius: 0,
    borderBottomEndRadius: 0,
    width: "100%",
    height: 200,
  },
  signinText: {
    color: "#2B283A",
    fontSize: 35,
    fontWeight: "700",
    marginTop: 24,
    paddingBottom: 24,
  },
  textInput: {
    fontSize: 18,
    fontWeight: "600",
  },
});
