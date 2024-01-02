import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet, ScrollView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, TouchableOpacity, ImageBackground } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import colors from '../constants/colors';
import HorizontalMenu from '../components/HorizontalMenu';
import { SPORTS_API, TECHNOLOGY_API, WORLD_API } from '../constants/data';

const HomeStack = createStackNavigator();

function LogoTitle() {
    return (
        <Image
            style={{ width: 138, height: 30, marginLeft: 20, marginTop: 0 }}
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

const fetchArticles = async (apiUrl) => {
    try {
        const response = await fetch(apiUrl);
        const json = await response.json();

        return json.results || [];
    } catch (error) {
        console.error('Fetch error: ', error);
        return [];
    }
};

const CarouselArticle = ({ item }) => {
    const navigation = useNavigation();
    const defaultImage = 'https://nhadaututhanhcong.com/wp-content/uploads/2022/04/news-3.jpg';
    const imageUrl = item.image_url || defaultImage;

    const navigateToArticleDetail = (article) => {
        navigation.navigate('Posts', { article });
    };

    return (
        <TouchableOpacity onPress={() => navigateToArticleDetail(item)} style={styles.carouselItem}>
            <ImageBackground source={{ uri: imageUrl }} style={styles.carouselImage}>
                <View style={styles.carouselHeader} blurRadius={5}>
                    <Text style={styles.carouselCategory}>{item.category}</Text>
                    <Text style={styles.carouselTitle}>{item.title}</Text>
                    <View style={styles.carouseFooter}>
                        <Text style={styles.carouselAuthor}>{item.creator || 'Unknown Author'}</Text>
                        <Text style={styles.carouselDate}>{new Date(item.pubDate).toLocaleDateString()}</Text>
                    </View>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );
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

const HomeScreen = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [currentCategory, setCurrentCategory] = useState('all');

    useEffect(() => {
        const loadArticles = async () => {
            let apiUrl = `https://newsdata.io/api/1/news?country=vi&apikey=pub_35731380e0a51b24cc5e9e0c6dc8e7d1b73b8`;

            if (currentCategory === 'sports') {
                apiUrl = `https://newsdata.io/api/1/news?country=vi&category=sports&apikey=pub_35731380e0a51b24cc5e9e0c6dc8e7d1b73b8`;
            } else if (currentCategory === 'top') {
                apiUrl = `https://newsdata.io/api/1/news?country=vi&category=top&apikey=pub_35731380e0a51b24cc5e9e0c6dc8e7d1b73b8`;
            }

            const fetchedArticles = await fetchArticles(apiUrl)
            setArticles(fetchedArticles)
            setLoading(false);
        };
        loadArticles();
    }, [currentCategory]);

    const handleCategoryChange = (category) => {
        setCurrentCategory(category);
    };

    if (isLoading) {
        return (
            <View>
                <ActivityIndicator />
            </View>
        )
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Carousel
                    data={articles}
                    renderItem={({ item }) => <CarouselArticle item={item} />}
                    sliderWidth={350}
                    itemWidth={400}
                />
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
                    }}>Tin mới nhất</Text>
                </View>
                <FlatList
                    data={articles}
                    renderItem={({ item }) => <ArticleItem item={item} />}
                    keyExtractor={(item) => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </ScrollView>
    );
};

export default Home;
