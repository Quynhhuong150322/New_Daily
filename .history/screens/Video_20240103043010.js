import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

// Import thư viện video player (ví dụ: react-native-video)
import Video from 'react-native-video';

function VideoScreen() {
  // Dữ liệu video giả mạo
  const fakeVideos = [
    {
      id: 1,
      videoUrl: 'https://example.com/video1.mp4',
      title: 'Video 1',
      likes: 100,
      shares: 50,
      comments: 30,
    },
    {
      id: 2,
      videoUrl: 'https://example.com/video2.mp4',
      title: 'Video 2',
      likes: 150,
      shares: 70,
      comments: 40,
    },
    {
      id: 3,
      videoUrl: 'https://example.com/video3.mp4',
      title: 'Video 3',
      likes: 120,
      shares: 60,
      comments: 35,
    },
    // Thêm các video giả mạo khác
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
