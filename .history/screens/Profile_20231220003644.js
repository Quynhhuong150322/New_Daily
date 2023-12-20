import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React, {useState} from "react";
import Button from '../components/Button';
import colors from '../constants/colors';
import Divider from '../components/Divider';
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/core';


export default function Profile() {
  const [isPencilColored, setIsPencilColored] = useState(false);
  const navigation = useNavigation();
  
  const handlePencilPress = () => {
    setIsPencilColored(false);
    navigation.navigate('Setting'); 
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.Trang }}>
      <ScrollView>
        <View style={{  }}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
            <Image  style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              marginLeft: 10
              }}
              source={require('../assets/avt.png')}
            />
            <View style={{
                color: colors.Den,
                marginRight: 30
              }}>
              <Text style={{
                fontSize: 16,
                }}>
                Chào mừng
              </Text>
              <Text style={{
                fontSize: 20,
                marginTop: 10,
                fontWeight: 'bold',
                }}>
                Nhóm Hương Hồng
              </Text>
            </View>
            <Ionicons
              style={{
                marginRight: 10
              }}
              name="pencil"
              size={24}
              color={isPencilColored ? colors.Xanh_dam : colors.Den}
              onPress={() => {
                handlePencilPress();
                navigation.navigate('Setting'); // Chuyển hướng đến trang Setting
              }}
            />
          </View>
          <Divider color={colors.Xam1} length={'50%'} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

