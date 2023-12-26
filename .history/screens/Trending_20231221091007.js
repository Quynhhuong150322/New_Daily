import { View, Text, StyleSheet } from "react-native";
import React from "react";

const fetchArticles = async () => {
    try {
        const url = `https://newsdata.io/api/1/news?country=vi&category=top&apikey=pub_351086bdb63ba4aab496e50c54bfc0e5c78ac`;
        const response = await fetch(url);
        const json = await response.json();
        return json.results || []; 
    } catch (error) {
        console.error('Fetch error: ', error);
        return [];
    } 
};
const ArticleItem = React.memo(({ item }) => {
    const navigation = useNavigation();
    const navigateToArticleDetail = (article) => {
        navigation.navigate('Posts', { article });
    };

    return (
        <TouchableOpacity onPress={() => navigateToArticleDetail(item)}>
            <View style={styles.card}>
                <Image source={{ uri: item.image_url }} style={styles.image} />
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                    <View style={styles.footer}>
                        <Text style={styles.date}>{new Date(item.pubDate).toLocaleDateString()}</Text>
                        <Text style={styles.author}>{item.creator || 'Unknown Author'}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
});
export default function Home() {
  
  return (
    <View style={styles.container}>
      <Text>Trending</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
