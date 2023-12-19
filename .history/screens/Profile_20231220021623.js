import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React, {useState} from "react";
import colors from '../constants/colors';
import Divider from '../components/Divider';
import Tab from '../components/Tab';
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

          <View style = {{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginBottom: 10,
            marginTop: 20}}>
            <View>
              <Tab icon="checkmark-circle" title="Đang theo dõi" navigateTo="Home" />
              <Tab icon="bookmark" title="Đã lưu" navigateTo="Home" />
            </View>
            <View>
              <Tab icon="document-text" title="Đọc gần đây" navigateTo="Home" />
              <Tab icon="time" title="Xem sau" navigateTo="Home" />
            </View>
          </View>

          <Divider color={colors.Xam3}  />

          <Text style={{
            fontSize: 18,
            marginLeft: 20,
            marginTop:20,
            color: colors.Xanh_dam,
            fontWeight: 'bold',
            }}>
            CÀI ĐẶT
          </Text>

          <View style = {{
            fontSize: 18,
            marginBottom: 10,
            marginTop: 10,
            marginLeft: 30
            }}> 
            <Tab icon="eye-outline" title="Chế độ đọc " navigateTo="Home" fontWeight='bold' />
            <Tab icon="notifications-circle-outline" title="Thông báo" navigateTo="Home" fontWeight='bold'/>
            <Tab icon="moon-outline" title="Chế độ nền tối" navigateTo="Home" fontWeight='bold'/>
            <Tab icon="person-circle-outline" title="Quản lý tài khoản " navigateTo="Home" fontWeight='bold'/>
            <Tab icon="log-out-outline" title="Đăng xuất tài khoản" navigateTo="Home" fontWeight='bold'/>
          </View>

          <Divider color={colors.Xam3}  />

          <Text style={{
            fontSize: 18,
            marginLeft: 20,
            marginTop:20,
            color: colors.Xanh_dam,
            fontWeight: 'bold',
            }}>
            SẢN PHẨM
          </Text>

          <View style = {{
            fontSize: 18,
            marginBottom: 10,
            marginTop: 10,
            marginLeft: 30
            }}> 
            <Tab title="Chế độ đọc " navigateTo="Home" fontWeight='bold' />
            <Tab title="Thông báo" navigateTo="Home" fontWeight='bold'/>
            <Tab title="Chế độ nền tối" navigateTo="Home" fontWeight='bold'/>
            <Tab title="Quản lý tài khoản " navigateTo="Home" fontWeight='bold'/>
            <Tab title="Đăng xuất tài khoản" navigateTo="Home" fontWeight='bold'/>
          </View>
          
          <Divider color={colors.Xam3}  />

          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
            <Text style={{
              fontSize: 18,
              marginLeft: 20,
              color: colors.Xanh_dam,
              fontWeight: 'bold',
              }}>
              THEO DÕI
            </Text>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              marginTop:20,
              marginLeft: 40,
              marginBottom: 20,
            }}>
              <Image  style={{
                height: 40,
                width: 40,
                borderRadius: 40,
                marginLeft: 20
                }}
                source={require('../assets/facebook.png')}
              />
              <Image  style={{
                height: 40,
                width: 40,
                borderRadius: 40,
                marginLeft: 20
                }}
                source={require('../assets/facebook.png')}
              />
              <Image  style={{
                height: 40,
                width: 40,
                borderRadius: 40,
                marginLeft: 20

                }}
                source={require('../assets/facebook.png')}
              />
            </View>
          </View>

          <Divider color={colors.Xam3}  />

          <View style={{
            marginTop:20,
            marginLeft: 20,
          }}>
            <Text>Báo điện tử New Daily</Text>
            <Text>Báo tiếng Việt đồng hành cùng bạn trong mọi bản tin</Text>
            <Text>Thuộc lớp Công nghệ lập trình đa nền tảng cho ứng dụng di động - IE307.O13.CNCL</Text>
            <Text>Địa chỉ: Khu phố 6, P.Linh Trung, Tp.Thủ Đức, Tp.Hồ Chí Minh</Text>
            <Text>Email: 20521383@gm.uit.edu.vn hoặc 20521357@gm.uit.edu.vn</Text>
            <Text>© 2023. Toàn bộ bản quyền thuộc về New Daily</Text>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

