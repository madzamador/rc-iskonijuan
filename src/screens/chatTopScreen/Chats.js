import { StyleSheet, View, FlatList } from "react-native";
import React from "react";
import { Avatar, List, Text } from "react-native-paper";

const persons = [
  {
    id: "1",
    name: "Earnest Green",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    status: "Hello there, how are you",
    verified: true,
  },
  {
    id: "2",
    name: "Winston Orn",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    status: "Hello there, how are you",
    verified: false,
  },
  {
    id: "3",
    name: "Carlton Collins",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    status: "Hello there, how are you",
    verified: true,
  },
  {
    id: "4",
    name: "Malcolm Labadie",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    status: "Hello there, how are you",
    verified: false,
  },
  {
    id: "5",
    name: "Michelle Dare",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    status: "Hello there, how are you",
    verified: true,
  },
  {
    id: "6",
    name: "Carlton Zieme",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    status: "Hello there, how are you",
    verified: true,
  },
  {
    id: "7",
    name: "Jessie Dickinson",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    status: "Hello there, how are you",
    verified: true,
  },
  {
    id: "8",
    name: "Julian Gulgowski",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    status: "Hello there, how are you",
    verified: false,
  },
  {
    id: "9",
    name: "Ellen Veum",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    status: "Hello there, how are you",
    verified: true,
  },
  {
    id: "10",
    name: "Lorena Rice",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    status: "Hello there, how are you",
    verified: true,
  },

  {
    id: "11",
    name: "Carlton Zieme",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    status: "Hello there, how are you",
    verified: false,
  },
  {
    id: "12",
    name: "Jessie Dickinson",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    status: "Hello there, how are you",
    verified: false,
  },
  {
    id: "13",
    name: "Julian Gulgowski",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    status: "Hello there, how are you",
    verified: false,
  },
  {
    id: "14",
    name: "Ellen Veum",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    status: "Hello there, how are you",
    verified: false,
  },
  {
    id: "15",
    name: "Lorena Rice",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    status: "Hello there, how are you",
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
    description={item.status}
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
      <List.Icon {...props} icon='checkmark-done' color='#F55A5A' size={5} />
    )}
  />
);

export default function Chats() {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
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
  flatList: {
    borderRadius: 20,
  },
  listTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: 16,
    paddingRight: 10,
  },
  verifiedStatus: {
    fontSize: 12,
  },
  separator: {
    height: 1,
    backgroundColor: "#D9D9D9",
  },
});
