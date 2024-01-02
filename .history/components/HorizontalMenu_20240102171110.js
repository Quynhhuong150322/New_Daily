import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const HorizontalMenu = ({ currentCategory, onCategoryChange }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <TouchableOpacity onPress={() => onCategoryChange('all')}>
                <Text style={{ fontWeight: currentCategory === 'all' ? 'bold' : 'normal' }}>Tất cả</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onCategoryChange('world')}>
                <Text style={{ fontWeight: currentCategory === 'world' ? 'bold' : 'normal' }}>Thế giới</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onCategoryChange('sports')}>
                <Text style={{ fontWeight: currentCategory === 'sports' ? 'bold' : 'normal' }}>Thể thao</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onCategoryChange('technology')}>
                <Text style={{ fontWeight: currentCategory === 'technology' ? 'bold' : 'normal' }}>Công nghệ</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onCategoryChange('technology')}>
                <Text style={{ fontWeight: currentCategory === 'technology' ? 'bold' : 'normal' }}>Công nghệ</Text>
            </TouchableOpacity>
        </View>
    );
};

export default HorizontalMenu;
