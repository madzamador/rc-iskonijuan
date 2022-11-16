import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import { Avatar } from "react-native-paper";
import React from "react";

export default function HeaderContainer() {
  return (
    <View>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          style={styles.logoImage}
          source={require("../../../assets/images/logo-nobg.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.avatarImage}>
        <Avatar.Image
          size={35}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/1144/1144760.png",
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  avatarImage: {
    position: "absolute",
    top: 25,
    right: 16,
  },
  logoContainer: {
    position: "absolute",
    top: 15,
    left: 16,
  },
  logoImage: {
    width: 125,
    height: 55,
  },
});
