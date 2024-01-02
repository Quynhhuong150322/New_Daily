import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const HorizontalMenu = ({ currentCategory, onCategoryChange }) => {
    const allCategories = ['Tất cả', 'Thế giới', 'Thể thao', 'Công nghệ', 'Khoa học', 'Kinh doanh', 'Giải trí', 'Sức khoẻ', 'Chính trị', 'Môi trường', 'Đồ ăn'];

    useEffect(() => {
        setSelectedCategory(currentCategory);
    }, [currentCategory]);

    const [selectedCategory, setSelectedCategory] = useState(currentCategory);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        if (category === 'Thế giới') {
            // Nếu chọn 'Thế giới', thay đổi API tương ứng
            onCategoryChange('https://newsdata.io/api/1/news?country=vi&category=world&apikey=pub_35731380e0a51b24cc5e9e0c6dc8e7d1b73b8');
        } else {
            // Nếu chọn các danh mục khác, có thể thay đổi API tương ứng cho từng danh mục ở đây
            onCategoryChange('API_TUONG_UNG_CHO_DANH_MUC_KHAC');
        }
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
        borderRadius: 20,
        backgroundColor: 'transparent',
        marginRight: 10,
        marginBottom: 5,
        borderColor: 'black',
        borderWidth: 0.5,
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
