import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function MenuIcon() {
  return (
    <View style={style.container}>
      <View style={style.line}></View>
      <View style={style.lineTwo}></View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    position: "relative",
    top: -10,
    width: 20,
    height: 20,
    padding: 15,
    marginRight: 20,
  },
  line: {
    borderTopWidth: 3,
    borderBottomColor: "rgb(72, 77, 88)",
    borderStyle: "solid",
    width: 15,
    paddingVertical: 3,
  },
  lineTwo: {
    borderBottomWidth: 3,
    borderBottomColor: "rgb(72, 77, 88)",
    borderStyle: "solid",
    width: 20,
  },
});
