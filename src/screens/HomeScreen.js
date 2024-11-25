import { View, Text, FlatList, Image, SafeAreaView } from "react-native";
import React from "react";
import WoofPosts from "../components/WoofPosts";
import { woofPostsData } from "../data/woofPosts";

export function HomeScreen() {
  return (
    <SafeAreaView>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
          margin: 10,
        }}
      >
        New Woof Posts
      </Text>
      <FlatList
        data={woofPostsData.posts}
        renderItem={({ item, index }) => (
          <WoofPosts
            image={item.image}
            title={item.title}
            description={item.description}
          />
        )}
      />
    </SafeAreaView>
  );
}
