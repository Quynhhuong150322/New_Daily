import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React, {useState} from "react";
import Button from '../components/Button';
import colors from '../constants/colors';
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/core';


export default function Profile() {
  const [isPencilColored, setIsPencilColored] = useState(false);
  const navigation = useNavigation();
  
  const handlePencilPress = () => {
    setIsPencilColored(true);
    navigation.navigate('Setting'); 
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.Trang }}>
      <ScrollView>
        <View style={{ flex: 1 }}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
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
            <Ionicons
              name="pencil"
              size={24}
              color={isPencilColored ? colors.Xanh_dam : colors.Den}
              onPress={() => {
                handlePencilPress();
                navigation.navigate('Setting'); // Chuyển hướng đến trang Setting
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

