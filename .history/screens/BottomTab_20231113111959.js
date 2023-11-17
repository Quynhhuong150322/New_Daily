import { StyleSheet, Text, View } from 'react-native'
import * as React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import Home from './Home'
import Trending from './Trending'
import Save from './Save'
import Profile from './Profile'

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Trending" component={Trending} />
            <Tab.Screen name="Save" component={Save} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}

export default MyTabs