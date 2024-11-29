import { View, Text, FlatList, Image, SafeAreaView } from "react-native";
import React from "react";
import WoofPosts from "../components/WoofPosts";

export function HomeScreen() {
  const woofPostsData = {
    posts: [
      {
        id: "post-1",
        image:
          "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=967&q=80",
        title: "Happy Woofs",
        description:
          "How to keep your woof health and happy. We've asked some of the best experts out there.",
        caretaker: "Jamie Street",
        source: "https://unsplash.com/photos/UtrE5DcgEyg",
      },
      {
        id: "post-2",
        image:
          "https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=850&q=80",
        title: "Woofs & friends",
        description:
          "Best friends are important for humans, but also for dogs.",
        caretaker: "Krista Mangulsone",
        source: "https://unsplash.com/photos/9gz3wfHr65U",
      },
      {
        id: "post-3",
        image:
          "https://images.unsplash.com/photo-1558947530-cbcf6e9aeeae?auto=format&fit=crop&w=634&q=80",
        title: "Good Woofs",
        description:
          "A good woof is a woof that brings joy. Here are a few tips to let your woof behave.",
        caretaker: "Olia Nayda",
        source: "https://unsplash.com/photos/f6v_Q0WXEK8",
      },
      {
        id: "post-4",
        image:
          "https://images.unsplash.com/photo-1444212477490-ca407925329e?auto=format&fit=crop&w=1100&q=80",
        title: "Wild Woofs",
        description:
          "In some parts of the world, wild woofs are very common. Learn how to interact in a nice way.",
        caretaker: "Anoir Chafik",
        source: "https://unsplash.com/photos/2_3c4dIFYFU",
      },
      {
        id: "post-5",
        image:
          "https://images.unsplash.com/photo-1567014543648-e4391c989aab?auto=format&fit=crop&w=1050&q=80",
        title: "Sleepy Woofs",
        description:
          "Sleeping is just as important for woofs as it is for humans. What are the main things your woof dreams about.",
        caretaker: "Max Singh",
        source: "https://unsplash.com/photos/2637Pic9xMw",
      },
      {
        id: "post-6",
        image:
          "https://images.unsplash.com/photo-1524511751214-b0a384dd9afe?auto=format&fit=crop&w=967&q=80",
        title: "Exploring Woofs",
        description:
          "Just sitting in one place is boring for most woofs. How do woofs explore the world?",
        caretaker: "Jamie Street",
        source: "https://unsplash.com/photos/wcO2PWLuQ3U",
      },
    ],
  };

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
            caretaker={item.caretaker}
            
          />
        )}
      />
    </SafeAreaView>
  );
}
