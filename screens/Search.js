import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import Ionicons from 'react-native-vector-icons/Ionicons';


const fetchArticles = async () => {
  try {
    const url = `https://newsdata.io/api/1/news?country=vi&apikey=pub_35742a058061ecce52ed2c5120a118f59af8c`;
    const response = await fetch(url);
    const json = await response.json();

    // Lọc bài viết không có hình, không có tác giả và không có nội dung
    // const filteredArticles = json.results.filter((item) => {
    // return item.image_url && item.creator && item.content;
    // });
    // return filteredArticles || [];
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
  const [articles, setArticles] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const loadArticles = async () => {
      const fetchedArticles = await fetchArticles();
      setArticles(fetchedArticles);
      setLoading(false);
    };
    loadArticles();
  }, []);

  const handleSearch = (text) => {
    setSearchText(text);
    // Tìm kiếm trong danh sách bài viết theo tiêu đề hoặc mô tả
    const filteredArticles = articles.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase()) || item.description.toLowerCase().includes(text.toLowerCase())
    );
    setSearchResults(filteredArticles);
  };

  const clearSearchResults = () => {
    setSearchText('');
    setSearchResults([]);
  };

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Thêm ô tìm kiếm */}
      <View style={{ backgroundColor: "#9E9C9C", flexDirection: "row", borderRadius: 8, marginLeft: 3, marginRight: 3, height: 36 }}>
        <Ionicons name="search" size={24} color="white" style={{ margin: 4, marginLeft: 8 }} />
        <TextInput
          style={styles.searchInput}
          placeholder="Tìm bài viết"
          placeholderTextColor={'white'}
          onChangeText={handleSearch}
          value={searchText}
          onBlur={clearSearchResults} // Khi người dùng thoát khỏi ô tìm kiếm, xóa kết quả tìm kiếm
        />
      </View>
      <View style={{ marginTop: 8 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 8 }}>
          NÓNG 24H
        </Text>
      </View>
      <FlatList
        data={searchResults.length > 0 ? searchResults : articles} // Sử dụng danh sách kết quả tìm kiếm nếu có, ngược lại sử dụng danh sách gốc
        keyExtractor={(item, index) => item.article_id || index.toString()}
        renderItem={({ item }) => <ArticleItem item={item} />}
        initialNumToRender={10}
        maxToRenderPerBatch={20}
        windowSize={21}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    // backgroundColor: '#f0f0f0', 
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    marginBottom: 12,
    paddingLeft: 10,
    borderRadius: 8,
    color: "white",
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  image: {
    width: '100%',
    height: 200,
  },
  contentContainer: {
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  date: {
    fontSize: 12,
    color: '#666',
  },
  author: {
    fontSize: 12,
    color: '#666',
  },
});
