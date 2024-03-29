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
// fetch API CarouselArticle
const fetchArticles1 = async () => {
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
// Fetch API xu hướng
const fetchArticles2 = async () => {
    try {
        const url = `https://newsdata.io/api/1/news?country=vi&category=top&apikey=pub_35742a058061ecce52ed2c5120a118f59af8c`;
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


const ArticleItem1 = React.memo(({ item }) => {
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
            <View style={styles.card1}>
                <Image source={{ uri: item.image_url || defaultImage }} style={styles.image1} />
                <View style={styles.contentContainer1}>
                    <Text style={styles.category1}>Thể loại</Text>
                    <Text style={styles.title1}>{item.title}</Text>
                    <Text style={styles.authorDate1}>
                        {item.creator || 'Unknown Author'} - {new Date(item.pubDate).toLocaleDateString()}
                    </Text>
                    <TouchableOpacity style={styles.saveButton1} onPress={handleSaveButtonClick}>
                        <Ionicons name="bookmark" size={15} color={isSaved ? colors.Xanh_dam : 'gray'} />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
});

const ArticleItem2 = React.memo(({ item }) => {
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
            <View style={styles.card2}>
                <Image source={{ uri: item.image_url || defaultImage }} style={styles.image2} />
                <View style={styles.contentContainer}>
                    <Text style={styles.title2}>{item.title}</Text>
                    <Text style={styles.description2}>{item.description}</Text>
                    <View style={styles.footer2}>
                        <Text style={styles.date2}>{new Date(item.pubDate).toLocaleDateString()}</Text>
                        <Text style={styles.author2}>{item.creator || 'Unknown Author'}</Text>
                        <TouchableOpacity style={styles.saveButton2} onPress={handleSaveButtonClick}>
                            <Ionicons name="bookmark" size={15} color={isSaved ? colors.Xanh_dam : 'gray'} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
});




const HomeScreen = () => {
    const [articles1, setArticles1] = useState([]);
    const [articles2, setArticles2] = useState([]);
    const [isLoading, setLoading] = useState(true);
    // const [activeSlide, setActiveSlide] = useState(0);
    const [currentCategory, setCurrentCategory] = useState('all');

    useEffect(() => {
        const loadArticles = async () => {
            const fetchedArticles1 = await fetchArticles1()
            setArticles1(fetchedArticles1)
            setLoading(false);
        };
        loadArticles();
    }, []);

    useEffect(() => {
        const loadArticles = async () => {
            const fetchedArticles2 = await fetchArticles2()
            setArticles2(fetchedArticles2)
            setLoading(false);
        };
        loadArticles();
    }, []);

    // Hàm để xử lý thay đổi thể loại
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
                {/* Carousel for featured articles */}
                <Carousel
                    data={articles1}
                    renderItem={({ item }) => <CarouselArticle item={item} />}
                    sliderWidth={350}
                    itemWidth={400}
                // onSnapToItem={(index) => setActiveSlide(index)}
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
                <HorizontalMenu currentCategory={currentCategory} onCategoryChange={handleCategoryChange} />
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
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <FlatList
                        data={articles2}
                        keyExtractor={(item, index) => item.article_id || index.toString()}
                        renderItem={({ item }) => <ArticleItem1 item={item} />}
                        initialNumToRender={20}
                        maxToRenderPerBatch={20}
                        windowSize={21}
                    />
                </ScrollView>
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
                    }}>Đề xuất</Text>
                </View>
                <FlatList
                    data={articles1}
                    keyExtractor={(item, index) => item.article_id || index.toString()}
                    renderItem={({ item }) => <ArticleItem2 item={item} />}
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
    card1: {
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
        width: 133, // Độ rộng 133px
        height: 165, // Độ cao 165px
    },
    image1: {
        width: '100%',
        height: 100, // Độ cao 100px
    },
    contentContainer1: {
        padding: 10,
    },
    category1: {
        fontSize: 12,
        color: colors.Xanh_dam, // Màu xanh đậm cho thể loại
        marginBottom: 5,
    },
    title1: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    authorDate1: {
        fontSize: 12,
        color: '#666',
        marginBottom: 5,
    },
    saveButton1: {
        position: 'absolute',
        bottom: 10,
        right: 10,
    },
    //Đề xuất 
    card2: {
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
    image2: {
        width: '100%',
        height: 200,
    },
    contentContainer1: {
        padding: 16,
    },
    title2: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    description2: {
        fontSize: 14,
        color: '#666',
        marginBottom: 8,
    },
    footer2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8,
    },
    date2: {
        fontSize: 12,
        color: '#666',
    },
    author2: {
        fontSize: 12,
        color: '#666',
    },
    carouselItem: {
        height: 200,
        width: 350,
        justifyContent: 'center', // Căn giữa dọc và ngang
        alignItems: 'center',
        marginBottom: 5,
        marginLeft: 8

    },
    carouselImage: {
        flex: 1,
        resizeMode: 'cover',
        width: '100 % ',
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
        backgroundColor: 'rgba(255, 255, 255, 0.6)',

    }
});


export default Home;