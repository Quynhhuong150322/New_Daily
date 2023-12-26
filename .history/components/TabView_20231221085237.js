// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

// const TABS = ['Thể thao', 'Công nghệ', 'Kinh tế', 'Giải trí']; // Thêm các danh mục khác tại đây

// // const TabView = ({ articles }) => {
// //     const [selectedTab, setSelectedTab] = useState(TABS[0]);

// //     const filterArticlesByCategory = (category) => {
// //         // Giả sử mỗi bài báo có trường 'category' để phân loại
// //         return articles.filter(article => article.category === category);
// //     };

// //     const renderArticles = (category) => {
// //         const filteredArticles = filterArticlesByCategory(category);
// //         return filteredArticles.map((article, index) => (
// //             <View key={index} style={styles.articleContainer}>
// //                 <Text style={styles.articleTitle}>{article.title}</Text>
// //                 {/* Thêm các thành phần khác của bài báo nếu cần */}
// //             </View>
// //         ));
// //     };

//     return (
//         <View style={styles.container}>
//             <Text>QHH</Text>
//             {/* <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tabsContainer}>
//                 {TABS.map((tab, index) => (
//                     <TouchableOpacity
//                         key={index}
//                         style={[styles.tab, selectedTab === tab && styles.activeTab]}
//                         onPress={() => setSelectedTab(tab)}
//                     >
//                         <Text style={[styles.tabText, selectedTab === tab && styles.activeTabText]}>{tab}</Text>
//                     </TouchableOpacity>
//                 ))}
//             </ScrollView>
//             <ScrollView style={styles.articlesContainer}>
//                 {renderArticles(selectedTab)}
//             </ScrollView> */}
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     tabsContainer: {
//         flexDirection: 'row',
//         paddingVertical: 10,
//     },
//     tab: {
//         paddingHorizontal: 16,
//         marginHorizontal: 5,
//         borderRadius: 20,
//         justifyContent: 'center',
//         backgroundColor: '#f0f0f0',
//     },
//     activeTab: {
//         backgroundColor: '#0075FF',
//     },
//     tabText: {
//         color: 'black',
//         fontSize: 16,
//     },
//     activeTabText: {
//         color: 'white',
//     },
//     articlesContainer: {
//         flex: 1,
//     },
//     articleContainer: {
//         padding: 10,
//         borderBottomWidth: 1,
//         borderBottomColor: '#e0e0e0',
//     },
//     articleTitle: {
//         fontSize: 16,
//         fontWeight: 'bold',
//     },
//     // Thêm styles cho các thành phần khác của bài báo nếu cần
// });

// export default TabView;


