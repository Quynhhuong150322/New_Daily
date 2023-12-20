import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Button from '../components/Button';
import colors from '../constants/colors';
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.Trang }}>
      <View style={styles.container}>
        <View style={{
            fontSize: 22,
            fontWeight: 'bold',
            // marginVertical: 12,
            color: colors.Den
        }}>
          <Text>Chào mừng</Text>
          <Text>Chào mừng</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
