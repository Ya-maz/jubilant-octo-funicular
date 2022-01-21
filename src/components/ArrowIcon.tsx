import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

interface Props {
  color?: string;
  width?: number;
  height?: number;
}

export default function WorldIcon({
  color = "#484d58",
  width = 16,
  height = 16,
}: Props) {
  return (
    <View style={style.icon}>
      <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
        <Path fill={color} d="M5 9l10 10 10-10z"></Path>
      </Svg>
    </View>
  );
}

const style = StyleSheet.create({
  icon: {
    marginTop: 2,
    paddingHorizontal: 5,
  },
});
