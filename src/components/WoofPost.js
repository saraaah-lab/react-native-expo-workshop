import { View, StyleSheet, Text, Image } from "react-native";

export const WoofPost = (props) => (
  <View style={woofPostStyles.layout}>
    <Image style={woofPostStyles.image} source={{ uri: props.image }} />
    <View style={woofPostStyles.content}>
      <Text style={woofPostStyles.title}>{props.title}</Text>
      <Text
        numberOfLines={2}
        ellipsizeMode="tail"
        style={woofPostStyles.description}
      >
        {props.description}
      </Text>
    </View>
  </View>
);

const woofPostStyles = StyleSheet.create({
  layout: {
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
    fontFamily: "Sofia Pro",
  },
  description: {
    fontSize: 11,
    color: "#280D5F",
    fontFamily: "Sofia Pro",
  },
});
