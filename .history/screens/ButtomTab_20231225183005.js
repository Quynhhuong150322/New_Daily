import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from './Home'
import Trending from './Trending'
import Video from './Video'
import Profile from './Profile'

const Tab = createBottomTabNavigator();

export default function ButtomTab() {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Trang chủ") {
                iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Xu hướng") {
                iconName = focused ? "trending-up" : "trending-up-outline";
            } else if (route.name === "Video") {
                iconName = focused ? "video" : "video-outline";
            } else if (route.name === "Cá nhân") {
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
            <Tab.Screen 
                name="Trang chủ" 
                component={Home} 
                options={{
                    // title: 'NEWDAILY',
                    headerStyle: {
                    backgroundColor: '#0075FF',

                    },
                    headerTitleStyle: {
                    color: 'white',
                    fontSize: 16,
                    paddingTop: 100,
                    marginLeft: 0
                    },
                    headerShown: false,
                }}
            />
            <Tab.Screen name="Xu hướng" component={Trending} />
            <Tab.Screen name="Video" component={Video} />
            <Tab.Screen name="Cá nhân" component={Profile} />
        </Tab.Navigator>
    );
}
