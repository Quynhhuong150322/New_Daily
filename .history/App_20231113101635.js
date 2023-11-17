import React from "react";
import {  StyleSheet, View } from "react-native";
import AppNavigator from "./navigation/AppNavigator";


export default function App() {
  return (
    <View style={styles.container}>
      <AppNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    height: "100%",
  },
});
