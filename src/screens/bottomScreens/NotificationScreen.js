import { StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

import HeaderContainer from "../../components/molecules/HeaderContainer";

//Create Notification Data
const Notification_Data = [
  {
    id: 1,
    title: "New",
    data: ["Jhon", "Doe", "Smith"],
  },
  {
    id: 2,
    title: "Earlier",
    data: ["Jhon", "Doe", "Smith"],
  },
];

const Item = ({ title }) => (
  <View style={styles.sectionTitle}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function NotificationScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderContainer />
      <Text style={styles.title}>Notifications</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontFamily: "Inter-Medium",
    marginLeft: 16,
  },
});
