import React from "react";
import { View, StyleSheet } from "react-native";

export default function HorizontalLine() {
  return <View style={styles.horizontalLine} />;
}

const styles = StyleSheet.create({
  horizontalLine: {
    borderBottomWidth: 1,
    borderColor: "#FACBEA", 
  },
});