import { View, Text } from 'react-native'
import React from 'react'

const ItemVideo = ({ data }) => {
    const { videoUrl, title, nameNB, avatar, likes, comments } = data
    return (
        <View>
            <Text>ItemVideo</Text>
        </View>
    )
}

export default ItemVideo