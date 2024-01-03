import { View, Text } from 'react-native'
import React from 'react'
import RCTVideoManager from 'react-native-video/dom/RCTVideoManager';

const ReactNativeDomOptions = {
  enableHotReload: false,
  nativeModules: [RCTVideoManager] // Add this
};

const Video = () => {
  return (
    <View>
      <Text>Video</Text>
    </View>
  )
}

export default Video