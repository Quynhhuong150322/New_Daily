import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Video } from 'expo-av';
import colors from '../constants/colors';

const ItemVideo = ({ data }) => {
    const { videoUrl, title, nameNB, avatar, likes, comments } = data;

    return (
        <View style={styles.container}>
            <View style={styles.videoContainer}>
                <Video
                    source={videoUrl}
                    style={styles.video}
                    resizeMode='cover'
                    useNativeControls={true}
                />
            </View>
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
        alignItems: 'center', // Căn giữa theo chiều ngang
        justifyContent: 'center', // Căn giữa theo chiều dọc
    },
    videoContainer: {
        width: '100%',
        aspectRatio: 16 / 9,
    },
    video: {
        flex: 1,
    },
    bottom: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        paddingHorizontal: 8,
        paddingBottom: 16,
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
        fontSize: 20,
    },
    title: {
        color: colors.Trang,
        marginVertical: 8,
    },
});

export default ItemVideo;