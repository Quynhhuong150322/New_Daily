import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet, ScrollView } from 'react-native';
import Video from 'react-native-video';

const ItemVideo = ({ data }) => {
    const { videoUrl, title, nameNB, avatar, likes, comments } = data
    return (
        <View style={styles.container}>
            <Video source={{ videoUrl }} style={styles.video} resizeMode='cover' />;
            <View style={styles.bottom}>
                <View style={styles.bottomLeft}>
                    <Text style={styles.NameNB}>{nameNB}</Text>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.bottomRight}>

                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    video: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    bottom: {
        flexDirection: 'row',
    },
    bottomLeft: {
        flex: 4,
    },
    bottomRight: {
        flex: 1,
    }

});

export default ItemVideo
