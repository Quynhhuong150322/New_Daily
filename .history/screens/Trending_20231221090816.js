import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Home() {
  const fetchArticles = async () => {
    try {
        const url = `https://newsdata.io/api/1/news?country=vi&apikey=pub_351086bdb63ba4aab496e50c54bfc0e5c78ac`;
        const response = await fetch(url);
        const json = await response.json();
        return json.results || []; 
    } catch (error) {
        console.error('Fetch error: ', error);
        return [];
    } 
};
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
