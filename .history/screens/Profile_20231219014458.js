import { View, Text, StyleSheet, ScrollView, Image} from "react-native";
import React from "react";
import Button from '../components/Button';
import colors from '../constants/colors';
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.Trang }}>
      <ScrollView>
        <View style={styles.container}>
          <Image style={styles.userImg} source={require('../assets/avt.png')}/>
          <View style={{
              color: colors.Den
          }}>
            <Text>Chào mừng</Text>
            <Text>Nhóm Hương Hồng</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  userImg: {
    height: 100,
    width: 100,
    borderRadius: 75,
    
  },
});
