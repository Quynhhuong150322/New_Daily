import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet, ScrollView } from 'react-native';
import React from 'react'
import Video from 'react-native-video';

const ItemVideo = ({ data }) => {
    const { videoUrl, title, nameNB, avatar, likes, comments } = data
    return <Video source={{ videoUrl }} style={style.video} />;

}
const styles = StyleSheet.create({

});

export default ItemVideo