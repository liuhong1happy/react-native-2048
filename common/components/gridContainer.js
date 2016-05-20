import {
  View,
  Text,
}  from 'react-native'
import React from 'react'
import GridRow from './gridRow'
	
import Dimensions from '../utils/dimensions'
const {height, width} = Dimensions.get('window')

const styles = {
  container:{
    width: width-Dimensions.size["10"],
    height: width-Dimensions.size["10"],
    position: 'absolute',
    left: 0,
    top: 0,
    overflow: 'hidden',
    paddingHorizontal: Dimensions.size["2"],
    paddingVertical: Dimensions.size["2"],
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
