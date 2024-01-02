import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const HorizontalMenu = ({ currentCategory, onCategoryChange }) => {
    const allCategories = ['Tất cả', 'Thế giới', 'Thể thao', 'Công nghệ', 'Khoa học', 'Thể loại 6', 'Thể loại 7', 'Thể loại 8', 'Thể loại 9', 'Thể loại 10'];
    const [selectedCategory, setSelectedCategory] = useState(currentCategory);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        onCategoryChange(category);
    };

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {allCategories.map((category, index) => (
                <TouchableOpacity key={index} onPress={() => handleCategoryChange(category)}>
                    <View style={[styles.categoryButton, selectedCategory === category && styles.selectedCategoryButton]}>
                        <Text style={[styles.categoryText, selectedCategory === category && styles.selectedCategoryText]}>{category}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    categoryButton: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        backgroundColor: 'transparent',
        marginRight: 5,
    },
    categoryText: {
        fontWeight: 'normal',
        color: 'black',
    },
    selectedCategoryButton: {
        backgroundColor: colors.Xanh_dam, // Màu xanh khi được chọn
    },
    selectedCategoryText: {
        color: 'white', // Màu trắng cho chữ khi được chọn
    },
});

export default HorizontalMenu;
