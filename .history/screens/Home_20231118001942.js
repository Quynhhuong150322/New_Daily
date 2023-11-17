import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
// import BottomTab from "./BottomTab";

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      {/* <BottomTab/> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
