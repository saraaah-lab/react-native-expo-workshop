import { FlatList, SafeAreaView, Text } from "react-native";
import { woofPostsData } from "../data/WoofPosts";
import { WoofPost } from "../components/WoofPost";
import * as React from "react";

export const HomeScreen = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: "#FAF9FA" }}>
    <Text
      style={{
        fontWeight: "bold",
        fontSize: 20,
        fontFamily: "Sofia Pro",
        margin: 10,
      }}
    >
      New Woof Posts
    </Text>
    <FlatList
      data={woofPostsData.posts}
      renderItem={({ item }) => (
        <WoofPost
          image={item.image}
          title={item.title}
          description={item.description}
        />
      )}
    />
  </SafeAreaView>
);
