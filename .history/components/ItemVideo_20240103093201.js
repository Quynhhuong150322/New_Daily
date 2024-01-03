import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet, ScrollView } from 'react-native';
import Video from 'react-native-video';

const ItemVideo = ({ data }) => {
    const { videoUrl, title, nameNB, avatar, likes, comments } = data
    return <Video source={{ videoUrl }} style={styles.video} resizeMode='cover' />;

}
const styles = StyleSheet.create({
    video: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    }
});

export default ItemVideo