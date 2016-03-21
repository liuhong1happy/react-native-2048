import React from 'react-native'

import GridCell from './gridCell'

const {
  View,
  Text,
  Dimensions,
} = React

const {height, width} = Dimensions.get('window')

const styles = {
  container: {
    height: (width-40-50)/4,
    marginVertical: 5,
    flexDirection: 'row',
  }
}

const GridRow = () => {
  return (
    <View style={styles.container}>
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell />
    </View>
  )
}

export default GridRow
