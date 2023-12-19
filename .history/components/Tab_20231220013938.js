import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import colors from '../constants/colors';

const Tab = ({ icon, title, navigateTo, fontSize = 16, fontWeight = 'normal', marginLeft = 10 }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(navigateTo)}>
        <Ionicons name={icon} size={24} color="#0075FF" />
        <Text style={{ ...styles.text, fontSize: fontSize, fontWeight, marginLeft: marginLeft }}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.Xam3,
        padding: 10,
        borderRadius: 5
    },
    text: {
        // marginLeft: 10,
        color: colors.Den,
        // fontSize: 16
    }
});

export default Tab;
