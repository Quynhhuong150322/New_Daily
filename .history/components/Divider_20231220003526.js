import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const Divider = ({ color = colors.Xam1, length = '100%' }) => {
    return (
        <View
        style={{
            ...styles.divider,
            backgroundColor: color,
            width: length
        }}
        />
    );
};

const styles = StyleSheet.create({
    divider: {
    height: 1,
    marginHorizontal: 10
    }
});

export default Divider;
