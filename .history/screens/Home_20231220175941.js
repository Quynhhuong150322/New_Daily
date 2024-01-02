import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View,StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {Image, TouchableOpacity, ViewBase } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';
import Carousel from 'react-native-snap-carousel';

const HomeStack = createStackNavigator();

function LogoTitle() {
    return (
        <Image
            style={{ width: 138, height: 30, marginLeft:20, marginTop:0}}
            source={require('../assets/Logo.png')}
        />
    );
}

const Home = () => {
  const navigation = useNavigation();
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen 
                name="HomeScreen" 
                component={HomeScreen} 
                options={{
                    headerLeft: props => <LogoTitle {...props} />,
                    headerTitle: '',
                    headerRight: () => (
                        <View style={{ flexDirection: 'row', marginRight: 30 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                                <View style={{
                                    backgroundColor: '#0075FF', 
                                    borderRadius: 20, 
                                    height: 40, 
                                    width: 40, 
                                    justifyContent: 'center', 
                                    alignItems: 'center', 
                                    borderColor: 'white', 
                                    borderWidth: 1, 
                                    }}>
                                    <Ionicons name="notifications" size={25} color="white" />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Search')} style={{ marginLeft: 30 }}>
                                <View style={{
                                    backgroundColor: '#0075FF', 
                                    borderRadius: 20, 
                                    height: 40, 
                                    width: 40, 
                                    justifyContent: 'center', 
                                    alignItems: 'center', 
                                    borderColor: 'white', 
                                    borderWidth: 1, 
                                }}>
                                    <Ionicons name="search" size={25} color="white" />
                                </View>
                            </TouchableOpacity>
                        </View>
                    ),
                    headerStyle: {
                        height: 110,
                        backgroundColor: '#0075FF',
                    },
                }}
            />
        </HomeStack.Navigator>
    );
}

const fetchArticles = async () => {
    try {
        const url = `https://newsdata.io/api/1/news?country=vi&apikey=pub_35108568002869ef3710e7a36b3249955233f`;
        const response = await fetch(url);
        const json = await response.json();
        return json.results || []; 
    } catch (error) {
        console.error('Fetch error: ', error);
        return [];
    }
};
const CarouselArticle = ({ item }) => {
    return (
        <View style={styles.carouselItem}>
        <Image source={{ uri: item.image_url }} style={styles.carouselImage} />
        <Text style={styles.carouselTitle}>{item.title}</Text>
        </View>
    );
};
const ArticleItem = React.memo(({ item }) => {
    return (
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
    );
});
const HomeScreen = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const navigation = useNavigation();
    
    useEffect(() => {
        const loadArticles = async () => {
            const fetchedArticles = await fetchArticles();
            setArticles(fetchedArticles);
            setLoading(false);
        };

        loadArticles();
    }, []);

    if (isLoading) {
        return <ActivityIndicator />;
    }
    const renderArticleItem = ({ item }) => <ArticleItem item={item} />;

    return (
        <View style={styles.container}>
            <FlatList
                data={articles}
                keyExtractor={(item, index) => item.article_id || index.toString()}
                renderItem={renderArticleItem}
            />
        </View>
    );
};

// Định nghĩa các styles cho components
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#f0f0f0', // Màu nền cho container chính
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: 16,
        elevation: 3, // Thêm bóng cho card trên Android
        shadowColor: '#000', // Thêm bóng cho card trên iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    image: {
        width: '100%',
        height: 200, // Đặt chiều cao cố định cho ảnh
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


export default Home;
