import React from 'react-native'

import Tile from './tile'

const {
  View,
  Text,
  Dimensions,
} = React

const {height, width} = Dimensions.get('window')

const styles = {
  container: {
    width: width-40,
    height: width-40,
    position: 'absolute',
    left: 0,
    top: 0,
    overflow: 'hidden',
  }
}

const TileContainer = (props) => {
  const children = props.tiles
  return (
    <View style={styles.container}>
      {children.map((item) => {
        return <Tile x={item.x} y={item.y} value={item.value} key={item.prog} />
      })}
    </View>
  )
}

export default TileContainer
