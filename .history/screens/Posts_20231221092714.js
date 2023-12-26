import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

const ArticleDetailScreen = ({ route }) => {
    const { article } = route.params;

    return (
        <ScrollView>
            <Image source={{ uri: article.urlToImage }} style={{ width: '100%', height: 200 }} />
            <View style={{margin: 10}}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 10,  }}>{article.title}</Text>
                <Text>{article.content}</Text>
            </View>
        </ScrollView>
    );
};

export default ArticleDetailScreen;
