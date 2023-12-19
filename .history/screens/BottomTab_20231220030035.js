import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from './Home'
import Trending from './Trending'
import Save from './Save'
import Profile from './Profile'

const Tab = createBottomTabNavigator();

export default function MyTabs() {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Trending") {
                iconName = focused ? "trending-up" : "trending-up-outline";
            } else if (route.name === "Save") {
                iconName = focused ? "save" : "save-outline";
            } else if (route.name === "Profile") {
                iconName = focused ? "person" : "person-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} style={{ marginTop: 5 }}/>;
            },
        })}
        tabBarOptions={{
            activeTintColor: "blue",
            inactiveTintColor: "gray",
            labelStyle: {
                fontSize: 12, 
                fontFamily: 'OpenSans-Regular',
            },
        }}
        >
        <Tab.Screen name="Trang chủ" component={Home} />
        <Tab.Screen name="Xu hướng" component={Trending} />
        <Tab.Screen name="Lưu" component={Save} />
        <Tab.Screen name="Trang cá nhân" component={Profile} />
        </Tab.Navigator>
    );
}
