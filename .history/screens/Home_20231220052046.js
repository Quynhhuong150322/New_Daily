import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React from "react";

export default function Home({navigation}) {
  
  return (
  <ScrollView>
    <View style={styles.container}>
      <Text>QHHHHHH</Text>
    </View>
  </ScrollView>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

// HomeScreen.js
// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

// const HomeScreen = ({ navigation }) => {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     // Fetch articles from an API
//     // fetch('https://vnexpress.net')
//       .then((response) => response.json())
//       .then((json) => setArticles(json.articles))
//       .catch((error) => console.error(error));
//   }, []);

//   return (
//     <View>
//       <FlatList
//         data={articles}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <TouchableOpacity onPress={() => navigation.navigate('Details', { article: item })}>
//             <Image source={{ uri: item.imageUrl }} style={{ width: 100, height: 100 }} />
//             <Text>{item.title}</Text>
//             <Text>{item.summary}</Text>
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// };

// export default HomeScreen;
