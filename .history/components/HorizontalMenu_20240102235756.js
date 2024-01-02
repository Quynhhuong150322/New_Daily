import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, FlatList } from 'react-native';
import colors from '../constants/colors';

// Thêm import cho ArticleItem
import ArticleItem from './ArticleItem';

const fetchArticles3 = async () => {
    try {
        const url = `https://newsdata.io/api/1/news?country=vi&category=top&apikey=pub_35731380e0a51b24cc5e9e0c6dc8e7d1b73b8`;
        const response = await fetch(url);
        const json = await response.json();
        return json.results || [];
    } catch (error) {
        console.error('Fetch error: ', error);
        return [];
    }
};

const HorizontalMenu = ({ currentCategory }) => {
    const allCategories = ['Tất cả', 'Thế giới', 'Thể thao', 'Công nghệ', 'Khoa học', 'Kinh doanh', 'Giải trí', 'Sức khoẻ', 'Chính trị', 'Môi trường', 'Đồ ăn'];

    useEffect(() => {
        setSelectedCategory(currentCategory);
    }, [currentCategory]);

    const [selectedCategory, setSelectedCategory] = useState(currentCategory);
    const [articles3, setArticles3] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);

    // Thêm hàm loadData để tải dữ liệu ban đầu
    const loadData = async (category) => {
        setDataLoaded(false);
        const fetchedArticles3 = await fetchArticles3();
        setArticles3(fetchedArticles3);
        setDataLoaded(true);
    };

    useEffect(() => {
        loadData(selectedCategory);
    }, [selectedCategory]);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

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
                    data={articles3}
                    keyExtractor={(item, index) => item.article_id || index.toString()}
                    renderItem={({ item }) => <ArticleItem item={item} />}
                    initialNumToRender={20}
                    maxToRenderPerBatch={20}
                    windowSize={21}
                />
            ) : (
                <Text>Loading...</Text>
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
