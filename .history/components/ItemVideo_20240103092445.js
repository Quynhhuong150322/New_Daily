import { View, Text } from 'react-native'
import React from 'react'
import Video from 'react-native-video';

const ItemVideo = ({ data }) => {
    const { videoUrl, title, nameNB, avatar, likes, comments } = data
    return (
        <View>
            <Text>ItemVideo</Text>
        </View>
    )
}

export default ItemVideo