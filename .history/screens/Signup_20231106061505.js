import { View, Text, Image, Pressable, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/core'
import { SafeAreaView } from "react-native-safe-area-context";
import colors from '../constants/colors';
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox"
import Button from '../components/Button';
import {auth} from '../firebase'

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isPasswordShown2, setIsPasswordShown2] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const navigation = useNavigation()

    // useEffect(() => {
    // const unsubscribe = auth.onAuthStateChanged(user => {
    //     if (user) {
    //         navigation.replace("Login")
    //     }
    // })

    // return unsubscribe 
    // }, [])

    const handleSignUp = () => {
    auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            
            // Lưu thông tin tên của người dùng vào Firebase Database hoặc Firestore
            const displayName = name; // Lấy tên từ biến name

            // Đặt tên cho người dùng
            user.updateProfile({
                displayName: displayName
            })
            .then(() => {
                console.log('Registered with:', user.email);
                console.log('User display name:', user.displayName);
                navigation.navigate('Login');
            })
            .catch(error => alert(error.message));
        })
        .catch(error => alert(error.message));
    }



    
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.Trang }}>
            <View style={{ flex: 1, marginHorizontal: 22 }}>
                <View style={{ marginVertical: 22 }}>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        marginVertical: 12,
                        color: colors.Den
                    }}>
                        Tạo tài khoản
                    </Text>

                    <Text style={{
                        fontSize: 16,
                        color: colors.Den
                    }}>Tạo tài khoản để đọc báo mới ngay hôm nay!</Text>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Nhập Họ và tên</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: colors.Den,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Nhập họ và tên của bạn'
                            placeholderTextColor={colors.Xam2}
                            keyboardType='default'
                            value={name}
                            onChangeText={text => setName(text)}
                            style={{
                                width: "100%"
                            }}
                        />
                    </View>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Nhập Email của bạn</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: colors.Den,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Nhập địa chỉ email của bạn'
                            placeholderTextColor={colors.Xam2}
                            keyboardType='email-address'
                            value={email}
                            onChangeText={text => setEmail(text)}
                            style={{
                                width: "100%"
                            }}
                        />
                    </View>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Mật khẩu</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: colors.Den,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Nhập mật khẩu của bạn'
                            placeholderTextColor={colors.Xam2}
                            secureTextEntry={isPasswordShown}
                            value={password}
                            onChangeText={text => setPassword(text)}
                            style={{
                                width: "100%"
                            }}
                        />

                        <TouchableOpacity
                            onPress={() => setIsPasswordShown(!isPasswordShown)}
                            style={{
                                position: "absolute",
                                right: 12
                            }}
                        >
                            {
                                isPasswordShown == true ? (
                                    <Ionicons name="eye-off" size={24} color={colors.Den} />
                                ) : (
                                    <Ionicons name="eye" size={24} color={colors.Den} />
                                )
                            }

                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Xác nhận mật khẩu</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: colors.Den,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Nhập lại mật khẩu của bạn'
                            placeholderTextColor={colors.Xam2}
                            secureTextEntry={isPasswordShown2}
                            value={confirmPassword}
                            onChangeText={text => setConfirmPassword(text)}
                            style={{
                                width: "100%"
                            }}
                        />

                        <TouchableOpacity
                            onPress={() => setIsPasswordShown2(!isPasswordShown2)}
                            style={{
                                position: "absolute",
                                right: 12
                            }}
                        >
                            {
                                isPasswordShown2 == true ? (
                                    <Ionicons name="eye-off" size={24} color={colors.Den} />
                                ) : (
                                    <Ionicons name="eye" size={24} color={colors.Den} />
                                )
                            }

                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{
                    flexDirection: 'row',
                    marginVertical: 6
                }}>
                    <Checkbox
                        style={{ marginRight: 8 }}
                        value={isChecked}
                        onValueChange={setIsChecked}
                        color={isChecked ? colors.Xanh_dam : undefined}
                    />

                    <Text>Tôi đồng ý với các </Text>
                    <Text style={{ 
                        color: colors.Xanh_dam ,
                        fontWeight: "bold",
                    }}>Điều khoản</Text>
                    <Text> và </Text>
                    <Text style={{ 
                        color: colors.Xanh_dam ,
                        fontWeight: "bold",
                    }}>điều kiện</Text>
                </View>

                <Button
                    title={
                        <Text style={{ 
                                color: colors.Trang, fontSize: 25,
                                fontFamily: 'Helvetica-Bold',
                                }}>Đăng ký
                        </Text>
                    }
                    filled
                    style={{
                        marginTop: 18,
                        marginBottom: 4,
                        backgroundColor: colors.Xanh_dam,
                    }}
                    onPress={handleSignUp}
                />

                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
                    <View
                        style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: colors.Xam1,
                            marginHorizontal: 10
                        }}
                    />
                    <Text style={{ fontSize: 14 }}>Hoặc</Text>
                    <View
                        style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: colors.Xam1,
                            marginHorizontal: 10
                        }}
                    />
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                    <TouchableOpacity
                        onPress={() => console.log("Pressed")}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            height: 52,
                            borderWidth: 1,
                            borderColor: colors.Xam2,
                            marginRight: 4,
                            borderRadius: 10
                        }}
                    >
                        <Image
                            source={require("../assets/facebook.png")}
                            style={{
                                height: 36,
                                width: 36,
                                marginRight: 8
                            }}
                            resizeMode='contain'
                        />

                        <Text>Facebook</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => console.log("Pressed")}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            height: 52,
                            borderWidth: 1,
                            borderColor: colors.Xam2,
                            marginRight: 4,
                            borderRadius: 10
                        }}
                    >
                        <Image
                            source={require("../assets/google.png")}
                            style={{
                                height: 36,
                                width: 36,
                                marginRight: 8
                            }}
                            resizeMode='contain'
                        />

                        <Text>Google</Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginVertical: 22
                }}>
                    <Text style={{ fontSize: 16, color: colors.Xanh_dam }}>Bạn đã có tài khoản?</Text>
                    <Pressable
                        onPress={() => navigation.navigate("Login")}
                    >
                        <Text style={{
                            fontSize: 16,
                            color: colors.Xanh_dam,
                            fontWeight: "bold",
                            marginLeft: 6
                        }}>Đăng nhập</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Signup