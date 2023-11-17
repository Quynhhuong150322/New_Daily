import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{
            tabBarActiveTintColor: '#e91e63',
        }}
        >
        <Tab.Screen
            name="Feed"
            component={Feed}
            options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
            }}
        />
        <Tab.Screen
            name="Notifications"
            component={Notifications}
            options={{
            tabBarLabel: 'Updates',
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="bell" color={color} size={size} />
            ),
            }}
        />
        <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
            }}
        />
        </Tab.Navigator>
    );
}

// const BottomTab = () => {
//     return (
//         <View>
//             <Text>BottomTab</Text>
//         </View>
//     )
// }

export default BottomTab

const styles = StyleSheet.create({})