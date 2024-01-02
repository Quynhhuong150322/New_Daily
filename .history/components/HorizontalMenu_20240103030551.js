import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet, ScrollView } from 'react-native';
import { Image, TouchableOpacity, ImageBackground } from 'react-native';
import colors from '../constants/colors';
import { useNavigation } from '@react-navigation/core';
import { Ionicons } from "@expo/vector-icons";

//Mục tất cả  
const fetchArticles3 = async () => {
    try {
        const url = `https://newsdata.io/api/1/news?country=vi&apikey=pub_35742a058061ecce52ed2c5120a118f59af8c`;
        const response = await fetch(url);
        const json = await response.json();
        return json.results || [];
    } catch (error) {
        console.error('Fetch error: ', error);
        return [];
    }
};
//Mục thế giới
const fetchArticles4 = async () => {
    try {
        const url = `https://newsdata.io/api/1/news?country=vi&apikey=pub_35742a058061ecce52ed2c5120a118f59af8c`;
        const response = await fetch(url);
        const json = await response.json();
        return json.results || [];
    } catch (error) {
        console.error('Fetch error: ', error);
        return [];
    }
};
//Mục thể thao
const fetchArticles5 = async () => {
    try {
        const url = `https://newsdata.io/api/1/news?country=vi&apikey=pub_35742a058061ecce52ed2c5120a118f59af8c`;
        const response = await fetch(url);
        const json = await response.json();
        return json.results || [];
    } catch (error) {
        console.error('Fetch error: ', error);
        return [];
    }
};
//Mục công nghệ
const fetchArticles6 = async () => {
    try {
        const url = `https://newsdata.io/api/1/news?country=vi&apikey=pub_35742a058061ecce52ed2c5120a118f59af8c`;
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
    const [isSaved, setIsSaved] = useState(false);

    // Hàm xử lý khi nút được click
    const handleSaveButtonClick = () => {
        // Đảo ngược trạng thái
        setIsSaved(!isSaved);
    };


    return (
        <TouchableOpacity onPress={() => navigateToArticleDetail(item)}>
            <View style={styles.card}>
                <Image source={{ uri: item.image_url || defaultImage }} style={styles.image} />
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                    <View style={styles.footer}>
                        <Text style={styles.author}>{item.creator || 'Unknown Author'}</Text>
                        <Text style={styles.date}>{new Date(item.pubDate).toLocaleDateString()}</Text>
                        <TouchableOpacity style={styles.saveButton} onPress={handleSaveButtonClick}>
                            <Ionicons name="bookmark" size={15} color={isSaved ? colors.Xanh_dam : 'gray'} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
});

const HorizontalMenu = ({ currentCategory }) => {
    const allCategories = ['Tất cả', 'Thế giới', 'Thể thao', 'Công nghệ', 'Khoa học', 'Kinh doanh', 'Giải trí', 'Sức khoẻ', 'Chính trị', 'Môi trường', 'Đồ ăn'];

    const [selectedCategory, setSelectedCategory] = useState(currentCategory);
    const [articles3, setArticles3] = useState([]);
    const [articles4, setArticles4] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);

    // Thêm hàm loadData để tải dữ liệu ban đầu
    const loadData = async (category) => {
        setDataLoaded(false);
        if (category === 'Thế giới') {
            const fetchedArticles = await fetchArticles4(); // Load 'Thế giới' category data
            setArticles4(fetchedArticles);
        } else {
            const fetchedArticles = await fetchArticles3(); // Load other categories
            setArticles3(fetchedArticles);
        }
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
            <FlatList
                data={selectedCategory === 'Thế giới' ? articles4 : articles3}
                keyExtractor={(item, index) => item.article_id || index.toString()}
                renderItem={({ item }) => <ArticleItem item={item} />}
                initialNumToRender={20}
                maxToRenderPerBatch={20}
                windowSize={21}
            />
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
        // marginBottom: 5
    },
    categoryText: {
        fontWeight: 'normal',
        color: 'black',
    },
    selectedCategoryButton: {
        backgroundColor: colors.Xanh_dam,
    },
    selectedCategoryText: {
        color: 'white',
    },
    container: {
        flex: 1,
        padding: 10,
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
        flexDirection: 'row', // Hiển thị theo chiều ngang
        alignItems: 'center', // Căn giữa dọc
        height: 150, // Độ cao 100px
    },
    image: {
        width: '25%', // Chiếm 1/3 chiều ngang
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
        fontSize: 9,
        color: '#666',
        marginBottom: 8,
        textAlign: 'justify',
        numberOfLines: 2, // Giới hạn số dòng hiển thị
        ellipsizeMode: 'tail', // Hiển thị '...' nếu quá dài
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
    },
    date: {
        fontSize: 10,
        color: '#666',
    },
    author: {
        fontSize: 10,
        color: '#666',
    },
    saveButton: {
        // position: 'absolute',
        right: 10,

    },
});


export default HorizontalMenu;
