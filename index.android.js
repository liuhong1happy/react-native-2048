import React, {AppRegistry} from 'react-native'

import Container from './common/components/container'

const ReactNative2048 = () => {
  return <Container startTiles={2} size={4} />
}

AppRegistry.registerComponent('ReactNative2048', () => ReactNative2048)
