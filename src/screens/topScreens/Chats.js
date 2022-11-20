import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect } from "react";
import { Avatar, List } from "react-native-paper";

const persons = [
  {
    id: "1",
    name: "Earnest Green",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    status: "Hello there, how are you",
  },
  {
    id: "2",
    name: "Winston Orn",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    status: "Hello there, how are you",
  },
  {
    id: "3",
    name: "Carlton Collins",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    status: "Hello there, how are you",
  },
  {
    id: "4",
    name: "Malcolm Labadie",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    status: "Hello there, how are you",
  },
  {
    id: "5",
    name: "Michelle Dare",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    status: "Hello there, how are you",
  },
  {
    id: "6",
    name: "Carlton Zieme",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    status: "Hello there, how are you",
  },
  {
    id: "7",
    name: "Jessie Dickinson",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    status: "Hello there, how are you",
  },
  {
    id: "8",
    name: "Julian Gulgowski",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    status: "Hello there, how are you",
  },
  {
    id: "9",
    name: "Ellen Veum",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    status: "Hello there, how are you",
  },
  {
    id: "10",
    name: "Lorena Rice",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    status: "Hello there, how are you",
  },

  {
    id: "11",
    name: "Carlton Zieme",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    status: "Hello there, how are you",
  },
  {
    id: "12",
    name: "Jessie Dickinson",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    status: "Hello there, how are you",
  },
  {
    id: "13",
    name: "Julian Gulgowski",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    status: "Hello there, how are you",
  },
  {
    id: "14",
    name: "Ellen Veum",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    status: "Hello there, how are you",
  },
  {
    id: "15",
    name: "Lorena Rice",
    imageUri: "https://xsgames.co/randomusers/avatar.php?g=male",
    status: "Hello there, how are you",
  },
];

export default function Chats() {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        data={persons}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <List.Item
            title={item.name}
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
              <List.Icon {...props} icon='circle' color='#F55A5A' size={10} />
            )}
          />
        )}
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
    marginTop: 16,
  },
});
