import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HorizontalMenu = ({ currentCategory, onCategoryChange }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => onCategoryChange('all')} style={[styles.categoryButton, currentCategory === 'all' && styles.selectedCategory]}>
                <Text style={[styles.categoryText, currentCategory === 'all' && styles.selectedText]}>Tất cả</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onCategoryChange('world')} style={[styles.categoryButton, currentCategory === 'world' && styles.selectedCategory]}>
                <Text style={[styles.categoryText, currentCategory === 'world' && styles.selectedText]}>Thế giới</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onCategoryChange('sports')} style={[styles.categoryButton, currentCategory === 'sports' && styles.selectedCategory]}>
                <Text style={[styles.categoryText, currentCategory === 'sports' && styles.selectedText]}>Thể thao</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onCategoryChange('technology')} style={[styles.categoryButton, currentCategory === 'technology' && styles.selectedCategory]}>
                <Text style={[styles.categoryText, currentCategory === 'technology' && styles.selectedText]}>Công nghệ</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onCategoryChange('science')} style={[styles.categoryButton, currentCategory === 'science' && styles.selectedCategory]}>
                <Text style={[styles.categoryText, currentCategory === 'science' && styles.selectedText]}>Khoa học</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 5,
        paddingHorizontal: 5,
    },
    categoryButton: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        backgroundColor: 'transparent',
    },
    selectedCategory: {
        backgroundColor: '#0075FF',
    },
    categoryText: {
        fontWeight: 'normal',
        color: 'black',
    },
    selectedText: {
        color: 'white',
    },
});

export default HorizontalMenu;
