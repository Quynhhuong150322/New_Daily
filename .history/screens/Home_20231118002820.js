import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
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
