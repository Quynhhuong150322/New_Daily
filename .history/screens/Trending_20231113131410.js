import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Trending = () => {
    return (
        <View>
            <Text style={styles.container}>Trending</Text>
        </View>
    )
}

export default Trending

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})