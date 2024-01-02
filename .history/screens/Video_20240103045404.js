import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';


function VideoScreen() {
  const fakeVideos = [
    {
      id: 1,
      videoUrl: require('../assets/video1.mp4'), // Sử dụng require cho đường dẫn tệp video
      title: 'Tàu chở 355 hành khách bị trật đường ray ngay trung tâm TP. Huế | ANTV#113online  #ANTV',
      likes: 100,
      shares: 50,
      comments: 30,
    },
    {
      id: 2,
      videoUrl: require('../assets/v2.mp4'), // Sử dụng require cho đường dẫn tệp video
      title: 'Mâu thuẫn trên bàn nhậu, một người bị chém trọng thương | Tin tức 24h mới nhất | ANTV#113online  #ANTV',
      likes: 150,
      shares: 70,
      comments: 40,
    },
    {
      id: 3,
      videoUrl: require('../assets/v3.mp4'), // Sử dụng require cho đường dẫn tệp video
      title: 'Ukraine bác cáo buộc tấn công điện Kremlin | Thời sự quốc tế | ANTV#113online  #ANTV',
      likes: 120,
      shares: 60,
      comments: 35,
    },
    {
      id: 4,
      videoUrl: require('../assets/v4.mp4'), // Sử dụng require cho đường dẫn tệp video
      title: 'Khởi tố chủ cơ sở nha khoa thẩm mỹ sử dụng chứng chỉ hành nghề giả ở Lạng Sơn | ANTV#113online  #ANTV',
      likes: 120,
      shares: 60,
      comments: 35,
    },
    {
      id: 5,
      videoUrl: require('../assets/v5.mp4'), // Sử dụng require cho đường dẫn tệp video
      title: 'Lệnh truy nã',
      likes: 120,
      shares: 60,
      comments: 35,
    },
  ];

  const handleVideoPress = (video) => {
    // Xử lý khi người dùng nhấp vào video (nếu cần)
  };

  const VideoItem = ({ video }) => (
    <View>
      <TouchableOpacity onPress={() => handleVideoPress(video)}>
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
