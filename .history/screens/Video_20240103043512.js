import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

function VideoScreen() {
  const fakeVideos = [
    {
      id: 1,
      videoUrl: '../assets/video1.mp4',
      title: 'Video 1',
      likes: 100,
      shares: 50,
      comments: 30,
    },
    {
      id: 2,
      videoUrl: '../assets/v2.mp4',
      title: 'Video 2',
      likes: 150,
      shares: 70,
      comments: 40,
    },
    {
      id: 3,
      videoUrl: '../assets/v3.mp4',
      title: 'Video 3',
      likes: 120,
      shares: 60,
      comments: 35,
    },
    {
      id: 4,
      videoUrl: '../assets/v4.mp4',
      title: 'Khởi tố chủ cơ sở nha khoa thẩm mỹ sử dụng chứng chỉ hành nghề giả ở Lạng Sơn | ANTV#113online  #ANTV',
      likes: 120,
      shares: 60,
      comments: 35,
    },
    {
      id: 5,
      videoUrl: '../assets/v5.mp4',
      title: 'Video 3',
      likes: 120,
      shares: 60,
      comments: 35,
    },

  ];

  // Hàm xử lý khi người dùng nhấn vào video
  const handleVideoPress = (video) => {
    // Thực hiện hành động khi người dùng nhấn vào video (ví dụ: mở video player)
    // Ở đây, bạn có thể mở một modal hoặc điều hướng đến trang xem video chi tiết.
  };

  // Thành phần để hiển thị mỗi video
  const VideoItem = ({ video }) => (
    <View>
      <TouchableOpacity onPress={() => handleVideoPress(video)}>
        <Video
          source={{ uri: video.videoUrl }}
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
