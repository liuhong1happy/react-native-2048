import React from 'react-native'

import GameMessage from './gameMessage'
import GridContainer from './gridContainer'
import TileContainer from './tileContainer'

const {
  View,
  Dimensions,
} = React

const {height, width} = Dimensions.get('window')

const styles = {
  container: {
    width: width - 40,
    height: width - 40,
    backgroundColor: '#bbada0',
    borderRadius: 6,
    marginTop: 25,
  }
}

const GameContainer = (props) => {
  return (
    <View style={styles.container}>
      <GridContainer />
      <TileContainer tiles={props.tiles} />
      <GameMessage
        won={props.won}
        over={props.over}
        onKeepGoing={props.onKeepGoing}
        onTryAagin={props.onTryAagin}
      />
    </View>
  )
}

export default GameContainer
