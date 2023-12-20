import { View, Text, StyleSheet, ScrollView, Image} from "react-native";
import React from "react";
import Button from '../components/Button';
import colors from '../constants/colors';
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.Trang }}>
      <ScrollView>
        <View style={{ flex: 1 }}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around'
          }}>
            <Image  style={{
              height: 100,
              width: 100,
              borderRadius: 75}}
              source={require('../assets/avt.png')}
            />
            <View style={{
                color: colors.Den
              }}>
              <Text>Chào mừng</Text>
              <Text>Nhóm Hương Hồng</Text>
            </View>
            <Ionicons name="pencil" size={24} color={colors.black} />
            {/* <ion-icon name="pencil"></ion-icon> */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

