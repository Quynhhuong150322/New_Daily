import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Tab = ({ icon, title, navigateTo }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(navigateTo)}>
        <Ionicons name={icon} size={24} color="white" />
        <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '',
        padding: 10,
        borderRadius: 5
    },
    text: {
        marginLeft: 10,
        color: 'white',
        fontSize: 16
    }
});

export default Tab;
