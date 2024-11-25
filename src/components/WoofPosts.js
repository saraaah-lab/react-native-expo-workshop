import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function WoofPosts(props) {
  return (
    <View style={WoofPostsStyles.container}>
      <Image style={WoofPostsStyles.image} source={{ uri: props.image }} />
      <View style={WoofPostsStyles.content}>
        <Text style={WoofPostsStyles.title}>{props.title}</Text>
        <Text
          numberOfLines={2}
          ellipsizeMode="tail"
          style={WoofPostsStyles.description}
        >
          {props.description}
        </Text>
      </View>
    </View>
  );
}

const WoofPostsStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 12,
  },
  image: {
    width: 40,
    height: 80,
    borderRadius: 12,
    flex: 1,
    marginRight: 10,
  },
  content: {
    flex: 2,
    width: 195,
  },
  title: {
    fontWeight: "bold",
    fontSize: 12,
    marginBottom: 2,
    color: "#280D5F",
    textTransform: "uppercase",
  },
  description: {
    fontSize: 11,
    color: "#280D5F",
  },
});
