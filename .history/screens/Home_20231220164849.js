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

    return (
        <View style={{ flex: 1, padding: 24 }}>
            <FlatList
                data={articles}
                keyExtractor={(item, index) => 'key' + index}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => {/* navigation logic here */}}>
                        <Image source={{ uri: item.image_url }} style={{ width: 100, height: 100 }} />
                        <Text>{item.title}</Text>
                        <Text>{item.description}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}


export default Home;
