import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';

function VideoScreen() {
  const fakeVideos = [
    {
      id: 1,
      videoUrl: require('../assets/video1.mp4'),
      title: 'Tàu chở 355 hành khách bị trật đường ray ngay trung tâm TP. Huế | ANTV#113online  #ANTV',
      likes: 100,
      shares: 50,
      comments: 30,
    },
    {
      id: 2,
      videoUrl: require('../assets/v2.mp4'),
      title: 'Mâu thuẫn trên bàn nhậu, một người bị chém trọng thương | Tin tức 24h mới nhất | ANTV#113online  #ANTV',
      likes: 150,
      shares: 70,
      comments: 40,
    },
    // ...Thêm các video khác vào đây
  ];

  const VideoItem = ({ video }) => (
    <View>
      <TouchableOpacity>
        <Video
          source={video.videoUrl}
          style={{ width: 300, height: 200 }}
          controls
        />
        <Text>{video.title}</Text>
        <Text>Likes: {video.likes}</Text>
        <Text>Shares: {video.shares}</Text>
        <Text>Comments: {video.comments}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View>
      <FlatList
        data={fakeVideos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <VideoItem video={item} />}
      />
    </View>
  );
}

export default VideoScreen;
