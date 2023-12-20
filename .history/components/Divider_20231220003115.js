import React from 'react';
import { View } from 'react-native';
import colors from '../constants/colors'; 

const Divider = () => {
    return (
        <View style={{
            flex: 1,
            height: 1,
            backgroundColor: colors.Xam1,
            marginHorizontal: 10
            }}
        />
    );
};

export default Divider;
