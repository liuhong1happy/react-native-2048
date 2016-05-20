import {
  View,
  Text,
}  from 'react-native'
import React from 'react'
	
import GridCell from './gridCell'

import Dimensions from '../utils/dimensions'
const {height, width} = Dimensions.get('window')
const MARGIN_WIDTH = Dimensions.size["2"]
const ITEM_WIDTH = (width-Dimensions.size["10"]-MARGIN_WIDTH*10)/4

const styles = {
  container: {
    height: ITEM_WIDTH,
    marginVertical: Dimensions.size["2"],
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
