import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

// Import thư viện video player ở đây (ví dụ: react-native-video)

function VideoScreen() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Gọi API để lấy danh sách video và cập nhật state 'videos'
    // Sử dụng fetch hoặc một thư viện HTTP client
    fetch('https://api16-normal-c-useast1a.tiktokv.com/aweme/v1/feed/?aweme_id=7236318998214954246')
      .then((response) => response.json())
      .then((data) => setVideos(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <View>
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleVideoPress(item)}>
            {/* Hiển thị video và thông tin */}
            <VideoItem video={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default VideoScreen;
