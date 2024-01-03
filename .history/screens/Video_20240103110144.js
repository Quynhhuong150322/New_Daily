import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import ItemVideo from '../components/ItemVideo';
import { data } from '../constants/data';

// const VideoScreen = () => {
//   return (
//     <Swiper style={styles.wrapper} showsButtons={false} loop={false}>
//       {data.map((item) => (
//         <View key={item.id} style={styles.slide}>
//           <ItemVideo data={item} />
//         </View>
//       ))}
//     </Swiper>
//   );
// }
const VideoScreen = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <VideoItem data={item} />}
      horizontal
      pagingEnabled // Cho phép trượt để xem video tiếp theo
    />
  );
}

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default VideoScreen;
