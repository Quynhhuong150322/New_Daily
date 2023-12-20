import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeStack = createStackNavigator();

function LogoTitle() {
    return (
        <Image
            style={{ width: 128, height: 20, marginLeft:20, marginTop:0}}
            source={require('../assets/Logo.png')}
        />
    );
}

function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}

const Home = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen 
                name="HomeScreen" 
                component={HomeScreen} 
                options={{
                    headerLeft: props => <LogoTitle {...props} />,
                    headerTitle: '',
                    headerRight: () => (
                        <View style={{ flexDirection: 'row', marginRight: 50 }}>
                            <TouchableOpacity onPress={() => {/* handle search press */}}>
                                <Ionicons name="search" size={25} color="blue" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {/* handle notification press */}} style={{ marginLeft: 10 }}>
                                <Ionicons name="notifications" size={25} color="blue" />
                            </TouchableOpacity>
                        </View>
                    ),
                    headerStyle: {
                        backgroundColor: '#0075FF',
                    },
                }}
            />
        </HomeStack.Navigator>
    );
}

export default Home;
