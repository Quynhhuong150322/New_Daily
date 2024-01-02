import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet, ScrollView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, TouchableOpacity, ImageBackground } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import colors from '../constants/colors';



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

const fetchArticles = async () => {
    try {
        const url = `https://newsdata.io/api/1/news?country=vi&apikey=pub_35108dc30454607fb819125eab233102cff31`;
        const response = await fetch(url);
        const json = await response.json();

        // Lọc bài viết không có hình, không có tác giả và không có nội dung
        // const filteredArticles = json.results.filter((item) => {
        //     return item.image_url && item.creator && item.content;
        // });
        // return filteredArticles || [];
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
                <View style={styles.carouselHeader}>
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
            <View style={styles.container}>
                {/* Carousel for featured articles */}
                <Carousel
                    data={articles}
                    renderItem={({ item }) => <CarouselArticle item={item} />}
                    sliderWidth={350}
                    itemWidth={400}
                // onSnapToItem={(index) => setActiveSlide(index)}
                />
                <FlatList
                    data={articles}
                    keyExtractor={(item, index) => item.article_id || index.toString()}
                    renderItem={({ item }) => <ArticleItem item={item} />}
                    initialNumToRender={20}
                    maxToRenderPerBatch={20}
                    windowSize={21}
                />
            </View>
        </ScrollView>
    )
};

// Định nghĩa các styles cho components
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
        marginTop: 5,
        alignItems: 'center',
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
    carouselItem: {
        height: 200,
        width: 350,
        justifyContent: 'flex-end',
        // padding: 10,
        alignItems: 'center',
        marginBottom: 5,
        // paddingLeft: 10,


    },
    carouselImage: {
        flex: 1,
        resizeMode: 'cover',
        width: 350,
    },
    carouselCategory: {
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 10,
        fontSize: 12,
    },
    carouselTitle: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 16,
        padding: 5,
        paddingLeft: 5,
        // width: 400
        // paddingTop: 90
    },
    carouselAuthor: {
        color: 'white',
        fontSize: 14,
        color: colors.Den,
    },
    carouselDate: {
        color: colors.Den,
        fontSize: 14,
    },
    carouseFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8,
        paddingRight: 10,
        paddingLeft: 10
    },
    carouselHeader: {
        backgroundColor: 'white',
    }
});


export default Home;
