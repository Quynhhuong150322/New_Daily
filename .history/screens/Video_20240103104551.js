import React from 'react';
import { View, Text, FlatList } from 'react-native';
import ItemVideo from '../components/ItemVideo';
import { data } from '../constants/data';

const VideoScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => <ItemVideo data={item} />}
        keyExtractor={(item) => item.id.toString()}
        pagingEnabled={true} // Cho phép cuộn trang để xem video tiếp theo
      />
    </View>
  );
}

export default VideoScreen;
