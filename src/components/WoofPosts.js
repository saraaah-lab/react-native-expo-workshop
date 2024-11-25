import { View, Text, Image } from "react-native";
import React from "react";

export default function WoofPosts(props) {
  return (
    <View style={{ flexDirection: "row", margin: 12 }}>
      <Image
        style={{
          width: 40,
          height: 80,
          borderRadius: 12,
          flex: 1,
          marginRight: 10,
        }}
        source={{ uri: props.image }}
      />
      <View style={{ flex: 2, width: 195 }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 12,
            marginBottom: 2,
            color: "#280D5F",
            textTransform: "uppercase",
          }}
        >
          {props.title}
        </Text>
        <Text
          numberOfLines={2}
          ellipsizeMode="tail"
          style={{
            fontSize: 11,
            color: "#280D5F",
          }}
        >
          {props.description}
        </Text>
      </View>
    </View>
  );
}
