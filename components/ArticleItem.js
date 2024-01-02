import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/core';

const ArticleItem = React.memo(({ item }) => {
    const navigation = useNavigation();
    // const defaultImage = 'https://nhadaututhanhcong.com/wp-content/uploads/2022/04/news-3.jpg';
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

export default ArticleItem;

const styles = StyleSheet.create({});