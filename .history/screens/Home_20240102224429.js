import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet, ScrollView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, TouchableOpacity, ImageBackground } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import colors from '../constants/colors';
import HorizontalMenu from '../components/HorizontalMenu';

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

        return json.results || [];
    } catch (error) {
        console.error('Fetch error: ', error);
        return [];
    }
};

const HomeScreen = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [currentCategory, setCurrentCategory] = useState('all'); // Thêm state currentCategory

    useEffect(() => {
        const loadArticles = async () => {
            const fetchedArticles = await fetchArticles();
            setArticles(fetchedArticles);
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
                {/* Truyền currentCategory và handleCategoryChange vào HorizontalMenu */}
                <HorizontalMenu currentCategory={currentCategory} onCategoryChange={handleCategoryChange} />
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

// Các styles của bạn
const styles = StyleSheet.create({
    // ... Các styles của bạn
});

export default Home;
