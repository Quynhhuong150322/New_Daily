import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Image, TouchableOpacity, ViewBase } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';

const HomeStack = createStackNavigator();

function LogoTitle() {
    return (
        <Image
            style={{ width: 138, height: 30, marginLeft:20, marginTop:0}}
            source={require('../assets/Logo.png')}
        />
    );
}

const Home = () => {
  const navigation = useNavigation();
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen 
                name="HomeScreen" 
                component={HomeScreen} 
                options={{
                    headerLeft: props => <LogoTitle {...props} />,
                    headerTitle: '',
                    headerRight: () => (
                        <View style={{ flexDirection: 'row', marginRight: 30 }}>
                            <TouchableOpacity onPress={() => {/* handle search press */}}>
                              <View style={{
                                backgroundColor: '#0075FF', 
                                borderRadius: 20, 
                                height: 40, 
                                width: 40, 
                                justifyContent: 'center', 
                                alignItems: 'center', 
                                borderColor: 'white', 
                                borderWidth: 1, 
                              }}>
                                <Ionicons name="notifications" size={25} color="white" />
                              </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {Search}} style={{ marginLeft: 30 }}>
                              <View style={{
                                  backgroundColor: '#0075FF', 
                                  borderRadius: 20, 
                                  height: 40, 
                                  width: 40, 
                                  justifyContent: 'center', 
                                  alignItems: 'center', 
                                  borderColor: 'white', 
                                  borderWidth: 1, 
                              }}>
                                  <Ionicons name="search" size={25} color="white" />
                              </View>
                            </TouchableOpacity>
                        </View>
                    ),
                    headerStyle: {
                      height: 110,
                      backgroundColor: '#0075FF',
                    },
                }}
            />
        </HomeStack.Navigator>
    );
}

function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}


export default Home;
