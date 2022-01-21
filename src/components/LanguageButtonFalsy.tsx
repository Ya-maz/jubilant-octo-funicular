import React from "react";
import { View, StyleSheet, Text, TouchableHighlight } from "react-native";
import ArrowIcon from "./ArrowIcon";
import WorldIcon from "./WorldIcon";

export default function LanguageButtonFalsy() {
  return (
    <TouchableHighlight
    activeOpacity={0.6}
    underlayColor="#DDDDDD"
    onPress={() => alert("Pressed!")}
  >
    <View style={style.container}>
      <WorldIcon />
      <Text style={style.text}>ru</Text>
      <ArrowIcon />
      </View>
      </TouchableHighlight>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,

  },
  text: {
    color: "rgb(72, 77, 88)",
    fontSize: 15,
    lineHeight: 20,
    textTransform: "uppercase",
  },
});
