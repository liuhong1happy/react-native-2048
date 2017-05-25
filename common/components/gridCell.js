import {
  View,
  Text,
}  from 'react-native';
import React from 'react'

import Dimensions from '../utils/dimensions'
const {height, width} = Dimensions.get('window')

const MARGIN_WIDTH = Dimensions.size["2"]
const ITEM_WIDTH = (width-Dimensions.size["10"]-MARGIN_WIDTH*10)/4

const styles = {
  container: {
    width: ITEM_WIDTH,
    height: ITEM_WIDTH,
    marginHorizontal: MARGIN_WIDTH,
    backgroundColor: 'rgba(238, 228, 218, 0.35)',
    borderRadius: Dimensions.size["1"],
  }
}

const GridCell = () => {
  return <View style={styles.container} />
}

export default GridCell
