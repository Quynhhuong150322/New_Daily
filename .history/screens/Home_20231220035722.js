import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React from "react";
// import React, {useState} from "react";
import colors from '../constants/colors';
import Divider from '../components/Divider';
import Tab from '../components/Tab';
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/core';

export default function Home({navigation}) {
  return (
  <ScrollView>
    <View style={styles.container}>
      
    </View>
  </ScrollView>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
