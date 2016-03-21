import React from 'react-native'

const {
  View,
  Text,
  Dimensions,
} = React

const {height, width} = Dimensions.get('window')

const styles = {
  container: {
    width: (width-40-50)/4,
    height: (width-40-50)/4,
    marginHorizontal: 5,
    backgroundColor: 'rgba(238, 228, 218, 0.35)',
    borderRadius: 3,
  }
}

const GridRow = () => {
  return <View style={styles.container} />
}

export default GridRow
