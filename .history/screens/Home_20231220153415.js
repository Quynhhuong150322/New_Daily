import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Image, TouchableOpacity, ViewBase } from 'react-native';
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

function HomeScreen() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getMovies = async () => {
        try {
        const response = await fetch('https://reactnative.dev/movies.json');
        const json = await response.json();
        setData(json.movies);
        } catch (error) {
        console.error(error);
        } finally {
        setLoading(false);
        }
    };

    useEffect(() => {
        getMovies();
    }, []);
    return (
        <View style={{flex: 1, padding: 24}}>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <FlatList
                data={data}
                keyExtractor={({id}) => id}
                renderItem={({item}) => (
                    <Text>
                    {item.title}, {item.releaseYear}
                    </Text>
                )}
                />
            )}
            </View>
    );
}


export default Home;
