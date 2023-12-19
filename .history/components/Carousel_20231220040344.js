import Carousel from 'react-native-snap-carousel';
import { View, Text, Image, Dimensions } from 'react-native';

const { width: viewportWidth } = Dimensions.get('window');

const CarouselItem = ({ item }) => {
    return (
        <View>
        <Image source={{ uri: item.imageUrl }} style={{ width: viewportWidth, height: 200 }} />
        <Text>{item.title}</Text>
        </View>
    );
};

const MyCarousel = ({ data }) => {
    return (
        <Carousel
        data={data}
        renderItem={({ item }) => <CarouselItem item={item} />}
        sliderWidth={viewportWidth}
        itemWidth={viewportWidth}
        loop={true}
        autoplay={true}
        autoplayDelay={500}
        autoplayInterval={3000}
        />
    );
};
