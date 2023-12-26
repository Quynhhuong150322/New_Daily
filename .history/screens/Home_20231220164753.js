// import React from 'react';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {Image, TouchableOpacity, ViewBase } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';

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
        const url = `https://newsdata.io/api/1/news?country=vi&apikey=YOUR_API_KEY`;
        const response = await fetch(url);
        const json = await response.json();
        return json.articles || [];
    } catch (error) {
        console.error('Fetch error: ', error);
        return [];
    }
};
function HomeScreen() {
    const [articles, setArticles] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const navigation = useNavigation();
    // const apiKey = 'pub_35108568002869ef3710e7a36b3249955233f';

    useEffect(() => {
        const url = `https://newsdata.io/api/1/news?country=vi&apikey=pub_35108568002869ef3710e7a36b3249955233f`;
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                console.log(json); // Thêm dòng này để xem dữ liệu trả về
                setArticles(json.articles || []);
            })
            .catch((error) => {
                console.error('Fetch error: ', error);
            })
            .finally(() => setLoading(false));
    }, []);

    return (
        <View style={{ flex: 1, padding: 24 }}>
            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    data={articles}
                    keyExtractor={(item, index) => 'key' + index}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('ArticleDetail', { article: item })}>
                            <Image source={{ uri: item.urlToImage }} style={{ width: 100, height: 100 }} />
                            <Text>{item.title}</Text>
                            <Text>{item.description}</Text>
                        </TouchableOpacity>
                    )}
                />
            )}
        </View>
    );
}


export default Home;
