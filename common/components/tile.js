import React from 'react-native'

const {
  View,
  Text,
  Dimensions,
  StyleSheet,
} = React

const {height, width} = Dimensions.get('window')
const isMinWin = width <= 320

const MARGIN_WIDTH = 5
const ITEM_WIDTH = (width-40-MARGIN_WIDTH*10)/4

const styles = StyleSheet.create({
  tile:{
    position: 'absolute',
    borderRadius: 3,
  },
  tileText: {
    fontSize: isMinWin?36:48,
    color: '#776E65',
    textAlign: 'center',
    marginTop: 5,
  },
  tile2: {
    backgroundColor: '#eee4da',
  },
  tile4: {
    backgroundColor: '#eee1c9',
  },
  tile8: {
    backgroundColor: '#f3b27a',
  },
  tile8Text: {
    color: '#f9f6f2',
    marginTop: 8,
  },
  tile16: {
    backgroundColor: '#f69664',
  },
  tile16Text: {
    color: '#f9f6f2',
    marginTop: 8,
  },
  tile32: {
    backgroundColor: '#f77c5f',
  },
  tile32Text: {
    color: '#f9f6f2',
    marginTop: 8,
  },
  tile64: {
    backgroundColor: '#f75f3b',
  },
  tile64Text: {
    color: '#f9f6f2',
    marginTop: 8,
  },
  tile128: {
    backgroundColor: '#edd073',
  },
  tile128Text: {
    color: '#f9f6f2',
    fontSize: isMinWin?27:36,
    marginTop: 8,
  },
  tile256: {
    backgroundColor: '#edcc62',
  },
  tile256Text: {
    color: '#f9f6f2',
    fontSize: isMinWin?27:36,
    marginTop: 8,
  },
  tile512: {
    backgroundColor: '#edc950',
  },
  tile512Text: {
    color: '#f9f6f2',
    fontSize: isMinWin?27:36,
    marginTop: 8,
  },
  tile1024: {
    backgroundColor: '#edc53f',
  },
  tile1024Text: {
    color: '#f9f6f2',
    fontSize: isMinWin?18:24,
    marginTop: 14,
  },
  tile2048: {
    backgroundColor: '#edc22e',
  },
  tile2048Text: {
    color: '#f9f6f2',
    fontSize:  isMinWin?18:24,
    marginTop: 14,
  },
  tilesuper: {
    backgroundColor: '#3c3a33',
    fontSize: isMinWin?9:12,
    marginTop: 24,
  },
  tilesuperText: {
    color: '#f9f6f2',
  },
})

const Tile = (props) => {
  const tileStyle = props.value<= 2048 ? styles['tile' + props.value] : styles['tilesuper']
  const tilePositionStyle = {
    left: props.x*(ITEM_WIDTH+MARGIN_WIDTH*2)+MARGIN_WIDTH*2-2,
    top: props.y*(ITEM_WIDTH+MARGIN_WIDTH*2)+MARGIN_WIDTH*2-2,
    width: ITEM_WIDTH,
    height: ITEM_WIDTH,
  }
  const tileTextStyle = props.value<= 2048 ? styles['tile' + props.value + 'Text'] : styles['tilesuperText']
  return (
    <View style={[styles.tile, tileStyle, tilePositionStyle]}>
      <Text style={[ styles.tileText,tileTextStyle]}>{props.value}</Text>
    </View>
  )
}

export default Tile
