import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Text } from "react-native-paper";
import {
  scale,
  verticalScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import { Card } from "react-native-paper";
import Fontawesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicon from "react-native-vector-icons/Ionicons";
import LoginButton from "../components/atoms/LoginButton";

export default function SignupScreen() {
  const [select, setSelect] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Select Your Role</Text>

      <View style={styles.cardContainer}>
        <Card style={styles.card}>
          <View
            style={{
              alignItems: "center",
              paddingTop: scale(10),
            }}
          >
            <Fontawesome5
              name='user-graduate'
              color={"#F55A5A"}
              size={scale(30)}
            />
          </View>

          <Card.Content>
            <Text style={styles.cardTitle}>Student</Text>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <View
            style={{
              alignItems: "center",
              paddingTop: scale(10),
            }}
          >
            <Ionicon name='person' color={"#F55A5A"} size={scale(30)} />
          </View>

          <Card.Content>
            <Text style={styles.cardTitle}>Benefactor</Text>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <View
            style={{
              alignItems: "center",
              paddingTop: scale(10),
            }}
          >
            <FontAwesome name='group' color={"#F55A5A"} size={scale(30)} />
          </View>

          <Card.Content>
            <Text style={styles.cardTitle}>Organization</Text>
          </Card.Content>
        </Card>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: moderateVerticalScale(150),
          width: "100%",
          alignItems: "center",
        }}
      >
        <LoginButton
          title='Sign Up'
          color='#2B283A'
          onPress={() => {
            console.log("Sign Up");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  Title: {
    position: "absolute",
    top: scale(149),
    fontSize: scale(30),
    fontFamily: "Inter-Medium",
    fontWeight: "bold",
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: scale(16),
  },
  card: {
    width: scale(90),
    height: scale(100),
    borderRadius: scale(8),
    backgroundColor: "#FDFCFB",
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  cardTitle: {
    paddingTop: scale(14),
    fontSize: scale(10),
    fontFamily: "Inter-Medium",
    fontWeight: "bold",
  },
});
