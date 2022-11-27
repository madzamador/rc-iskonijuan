import { StyleSheet, View, FlatList } from "react-native";
import React, { useEffect } from "react";
import { Avatar, List, Text } from "react-native-paper";
import { scale } from "react-native-size-matters";

const persons = [
  {
    id: "1",
    name: "Earnest Green",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    date: "08 November",
    verified: true,
  },
  {
    id: "2",
    name: "Winston Orn",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    date: "08 November",
    verified: false,
  },
  {
    id: "3",
    name: "Carlton Collins",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    date: "08 November",
    verified: true,
  },
  {
    id: "4",
    name: "Malcolm Labadie",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    date: "08 November",
    verified: false,
  },
  {
    id: "5",
    name: "Michelle Dare",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    date: "08 November",
    verified: true,
  },
  {
    id: "6",
    name: "Carlton Zieme",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    date: "08 November",
    verified: true,
  },
  {
    id: "7",
    name: "Jessie Dickinson",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    date: "08 November",
    verified: true,
  },
  {
    id: "8",
    name: "Julian Gulgowski",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    date: "08 November",
    verified: false,
  },
  {
    id: "9",
    name: "Ellen Veum",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    date: "08 November",
    verified: true,
  },
  {
    id: "10",
    name: "Lorena Rice",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    date: "08 November",
    verified: true,
  },

  {
    id: "11",
    name: "Carlton Zieme",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    date: "08 November",
    verified: false,
  },
  {
    id: "12",
    name: "Jessie Dickinson",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    date: "08 November",
    verified: false,
  },
  {
    id: "13",
    name: "Julian Gulgowski",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    date: "08 November",
    verified: false,
  },
  {
    id: "14",
    name: "Ellen Veum",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    date: "08 November",
    verified: false,
  },
  {
    id: "15",
    name: "Lorena Rice",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    date: "08 November",
    verified: false,
  },
];

const renderItem = ({ item }) => (
  <List.Item
    title={
      <View style={styles.listTitle}>
        <Text style={styles.name}>{item.name}</Text>

        <List.Icon
          icon={
            item.verified
              ? "md-checkmark-circle-outline"
              : "ellipsis-horizontal-circle-outline"
          }
          color={item.verified ? "#F55A5A" : "#2B283A"}
        />
      </View>
    }
    description={item.date}
    left={(props) => (
      <Avatar.Image
        {...props}
        size={45}
        source={{
          uri: item.imageUri,
        }}
      />
    )}
    right={(props) => (
      <List.Icon {...props} icon='call' color='#F55A5A' size={12} />
    )}
  />
);

export default function Calls() {
  return (
    <View style={styles.container}>
      <FlatList
        data={persons}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        getItemLayout={(data, index) => ({
          length: 80,
          offset: 80 * index,
          index,
        })}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  listTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: scale(16),
    paddingRight: 10,
  },

  separator: {
    height: 1,
    backgroundColor: "#D9D9D9",
  },
});
