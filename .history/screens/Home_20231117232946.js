import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title="Go to BottomTab"
        onPress={() => navigation.navigate("BottomTab")}
      />
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
