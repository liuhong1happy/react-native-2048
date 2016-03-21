import React from 'react-native'

import GridRow from './gridRow'

const {
  View,
  Text,
  Dimensions,
} = React

const {height, width} = Dimensions.get('window')

const styles = {
  container:{
    width: width-40,
    height: width-40,
    position: 'absolute',
    left: 0,
    top: 0,
    overflow: 'hidden',
    paddingHorizontal: 3,
    paddingVertical: 3,
    flexDirection: 'column',
  }
}

const GridContainer = () => {
  return (
    <View style={styles.container}>
      <GridRow />
      <GridRow />
      <GridRow />
      <GridRow />
    </View>
  )
}

export default GridContainer
