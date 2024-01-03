import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Video } from 'expo-av';
import colors from '../constants/colors';

const ItemVideo = ({ data }) => {
    const { videoUrl, title, nameNB, avatar, likes, comments } = data;

    return (
        <View style={styles.container}>
            <Video
                source={{ videoUrl }}
                style={styles.video}
                resizeMode='cover'
            />
            <View style={styles.bottom}>
                <View style={styles.bottomLeft}>
                    <Text style={styles.NameNB}>{nameNB}</Text>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.bottomRight}>

                </View>
            </View>
        </View>
    );
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
        position: 'absolute',
        bottom: 0,

    },
    bottomLeft: {
        flex: 4,
        backgroundColor: colors.Xam2,
    },
    bottomRight: {
        flex: 1,
        backgroundColor: colors.Xam3,
    },
    NameNB: {
        color: colors.Trang,
        fontWeight: 'bold',
    },
    title: {
        color: colors.Trang,
        marginVertical: 8,
    },
});

export default ItemVideo;
