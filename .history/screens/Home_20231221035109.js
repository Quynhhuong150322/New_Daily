import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View,StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {Image, TouchableOpacity, ImageBackground } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import TabView from '../components/TabView'


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
    const navigation = useNavigation();
    const defaultImage = 'https://nhadaututhanhcong.com/wp-content/uploads/2022/04/news-3.jpg';

    const navigateToArticleDetail = (article) => {
        navigation.navigate('Posts', { article });
    };
    const imageUrl = item.image_url || defaultImage;
    return (
        <TouchableOpacity onPress={() => navigateToArticleDetail(item)} style={styles.carouselItem}>
            <ImageBackground source={{ uri: imageUrl }} style={styles.carouselImage}>
                <Text style={styles.carouselCategory}>{item.category}</Text>
                <Text style={styles.carouselTitle}>{item.title}</Text>
                <Text style={styles.carouselAuthor}>{item.creator || 'Unknown Author'}</Text>
                <Text style={styles.carouselDate}>{new Date(item.pubDate).toLocaleDateString()}</Text>
            </ImageBackground>
        </TouchableOpacity>
    );
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

const HomeScreen = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [activeSlide, setActiveSlide] = useState(0);

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
    const renderPagination = () => {
        return (
            <View>
                <Pagination
                    dotsLength={articles.length}
                    activeDotIndex={activeSlide}
                    containerStyle={{ backgroundColor: 'transparent' }}
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        marginHorizontal: 8,
                        backgroundColor: 'rgba(255, 255, 255, 0.92)'
                    }}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                />
            </View>
        );
    };

    return (
        <View style={styles.container}>
            {/* Carousel for featured articles */}
            <Carousel
                data={articles}
                renderItem={({ item }) => <CarouselArticle item={item} />}
                sliderWidth={300} 
                itemWidth={400} 
                onSnapToItem={(index) => setActiveSlide(index)}
            />
            {renderPagination()} {/* Hiển thị phân trang */}
            
            {/* Tab View for different categories */}
            <TabView articles={articles} />

            {/* FlatList for articles */}
            <FlatList
                data={articles}
                keyExtractor={(item, index) => item.article_id || index.toString()}
                renderItem={({ item }) => <ArticleItem item={item} />}
                initialNumToRender={10}
                maxToRenderPerBatch={20}
                windowSize={21}
            />
        </View>
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
    carouselItem: {
        height: 200,
        justifyContent: 'flex-end',
        padding: 10,
    },
    carouselImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    carouselCategory: {
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 5,
        fontSize: 12,
    },
    carouselTitle: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 18,
    },
    carouselAuthor: {
        color: 'white',
        fontSize: 14,
    },
    carouselDate: {
        color: 'white',
        fontSize: 12,
    },
});


export default Home;
