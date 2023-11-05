import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import colors from '../constants/colors';
import Button from '../components/Button';

const Welcome = ({ navigation }) => {

    return (
        <LinearGradient
            style={{
                flex: 1
            }}
            colors={[colors.Xanh_nhat, colors.Xanh_nhat]}
        >
            <View style={{ flex: 1 }}>
                <View>
                    <Image
                        source={require("../assets/Loading.png")}
                        style={{
                            height: 500,
                            width: 500,
                            position: "absolute",
                            top: 5,
                            right: -50,
                        }}
                    />

                    {/* <Image
                        source={require("../assets/Logo-4.png")}
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 20,
                            position: "absolute",
                            top: -30,
                            left: 100,
                            transform: [
                                { translateX: 50 },
                                { translateY: 50 },
                                { rotate: "-5deg" }
                            ]
                        }}
                    /> */}
                </View>

                {/* content  */}

                <View style={{
                    paddingHorizontal: 22,
                    position: "absolute",
                    top: 400,
                    width: "100%"
                }}>
                    <Text style={{
                        fontSize: 25,
                        fontWeight: 1000,
                        color: colors.Xam1,
                        top: 30,
                        fontFamily: 'OpenSans-Regular',
                    }}>Đọc báo chỉ với một ứng dụng</Text>
                    <Text style={{
                        fontSize: 40,
                        fontWeight: 800,
                        color: colors.Den,
                        fontFamily: 'Helvetica-Bold',
                        top: 30,
                    }}>New Daily</Text>

                    <View style={{ marginVertical: 22 }}>
                        <Text style={{
                            fontSize: 16,
                            color: colors.Xam1,
                            marginVertical: 4,
                            top: 20,
                            fontFamily: 'OpenSans-Regular',
                        }}>Đọc tin tức mới nhất một cách mượt mà và nhanh chóng vào thời gian rảnh</Text>
                        
                    </View>

                    <Button
                        title= {
                            <Text style={{ 
                                color: colors.Trang, fontSize: 18,
                                fontFamily: 'Helvetica-Bold',
                                }}>Đọc ngay
                            </Text>
                        }
                        onPress={() => navigation.navigate("Signup")}
                        style={{
                            marginTop: 22,
                            width: "100%",
                            backgroundColor: colors.Xanh_dam,
                            top: 30,
                        }}
                    />

                    <View style={{
                        flexDirection: "row",
                        marginTop: 12,
                        justifyContent: "center"
                    }}>
                        <Text style={{
                            fontSize: 16,
                            color: colors.Den
                        }}>Already have an account?</Text>
                        <Pressable
                            onPress={() => navigation.navigate("Login")}
                        >
                            <Text style={{
                                fontSize: 16,
                                color: colors.Xanh_dam,
                                fontWeight: "bold",
                                marginLeft: 4
                            }}>Login</Text>
                        </Pressable>

                    </View>
                </View>
            </View>
        </LinearGradient>
    )
}

export default Welcome