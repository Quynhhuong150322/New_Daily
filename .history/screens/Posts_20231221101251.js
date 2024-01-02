import React from 'react';
import { ViewComponent } from 'react-native';
import { View, Text, ScrollView, Image } from 'react-native';



const ArticleDetailScreen = ({ route }) => {
    const { article } = route.params;
    const defaultImage = 'https://nhadaututhanhcong.com/wp-content/uploads/2022/04/news-3.jpg';

    return (
        <ScrollView>
            <View style={{}}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 10,  }}>{article.pubDate}</Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 10,  }}>{article.title}</Text>
            </View>
            <Image source={{ uri: article.urlToImage || defaultImage  }} style={{ width: '100%', height: 200 }} />
            <View style={{margin: 16}}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 10,  }}>{article.title}</Text>
                <Text style={{textAlign: 'justify', fontSize: 16}}>{article.content}</Text>
            </View>

        </ScrollView>
    );
};

export default ArticleDetailScreen;
