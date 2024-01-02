import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import colors from '../constants/colors';

const HorizontalMenu = ({ currentCategory, onCategoryChange }) => {
    const allCategories = ['Tất cả', 'Thế giới', 'Thể thao', 'Công nghệ', 'Khoa học', 'Kinh doanh', 'Giải trí', 'Sức khoẻ', 'Chính trị', 'Môi trường', 'Đồ ăn'];

    useEffect(() => {
        setSelectedCategory(currentCategory);
    }, [currentCategory]);

    const [selectedCategory, setSelectedCategory] = useState(currentCategory);
    const [dataLoaded, setDataLoaded] = useState(false); // Trạng thái cho biết dữ liệu đã được tải hay chưa
    const [data, setData] = useState([]); // Danh sách dữ liệu

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        if (category === 'Thế giới') {
            // Nếu chọn 'Thế giới', thay đổi API tương ứng và gọi hàm onCategoryChange
            onCategoryChange('https://newsdata.io/api/1/news?country=vi&category=world&apikey=pub_35731380e0a51b24cc5e9e0c6dc8e7d1b73b8');
        } else {
            // Nếu chọn các danh mục khác, có thể thay đổi API tương ứng cho từng danh mục ở đây và gọi hàm onCategoryChange
            onCategoryChange('API_TUONG_UNG_CHO_DANH_MUC_KHAC');
        }

        // Sau khi thay đổi danh mục, cập nhật trạng thái để hiển thị ActivityIndicator hoặc thông báo "Không có dữ liệu"
        setDataLoaded(false);
    };

    // Hàm này simulates fetching data
    const simulateFetchingData = () => {
        setTimeout(() => {
            // Giả định dữ liệu được tải sau 2 giây và lưu vào state data
            const newData = [...Array(10)].map((_, index) => ({
                id: index.toString(),
                title: `Bài viết ${index}`,
            }));
            setData(newData);
            setDataLoaded(true);
        }, 2000); // Giả định dữ liệu được tải sau 2 giây
    };

    useEffect(() => {
        // Khi trạng thái dataLoaded thay đổi (sau khi dữ liệu đã được tải xong), gọi simulateFetchingData
        if (!dataLoaded) {
            simulateFetchingData();
        }
    }, [dataLoaded]);

    return (
        <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {allCategories.map((category, index) => (
                    <TouchableOpacity key={index} onPress={() => handleCategoryChange(category)}>
                        <View style={[styles.categoryButton, selectedCategory === category && styles.selectedCategoryButton]}>
                            <Text style={[styles.categoryText, selectedCategory === category && styles.selectedCategoryText]}>{category}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            {dataLoaded ? (
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <Text>{item.title}</Text>
                    )}
                />
            ) : (
                <ActivityIndicator size="large" color={colors.Xanh_dam} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    categoryButton: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
        backgroundColor: 'transparent',
        marginRight: 10,
        marginBottom: 5,
        borderColor: 'black',
        borderWidth: 0.5,
    },
    categoryText: {
        fontWeight: 'normal',
        color: 'black',
    },
    selectedCategoryButton: {
        backgroundColor: colors.Xanh_dam, // Màu xanh khi được chọn
    },
    selectedCategoryText: {
        color: 'white', // Màu trắng cho chữ khi được chọn
    },
});

export default HorizontalMenu;
