import { View, Text } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Feed">
        <Stack.Screen
          name="Social Media Feed"
          component={SocialMediaFeed}
          options={{
            title: 'Social Media Feed',
            headerStyle: {
              backgroundColor: '#00bfff',

            },
            headerTitleStyle: {
              color: 'white',
              fontSize: 16,
              paddingTop: 0,
            },
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Home