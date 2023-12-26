import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View,StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {Image, TouchableOpacity, ImageBackground } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';

const fetchArticles = async () => {
    try {
        const url = `https://newsdata.io/api/1/news?country=vi&category=top&apikey=pub_351086bdb63ba4aab496e50c54bfc0e5c78ac`;
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
    const navigateToArticleDetail = (article) => {
        navigation.navigate('Posts', { article });
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
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
});

const ArticleDetailScreen = ({ route }) => {
    const { article } = route.params;
    const defaultImage = 'https://nhadaututhanhcong.com/wp-content/uploads/2022/04/news-3.jpg';

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
        <ScrollView>
            <Image source={{ uri: article.urlToImage || defaultImage  }} style={{ width: '100%', height: 200 }} />
            <View style={{margin: 16}}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 10,  }}>{article.title}</Text>
                <Text style={{}}>{article.content}</Text>
            </View>
            <FlatList
                data={articles}
                keyExtractor={(item, index) => item.article_id || index.toString()}
                renderItem={({ item }) => <ArticleItem item={item} />}
                initialNumToRender={10}
                maxToRenderPerBatch={20}
                windowSize={21}
            />
        </ScrollView>
    );
};

export default ArticleDetailScreen;
