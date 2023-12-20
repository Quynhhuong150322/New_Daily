import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React from "react";

import Carousel from 'react-native-snap-carousel';

export default function Home({navigation}) {
  constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
              title:"Item 1",
              text: "Text 1",
          },
          {
              title:"Item 2",
              text: "Text 2",
          },
          {
              title:"Item 3",
              text: "Text 3",
          },
          {
              title:"Item 4",
              text: "Text 4",
          },
          {
              title:"Item 5",
              text: "Text 5",
          },
        ]
      }
    }
    _renderItem({item,index}){
  return (
  <ScrollView>
    <View style={styles.container}>
      
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
