import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import colors from '../constants/colors';
import { data } from '../constants/data'; // Import hàm data

const HorizontalMenu = ({ currentCategory }) => {
    const allCategories = ['Tất cả', 'Thế giới', 'Thể thao', 'Công nghệ', 'Khoa học', 'Kinh doanh', 'Giải trí', 'Sức khoẻ', 'Chính trị', 'Môi trường', 'Đồ ăn'];

    useEffect(() => {
        setSelectedCategory(currentCategory);
    }, [currentCategory]);


    return (
        <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {allCategories.map((category, index) => (
                    <TouchableOpacity key={index} onPress={() => handleCategoryChange(category)}>
                        <View style={[styles.categoryButton, selectedCategory === category && styles.selectedCategoryButton]}>
                            <Text style={[styles.categoryText, selectedCategory === category && styles.selectedCategoryText]}>{category}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            {dataLoaded ? (
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <Text>{item.title}</Text>
                    )}
                />
            ) : (
                <ActivityIndicator size="large" color={colors.Xanh_dam} />
            )}
        </View>
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
