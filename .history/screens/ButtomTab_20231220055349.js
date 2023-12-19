// import * as React from "react";
// import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Ionicons from "react-native-vector-icons/Ionicons";
// import Home from './Home'
// import Trending from './Trending'
// import Save from './Save'
// import Profile from './Profile'

// const Tab = createBottomTabNavigator();

// export default function ButtomTab() {
//     return (
//         <Tab.Navigator
//         screenOptions={({ route }) => ({
//             tabBarIcon: ({ focused, color, size }) => {
//             let iconName;

//             if (route.name === "Trang chủ") {
//                 iconName = focused ? "home" : "home-outline";
//             } else if (route.name === "Xu hướng") {
//                 iconName = focused ? "trending-up" : "trending-up-outline";
//             } else if (route.name === "Lưu") {
//                 iconName = focused ? "save" : "save-outline";
//             } else if (route.name === "Cá nhân") {
//                 iconName = focused ? "person" : "person-outline";
//             }

//             return <Ionicons name={iconName} size={size} color={color} style={{ marginTop: 5 }}/>;
//             },
//         })}
//         tabBarOptions={{
//             activeTintColor: "blue",
//             inactiveTintColor: "gray",
//             labelStyle: {
//                 fontSize: 12, 
//                 fontFamily: 'OpenSans-Regular',
//             },
//         }}
//         >
//         <Tab.Screen name="Trang chủ" component={Home} 
//             options={{
//                 title: 'Social Media Feed',
//                 <Image  style={{
//                     height: 80,
//                     width: 80,
//                     borderRadius: 40,
//                     marginLeft: 10
//                     }}
//                     source={require('../assets/avt.png')}
//                 />
//                 headerStyle: {
//                 backgroundColor: '#0075FF',
//                 },
//                 headerTitleStyle: {
//                 color: 'white',
//                 fontSize: 16,
//                 paddingTop: 0,
//                 },
//                 headerTitleAlign: 'center',
//             }}/>
//         <Tab.Screen name="Xu hướng" component={Trending} />
//         <Tab.Screen name="Lưu" component={Save} />
//         <Tab.Screen name="Cá nhân" component={Profile} />
//         </Tab.Navigator>
//     );
// }

import * as React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from './Home';
import Trending from './Trending';
import Save from './Save';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

function LogoTitle() {
  // Replace the source with your actual logo
    return (
        <Image
        style={{ width: 128, height: 20 }}
        source={require('../assets/logo.png')}
        />
    );
}

function SearchButton({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
        <Ionicons name="search" size={25} color="blue" />
        </TouchableOpacity>
    );
}

function NotificationButton({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
        <Ionicons name="notifications" size={25} color="blue" />
        </TouchableOpacity>
    );
}

function HomeScreenWithCustomHeader() {
    return (
        <Home
        options={{
            headerTitle: props => <LogoTitle {...props} />,
            headerRight: () => (
            <View style={styles.headerIcons}>
                <SearchButton onPress={() => {/* handle search press */}} />
                <NotificationButton onPress={() => {/* handle notification press */}} />
            </View>
            ),
            // Add additional styles as required
            headerStyle: { backgroundColor: '#FFF' },
            headerTitleStyle: { color: '#000' },
        }}
        />
    );
}

const styles = StyleSheet.create({
    headerIcons: {
        flexDirection: 'row',
        marginRight: 10,
        // Add padding or margin as required
    },
});

export default function BottomTab() {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Trang chủ") {
                iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Xu hướng") {
                iconName = focused ? "trending-up" : "trending-up-outline";
            } else if (route.name === "Lưu") {
                iconName = focused ? "save" : "save-outline";
            } else if (route.name === "Cá nhân") {
                iconName = focused ? "person" : "person-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}
        tabBarOptions={{
            activeTintColor: "blue",
            inactiveTintColor: "gray",
            labelStyle: {
            fontSize: 12,
            },
        }}
        >
        <Tab.Screen name="Trang chủ" component={HomeScreenWithCustomHeader} />
        <Tab.Screen name="Xu hướng" component={Trending} />
        <Tab.Screen name="Lưu" component={Save} />
        <Tab.Screen name="Cá nhân" component={Profile} />
        </Tab.Navigator>
    );
}
