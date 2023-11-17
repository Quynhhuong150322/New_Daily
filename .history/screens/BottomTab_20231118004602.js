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
            } else if (route.name === "Favorites") {
                iconName = focused ? "heart" : "heart-outline";
            } else if (route.name === "Category") {
                iconName = focused ? "save" : "save-outline";
            } else if (route.name === "Profile") {
                iconName = focused ? "person" : "person-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}
        // tabBarOptions={{
        //     activeTintColor: "blue",
        //     inactiveTintColor: "gray",
        // }}
        >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Trending" component={Trending} />
        <Tab.Screen name="Save" component={Save} />
        <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}
