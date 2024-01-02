import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

// Import thư viện video player (ví dụ: react-native-video)
import Video from 'react-native-video';

function VideoScreen() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Gọi API để lấy danh sách video và cập nhật state 'videos'
    // Sử dụng fetch hoặc một thư viện HTTP client
    fetch('https://api16-normal-c-useast1a.tiktokv.com/aweme/v1/feed/?aweme_id=7236318998214954246')
      .then((response) => response.json())
      .then((data) => {
        // Trích xuất URL video từ dữ liệu API và cập nhật state 'videos'
        const extractedVideos = data?.aweme_list?.map((item) => ({
          id: item.aweme_id,
          videoUrl: item.video?.play_addr?.url, // Trích xuất URL video từ dữ liệu API
          title: item.desc,
          likes: item.statistics?.digg_count,
          shares: item.statistics?.share_count,
          comments: item.statistics?.comment_count,
        }));
        setVideos(extractedVideos);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

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
        data={videos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <VideoItem video={item} />}
      />
    </View>
  );
}

export default VideoScreen;
