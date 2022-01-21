import React from "react";
import { View, StyleSheet, Text, TouchableHighlight } from "react-native";
import ArrowIcon from "./ArrowIcon";
import MenuIcon from "./MenuIcon";
import WorldIcon from "./WorldIcon";

export default function MenuButtonFalsy() {
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={() => alert("Pressed!")}
    >
      <View style={style.container}>
        <MenuIcon />
      </View>
    </TouchableHighlight>
  );
}

const style = StyleSheet.create({
  container: {}

});
