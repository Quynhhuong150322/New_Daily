import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet, ScrollView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { BookmarkSquareIcon } from "react-native-heroicons/solid";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Alert } from 'react-native';



import colors from '../constants/colors';

const fetchArticles = async () => {
    try {
        const url = `https://newsdata.io/api/1/news?country=vi&category=top&apikey=pub_35753955e811433ff394ac5b383366f11207f`;
        const response = await fetch(url);
        const json = await response.json();

        // Lọc bài viết không có hình, không có tác giả và không có nội dung
        // const filteredArticles = json.results.filter((item) => {
        // return item.image_url && item.creator && item.content;
        // });
        // return filteredArticles || [];
        return json.results || [];
    } catch (error) {
        console.error('Fetch error: ', error);
        return [];
    }
};
const ArticleItem = React.memo(({ item }) => {
    const navigation = useNavigation();
    // const defaultImage = 'https://nhadaututhanhcong.com/wp-content/uploads/2022/04/news-3.jpg';
    const navigateToArticleDetail = (article) => {
        navigation.navigate('Posts', { article });
    };
    const [isBookmarked, toggleBookmark] = useState(false);
    const toggleBookmarkAndSave = async () => {
        try {
            // Check if News Article is already in Storage
            const savedArticles = await AsyncStorage.getItem("savedArticles");
            let savedArticlesArray = savedArticles ? JSON.parse(savedArticles) : [];
            console.log("Check if the article is already bookmarked");

            // Check if the article is already in the bookmarked list
            const isArticleBookmarked = savedArticlesArray.some(
                (savedArticle) => savedArticle.url === item.url
            );

            console.log("Check if the article is already in the bookmarked list");

            if (!isArticleBookmarked) {
                // If the article is not bookmarked, add it to the bookmarked list
                savedArticlesArray.push(item);
                await AsyncStorage.setItem(
                    "savedArticles",
                    JSON.stringify(savedArticlesArray)
                );
                toggleBookmark(true);
                Alert.alert("Đã lưu bài viết!");
            } else {
                // If the article is already bookmarked, remove it from the list
                const updatedSavedArticlesArray = savedArticlesArray.filter(
                    (savedArticle) => savedArticle.url !== item.url
                );
                await AsyncStorage.setItem(
                    "savedArticles",
                    JSON.stringify(updatedSavedArticlesArray)
                );
                toggleBookmark(false);
                Alert.alert("Đã bỏ lưu!");
            }
        } catch (error) {
            console.log("Error Saving Article", error);
        }
    };
    return (
        <TouchableOpacity onPress={() => navigateToArticleDetail(item)}>
            <View style={styles.card}>
                <Image source={{ uri: item.image_url }} style={styles.image} />
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                    <View style={styles.footer}>
                        <Text style={styles.date}>{new Date(item.pubDate).toLocaleDateString()}</Text>
                        <Text style={styles.author}>{item.creator || 'Unknown Author'}</Text>
                        <TouchableOpacity style={styles.saveButton1} onPress={toggleBookmarkAndSave}>
                            <Ionicons name="bookmark" size={15} color={isBookmarked ? colors.Xanh_dam : 'gray'} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
});
export default function Home() {
    const [articles, setArticles] = useState([]);
    const [isLoading, setLoading] = useState(true);
    // const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const loadArticles = async () => {
            const fetchedArticles = await fetchArticles()
            setArticles(fetchedArticles)
            setLoading(false);
        };
        loadArticles();
    }, []);
    if (isLoading) {
        return (
            <View>
                <ActivityIndicator />
            </View>
        )
    };
    return (
        <View style={styles.container}>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
                marginBottom: 10
            }}>
                <View style={{
                    height: 30,
                    width: 5,
                    backgroundColor: colors.Xanh_dam,
                }} />
                <Text style={{
                    fontSize: 18,
                    marginLeft: 5,
                    color: colors.Xanh_dam,
                    fontWeight: 'bold',
                }}>Xu hướng</Text>
            </View>

            <FlatList
                data={articles}
                keyExtractor={(item, index) => item.article_id || index.toString()}
                renderItem={({ item }) => <ArticleItem item={item} />}
                initialNumToRender={10}
                maxToRenderPerBatch={20}
                windowSize={21}
            />
        </View>
    );
}
const styles = StyleSheet.create({
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
    },
    image: {
        width: '100%',
        height: 200,
    },
    contentContainer: {
        padding: 16,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    description: {
        fontSize: 14,
        color: '#666',
        marginBottom: 8,
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
