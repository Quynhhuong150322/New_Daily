import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet, ScrollView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, TouchableOpacity, ImageBackground } from 'react-native';
import colors from '../constants/colors';
import { useNavigation } from '@react-navigation/core';

// Thêm import cho ArticleItem
// import ArticleItem from './ArticleItem';

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

const ArticleItem = React.memo(({ item }) => {
    const navigation = useNavigation();
    const defaultImage = 'https://nhadaututhanhcong.com/wp-content/uploads/2022/04/news-3.jpg';

    const navigateToArticleDetail = (article) => {
        navigation.navigate('Posts', { article });
    };

    return (
        <TouchableOpacity onPress={() => navigateToArticleDetail(item)}>
            <View style={styles.card}>
                <Image source={{ uri: item.image_url || defaultImage }} style={styles.image} />
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                    <View style={styles.footer}>
                        <Text style={styles.date}>{new Date(item.pubDate).toLocaleDateString()}</Text>
                        <Text style={styles.author}>{item.creator || 'Unknown Author'}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
});

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
    container: {
        flex: 1,
        padding: 10,
        // backgroundColor: '#f0f0f0', 
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: 16,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        marginTop: 5,
        flexDirection: 'row', // Hiển thị theo chiều ngang
        alignItems: 'center', // Căn giữa dọc
        height: 150, // Độ cao 100px
    },
    image: {
        width: '33%', // Chiếm 1/3 chiều ngang
        height: '100%', // Độ cao 100% của card
    },
    contentContainer: {
        padding: 16,
        flex: 1, // Để nội dung linh hoạt theo chiều ngang
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 8,
        textAlign: 'justify'
    },
    description: {
        fontSize: 14,
        color: '#666',
        marginBottom: 8,
        textAlign: 'justify'
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8,
    },
    date: {
        fontSize: 12,
        color: '#666',
    },
    author: {
        fontSize: 12,
        color: '#666',
    },
});


export default HorizontalMenu;
