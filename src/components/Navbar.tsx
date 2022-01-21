import React from "react";
import { View, StyleSheet, Text} from "react-native";
import LanguageButtonFalsy from "./LanguageButtonFalsy";
import MenuButtonFalsy from "./ManuButtonFalsy";
export default function Navbar() {
  return (
    <View style={style.container}>
      <View style={style.box}>
        <MenuButtonFalsy />
        <Text style={style.text}>Запрос на ремонт</Text>
      </View>

      <View>
          <LanguageButtonFalsy />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: 15,
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderColor: "rgba(72, 77, 88, .3)",
  },
  box: {
    flexDirection: "row",
  },
  text: {
    color: "rgb(72, 77, 88)",
    fontSize: 15,
    lineHeight: 20,
    textTransform: "uppercase",
  },
});
