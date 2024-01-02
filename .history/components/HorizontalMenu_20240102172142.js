import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HorizontalMenu = ({ currentCategory, onCategoryChange }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => onCategoryChange('all')} style={[styles.categoryButton, currentCategory === 'all' && styles.selectedCategory]}>
                <Text style={[styles.categoryText, currentCategory === 'all' && styles.selectedText]}>Tất cả</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onCategoryChange('world')} style={[styles.categoryButton, currentCategory === 'world' && styles.selectedCategory]}>
                <Text style={[styles.categoryText, currentCategory === 'world' && styles.selectedText]}>Thế giới</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onCategoryChange('sports')} style={[styles.categoryButton, currentCategory === 'sports' && styles.selectedCategory]}>
                <Text style={[styles.categoryText, currentCategory === 'sports' && styles.selectedText]}>Thể thao</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onCategoryChange('technology')} style={[styles.categoryButton, currentCategory === 'technology' && styles.selectedCategory]}>
                <Text style={[styles.categoryText, currentCategory === 'technology' && styles.selectedText]}>Công nghệ</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onCategoryChange('science')} style={[styles.categoryButton, currentCategory === 'science' && styles.selectedCategory]}>
                <Text style={[styles.categoryText, currentCategory === 'science' && styles.selectedText]}>Khoa học</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onCategoryChange('science')} style={[styles.categoryButton, currentCategory === 'science' && styles.selectedCategory]}>
                <Text style={[styles.categoryText, currentCategory === 'science' && styles.selectedText]}>Khoa học</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onCategoryChange('science')} style={[styles.categoryButton, currentCategory === 'science' && styles.selectedCategory]}>
                <Text style={[styles.categoryText, currentCategory === 'science' && styles.selectedText]}>Khoa học</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 5,
        paddingHorizontal: 5,
    },
    categoryButton: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
        backgroundColor: 'transparent',
    },
    selectedCategory: {
        backgroundColor: '#0075FF',
    },
    categoryText: {
        fontWeight: 'normal',
        color: 'black',
    },
    selectedText: {
        color: 'white',
    },
});

export default HorizontalMenu;

// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

// const HorizontalMenu = ({ currentCategory, onCategoryChange }) => {
//     const allCategories = ['Tất cả', 'Thế giới', 'Thể thao', 'Công nghệ', 'Khoa học', 'Thể loại 6', 'Thể loại 7', 'Thể loại 8', 'Thể loại 9', 'Thể loại 10'];
//     const [visibleCategories, setVisibleCategories] = useState(allCategories.slice(0, 5));
//     const [isSecondListVisible, setSecondListVisible] = useState(false);

//     const toggleSecondList = () => {
//         setSecondListVisible(!isSecondListVisible);
//     };

//     const handleCategoryChange = (category) => {
//         onCategoryChange(category);
//     };

//     return (
//         <View>
//             <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//                 {visibleCategories.map((category, index) => (
//                     <TouchableOpacity key={index} onPress={() => handleCategoryChange(category)}>
//                         <View style={styles.categoryButton}>
//                             <Text style={[styles.categoryText, currentCategory === category && styles.selectedText]}>{category}</Text>
//                         </View>
//                     </TouchableOpacity>
//                 ))}
//                 <TouchableOpacity onPress={toggleSecondList}>
//                     <View style={styles.categoryButton}>
//                         <Text style={styles.moreText}>More</Text>
//                     </View>
//                 </TouchableOpacity>
//             </ScrollView>
//             {isSecondListVisible && (
//                 <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//                     {allCategories.slice(5).map((category, index) => (
//                         <TouchableOpacity key={index} onPress={() => handleCategoryChange(category)}>
//                             <View style={styles.categoryButton}>
//                                 <Text style={[styles.categoryText, currentCategory === category && styles.selectedText]}>{category}</Text>
//                             </View>
//                         </TouchableOpacity>
//                     ))}
//                 </ScrollView>
//             )}
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     categoryButton: {
//         paddingHorizontal: 10,
//         paddingVertical: 5,
//         borderRadius: 5,
//         backgroundColor: 'transparent',
//         marginRight: 5,
//     },
//     categoryText: {
//         fontWeight: 'normal',
//         color: 'black',
//     },
//     selectedText: {
//         color: 'white',
//     },
//     moreText: {
//         fontWeight: 'normal',
//         color: 'blue', // or any other color you prefer for "More"
//     },
// });

// export default HorizontalMenu;
